// FloatingCTA.jsx — bottom-right cluster of 4 round buttons, top one pulses
const FAB = ({ icon, label, isPulse }) => (
  <div className={`zr-fab-wrap ${isPulse ? 'is-pulse' : ''}`}>
    <span className="zr-fab__label">{label}</span>
    <button className="zr-fab" aria-label={label}>
      <i data-lucide={icon}></i>
    </button>
  </div>
);

const FloatingCTA = () => (
  <aside className="zr-fab-cluster" aria-label="Связаться">
    <FAB icon="message-circle" label="Чат Max" isPulse />
    <FAB icon="send" label="Telegram" />
    <FAB icon="phone" label="Позвонить" />
    <FAB icon="clock" label="Обратный звонок" />
  </aside>
);

window.FloatingCTA = FloatingCTA;
