import { state } from './data.js';
import { renderHome } from './screens/home.js';
import { renderLembretes, renderDetalhe, renderAdd } from './screens/lembretes.js';
import { renderHidratacao } from './screens/hidratacao.js';
import { renderHigiene } from './screens/higiene.js';
import { renderProgresso } from './screens/progresso.js';
import { renderPerfil, renderConfig } from './screens/perfil.js';

const screenEl = document.getElementById('screen');
const navEl = document.getElementById('nav');

const TABS = {
  home: { label: 'Início', icon: '🏠', render: renderHome },
  lembretes: { label: 'Lembretes', icon: '🔔', render: renderLembretes },
  progresso: { label: 'Progresso', icon: '📈', render: renderProgresso },
  perfil: { label: 'Perfil', icon: '👤', render: renderPerfil }
};

const OVERLAYS = {
  detalhe: renderDetalhe,
  hidratacao: renderHidratacao,
  higiene: renderHigiene,
  config: renderConfig,
  add: renderAdd
};

function render() {
  screenEl.innerHTML = state.overlay ? OVERLAYS[state.overlay]() : TABS[state.tab].render();

  navEl.innerHTML = Object.entries(TABS).map(([key, tab]) => {
    const active = !state.overlay && state.tab === key;
    return `
      <button class="${active ? 'active' : ''}" data-action="go-tab" data-tab="${key}">
        <span>${tab.icon}</span>${tab.label}
      </button>
    `;
  }).join('');
}

// Delegação de eventos: um único listener cuida de toda a navegação
// e das interações, lendo as ações a partir de atributos data-*.
document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  const { action, tab, overlay, id, index, key } = target.dataset;

  switch (action) {
    case 'go-tab':
      state.tab = tab;
      state.overlay = null;
      break;

    case 'open-overlay':
      state.overlay = overlay;
      if (id) state.detailId = Number(id);
      break;

    case 'close-overlay':
      state.overlay = null;
      break;

    case 'toggle-reminder': {
      const reminder = state.reminders.find(r => r.id === Number(id));
      if (reminder) reminder.done = !reminder.done;
      break;
    }

    case 'toggle-and-close': {
      const reminder = state.reminders.find(r => r.id === Number(id));
      if (reminder) reminder.done = !reminder.done;
      state.overlay = null;
      break;
    }

    case 'toggle-hygiene':
      state.hygiene[Number(index)].done = !state.hygiene[Number(index)].done;
      break;

    case 'add-water':
      if (state.water < state.waterGoal) state.water += 1;
      break;

    case 'toggle-notif':
      state.notif[key] = !state.notif[key];
      break;

    case 'save-reminder':
      // Protótipo: aqui entraria a chamada para salvar o lembrete
      // (ex: gravar no SQLite / enviar para a API) antes de fechar.
      state.overlay = null;
      break;

    default:
      return;
  }

  render();
});

render();
