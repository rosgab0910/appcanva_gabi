import { state, pct, remindersByType } from '../data.js';
import { LEAF_ICON } from '../icons.js';

export function renderHome() {
  const remedios = remindersByType('remedio');
  const remDone = remedios.filter(r => r.done).length;
  const higDone = state.hygiene.filter(h => h.done).length;

  return `
    <div class="logo">${LEAF_ICON} Zelo</div>
    <h2>Olá, ${state.user.name.split(' ')[0]}</h2>
    <p class="sub">Cuide de você, todos os dias.</p>

    <div class="card">
      <strong style="color:var(--dark);font-size:15px;">Resumo do dia</strong>

      <div class="row" data-action="go-tab" data-tab="lembretes" style="cursor:pointer">
        <div class="icon">💊</div>
        <div class="prog-wrap">
          <div class="prog-label"><span>Remédios</span><span>${remDone} de ${remedios.length}</span></div>
          <div class="prog-bar"><div class="prog-fill" style="width:${pct(remDone, remedios.length)}%"></div></div>
        </div>
      </div>

      <div class="row" data-action="open-overlay" data-overlay="hidratacao" style="cursor:pointer">
        <div class="icon">💧</div>
        <div class="prog-wrap">
          <div class="prog-label"><span>Água</span><span>${state.water} de ${state.waterGoal} copos</span></div>
          <div class="prog-bar"><div class="prog-fill" style="width:${pct(state.water, state.waterGoal)}%"></div></div>
        </div>
      </div>

      <div class="row" data-action="open-overlay" data-overlay="higiene" style="cursor:pointer">
        <div class="icon">🧼</div>
        <div class="prog-wrap">
          <div class="prog-label"><span>Higiene</span><span>${higDone} de ${state.hygiene.length}</span></div>
          <div class="prog-bar"><div class="prog-fill" style="width:${pct(higDone, state.hygiene.length)}%"></div></div>
        </div>
      </div>
    </div>

    <button class="btn" data-action="go-tab" data-tab="lembretes">Ver Lembretes</button>
  `;
}
