import { state } from '../data.js';

export function renderLembretes() {
  const items = state.reminders.map(r => `
    <div class="item">
      <div class="icon">${r.icon}</div>
      <div class="meta" data-action="open-overlay" data-overlay="detalhe" data-id="${r.id}">
        <div class="name">${r.name}</div>
        <div class="time">${r.time}</div>
      </div>
      <div class="check ${r.done ? 'done' : ''}" data-action="toggle-reminder" data-id="${r.id}">${r.done ? '✓' : ''}</div>
    </div>
  `).join('');

  return `
    <div class="topbar"><h1 class="title">Lembretes</h1></div>
    <div class="search">🔍 Buscar lembrete</div>
    ${items}
    <button class="fab" data-action="open-overlay" data-overlay="add">+</button>
  `;
}

export function renderDetalhe() {
  const r = state.reminders.find(x => x.id === state.detailId);
  if (!r) return `<p>Lembrete não encontrado.</p>`;

  return `
    <div class="topbar"><button class="back" data-action="close-overlay">←</button></div>
    <div style="text-align:center;font-size:48px;margin:10px 0 20px;">${r.icon}</div>
    <h2 style="text-align:center">${r.name}</h2>
    <div class="card">
      <div class="row"><div class="meta"><div class="time">Dose</div><div class="name">${r.dose || '—'}</div></div></div>
      <div class="row"><div class="meta"><div class="time">Horário</div><div class="name">${r.time}</div></div></div>
      <div class="row"><div class="meta"><div class="time">Frequência</div><div class="name">${r.freq || '—'}</div></div></div>
    </div>
    <button class="btn" data-action="toggle-and-close" data-id="${r.id}">
      ${r.done ? 'Desmarcar' : 'Marcar como Feito'}
    </button>
  `;
}

export function renderAdd() {
  return `
    <div class="topbar"><button class="back" data-action="close-overlay">←</button><h1 class="title">Novo Lembrete</h1></div>
    <div class="field"><label>Nome do remédio</label><input placeholder="Ex: Paracetamol"></div>
    <div class="field"><label>Dose</label><input placeholder="Ex: 1 comprimido"></div>
    <div class="field"><label>Horário</label><input type="time" value="08:00"></div>
    <div class="field">
      <label>Frequência</label>
      <select>
        <option>A cada 8 horas</option>
        <option>1x ao dia</option>
        <option>2x ao dia</option>
      </select>
    </div>
    <button class="btn" data-action="save-reminder">Salvar</button>
  `;
}
