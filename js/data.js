// Estado inicial da aplicação. Em uma versão com backend, isso viria
// de uma API ou banco local (ex: SQLite / IndexedDB).
export const state = {
  tab: 'home',
  overlay: null,
  detailId: null,

  user: {
    name: 'Gabriel Rosa',
    email: 'gabriel.rosa@email.com',
    initials: 'GR'
  },

  reminders: [
    { id: 1, type: 'remedio', icon: '💊', name: 'Paracetamol', time: '08:00', dose: '1 comprimido', freq: 'A cada 8 horas', done: false },
    { id: 2, type: 'remedio', icon: '💊', name: 'Vitamina D', time: '12:00', dose: '1 cápsula', freq: '1x ao dia', done: false },
    { id: 3, type: 'agua', icon: '💧', name: 'Beber água', time: '10:00', done: true },
    { id: 4, type: 'higiene', icon: '🧼', name: 'Escovar os dentes', time: '07:30', done: true }
  ],

  water: 4,
  waterGoal: 8,

  hygiene: [
    { label: 'Escovar os dentes', done: true },
    { label: 'Tomar banho', done: false },
    { label: 'Lavar as mãos', done: true },
    { label: 'Pentear o cabelo', done: false }
  ],

  week: [40, 65, 50, 80, 60, 90, 70], // adesão (%) dos últimos 7 dias

  notif: {
    lembretes: true,
    som: true,
    resumoDiario: false
  }
};

export function pct(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

export function remindersByType(type) {
  return state.reminders.filter(r => r.type === type);
}
