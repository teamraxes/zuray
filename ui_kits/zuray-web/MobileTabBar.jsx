// MobileTabBar.jsx — bottom-sticky 64px on mobile only
const MobileTabBar = () => (
  <nav className="zr-tabbar" aria-label="Главное меню">
    <a className="zr-tabbar__item is-active" href="#">
      <i data-lucide="home"></i><span>Главная</span>
    </a>
    <a className="zr-tabbar__item" href="#catalog">
      <i data-lucide="layout-grid"></i><span>Каталог</span>
    </a>
    <a className="zr-tabbar__item" href="#search">
      <i data-lucide="search"></i><span>Поиск</span>
    </a>
    <a className="zr-tabbar__item" href="#cart">
      <i data-lucide="shopping-bag"></i><span>Корзина</span>
    </a>
    <a className="zr-tabbar__item" href="#account">
      <i data-lucide="user"></i><span>Профиль</span>
    </a>
  </nav>
);

window.MobileTabBar = MobileTabBar;
