// AboutPage.jsx — editorial long-form: hero, manifesto, timeline, team, quote, CTA
const MANIFESTO = [
  { num: '01', h: 'Делаем сами', p: 'Не перепродаём китайские каркасы. Режем фанеру, шьём чехлы, наматываем джут — всё в одной мастерской под Тулой.' },
  { num: '02', h: 'Берёзовая фанера 18 мм', p: 'Каркас должен держать британца в прыжке. Используем только мебельную фанеру первого сорта — никаких ДСП и ОСБ.' },
  { num: '03', h: 'Натуральный джут', p: 'Колонны обмотаны российским джутом без синтетики. Кошкам нравится фактура, и&nbsp;он не&nbsp;распускается под когтями.' },
  { num: '04', h: 'Сменные чехлы', p: 'Чехлы и&nbsp;колонны можно заменить через 2–3&nbsp;года, не&nbsp;покупая новый комплекс. Запчасти лежат на&nbsp;нашем складе.' },
  { num: '05', h: 'Гарантия 2 года', p: 'На&nbsp;каркас — два года, на&nbsp;обмотку — год. Если что-то пошло не&nbsp;так, чиним или меняем.' },
  { num: '06', h: 'Конфигурации под заказ', p: 'Высота, цвет чехла, количество ярусов, нестандартные размеры. От&nbsp;идеи до&nbsp;отправки — 9–14&nbsp;дней.' },
];

const TIMELINE = [
  { year: '2018', h: 'Первая мастерская в гараже', p: 'Линар собрал первый комплекс для своего британца Маркуса. Друзья попросили такой&nbsp;же. Через полгода появилась первая мастерская — 40&nbsp;м² и&nbsp;два мастера.' },
  { year: '2020', h: 'Переезд в цех', p: '320&nbsp;м² на&nbsp;окраине Тулы. Закупили станок ЧПУ — теперь раскрой фанеры точный до&nbsp;0.5&nbsp;мм. Запустили линию сменных чехлов.' },
  { year: '2022', h: 'Опт и собственный сайт', p: 'Начали поставки в&nbsp;зоомагазины Москвы, Питера и&nbsp;Казани. Открыли отдел оптовых продаж — отдельная команда из&nbsp;трёх человек.' },
  { year: '2024', h: 'Конфигурации под заказ', p: 'Запустили услугу custom-сборки: клиент выбирает высоту, цвет и&nbsp;количество ярусов на&nbsp;сайте — мы&nbsp;собираем за&nbsp;9–14&nbsp;дней.' },
  { year: '2026', h: 'Сегодня', p: '12&nbsp;000 изделий в&nbsp;год, 8&nbsp;мастеров в&nbsp;цеху, 160+&nbsp;моделей в&nbsp;каталоге, экскурсии на&nbsp;производство по&nbsp;субботам.' },
];

const TEAM = [
  { name: 'Линар Бабаевский',  role: 'Основатель, конструктор', photo: null },
  { name: 'Андрей Куликов',    role: 'Главный мастер цеха',     photo: null },
  { name: 'Мария Свиридова',   role: 'Швейный участок',          photo: null },
  { name: 'Полина Ермакова',   role: 'Оптовые продажи',          photo: null },
];

const AboutPage = () => (
  <main className="zr-page-pad">
    <div className="zr-container">
      <Breadcrumbs trail={[
        { label: 'Главная', href: '#' },
        { label: 'О компании' },
      ]} />

      {/* ----- About hero ----- */}
      <section className="zr-about-hero">
        <div className="zr-about-hero__copy">
          <div className="zr-eyebrow-row">
            <span className="zr-hero__rule"></span>
            <span className="t-eyebrow">Мастерская · Тула · с&nbsp;2018</span>
          </div>
          <h1 className="zr-about-hero__title">
            Мы не&nbsp;магазин.
            <em>Мы&nbsp;— цех.</em>
          </h1>
          <p className="zr-about-hero__lede">
            В&nbsp;одной мастерской под Тулой восемь мастеров режут фанеру, шьют чехлы
            и&nbsp;наматывают джут. Сюда можно приехать в&nbsp;субботу, потрогать материалы
            и&nbsp;увидеть, как из&nbsp;листа фанеры получается «Алтай».
          </p>
          <a className="zr-btn zr-btn--primary" href="#tour">
            Записаться на&nbsp;экскурсию
            <i data-lucide="arrow-right"></i>
          </a>
        </div>
        <figure className="zr-about-hero__photo">
          <img src="../../assets/products/03.png" alt="Производство ZURAY — мастерская в&nbsp;Туле" />
        </figure>
      </section>
    </div>

    {/* ----- Manifesto — 6 numbered values ----- */}
    <section className="zr-manifesto">
      <div className="zr-container">
        <div className="zr-eyebrow-row">
          <span className="zr-hero__rule"></span>
          <span className="t-eyebrow">Принципы цеха</span>
        </div>
        <h2 className="zr-section-title" style={{ maxWidth: '20ch' }}>
          Шесть правил, по&nbsp;которым мы&nbsp;делаем мебель
        </h2>
        <div className="zr-manifesto__grid">
          {MANIFESTO.map(m => (
            <div key={m.num} className="zr-manifesto__item">
              <span className="zr-manifesto__num">{m.num}</span>
              <h3 className="zr-manifesto__h">{m.h}</h3>
              <p className="zr-manifesto__p" dangerouslySetInnerHTML={{ __html: m.p }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ----- Timeline ----- */}
    <section className="zr-timeline">
      <div className="zr-container">
        <div className="zr-eyebrow-row">
          <span className="zr-hero__rule"></span>
          <span className="t-eyebrow">История · 2018 → сегодня</span>
        </div>
        <h2 className="zr-section-title" style={{ maxWidth: '20ch' }}>
          От&nbsp;гаража до&nbsp;цеха на&nbsp;320&nbsp;м²
        </h2>
        <ul className="zr-timeline__list">
          {TIMELINE.map(t => (
            <li key={t.year} className="zr-timeline__item">
              <span className="zr-timeline__year">{t.year}</span>
              <div className="zr-timeline__body">
                <h3 className="zr-timeline__h">{t.h}</h3>
                <p className="zr-timeline__p" dangerouslySetInnerHTML={{ __html: t.p }}></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* ----- Pull quote ----- */}
    <section className="zr-quote">
      <div className="zr-container">
        <div className="zr-quote__inner">
          <span className="zr-quote__mark">«</span>
          <p className="zr-quote__text">
            Кошка живёт с&nbsp;комплексом десять лет. Мы&nbsp;делаем так, чтобы он&nbsp;пережил
            и&nbsp;ремонт квартиры, и&nbsp;переезд, и&nbsp;вторую кошку.
          </p>
          <p className="zr-quote__cite"><b>Линар Бабаевский</b> · основатель ZURAY</p>
        </div>
      </div>
    </section>

    {/* ----- Team ----- */}
    <section className="zr-team">
      <div className="zr-container">
        <div className="zr-eyebrow-row">
          <span className="zr-hero__rule"></span>
          <span className="t-eyebrow">Команда · 8&nbsp;человек</span>
        </div>
        <h2 className="zr-section-title" style={{ maxWidth: '20ch' }}>
          Люди, которые держат комплекс в&nbsp;руках
        </h2>
        <div className="zr-team__grid">
          {TEAM.map(p => (
            <article key={p.name} className="zr-team__card">
              <div className="zr-team__photo">
                {p.photo
                  ? <img src={p.photo} alt={p.name} />
                  : <span>фото · TBD</span>}
              </div>
              <h3 className="zr-team__name">{p.name}</h3>
              <p className="zr-team__role">{p.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ----- CTA strip ----- */}
    <section className="zr-cta-strip">
      <div className="zr-container zr-cta-strip__inner">
        <h2 className="zr-cta-strip__title">
          Приезжайте посмотреть, <em>как мы&nbsp;работаем</em>
        </h2>
        <a className="zr-btn zr-btn--primary" href="#tour">
          Записаться на&nbsp;экскурсию
          <i data-lucide="arrow-right"></i>
        </a>
      </div>
    </section>
  </main>
);

window.AboutPage = AboutPage;
