// Header.jsx — sticky 72px, blur, ZURAY wordmark + 5 nav links + cart
const Header = ({ cartCount = 3 }) => (
  <header className="zr-header">
    <div className="zr-container zr-header__inner">
      <a className="zr-logo" href="#" aria-label="ZURAY — главная">
        <img src="../../assets/logo/zuray-logo-currentcolor.svg" alt="ZURAY" />
      </a>
      <nav className="zr-nav">
        <a className="zr-nav__link is-active" href="#catalog">Каталог</a>
        <a className="zr-nav__link" href="#about">О нас</a>
        <a className="zr-nav__link" href="#wholesale">Оптовикам</a>
        <a className="zr-nav__link" href="#delivery">Доставка</a>
        <a className="zr-nav__link" href="#tour">Экскурсия</a>
      </nav>
      <div className="zr-header__actions">
        <button className="zr-icon-btn" aria-label="Поиск">
          <i data-lucide="search"></i>
        </button>
        <button className="zr-icon-btn" aria-label="Аккаунт">
          <i data-lucide="user"></i>
        </button>
        <button className="zr-icon-btn zr-cart" aria-label="Корзина">
          <i data-lucide="shopping-bag"></i>
          {cartCount > 0 && <span className="zr-cart__count">{cartCount}</span>}
        </button>
      </div>
    </div>
  </header>
);

window.Header = Header;
