// Reusable UI components for Sophie's Roadmap
const { useState, useEffect, useRef, useCallback, useMemo } = React;

// --- Hooks --------------------------------------------------------------
function useLocalStorageState(key, initial) {
  const [v, setV] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initial;
    } catch { return initial; }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key, v]);
  return [v, setV];
}

// --- Small atoms --------------------------------------------------------
function PartBadge({ partNumber, part }) {
  return (
    <div className="part-badge">
      <span className="part-roman">PART {toRoman(partNumber)}</span>
      <span className="part-dot">·</span>
      <span className="part-name">{part}</span>
    </div>
  );
}
function toRoman(n) {
  const map = [['X',10],['IX',9],['V',5],['IV',4],['I',1]];
  let s = '', x = n;
  for (const [r, v] of map) while (x >= v) { s += r; x -= v; }
  return s;
}

// --- AgeHero ------------------------------------------------------------
function AgeHero({ age }) {
  return (
    <header className="age-hero">
      <div className="age-hero__image-wrap">
        <img src={age.image} alt={`Sophie at age ${age.age}`} className="age-hero__image" />
        <div className="age-hero__scrim" aria-hidden="true"></div>
      </div>
      <div className="age-hero__content">
        <PartBadge partNumber={age.partNumber} part={age.part} />
        <div className="age-hero__title-row">
          <div className="age-hero__age">
            <span className="age-hero__age-label">Age</span>
            <span className="age-hero__age-num">{age.age}</span>
          </div>
          <div className="age-hero__meta">
            <div className="age-hero__persona">{age.part}</div>
            <div className="age-hero__months">Months {age.months}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

// --- Overview -----------------------------------------------------------
function Overview({ text }) {
  return (
    <section className="overview">
      <div className="overview__rule" aria-hidden="true"></div>
      <h2 className="section-eyebrow">Overview</h2>
      <p className="overview__body">{text}</p>
    </section>
  );
}

// --- QuickStartCard -----------------------------------------------------
function QuickStartCard({ age, ageKey }) {
  const s = age.sections;
  return (
    <section className="qs-card" aria-labelledby={`qs-${ageKey}`}>
      <header className="qs-card__head">
        <div className="qs-card__head-inner">
          <svg className="qs-card__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
          </svg>
          <h2 id={`qs-${ageKey}`} className="qs-card__title">Quick Start Guide</h2>
        </div>
      </header>
      <div className="qs-card__body">
        <HabitsChecklist title={s.habits.title} items={s.habits.items} ageKey={ageKey} />
        <Accordion title={s.activities.title} defaultOpen={false}>
          <BulletList items={s.activities.items} />
        </Accordion>
        <Accordion title={s.communication.title} defaultOpen={false}>
          <BulletList items={s.communication.items} />
        </Accordion>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((it, i) => (
        <li key={i} className="bullet-list__item">
          <span className="bullet-list__dot" aria-hidden="true"></span>
          <div className="bullet-list__text">
            <strong>{it.title}.</strong> {it.body}
          </div>
        </li>
      ))}
    </ul>
  );
}

// --- HabitsChecklist (interactive) --------------------------------------
function HabitsChecklist({ title, items, ageKey }) {
  const storageKey = `sophie.habits.${ageKey}`;
  const [checked, setChecked] = useLocalStorageState(storageKey, {});
  const toggle = (i) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const doneCount = items.filter((_, i) => checked[i]).length;
  return (
    <div className="checklist">
      <div className="checklist__head">
        <h3 className="subhead">{title}</h3>
        <span className="checklist__count">{doneCount}/{items.length}</span>
      </div>
      <ul className="checklist__list" role="list">
        {items.map((it, i) => (
          <li key={i} className={`check-item ${checked[i] ? 'is-checked' : ''}`}>
            <button
              type="button"
              className="check-item__btn"
              onClick={() => toggle(i)}
              aria-pressed={!!checked[i]}
            >
              <span className="check-item__box" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="check-item__text">
                <strong>{it.title}.</strong> {it.body}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- MilestoneTracker (interactive) -------------------------------------
function MilestoneTracker({ items, by, ageKey }) {
  const storageKey = `sophie.milestones.${ageKey}`;
  const [checked, setChecked] = useLocalStorageState(storageKey, {});
  const toggle = (i) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const doneCount = items.filter((_, i) => checked[i]).length;
  const pct = Math.round((doneCount / items.length) * 100);
  return (
    <section className="milestones">
      <header className="milestones__head">
        <div>
          <h2 className="section-eyebrow milestones__eyebrow">Key Milestones</h2>
          <p className="milestones__subtitle">To watch for by {by}</p>
        </div>
        <div className="milestones__progress" aria-label={`${doneCount} of ${items.length} observed`}>
          <div className="milestones__progress-ring">
            <svg viewBox="0 0 36 36" width="44" height="44">
              <circle cx="18" cy="18" r="15.9" className="ring-bg" />
              <circle
                cx="18" cy="18" r="15.9"
                className="ring-fg"
                strokeDasharray={`${pct}, 100`}
                transform="rotate(-90 18 18)"
              />
            </svg>
            <span className="milestones__progress-num">{doneCount}<span className="milestones__progress-sep">/</span>{items.length}</span>
          </div>
        </div>
      </header>
      <ul className="milestones__list" role="list">
        {items.map((m, i) => (
          <li key={i} className={`milestone ${checked[i] ? 'is-observed' : ''}`}>
            <button type="button" className="milestone__btn" onClick={() => toggle(i)} aria-pressed={!!checked[i]}>
              <span className="milestone__box" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="milestone__text">{m}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// --- Monthly plans (accordion) ------------------------------------------
function MonthlyPlans({ plans }) {
  return (
    <section className="monthly">
      <h2 className="section-eyebrow">Monthly Plans</h2>
      <div className="monthly__list">
        {plans.map((p, i) => (
          <Accordion
            key={i}
            defaultOpen={i === 0}
            title={
              <div className="monthly__title">
                <span className="monthly__range">{p.range}</span>
                <span className="monthly__heading">{p.title}</span>
              </div>
            }
          >
            <p className="monthly__intro">{p.intro}</p>
            <ul className="monthly__items">
              {p.items.map((it, j) => (
                <li key={j} className="monthly__item">
                  <span className="monthly__label">{it.label}</span>
                  <span className="monthly__body">{it.body}</span>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

// --- Accordion ----------------------------------------------------------
function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`accordion ${open ? 'is-open' : ''}`}>
      <button type="button" className="accordion__head" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="accordion__title">{title}</span>
        <svg className="accordion__chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="accordion__panel" hidden={!open}>
        <div className="accordion__panel-inner">{children}</div>
      </div>
    </div>
  );
}

// --- AlertBox / Red Flags ----------------------------------------------
function AlertBox({ items, by }) {
  return (
    <section className="alert" role="region" aria-label="Red flags">
      <header className="alert__head">
        <div className="alert__head-inner">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 3v18" />
            <path d="M4 4h13l-2 4 2 4H4" />
          </svg>
          <h2 className="alert__title">Red Flags to Watch For</h2>
        </div>
      </header>
      <div className="alert__body">
        <p className="alert__intro">Consider seeking professional advice if, by {by}, your child:</p>
        <ul className="alert__list">
          {items.map((it, i) => (
            <li key={i} className="alert__item">
              <span className="alert__bullet" aria-hidden="true"></span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="alert__footer">
          This is a guide, not a diagnosis. Every child develops at their own pace—if anything here gives you pause, your pediatrician is the right first call.
        </p>
      </div>
    </section>
  );
}

// --- Top tabs (horizontal scroll) --------------------------------------
function AgeTabs({ data, current, onChange }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current?.querySelector('.tab.is-active');
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [current]);
  return (
    <nav className="tabs" aria-label="Age">
      <div className="tabs__scroll" ref={ref}>
        {data.map((d, i) => (
          <button
            key={d.age}
            className={`tab ${i === current ? 'is-active' : ''}`}
            onClick={() => onChange(i)}
            aria-current={i === current ? 'page' : undefined}
          >
            <span className="tab__age">{d.age}</span>
            <span className="tab__part">{d.part}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// --- AgeSection (composes the page for one age) -------------------------
function AgeSection({ age }) {
  const ageKey = `age${age.age}`;
  return (
    <article className="age-section" key={ageKey} data-screen-label={`Age ${age.age}`}>
      <AgeHero age={age} />
      <div className="page-pad">
        <Overview text={age.overview} />
        <QuickStartCard age={age} ageKey={ageKey} />
        <MonthlyPlans plans={age.monthlyPlans} />
        {age.milestones && (
          <MilestoneTracker items={age.milestones} by={age.milestonesBy} ageKey={ageKey} />
        )}
        {age.redFlags && (
          <AlertBox items={age.redFlags} by={age.milestonesBy} />
        )}
        <AgeFooter age={age} />
      </div>
    </article>
  );
}

function AgeFooter({ age }) {
  return (
    <footer className="age-footer">
      <div className="age-footer__rule" aria-hidden="true"></div>
      <p className="age-footer__quote">For Sophie, with love.</p>
    </footer>
  );
}

// Export to window
Object.assign(window, {
  useLocalStorageState,
  AgeSection,
  AgeTabs,
  AgeHero,
  Overview,
  QuickStartCard,
  HabitsChecklist,
  MilestoneTracker,
  MonthlyPlans,
  Accordion,
  AlertBox,
  BulletList,
  PartBadge,
});
