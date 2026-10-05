import { state, pct } from '../data.js';

export function renderHidratacao() {
  const p = pct(state.water, state.waterGoal);
  const r = 62;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - p / 100);

  return `
    <div class="topbar"><button class="back" data-action="close-overlay">←</button><h1 class="title">Hidratação</h1></div>
    <div class="ring">
      <svg viewBox="0 0 150 150">
        <circle cx="75" cy="75" r="${r}" fill="none" stroke="#e4ebe9" stroke-width="14"/>
        <circle cx="75" cy="75" r="${r}" fill="none" stroke="#43c491" stroke-width="14"
          stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
          transform="rotate(-90 75 75)"/>
        <text x="75" y="70" text-anchor="middle" font-size="28" font-weight="700" fill="#10544f">${state.water}/${state.waterGoal}</text>
        <text x="75" y="92" text-anchor="middle" font-size="12" fill="#8f8f8f">copos hoje</text>
      </svg>
    </div>
    <p class="sub" style="text-align:center">Metas simples ajudam a manter o corpo hidratado ao longo do dia.</p>
    <button class="btn" data-action="add-water">+ Adicionar copo</button>
  `;
}
