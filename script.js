* {
  box-sizing: border-box;
}

:root {
  --bg-1: #0f1021;
  --bg-2: #171b33;
  --panel: rgba(18, 22, 45, 0.82);
  --panel-border: rgba(255, 255, 255, 0.08);
  --text: #eef2ff;
  --muted: #b8c2ea;
  --primary: #7c3aed;
  --secondary: #22c55e;
  --accent: #f59e0b;
  --danger: #ef4444;
  --shadow: rgba(6, 8, 18, 0.45);
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top, #1d2142 0%, var(--bg-1) 35%, #090b19 100%);
  color: var(--text);
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 40px;
}

.hero {
  text-align: center;
  padding: 28px 18px 12px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.12);
  color: #d9c3ff;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  text-transform: uppercase;
  font-weight: 700;
}

.hero h1 {
  margin: 18px 0 10px;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -0.06em;
}

.hero p {
  max-width: 700px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 1.05rem;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  margin-top: 28px;
}

.game-panel {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 20px;
  padding: 18px 16px 16px;
  box-shadow: 0 18px 40px var(--shadow);
  backdrop-filter: blur(10px);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.35rem;
}

.reset-btn,
.choice-btn,
#guess-submit,
.reaction-btn {
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #9d4edd);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.28);
}

.reset-btn {
  padding: 9px 12px;
  font-size: 0.78rem;
}

.reset-btn:hover,
.choice-btn:hover,
#guess-submit:hover,
.reaction-btn:hover {
  transform: translateY(-1px);
}

.status {
  min-height: 24px;
  margin-bottom: 12px;
  color: var(--muted);
  font-weight: 600;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 8px;
}

.cell {
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.18s ease;
}

.cell:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-1px);
}

.cell:disabled {
  cursor: default;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 8px;
}

.memory-card {
  aspect-ratio: 1;
  border: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: var(--text);
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
}

.memory-card:hover:not(.matched):not(.flipped) {
  transform: translateY(-2px);
}

.memory-card.flipped,
.memory-card.matched {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(124, 58, 237, 0.2));
  box-shadow: inset 0 0 0 1px rgba(147, 197, 253, 0.3);
}

.memory-card.matched {
  cursor: default;
}

.guess-box {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

#guess-input {
  flex: 1;
  min-width: 0;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 12px 14px;
  font-size: 1rem;
}

#guess-submit {
  padding: 12px 16px;
}

.guess-feedback {
  margin-top: 12px;
  color: #dfe8ff;
}

.choice-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 8px;
}

.choice-btn {
  padding: 12px 10px;
  font-size: 0.95rem;
}

.scoreboard {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
  color: var(--muted);
  font-weight: 700;
}

.reaction-btn {
  display: block;
  width: 100%;
  padding: 18px 16px;
  font-size: 1.1rem;
  margin-top: 8px;
}

.reaction-btn.waiting {
  background: linear-gradient(135deg, var(--secondary), #4ade80);
}

.reaction-btn.ready {
  background: linear-gradient(135deg, var(--accent), #fbbf24);
}

@media (max-width: 560px) {
  .game-grid {
    grid-template-columns: 1fr;
  }

  .guess-box,
  .choice-row {
    grid-template-columns: 1fr;
    display: grid;
  }
}
