// BestsellersGrid.jsx — 3-col product grid with sticky-ish filter chips above
const BESTSELLERS = [
  { name: 'Комплекс «Алтай», 165 см',  meta: 'обмотка — джут · 4 яруса',
    img: '../../assets/products/altai-cream.png',
    price: '₽10 320', oldPrice: '₽12 900', salePercent: 20,
    tags: ['Для крупных кошек', 'Не шатается'] },
  { name: 'Когтеточка с домиком',      meta: '31 × 31 × 95 см · ковролин',
    img: '../../assets/products/02.png',
    price: '₽4 290',
    tags: ['Собирается за 10 минут'] },
  { name: 'Комплекс «Лайт» серый',     meta: 'для крупных кошек · плюш',
    img: '../../assets/products/06.png',
    price: '₽3 590',
    tags: ['Бестселлер'], stock: 'low' },
  { name: 'Комплекс «Светлый»',        meta: 'плюш · 2 яруса',
    img: '../../assets/products/svetly-grey.png',
    price: '₽5 940',
    tags: ['Уютный гамак'] },
  { name: 'Комплекс «Комфорт-Сити»',   meta: 'плюш · гамак · 5 ярусов',
    img: '../../assets/products/07.png',
    price: '₽14 700', oldPrice: '₽17 200', salePercent: 15,
    tags: ['Несколько кошек', 'Лежанка'] },
  { name: 'Когтеточка-столбик',        meta: 'джут · 70 см',
    img: '../../assets/products/04.png',
    price: '₽1 890',
    tags: ['Сменный чехол'] },
];

const FILTER_CHIPS = ['Все', 'Комплексы', 'Когтеточки', 'Домики', 'На заказ', 'Со скидкой'];

const BestsellersGrid = () => {
  const [active, setActive] = React.useState('Все');
  return (
    <section className="zr-grid-section" id="catalog">
      <div className="zr-container">
        <header className="zr-section-head zr-section-head--row">
          <div>
            <span className="t-eyebrow">Хит продаж</span>
            <h2 className="zr-section-title">Бестселлеры</h2>
          </div>
          <a className="zr-link-arrow" href="#">Весь каталог <i data-lucide="arrow-right"></i></a>
        </header>
        <ul className="zr-filter-chips">
          {FILTER_CHIPS.map(c => (
            <li key={c}>
              <button
                className={`zr-chip ${active === c ? 'is-selected' : ''}`}
                onClick={() => setActive(c)}>
                {active === c && <i data-lucide="check"></i>}
                {c}
              </button>
            </li>
          ))}
        </ul>
        <div className="zr-grid">
          {BESTSELLERS.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

window.BestsellersGrid = BestsellersGrid;
