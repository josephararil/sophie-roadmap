// Main App for Sophie's Developmental Roadmap
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const data = window.ROADMAP_DATA;
  const [idx, setIdx] = window.useLocalStorageState('sophie.currentAge', 0);
  const [sophieDob, setSophieDob] = window.useLocalStorageState('sophie.dob', '');
  const [welcomed, setWelcomed] = window.useLocalStorageState('sophie.welcomed', false);
  const [activeTab, setActiveTab] = window.useLocalStorageState('sophie.activeTab', 'action');
  const safeIdx = Math.max(0, Math.min(idx, data.length - 1));
  const age = data[safeIdx];

  // Derive integer age from DOB for activity filtering; clamp to data range
  const currentAgeYears = sophieDob
    ? Math.min(Math.max(window.calcAgeFromDob(sophieDob).years, data[0].age), data[data.length - 1].age)
    : age.age;

  // Sync Roadmap tab to the correct age section when DOB changes
  useEffectApp(() => {
    if (!sophieDob) return;
    const years = Math.min(Math.max(window.calcAgeFromDob(sophieDob).years, data[0].age), data[data.length - 1].age);
    const newIdx = data.findIndex(d => d.age === years);
    if (newIdx >= 0) setIdx(newIdx);
  }, [sophieDob]);

  useEffectApp(() => {
    if (activeTab === 'roadmap') {
      const scroller = document.querySelector('.app-scroll');
      if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [safeIdx, activeTab]);

  return (
    <div className="app">
      {activeTab === 'roadmap' && (
        <TopBar
          idx={safeIdx}
          total={data.length}
          onPrev={() => setIdx(Math.max(0, safeIdx - 1))}
          onNext={() => setIdx(Math.min(data.length - 1, safeIdx + 1))}
        />
      )}
      {activeTab === 'roadmap' && (
        <window.AgeTabs data={data} current={safeIdx} onChange={setIdx} />
      )}
      <main className="app-scroll">
        {activeTab === 'action' ? (
          <window.ActionTab
            currentAge={currentAgeYears}
            sophieDob={sophieDob}
            setSophieDob={setSophieDob}
          />
        ) : (
          <window.AgeSection age={age} key={age.age} />
        )}
      </main>
      <window.BottomTabBar active={activeTab} onChange={setActiveTab} />
      {!welcomed && <WelcomeOverlay onClose={() => setWelcomed(true)} />}
    </div>
  );
}

function TopBar({ idx, total, onPrev, onNext }) {
  return (
    <div className="topbar">
      <div className="topbar__brand">
        <span className="topbar__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
          </svg>
        </span>
        <div className="topbar__title-block">
          <span className="topbar__eyebrow">A Developmental Roadmap</span>
          <span className="topbar__title">For Sophie</span>
        </div>
      </div>
      <div className="topbar__nav" role="group" aria-label="Step through ages">
        <button className="iconbtn" onClick={onPrev} aria-label="Previous age" disabled={idx === 0}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="topbar__progress">{idx + 1}<span className="topbar__progress-sep">/</span>{total}</span>
        <button className="iconbtn" onClick={onNext} aria-label="Next age" disabled={idx === total - 1}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function WelcomeOverlay({ onClose }) {
  return (
    <div className="welcome" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="welcome__backdrop" onClick={onClose}></div>
      <div className="welcome__card">
        <div className="welcome__ribbon">For Joe and Marti</div>
        <h1 id="welcome-title" className="welcome__title">A Developmental Roadmap</h1>
        <p className="welcome__sub">For Sophie, with love.</p>
        <div className="welcome__rule" aria-hidden="true"></div>
        <p className="welcome__body">
          A practical, year-by-year guide from age <strong>2</strong> to <strong>11</strong>. Use the <strong>Today</strong> tab for daily activity suggestions, and the <strong>Roadmap</strong> tab to explore milestones and monthly plans.
        </p>
        <ul className="welcome__list">
          <li>
            <span className="welcome__list-icon" data-color="teal" aria-hidden="true">⚡</span>
            <strong>Today tab</strong> — one activity suggestion, every day.
          </li>
          <li>
            <span className="welcome__list-icon" data-color="teal" aria-hidden="true">✓</span>
            Mark <strong>Milestones</strong> as you spot them.
          </li>
          <li>
            <span className="welcome__list-icon" data-color="red" aria-hidden="true">!</span>
            <strong>Red Flags</strong> highlight when to ask for help.
          </li>
        </ul>
        <button className="welcome__cta" onClick={onClose}>Begin Sophie's Journey</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
