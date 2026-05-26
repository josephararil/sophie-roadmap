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

// ─── Action tab helpers ────────────────────────────────────────────────────

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function daysSince(iso) {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
}

function stringHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (Math.imul(33, h) ^ str.charCodeAt(i)) >>> 0;
  return h;
}

function seededRng(seed) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(1664525, s) + 1013904223) >>> 0; return s / 0x100000000; };
}

function weightedPick(pool, scores, rng) {
  const total = scores.reduce((a, b) => a + b, 0);
  let r = rng() * total;
  for (let i = 0; i < pool.length; i++) { r -= scores[i]; if (r <= 0) return pool[i]; }
  return pool[pool.length - 1];
}

function pickCard(items, currentAge, checkedMilestones, ratings, doneMap, seedStr, excludeIds = []) {
  const lc = checkedMilestones.map(m => m.toLowerCase());

  let pool = items.filter(it =>
    it.ages.includes(currentAge) &&
    !excludeIds.includes(it.id) &&
    !(doneMap[it.id] && daysSince(doneMap[it.id]) < 14) &&
    ratings[it.id] !== -1
  );
  if (!pool.length) {
    pool = items.filter(it =>
      it.ages.includes(currentAge) && !excludeIds.includes(it.id) && ratings[it.id] !== -1
    );
  }
  if (!pool.length) return null;

  const scores = pool.map(it => {
    let s = 1 + it.literacyWeight * 1.5;
    for (const ref of (it.milestoneRefs || [])) {
      const rl = ref.toLowerCase();
      s += lc.some(m => m.includes(rl)) ? -1 : 3;
    }
    if (ratings[it.id] === 1) s += 2;
    return Math.max(s, 0.1);
  });

  return weightedPick(pool, scores, seededRng(stringHash(seedStr + String(currentAge))));
}

function getCheckedMilestoneTexts() {
  const texts = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith('sophie.milestones.')) continue;
    const ageNum = parseInt(key.replace('sophie.milestones.age', ''), 10);
    const ageData = (window.ROADMAP_DATA || []).find(a => a.age === ageNum);
    if (!ageData) continue;
    try {
      const checked = JSON.parse(localStorage.getItem(key)) || {};
      Object.entries(checked).forEach(([idx, isOn]) => {
        if (isOn && ageData.milestones && ageData.milestones[+idx]) {
          texts.push(ageData.milestones[+idx]);
        }
      });
    } catch {}
  }
  return texts;
}

function readDoneMap() {
  const map = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith('sophie.action.done.')) continue;
    map[key.replace('sophie.action.done.', '')] = localStorage.getItem(key);
  }
  return map;
}

function readRatingsMap() {
  const map = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith('sophie.action.rating.')) continue;
    try { map[key.replace('sophie.action.rating.', '')] = JSON.parse(localStorage.getItem(key)); } catch {}
  }
  return map;
}

const CAT_STYLES = {
  'conversation':  { bg: '#E0F2F1', fg: '#004D40' },
  'song':          { bg: '#FFF8E1', fg: '#BF6000' },
  'rhyme':         { bg: '#F3E5F5', fg: '#6A1B9A' },
  'game':          { bg: '#E8F5E9', fg: '#1B5E20' },
  'book':          { bg: '#FFF3E0', fg: '#BF360C' },
  'literacy':      { bg: '#FFEBEE', fg: '#C62828' },
  'pretend-play':  { bg: '#EDE7F6', fg: '#4527A0' },
  'outdoor':       { bg: '#F1F8E9', fg: '#33691E' },
  'bedtime':       { bg: '#E8EAF6', fg: '#283593' },
};

// ─── BottomTabBar ──────────────────────────────────────────────────────────

function BottomTabBar({ active, onChange }) {
  return (
    <nav className="btb" aria-label="Main tabs">
      <button
        className={`btb__tab ${active === 'action' ? 'is-active' : ''}`}
        onClick={() => onChange('action')}
        aria-current={active === 'action' ? 'page' : undefined}
      >
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
          </svg>
        </span>
        <span className="btb__label">Today</span>
      </button>
      <button
        className={`btb__tab ${active === 'roadmap' ? 'is-active' : ''}`}
        onClick={() => onChange('roadmap')}
        aria-current={active === 'roadmap' ? 'page' : undefined}
      >
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
            <line x1="9" y1="9" x2="9" y2="21" />
          </svg>
        </span>
        <span className="btb__label">Roadmap</span>
      </button>
    </nav>
  );
}

// ─── ActionCard ────────────────────────────────────────────────────────────

function ActionCard({ item, variant, categories, doneMap, ratingsMap, onTriedIt, onRate, onNext, onGemini, aiSuggested }) {
  const [expanded, setExpanded] = useState(variant === 'hero');
  const cat = (categories || []).find(c => c.id === item.category) || { label: item.category, icon: '●' };
  const cs = CAT_STYLES[item.category] || { bg: 'var(--light-teal)', fg: 'var(--dark-teal)' };
  const isDone = !!doneMap[item.id];
  const rating = ratingsMap[item.id];

  return (
    <div className={`ac ac--${variant}${isDone ? ' ac--done' : ''}`}>
      {aiSuggested && <div className="ac__ai-badge">✨ AI suggested</div>}
      <div className="ac__badge" style={{ background: cs.bg, color: cs.fg }}>
        {cat.icon} {cat.label}
      </div>

      {variant === 'compact' ? (
        <button className="ac__compact-head" onClick={() => setExpanded(e => !e)} aria-expanded={expanded}>
          <div className="ac__compact-text">
            <div className="ac__title">{item.title}</div>
            <div className="ac__hook">{item.hook}</div>
          </div>
          <svg className={`ac__chev ${expanded ? 'is-open' : ''}`} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      ) : (
        <div className="ac__hero-head">
          <div className="ac__title">{item.title}</div>
          <div className="ac__hook">{item.hook}</div>
          <div className="ac__meta">{item.duration} · {(item.where || []).join(', ')}</div>
        </div>
      )}

      {expanded && (
        <div className="ac__body">
          {(item.body || '').split('\n\n').map((p, i) => (
            <p key={i} className="ac__para">{p}</p>
          ))}

          {item.lyrics && (
            <div className="ac__lyrics">
              {item.lyrics.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br /></React.Fragment>
              ))}
            </div>
          )}

          {item.examples && item.examples.length > 0 && (
            <ul className="ac__examples">
              {item.examples.map((ex, i) => <li key={i}>{ex}</li>)}
            </ul>
          )}

          {item.dialogue && item.dialogue.length > 0 && (
            <div className="ac__dialogue">
              {item.dialogue.map((line, i) => (
                <div key={i} className="ac__dialogue-line">
                  <div className="ac__dialogue-adult"><strong>You:</strong> {line.adult}</div>
                  <div className="ac__dialogue-child"><strong>Sophie:</strong> {line.child}</div>
                </div>
              ))}
            </div>
          )}

          {item.discussionPrompts && item.discussionPrompts.length > 0 && (
            <div className="ac__prompts">
              <div className="ac__prompts-label">Discussion prompts</div>
              <ul className="ac__prompts-list">
                {item.discussionPrompts.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          )}

          {item.followUp && (
            <p className="ac__followup">{item.followUp}</p>
          )}

          {variant === 'compact' && (
            <div className="ac__meta">{item.duration} · {(item.where || []).join(', ')}</div>
          )}
        </div>
      )}

      <div className="ac__actions">
        <button
          className={`ac__act-btn ac__act-btn--tried${isDone ? ' is-on' : ''}`}
          onClick={() => onTriedIt(item.id)}
        >✓ Tried it</button>
        <button
          className={`ac__act-btn ac__act-btn--rate${rating === 1 ? ' is-on' : ''}`}
          onClick={() => onRate(item.id, 1)}
          aria-label="Like this activity"
        >👍</button>
        <button
          className={`ac__act-btn ac__act-btn--rate${rating === -1 ? ' is-on' : ''}`}
          onClick={() => onRate(item.id, -1)}
          aria-label="Dislike this activity"
        >👎</button>
        <button className="ac__act-btn" onClick={onNext}>Next</button>
        <button className="ac__act-btn ac__act-btn--gemini" onClick={() => onGemini(item)}>Ask Gemini →</button>
      </div>
    </div>
  );
}

// ─── ActionTab ─────────────────────────────────────────────────────────────

function ActionTab({ currentAge, currentAgeIdx, setCurrentAgeIdx }) {
  const [showSettings, setShowSettings] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);
  const [geminiItem, setGeminiItem] = useState(null);

  const today = getTodayStr();
  const [dailyOffset, setDailyOffset] = useLocalStorageState(`sophie.action.dailyOffset.${today}`, 0);
  const [doneMap, setDoneMap] = useState(readDoneMap);
  const [ratingsMap, setRatingsMap] = useState(readRatingsMap);

  const actionsData = window.ACTIONS_DATA || { items: [], categories: [] };
  const items = actionsData.items;
  const categories = actionsData.categories;
  const checkedMilestones = getCheckedMilestoneTexts();
  const seedStr = today + String(dailyOffset);

  const heroCard = pickCard(items, currentAge, checkedMilestones, ratingsMap, doneMap, seedStr);

  const secondaryCards = (() => {
    if (!heroCard) return [];
    const nonHeroCats = categories.filter(c => c.id !== heroCard.category).slice(0, 3);
    return nonHeroCats.map(cat => {
      const catItems = items.filter(it => it.category === cat.id);
      return pickCard(catItems, currentAge, checkedMilestones, ratingsMap, doneMap, seedStr + cat.id, [heroCard.id]);
    }).filter(Boolean);
  })();

  function markTriedIt(id) {
    const iso = new Date().toISOString();
    try { localStorage.setItem(`sophie.action.done.${id}`, iso); } catch {}
    setDoneMap(prev => ({ ...prev, [id]: iso }));
  }

  function setRating(id, value) {
    const cur = ratingsMap[id];
    if (cur === value) {
      try { localStorage.removeItem(`sophie.action.rating.${id}`); } catch {}
      setRatingsMap(prev => { const n = { ...prev }; delete n[id]; return n; });
    } else {
      try { localStorage.setItem(`sophie.action.rating.${id}`, JSON.stringify(value)); } catch {}
      setRatingsMap(prev => ({ ...prev, [id]: value }));
    }
  }

  function resetPreferences() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('sophie.action.')) keys.push(k);
    }
    keys.forEach(k => localStorage.removeItem(k));
    setDoneMap({});
    setRatingsMap({});
  }

  const h = new Date().getHours();
  const greeting = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';

  const sharedCardProps = {
    categories,
    doneMap,
    ratingsMap,
    onTriedIt: markTriedIt,
    onRate: setRating,
    onNext: () => setDailyOffset(o => o + 1),
    onGemini: setGeminiItem,
  };

  return (
    <div className="at">
      <div className="at__greeting">
        <span className="at__greeting-text">{greeting}. Sophie is {currentAge} years old.</span>
        <button className="iconbtn" onClick={() => setShowSettings(true)} aria-label="Settings">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      {heroCard ? (
        <ActionCard item={heroCard} variant="hero" {...sharedCardProps} />
      ) : (
        <div className="at__empty">No activities available for age {currentAge} yet — try the Roadmap tab.</div>
      )}

      {secondaryCards.length > 0 && (
        <div className="at__secondary">
          <h2 className="at__section-heading">Other ideas for today</h2>
          {secondaryCards.map(card => (
            <ActionCard key={card.id} item={card} variant="compact" {...sharedCardProps} />
          ))}
        </div>
      )}

      <button className="at__browse-link" onClick={() => setShowBrowse(true)}>Browse all actions →</button>

      {showSettings && (
        <SettingsSheet
          onClose={() => setShowSettings(false)}
          currentAgeIdx={currentAgeIdx}
          setCurrentAgeIdx={setCurrentAgeIdx}
          onResetPreferences={resetPreferences}
        />
      )}
      {showBrowse && (
        <BrowseActions
          currentAge={currentAge}
          categories={categories}
          onClose={() => setShowBrowse(false)}
          {...sharedCardProps}
        />
      )}
      {geminiItem && (
        <GeminiPromptModal
          item={geminiItem}
          categories={categories}
          onClose={() => setGeminiItem(null)}
          onOpenSettings={() => { setGeminiItem(null); setShowSettings(true); }}
        />
      )}
    </div>
  );
}

// ─── SettingsSheet ─────────────────────────────────────────────────────────

function SettingsSheet({ onClose, currentAgeIdx, setCurrentAgeIdx, onResetPreferences }) {
  const [geminiKey, setGeminiKey] = useLocalStorageState('sophie.gemini.key', '');
  const [resetDone, setResetDone] = useState(false);
  const ages = window.ROADMAP_DATA || [];

  return (
    <div className="sheet-overlay" role="dialog" aria-modal="true" aria-label="Settings">
      <div className="sheet-overlay__backdrop" onClick={onClose} />
      <div className="sheet">
        <div className="sheet__header">
          <h2 className="sheet__title">Settings</h2>
          <button className="iconbtn" onClick={onClose} aria-label="Close settings">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="sheet__body">
          <div className="sheet__section">
            <span className="sheet__label">Sophie's current age</span>
            <div className="sheet__age-grid">
              {ages.map((a, i) => (
                <button
                  key={a.age}
                  className={`sheet__age-btn ${i === currentAgeIdx ? 'is-active' : ''}`}
                  onClick={() => setCurrentAgeIdx(i)}
                >{a.age}</button>
              ))}
            </div>
          </div>

          <div className="sheet__section">
            <label className="sheet__label" htmlFor="gemini-key-input">Gemini API key</label>
            <input
              id="gemini-key-input"
              type="password"
              className="sheet__input"
              value={geminiKey}
              onChange={e => setGeminiKey(e.target.value)}
              placeholder="AIza…"
              autoComplete="off"
              spellCheck="false"
            />
            <p className="sheet__warning">
              ⚠️ Your key is stored on this device only. Anyone with access to this device can see it. Do not share this device.
            </p>
          </div>

          <div className="sheet__section">
            <button
              className="sheet__reset-btn"
              onClick={() => { onResetPreferences(); setResetDone(true); }}
            >
              {resetDone ? 'Preferences reset ✓' : 'Reset action preferences'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BrowseActions ─────────────────────────────────────────────────────────

function BrowseActions({ currentAge, categories, onClose, doneMap, ratingsMap, onTriedIt, onRate, onNext, onGemini }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = (window.ACTIONS_DATA || { items: [] }).items;

  const byCategory = categories.map(cat => ({
    cat,
    catItems: items.filter(it => it.category === cat.id && it.ages.includes(currentAge)),
  })).filter(g => g.catItems.length > 0);

  const CloseBtn = () => (
    <button className="iconbtn" onClick={onClose} aria-label="Close">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );

  if (selectedItem) {
    return (
      <div className="sheet-overlay" role="dialog" aria-modal="true" aria-label={selectedItem.title}>
        <div className="sheet-overlay__backdrop" onClick={() => setSelectedItem(null)} />
        <div className="sheet sheet--full">
          <div className="sheet__header">
            <button className="iconbtn" onClick={() => setSelectedItem(null)} aria-label="Back to list">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <h2 className="sheet__title">Activity</h2>
            <CloseBtn />
          </div>
          <div className="sheet__body">
            <ActionCard
              item={selectedItem}
              variant="hero"
              categories={categories}
              doneMap={doneMap}
              ratingsMap={ratingsMap}
              onTriedIt={onTriedIt}
              onRate={onRate}
              onNext={onNext}
              onGemini={onGemini}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sheet-overlay" role="dialog" aria-modal="true" aria-label="Browse all actions">
      <div className="sheet-overlay__backdrop" onClick={onClose} />
      <div className="sheet sheet--full">
        <div className="sheet__header">
          <h2 className="sheet__title">Browse all actions</h2>
          <CloseBtn />
        </div>
        <div className="sheet__body">
          {byCategory.length === 0 && (
            <p className="at__empty">No activities for age {currentAge} yet.</p>
          )}
          {byCategory.map(({ cat, catItems }) => {
            const cs = CAT_STYLES[cat.id] || { bg: 'var(--light-teal)', fg: 'var(--dark-teal)' };
            return (
              <div key={cat.id} className="browse__section">
                <div className="browse__cat-head" style={{ background: cs.bg, color: cs.fg }}>
                  {cat.icon} {cat.label}
                </div>
                {catItems.map(it => (
                  <button key={it.id} className="browse__item" onClick={() => setSelectedItem(it)}>
                    <div className="browse__item-title">{it.title}</div>
                    <div className="browse__item-hook">{it.hook}</div>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── GeminiPromptModal ─────────────────────────────────────────────────────

function GeminiPromptModal({ item, categories, onClose, onOpenSettings }) {
  const geminiKey = (() => { try { return localStorage.getItem('sophie.gemini.key') || ''; } catch { return ''; } })();
  const [status, setStatus] = useState('idle');
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!geminiKey) onOpenSettings();
  }, []);

  if (!geminiKey) return null;

  async function callGemini() {
    setStatus('loading');
    setErrorMsg('');
    const cat = categories.find(c => c.id === item.category);
    const prompt = `You are helping a parent of a bilingual 3.5-year-old (English + Bulgarian, Bulgarian-only schooling, English-dominant accent: RP). The parent just used this activity with their daughter:\n\nTitle: ${item.title}\nHook: ${item.hook}\nCategory: ${cat ? cat.label : item.category}\nSkill focus: ${(item.skillTags || []).join(', ')}\n\nSuggest 3 NEW activities in the same category that go deeper or vary the approach, all focused on advancing English fluency or literacy. Use British English spellings.\n\nRespond in JSON only:\n[\n  { "title": "...", "hook": "...", "body": "..." },\n  ...\n]`;
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || `HTTP ${res.status}`);
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const match = text.match(/\[[\s\S]*\]/);
      if (!match) throw new Error('No JSON array in response');
      const parsed = JSON.parse(match[0]);
      if (!Array.isArray(parsed)) throw new Error('Response is not an array');
      setResults(parsed);
      setStatus('done');
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong');
      setStatus('error');
    }
  }

  return (
    <div className="sheet-overlay" role="dialog" aria-modal="true" aria-label="Ask Gemini for more ideas">
      <div className="sheet-overlay__backdrop" onClick={onClose} />
      <div className="sheet sheet--full">
        <div className="sheet__header">
          <h2 className="sheet__title">✨ Ask Gemini</h2>
          <button className="iconbtn" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="sheet__body">
          <p className="gemini__context">Based on: <strong>{item.title}</strong></p>

          {status === 'idle' && (
            <button className="gemini__call-btn" onClick={callGemini}>Get 3 new ideas from Gemini</button>
          )}
          {status === 'loading' && <div className="gemini__loading">Thinking…</div>}
          {status === 'error' && (
            <div className="gemini__error">
              <p>{errorMsg}</p>
              <button className="gemini__retry-btn" onClick={callGemini}>Retry</button>
            </div>
          )}
          {status === 'done' && (
            <div className="gemini__results">
              {results.map((r, i) => (
                <div key={i} className="gemini__result-card">
                  <div className="ac__ai-badge" style={{ margin: '-14px -16px 12px', padding: '5px 16px' }}>✨ AI suggested</div>
                  <div className="gemini__result-title">{r.title}</div>
                  {r.hook && <div className="gemini__result-hook">{r.hook}</div>}
                  {r.body && <div className="gemini__result-body">{r.body}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
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
  BottomTabBar,
  ActionTab,
});
