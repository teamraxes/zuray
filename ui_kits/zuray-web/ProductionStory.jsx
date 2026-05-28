// ProductionStory.jsx — editorial strip about the workshop, 7+5 with photo and pull-numerals
const ProductionStory = () => (
  <section className="zr-story" id="about">
    <div className="zr-container zr-story__grid">
      <figure className="zr-story__media">
        <img src="../../assets/products/09.png" alt="Производство ZURAY — мастерская" />
      </figure>
      <div className="zr-story__copy">
        <span className="t-eyebrow">О мастерской</span>
        <h2 className="zr-story__title">
          Мы не магазин.<br/>
          <em>Мы&nbsp;— цех.</em>
        </h2>
        <p className="t-lede zr-story__lede">
          В одной мастерской под Тулой мы режем фанеру, шьём чехлы, наматываем джут и собираем комплексы.
          Без посредников и без склейки на коленке.
        </p>
        <dl className="zr-story__stats">
          <div>
            <dt className="zr-story__num">2018</dt>
            <dd>год основания производства</dd>
          </div>
          <div>
            <dt className="zr-story__num">12 000</dt>
            <dd>изделий в&nbsp;год</dd>
          </div>
          <div>
            <dt className="zr-story__num">8</dt>
            <dd>мастеров в&nbsp;цеху</dd>
          </div>
        </dl>
        <a className="zr-btn zr-btn--ghost" href="#tour">
          Экскурсия на производство
          <i data-lucide="arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
);

window.ProductionStory = ProductionStory;
