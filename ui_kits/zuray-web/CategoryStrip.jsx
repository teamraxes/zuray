// CategoryStrip.jsx — featured-category chips below hero
const CATEGORIES = [
  { name: 'Комплексы',         count: 64,  img: '../../assets/products/03.png' },
  { name: 'Когтеточки',        count: 38,  img: '../../assets/products/02.png' },
  { name: 'Домики',            count: 22,  img: '../../assets/products/06.png' },
  { name: 'На заказ',          count: '—', img: '../../assets/products/07.png' },
  { name: 'Сменные элементы',  count: 14,  img: '../../assets/products/04.png' },
];

const CategoryStrip = () => (
  <section className="zr-cats">
    <div className="zr-container">
      <header className="zr-section-head">
        <span className="t-eyebrow">Каталог</span>
        <h2 className="zr-section-title">Выберите категорию</h2>
      </header>
      <ul className="zr-cats__grid">
        {CATEGORIES.map((c, i) => (
          <li key={c.name} className="zr-cat">
            <a href="#" className="zr-cat__link">
              <span className="zr-cat__photo">
                <img src={c.img} alt="" />
              </span>
              <span className="zr-cat__meta">
                <span className="zr-cat__name">{c.name}</span>
                <span className="zr-cat__count">{c.count} моделей</span>
              </span>
              <i data-lucide="arrow-right" className="zr-cat__arrow"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

window.CategoryStrip = CategoryStrip;
