import { state } from '../data.js';
import { LEAF_ICON } from '../icons.js';

export function renderProgresso() {
  const dias = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  const bars = state.week.map(v => `
    <div class="b"><span>${v}%</span><div class="fill" style="height:${v}%"></div></div>
  `).join('');
  const labels = dias.map(d => `<div style="flex:1;text-align:center;font-size:11px;color:var(--gray)">${d}</div>`).join('');
  const media = Math.round(state.week.reduce((a, b) => a + b, 0) / state.week.length);

  return `
    <div class="logo">${LEAF_ICON} Zelo</div>
    <h2>Progresso</h2>
    <p class="sub">Sua adesão aos lembretes nos últimos 7 dias.</p>
    <div class="card">
      <div class="bars">${bars}</div>
      <div style="display:flex">${labels}</div>
    </div>
    <div class="card" style="text-align:center">
      <div style="font-size:30px;font-weight:700;color:var(--green)">${media}%</div>
      <div class="sub" style="margin:4px 0 0">Média semanal de adesão</div>
    </div>
  `;
}
