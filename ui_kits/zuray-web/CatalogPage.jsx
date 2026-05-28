// CatalogPage.jsx — left filter sidebar + product grid
const Breadcrumbs = ({ trail }) => (
  <nav className="zr-crumbs" aria-label="Хлебные крошки">
    {trail.map((c, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span aria-hidden>/</span>}
        {c.href
          ? <a href={c.href}>{c.label}</a>
          : <span className="zr-crumbs__current">{c.label}</span>}
      </React.Fragment>
    ))}
  </nav>
);

// ---- Filter primitives ----
const FilterGroup = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={`zr-flt ${open ? '' : 'is-collapsed'}`}>
      <button className="zr-flt__head" onClick={() => setOpen(!open)} type="button">
        {title}
        <i data-lucide="chevron-down"></i>
      </button>
      <div className="zr-flt__body">{children}</div>
    </div>
  );
};

const FilterOpt = ({ label, count, selected, onToggle }) => (
  <label className={`zr-flt__opt ${selected ? 'is-selected' : ''}`}>
    <input type="checkbox" checked={!!selected} onChange={onToggle} />
    <span className="zr-flt__box"><i data-lucide="check"></i></span>
    <span>{label}</span>
    {count != null && <span className="zr-flt__count">{count}</span>}
  </label>
);

// ---- Catalog products (12 items for a full grid feel) ----
const CATALOG_ITEMS = [
  { name: 'Комплекс «Алтай», 165 см', meta: 'обмотка — джут · 4 яруса', img: '../../assets/products/altai-cream.png', price: '₽10 320', oldPrice: '₽12 900', salePercent: 20, tags: ['Для крупных кошек'] },
  { name: 'Когтеточка с домиком', meta: '31 × 31 × 95 см · ковролин', img: '../../assets/products/02.png', price: '₽4 290', tags: ['10 минут на сборку'] },
  { name: 'Комплекс «Лайт» серый', meta: 'для крупных кошек · плюш', img: '../../assets/products/06.png', price: '₽3 590', tags: ['Бестселлер'], stock: 'low' },
  { name: 'Комплекс «Светлый»', meta: 'плюш · 2 яруса', img: '../../assets/products/svetly-grey.png', price: '₽5 940', tags: ['Уютный гамак'] },
  { name: 'Комплекс «Комфорт-Сити»', meta: 'плюш · гамак · 5 ярусов', img: '../../assets/products/07.png', price: '₽14 700', oldPrice: '₽17 200', salePercent: 15, tags: ['Несколько кошек'] },
  { name: 'Когтеточка-столбик 70', meta: 'джут · сменный чехол', img: '../../assets/products/04.png', price: '₽1 890', tags: ['Сменный чехол'] },
  { name: 'Домик-куб «Уютный»', meta: 'плюш · вход-арка', img: '../../assets/products/10.png', price: '₽2 690' },
  { name: 'Комплекс «Большой Алтай»', meta: 'джут · 4 платформы', img: '../../assets/products/03.png', price: '₽12 800', tags: ['Для крупных кошек'] },
  { name: 'Когтеточка персиковая', meta: 'плюш · 50 см', img: '../../assets/products/2.png', price: '₽2 290' },
  { name: 'Комплекс с гамаком', meta: 'плюш + джут · гамак', img: '../../assets/products/9.png', price: '₽6 490', tags: ['Уютный гамак'] },
  { name: 'Когтеточка-полка', meta: 'ковролин · настенная', img: '../../assets/products/04.png', price: '₽1 290', stock: 'low' },
  { name: 'Комплекс «На заказ»', meta: 'размеры и цвета по&nbsp;запросу', img: '../../assets/products/07.png', price: 'от ₽9 900', tags: ['Под заказ'] },
];

const CatalogPage = () => {
  // Track which filter opts are selected so the active-filter chips above the grid live-update.
  const [selected, setSelected] = React.useState({
    'cat-complex': true,
    'mat-jute': true,
    'feat-large': true,
  });
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const toggle = (key) => setSelected(s => { const n = { ...s }; if (n[key]) delete n[key]; else n[key] = true; return n; });

  const ACTIVE_LABELS = {
    'cat-complex': 'Комплексы',
    'mat-jute': 'Джут',
    'feat-large': 'Для крупных кошек',
  };
  const activeFlt = Object.keys(selected).filter(k => ACTIVE_LABELS[k]);

  const FilterContent = () => (
    <>
      <FilterGroup title="Категория">
        <FilterOpt label="Комплексы"   count={64} selected={selected['cat-complex']} onToggle={() => toggle('cat-complex')} />
        <FilterOpt label="Когтеточки"  count={38} onToggle={() => toggle('cat-scratch')} selected={selected['cat-scratch']} />
        <FilterOpt label="Домики"      count={22} onToggle={() => toggle('cat-house')} selected={selected['cat-house']} />
        <FilterOpt label="На заказ"    count="—"  onToggle={() => toggle('cat-custom')} selected={selected['cat-custom']} />
        <FilterOpt label="Сменные элементы" count={14} onToggle={() => toggle('cat-parts')} selected={selected['cat-parts']} />
      </FilterGroup>

      <FilterGroup title="Материал обмотки">
        <FilterOpt label="Джут"        count={86} selected={selected['mat-jute']} onToggle={() => toggle('mat-jute')} />
        <FilterOpt label="Ковролин"    count={42} onToggle={() => toggle('mat-carpet')} selected={selected['mat-carpet']} />
        <FilterOpt label="Сизаль"      count={12} onToggle={() => toggle('mat-sisal')} selected={selected['mat-sisal']} />
      </FilterGroup>

      <FilterGroup title="Цвет">
        <div className="zr-flt__colors">
          <span className="zr-flt__color is-selected" style={{ background: '#EFE3CB' }} title="Кремовый" />
          <span className="zr-flt__color" style={{ background: '#C9C9C9' }} title="Серый" />
          <span className="zr-flt__color" style={{ background: '#D8C19A' }} title="Бежевый" />
          <span className="zr-flt__color" style={{ background: '#4A3E33' }} title="Тёмное дерево" />
          <span className="zr-flt__color" style={{ background: '#1A1410' }} title="Чёрный" />
          <span className="zr-flt__color" style={{ background: '#A85D3A' }} title="Терракота" />
        </div>
      </FilterGroup>

      <FilterGroup title="Высота">
        <FilterOpt label="до 60 см"        count={18} onToggle={() => toggle('h-1')} selected={selected['h-1']} />
        <FilterOpt label="60–100 см"       count={34} onToggle={() => toggle('h-2')} selected={selected['h-2']} />
        <FilterOpt label="100–150 см"      count={28} onToggle={() => toggle('h-3')} selected={selected['h-3']} />
        <FilterOpt label="150 см и&nbsp;выше"  count={42} onToggle={() => toggle('h-4')} selected={selected['h-4']} />
      </FilterGroup>

      <FilterGroup title="Ярусы" defaultOpen={false}>
        <FilterOpt label="1 ярус" count={12} onToggle={() => toggle('lvl-1')} selected={selected['lvl-1']} />
        <FilterOpt label="2 яруса" count={28} onToggle={() => toggle('lvl-2')} selected={selected['lvl-2']} />
        <FilterOpt label="3 яруса" count={42} onToggle={() => toggle('lvl-3')} selected={selected['lvl-3']} />
        <FilterOpt label="4+ яруса" count={36} onToggle={() => toggle('lvl-4')} selected={selected['lvl-4']} />
      </FilterGroup>

      <FilterGroup title="Цена">
        <div className="zr-flt__range">
          <input type="text" placeholder="₽ 0" />
          <input type="text" placeholder="₽ 30 000" />
        </div>
      </FilterGroup>

      <FilterGroup title="Особенности" defaultOpen={false}>
        <FilterOpt label="Для крупных кошек" count={32} selected={selected['feat-large']} onToggle={() => toggle('feat-large')} />
        <FilterOpt label="Сменные чехлы"     count={28} onToggle={() => toggle('feat-covers')} selected={selected['feat-covers']} />
        <FilterOpt label="Уютный гамак"      count={18} onToggle={() => toggle('feat-hammock')} selected={selected['feat-hammock']} />
        <FilterOpt label="Несколько кошек"   count={22} onToggle={() => toggle('feat-multi')} selected={selected['feat-multi']} />
      </FilterGroup>
    </>
  );

  return (
    <main className="zr-page-pad">
      <div className="zr-container">
        <Breadcrumbs trail={[
          { label: 'Главная', href: '#' },
          { label: 'Каталог' },
        ]} />

        <header className="zr-pagehead">
          <div className="zr-eyebrow-row">
            <span className="zr-hero__rule"></span>
            <span className="t-eyebrow">160 моделей · в&nbsp;наличии</span>
          </div>
          <h1 className="zr-pagehead__title">Каталог</h1>
          <p className="zr-pagehead__lede">
            Комплексы, домики, когтеточки и&nbsp;сменные элементы. Каждое изделие собрано
            в&nbsp;нашей мастерской под Тулой и&nbsp;готово к&nbsp;отправке завтра.
          </p>
        </header>

        {/* Mobile-only quick filter strip + sheet trigger */}
        <ul className="zr-mflt">
          <li><button className="zr-mflt__btn" onClick={() => setSheetOpen(true)}>
            <i data-lucide="sliders-horizontal"></i>
            <span style={{ whiteSpace: 'nowrap' }}>Фильтры · {activeFlt.length}</span>
          </button></li>
          <li><button className="zr-mflt__chip is-selected">Комплексы</button></li>
          <li><button className="zr-mflt__chip">Когтеточки</button></li>
          <li><button className="zr-mflt__chip">Домики</button></li>
          <li><button className="zr-mflt__chip">На заказ</button></li>
          <li><button className="zr-mflt__chip">Со скидкой</button></li>
        </ul>

        <div className="zr-catalog">
          {/* ----- Filter sidebar (desktop) ----- */}
          <aside className="zr-filters" aria-label="Фильтры каталога">
            <div className="zr-filters__head">
              <h2 className="zr-filters__title">Фильтры</h2>
              <button className="zr-filters__reset" type="button">Сбросить</button>
            </div>
            <FilterContent />
          </aside>

          {/* ----- Grid main ----- */}
          <div className="zr-catalog__main">
            <div className="zr-catalog__toolbar">
              <div className="zr-catalog__count"><b>{CATALOG_ITEMS.length}</b> из&nbsp;160 моделей</div>
              <button className="zr-catalog__sort">
                <i data-lucide="arrow-down-up"></i>
                Сначала популярные
              </button>
            </div>

            {activeFlt.length > 0 && (
              <ul className="zr-active-flt">
                {activeFlt.map(k => (
                  <li key={k}>
                    {ACTIVE_LABELS[k]}
                    <button onClick={() => toggle(k)} aria-label="Убрать"><i data-lucide="x"></i></button>
                  </li>
                ))}
              </ul>
            )}

            <div className="zr-grid">
              {CATALOG_ITEMS.map((p, i) => <ProductCard key={i} {...p} />)}
            </div>

            <p className="zr-catalog__seo">
              ZURAY производит кошачью мебель с&nbsp;2018&nbsp;года под Тулой. В&nbsp;каталоге —
              комплексы с&nbsp;джутовой обмоткой, ковролиновые когтеточки, домики из&nbsp;плюша,
              а&nbsp;также сменные элементы и&nbsp;конфигурации под заказ.
              Доставка по&nbsp;всей России, отправка на&nbsp;следующий день после оплаты,
              гарантия 2&nbsp;года на&nbsp;каркас.
            </p>
          </div>
        </div>
      </div>

      {/* ----- Mobile filter bottom-sheet ----- */}
      <div className={`zr-sheet-scrim ${sheetOpen ? 'is-open' : ''}`} onClick={() => setSheetOpen(false)}></div>
      <div className={`zr-sheet ${sheetOpen ? 'is-open' : ''}`} role="dialog" aria-label="Фильтры">
        <span className="zr-sheet__handle"></span>
        <header className="zr-sheet__head">
          <h2 className="zr-sheet__title">Фильтры</h2>
          <button className="zr-sheet__close" onClick={() => setSheetOpen(false)} aria-label="Закрыть">
            <i data-lucide="x"></i>
          </button>
        </header>
        <div className="zr-sheet__body">
          <FilterContent />
        </div>
        <div className="zr-sheet__foot">
          <button className="zr-btn zr-btn--ghost" onClick={() => setSelected({})}>Сбросить</button>
          <button className="zr-btn zr-btn--primary" onClick={() => setSheetOpen(false)}>
            Показать {CATALOG_ITEMS.length} моделей
          </button>
        </div>
      </div>
    </main>
  );
};

window.CatalogPage = CatalogPage;
window.Breadcrumbs = Breadcrumbs;
