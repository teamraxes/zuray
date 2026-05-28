// Hero.jsx — editorial split, Playfair Display wght 400, italic accent same color
const Hero = () => (
  <section className="zr-hero">
    <div className="zr-container zr-hero__grid">
      <div className="zr-hero__copy">
        <div className="zr-hero__eyebrow-row">
          <span className="zr-hero__rule"></span>
          <span className="t-eyebrow">Производство · Россия · с&nbsp;2018</span>
        </div>

        <h1 className="zr-hero__title">
          Кошачья мебель,
          <span className="zr-hero__title-em">собранная&nbsp;руками</span>
        </h1>

        <p className="zr-hero__lede">
          Производим домики, комплексы и&nbsp;когтеточки с&nbsp;2018&nbsp;года.
          Каждое изделие проходит через руки мастера, а&nbsp;не&nbsp;через конвейер.
        </p>

        <div className="zr-hero__ctas">
          <a className="zr-btn zr-btn--primary" href="#catalog">
            Смотреть каталог
            <i data-lucide="arrow-right"></i>
          </a>
          <a className="zr-btn zr-btn--ghost" href="#tour">
            Экскурсия на&nbsp;производство
          </a>
        </div>

        <ul className="zr-hero__strip">
          <li>
            <span className="zr-hero__strip-num">07</span>
            <span className="zr-hero__strip-cap">лет в&nbsp;производстве</span>
          </li>
          <li>
            <span className="zr-hero__strip-num">12&thinsp;000</span>
            <span className="zr-hero__strip-cap">изделий в&nbsp;год</span>
          </li>
          <li>
            <span className="zr-hero__strip-num">160+</span>
            <span className="zr-hero__strip-cap">моделей в&nbsp;каталоге</span>
          </li>
        </ul>
      </div>

      <figure className="zr-hero__media">
        <img src="../../assets/products/altai-cream.png" alt="Комплекс «Алтай» с британским котом" />
        <span className="zr-hero__numeral">01</span>
        <span className="zr-hero__accent-bar"></span>
      </figure>
    </div>
  </section>
);

window.Hero = Hero;
