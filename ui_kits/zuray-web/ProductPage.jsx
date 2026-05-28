// ProductPage.jsx — gallery + sticky info + tabs + recommendations
const PRODUCT_GALLERY = [
  '../../assets/products/altai-cream.png',
  '../../assets/products/altai-05.png',
  '../../assets/products/03.png',
  '../../assets/products/altai-02.png',
  '../../assets/products/06.png',
];

const VARIANTS = [
  { name: 'Кремовый',     swatch: '#EFE3CB' },
  { name: 'Серый',        swatch: '#C9C9C9' },
  { name: 'Бежевый',      swatch: '#D8C19A' },
  { name: 'Тёмный дуб',   swatch: '#4A3E33' },
  { name: 'Чёрный',       swatch: '#1A1410' },
];

const SIZES = ['165 см', '180 см', '195 см'];

const RECOMMENDED = [
  { name: 'Когтеточка-столбик 70', meta: 'джут · сменный чехол', img: '../../assets/products/04.png', price: '₽1 890' },
  { name: 'Домик-куб «Уютный»', meta: 'плюш · вход-арка', img: '../../assets/products/10.png', price: '₽2 690' },
  { name: 'Комплекс «Светлый»', meta: 'плюш · 2 яруса', img: '../../assets/products/svetly-grey.png', price: '₽5 940' },
  { name: 'Когтеточка с домиком', meta: '31 × 31 × 95 см', img: '../../assets/products/02.png', price: '₽4 290' },
];

const ProductPage = () => {
  const [mainImg, setMainImg] = React.useState(PRODUCT_GALLERY[0]);
  const [variant, setVariant] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('desc');

  return (
    <main className="zr-page-pad">
      <div className="zr-container">
        <Breadcrumbs trail={[
          { label: 'Главная', href: '#' },
          { label: 'Каталог', href: '#' },
          { label: 'Комплексы', href: '#' },
          { label: 'Алтай 165 см' },
        ]} />

        <section className="zr-product">
          {/* ----- Gallery ----- */}
          <div className="zr-gallery">
            <ul className="zr-gallery__thumbs">
              {PRODUCT_GALLERY.map((src, i) => (
                <li
                  key={i}
                  className={`zr-gallery__thumb ${src === mainImg ? 'is-active' : ''}`}
                  onClick={() => setMainImg(src)}>
                  <img src={src} alt={`Кадр ${i + 1}`} />
                </li>
              ))}
            </ul>
            <div className="zr-gallery__main">
              <span className="zr-gallery__badge">−20%</span>
              <img src={mainImg} alt="Комплекс «Алтай»" />
            </div>
          </div>

          {/* ----- Info column ----- */}
          <div className="zr-pinfo">
            <div className="zr-eyebrow-row zr-pinfo__eyebrow">
              <span className="zr-hero__rule"></span>
              <span className="t-eyebrow">Производство ZURAY · артикул A-165-04</span>
            </div>

            <h1 className="zr-pinfo__name">Комплекс «Алтай», 165&nbsp;см</h1>
            <p className="zr-pinfo__meta">Игровой комплекс с&nbsp;домиком, лежанкой и&nbsp;джутовой обмоткой. Подходит крупным кошкам.</p>

            <div className="zr-pinfo__rating">
              <span className="zr-stars" aria-label="Рейтинг 4.9 из 5">★★★★★</span>
              4.9 · <a href="#tab-reviews" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--border)' }}>184&nbsp;отзыва</a>
            </div>

            <div className="zr-pinfo__priceline">
              <span className="zr-pinfo__price">₽10&thinsp;320</span>
              <span className="zr-pinfo__price-old">₽12&thinsp;900</span>
              <span className="zr-pinfo__discount">−20%</span>
            </div>

            <div className="zr-pinfo__option-group">
              <span className="zr-pinfo__swatch-name">Цвет: <b>{VARIANTS[variant].name}</b></span>
              <div className="zr-pinfo__swatches">
                {VARIANTS.map((v, i) => (
                  <button
                    key={v.name}
                    aria-label={v.name}
                    title={v.name}
                    className={`zr-pinfo__swatch ${i === variant ? 'is-active' : ''}`}
                    style={{ background: v.swatch }}
                    onClick={() => setVariant(i)} />
                ))}
              </div>
            </div>

            <div className="zr-pinfo__option-group">
              <p className="zr-pinfo__label">Высота</p>
              <div className="zr-pinfo__sizes">
                {SIZES.map((s, i) => (
                  <button
                    key={s}
                    className={`zr-pinfo__size ${i === size ? 'is-active' : ''}`}
                    onClick={() => setSize(i)}>{s}</button>
                ))}
              </div>
            </div>

            <ul className="zr-pfeatures">
              <li>Для крупных кошек</li>
              <li>Не шатается при прыжках</li>
              <li>Сменный чехол</li>
              <li>Собирается за 10&nbsp;минут</li>
            </ul>

            <div className="zr-pinfo__option-group">
              <p className="zr-pinfo__label">Количество</p>
              <div className="zr-pinfo__qty">
                <button aria-label="Меньше" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button aria-label="Больше" onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            <div className="zr-pinfo__buy">
              <button className="zr-btn zr-btn--primary">
                <i data-lucide="shopping-bag"></i>
                В&nbsp;корзину
              </button>
              <button className="zr-btn zr-btn--ghost">
                Купить в&nbsp;1&nbsp;клик
              </button>
            </div>

            <ul className="zr-pinfo__perks">
              <li><i data-lucide="check"></i> В&nbsp;наличии — отправим завтра</li>
              <li><i data-lucide="truck"></i> Доставка по&nbsp;России от&nbsp;390&nbsp;₽, бесплатно от&nbsp;5000&nbsp;₽</li>
              <li><i data-lucide="shield-check"></i> Гарантия 2&nbsp;года на&nbsp;каркас, обмен в&nbsp;течение 14&nbsp;дней</li>
              <li><i data-lucide="hammer"></i> Произведено в&nbsp;Туле, ООО «ЗУРАЙ»</li>
            </ul>
          </div>
        </section>

        {/* ----- Tabs ----- */}
        <section className="zr-tabs" id="tabs">
          <ul className="zr-tabs__list" role="tablist">
            <li><button role="tab" className={`zr-tabs__tab ${tab === 'desc' ? 'is-active' : ''}`} onClick={() => setTab('desc')}>Описание</button></li>
            <li><button role="tab" className={`zr-tabs__tab ${tab === 'spec' ? 'is-active' : ''}`} onClick={() => setTab('spec')}>Характеристики</button></li>
            <li><button role="tab" className={`zr-tabs__tab ${tab === 'rev'  ? 'is-active' : ''}`} onClick={() => setTab('rev')}>Отзывы (184)</button></li>
            <li><button role="tab" className={`zr-tabs__tab ${tab === 'ship' ? 'is-active' : ''}`} onClick={() => setTab('ship')}>Доставка и&nbsp;оплата</button></li>
          </ul>

          {tab === 'desc' && (
            <div className="zr-tabs__panel">
              <p>«Алтай» — флагман нашей линейки игровых комплексов. Четырёхъярусная конструкция
              с&nbsp;двумя джутовыми колоннами и&nbsp;домиком-кубом подходит даже мейн-кунам
              и&nbsp;британским длинношёрстным.</p>
              <p>Основание из&nbsp;берёзовой фанеры 18&nbsp;мм с&nbsp;противоскользящими накладками —
              комплекс не&nbsp;шатается даже при активных прыжках. Колонны обмотаны натуральным
              джутом 6&nbsp;мм, который не&nbsp;распускается и&nbsp;легко меняется при износе.</p>
              <h3>Что внутри</h3>
              <p>Просторный домик 31×31×30 см с&nbsp;круглым входом, мягкая лежанка
              с&nbsp;бортиком, четыре платформы для отдыха, помпон-игрушка на&nbsp;шнурке
              и&nbsp;широкое основание для устойчивости.</p>
            </div>
          )}

          {tab === 'spec' && (
            <div className="zr-tabs__panel">
              <div className="zr-specs">
                <dl className="zr-specs__col">
                  <div className="zr-specs__row"><dt>Габариты</dt><dd>50 × 50 × 165 см</dd></div>
                  <div className="zr-specs__row"><dt>Вес</dt><dd>14,8 кг</dd></div>
                  <div className="zr-specs__row"><dt>Основание</dt><dd>фанера 18 мм</dd></div>
                  <div className="zr-specs__row"><dt>Обмотка</dt><dd>джут 6 мм, натуральный</dd></div>
                  <div className="zr-specs__row"><dt>Чехлы</dt><dd>искусственный мех, съёмный</dd></div>
                </dl>
                <dl className="zr-specs__col">
                  <div className="zr-specs__row"><dt>Ярусы</dt><dd>4</dd></div>
                  <div className="zr-specs__row"><dt>Домик</dt><dd>31 × 31 × 30 см</dd></div>
                  <div className="zr-specs__row"><dt>Лежанка</dt><dd>40 × 40 см с&nbsp;бортиком</dd></div>
                  <div className="zr-specs__row"><dt>Сборка</dt><dd>10 минут без инструментов</dd></div>
                  <div className="zr-specs__row"><dt>Страна</dt><dd>Россия, Тула</dd></div>
                </dl>
              </div>
            </div>
          )}

          {tab === 'rev' && (
            <div className="zr-tabs__panel">
              <p style={{ fontSize: '15px', color: 'var(--text-mute)' }}><b style={{ color: 'var(--text)', fontWeight: 600 }}>4.9 из&nbsp;5</b> · по&nbsp;184 отзывам</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <article style={{ paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                  <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <b>Анна, Москва</b>
                    <span style={{ color: 'var(--accent)' }}>★★★★★</span>
                  </header>
                  <p style={{ fontSize: '15px', margin: 0 }}>Купила «Алтай» для двух британцев. Колонны крепкие, кошки не&nbsp;шатают.
                  Чехлы съёмные — постирала через месяц, всё как новое. Спасибо мастерам!</p>
                </article>
                <article style={{ paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                  <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <b>Илья, Санкт-Петербург</b>
                    <span style={{ color: 'var(--accent)' }}>★★★★★</span>
                  </header>
                  <p style={{ fontSize: '15px', margin: 0 }}>Заказывал кастом-высоту 180&nbsp;см. Сделали за&nbsp;9&nbsp;дней,
                  привезли в&nbsp;собранном виде. Качество выше, чем у&nbsp;любого зоомага.</p>
                </article>
              </div>
            </div>
          )}

          {tab === 'ship' && (
            <div className="zr-tabs__panel">
              <h3>Доставка</h3>
              <p>Москва и&nbsp;МО — курьер от&nbsp;390&nbsp;₽, день в&nbsp;день при заказе до&nbsp;14:00.
              Регионы — СДЭК, Boxberry, Почта России. Бесплатная доставка по&nbsp;всей России
              при заказе от&nbsp;5000&nbsp;₽.</p>
              <h3>Оплата</h3>
              <p>Карта (Visa / Mastercard / МИР), СБП, наличными курьеру (Москва и&nbsp;МО).
              Юр.&nbsp;лицам — счёт и&nbsp;закрывающие документы.</p>
              <h3>Возврат</h3>
              <p>14&nbsp;дней на&nbsp;обмен, если изделие не&nbsp;подошло — без объяснения причин.
              Гарантия 2&nbsp;года на&nbsp;каркас.</p>
            </div>
          )}
        </section>

        {/* ----- Recommended ----- */}
        <section className="zr-grid-section" style={{ paddingTop: 0 }}>
          <header className="zr-section-head zr-section-head--row">
            <div>
              <span className="t-eyebrow">К&nbsp;этому товару</span>
              <h2 className="zr-section-title">С&nbsp;этим часто берут</h2>
            </div>
            <a className="zr-link-arrow" href="#">Все рекомендации <i data-lucide="arrow-right"></i></a>
          </header>
          <div className="zr-grid zr-grid--4">
            {RECOMMENDED.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>

      {/* Sticky mobile-only buy bar */}
      <div className="zr-buybar">
        <div className="zr-buybar__price">
          <span className="now">₽10&thinsp;320</span>
          <span className="old">₽12&thinsp;900</span>
        </div>
        <button className="zr-btn zr-btn--primary">
          <i data-lucide="shopping-bag"></i>
          В&nbsp;корзину
        </button>
      </div>
    </main>
  );
};

window.ProductPage = ProductPage;
