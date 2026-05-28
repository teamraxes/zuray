// Footer.jsx — 4-col + legal + bottom strip
const Footer = () => (
  <footer className="zr-footer">
    <div className="zr-container">
      <div className="zr-footer__top">
        <a className="zr-logo zr-footer__logo" href="#" aria-label="ZURAY">
          <img src="../../assets/logo/zuray-logo-currentcolor.svg" alt="ZURAY" />
        </a>
        <nav className="zr-footer__cols">
          <div>
            <h4 className="zr-footer__h">О компании</h4>
            <ul>
              <li><a href="#">Производство</a></li>
              <li><a href="#">Экскурсия</a></li>
              <li><a href="#">Команда</a></li>
              <li><a href="#">Отзывы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="zr-footer__h">Каталог</h4>
            <ul>
              <li><a href="#">Комплексы</a></li>
              <li><a href="#">Когтеточки</a></li>
              <li><a href="#">Домики</a></li>
              <li><a href="#">Сменные элементы</a></li>
              <li><a href="#">Кастом-комплексы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="zr-footer__h">Помощь</h4>
            <ul>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Оплата</a></li>
              <li><a href="#">Возврат</a></li>
              <li><a href="#">Гарантия 2&nbsp;года</a></li>
            </ul>
          </div>
          <div>
            <h4 className="zr-footer__h">Контакты</h4>
            <ul>
              <li><a href="tel:+74950000000">+7 (495) 000-00-00</a></li>
              <li><a href="mailto:hello@zuray.ru">hello@zuray.ru</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Оптовикам</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="zr-footer__legal">
        <p>
          ООО «ЗУРАЙ» · ИНН 7100000000 · ОГРН 1187100000000<br/>
          300000, г. Тула, ул. Производственная 14 · производственная мастерская
        </p>
        <p className="zr-footer__seo">
          Производство и продажа кошачьей мебели в&nbsp;России: домики, игровые комплексы, когтеточки, кастомные конфигурации под заказ. Доставка по&nbsp;всей России, опт от&nbsp;10&nbsp;единиц.
        </p>
      </div>
      <div className="zr-footer__bottom">
        <span>© 2018–2026 ZURAY. Все&nbsp;права защищены.</span>
        <span className="zr-footer__pay">
          <i data-lucide="credit-card"></i> Robokassa · СБП · карты
        </span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
