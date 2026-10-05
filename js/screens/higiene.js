import { state } from '../data.js';

export function renderHigiene() {
  const items = state.hygiene.map((h, i) => `
    <div class="item">
      <div class="icon">🧴</div>
      <div class="meta"><div class="name">${h.label}</div></div>
      <div class="check ${h.done ? 'done' : ''}" data-action="toggle-hygiene" data-index="${i}">${h.done ? '✓' : ''}</div>
    </div>
  `).join('');

  return `
    <div class="topbar"><button class="back" data-action="close-overlay">←</button><h1 class="title">Higiene</h1></div>
    <p class="sub">Checklist de hoje</p>
    ${items}
  `;
}
