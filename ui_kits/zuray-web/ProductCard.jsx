// ProductCard.jsx — 4:5 photo, name, price (with sale support), in-card "В корзину"
const ProductCard = ({ name, meta, img, price, oldPrice, salePercent, tags = [], stock = 'in' }) => {
  const isSale = !!oldPrice;
  return (
    <article className="zr-card">
      <a className="zr-card__photo" href="#">
        <img src={img} alt={name} loading="lazy" />
        {isSale && salePercent && <span className="zr-card__sale">−{salePercent}%</span>}
        {stock === 'low' && <span className="zr-card__stock zr-card__stock--low">осталось 2</span>}
      </a>
      <div className="zr-card__body">
        <h3 className="zr-card__name">{name}</h3>
        {meta && <p className="zr-card__meta">{meta}</p>}
        {tags.length > 0 && (
          <ul className="zr-card__tags">
            {tags.slice(0, 2).map(t => <li key={t}>{t}</li>)}
          </ul>
        )}
        <div className="zr-card__priceline">
          <span className={`zr-card__price ${isSale ? 'is-sale' : ''}`}>{price}</span>
          {oldPrice && <span className="zr-card__price-old">{oldPrice}</span>}
        </div>
        <button className="zr-btn zr-btn--primary zr-btn--block">В&nbsp;корзину</button>
      </div>
    </article>
  );
};

window.ProductCard = ProductCard;
