import { state } from '../data.js';
import { LEAF_ICON } from '../icons.js';

export function renderPerfil() {
  return `
    <div class="logo">${LEAF_ICON} Zelo</div>
    <div class="avatar">${state.user.initials}</div>
    <h2 style="text-align:center">${state.user.name}</h2>
    <p class="sub" style="text-align:center">${state.user.email}</p>
    <div class="card" style="padding:4px 16px">
      <div class="opt">👤 Editar perfil</div>
      <div class="opt">💊 Meus remédios</div>
      <div class="opt" data-action="open-overlay" data-overlay="config">⚙️ Configurações</div>
      <div class="opt danger" style="border-bottom:none;">🚪 Sair</div>
    </div>
  `;
}

export function renderConfig() {
  const n = state.notif;
  const toggle = (key, title, desc) => `
    <div class="row">
      <div class="meta"><div class="name">${title}</div><div class="time">${desc}</div></div>
      <div class="toggle ${n[key] ? 'on' : ''}" data-action="toggle-notif" data-key="${key}"></div>
    </div>
  `;

  return `
    <div class="topbar"><button class="back" data-action="close-overlay">←</button><h1 class="title">Configurações</h1></div>
    <div class="card" style="padding:4px 16px">
      ${toggle('lembretes', 'Lembretes ativos', 'Notificações de remédio, água e higiene')}
      ${toggle('som', 'Som', 'Tocar som ao notificar')}
      ${toggle('resumoDiario', 'Resumo diário', 'Receber resumo à noite')}
    </div>
  `;
}
