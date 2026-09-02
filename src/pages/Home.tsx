import { useEffect } from 'react'

const IG = 'https://www.instagram.com/luma.cafe.manchester/'
const MAPS =
  'https://www.google.com/maps/search/?api=1&query=48a+Station+Road,+Cheadle+Hulme,+Stockport+SK8+7AB'

const menu: Array<[string, string]> = [
  ['Espresso', 'short and dark'],
  ['Flat white', 'the house pour, tulip on top'],
  ['Cappuccino', 'dusted, heart-poured'],
  ['Caffè latte', 'long and easy'],
  ['Chocolate-chip croissant', 'baked each morning'],
  ['The day’s bake', 'whatever the oven says — ask'],
]

const feedTiles = [
  {
    cls: 'feed__tile--fw',
    src: './feed-flatwhite-duo.jpg',
    alt: 'Flat white with tulip latte art on the counter at Luma Cafe',
  },
  {
    cls: 'feed__tile--cr',
    src: './feed-croissant-duo.jpg',
    alt: 'Chocolate-chip croissant, glazed and still on the baking paper',
  },
  {
    cls: 'feed__tile--lh',
    src: './feed-latte-hands-duo.jpg',
    alt: 'A cappuccino with heart latte art, held out across the counter',
  },
]

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* N6 · newspaper masthead */}
      <header className="mast">
        <div className="mast__top rv" style={{ '--i': 0 } as React.CSSProperties}>
          <span>Cheadle Hulme · Manchester</span>
          <span>Vol. I · Est. 2026</span>
        </div>
        <p className="mast__name rv" style={{ '--i': 1 } as React.CSSProperties}>
          Luma Cafe
        </p>
        <nav className="mast__nav rv" style={{ '--i': 2 } as React.CSSProperties} aria-label="Primary">
          <ul>
            <li><a href="#counter">The counter</a></li>
            <li><a href="#mornings">Mornings</a></li>
            <li><a href="#visit">Visit</a></li>
            <li><a href="#feed">The feed</a></li>
          </ul>
        </nav>
        <hr className="mast__rule rv" style={{ '--i': 3 } as React.CSSProperties} aria-hidden="true" />
      </header>

      <main>
        {/* typographic hero — the name is the marquee */}
        <section className="hero" aria-label="Luma Cafe">
          <img
            className="hero__seal rv"
            style={{ '--i': 6 } as React.CSSProperties}
            src="./logo-medallion.png"
            width={1066}
            height={1066}
            fetchPriority="high"
            alt=""
            aria-hidden="true"
          />
          <h1 className="hero__title">
            <span className="hero__word rv" style={{ '--i': 4 } as React.CSSProperties}>Luma</span>
            <span className="hero__script rv" style={{ '--i': 5 } as React.CSSProperties}>Cafe</span>
          </h1>
          <div className="hero__meta rv" style={{ '--i': 7 } as React.CSSProperties}>
            <span>Coffee. Conversation. Community.</span>
            <span>48a Station Road, Cheadle Hulme</span>
          </div>
        </section>

        {/* the tagline, set as a statement triad */}
        <section className="stmt">
          <p className="stmt__line rv">
            <span className="stmt__num" aria-hidden="true">i.</span>Coffee.
          </p>
          <p className="stmt__line stmt__line--gold rv">
            <span className="stmt__num" aria-hidden="true">ii.</span>Conversation.
          </p>
          <p className="stmt__line stmt__line--in rv">
            <span className="stmt__num" aria-hidden="true">iii.</span>Community.
          </p>
          <p className="stmt__aside rv">( the house rules, since 2026 )</p>
        </section>

        <hr className="rule-fold" aria-hidden="true" />

        {/* the counter — wine-list menu */}
        <section className="section" id="counter" aria-labelledby="counter-h">
          <p className="section__fine rv">№ 01 — chalked up weekly</p>
          <h2 className="section__title rv" id="counter-h">From the counter</h2>
          <ul className="counter__list rv">
            {menu.map(([item, note], i) => (
              <li className="counter__row" key={item}>
                <span className="counter__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="counter__item">{item}</span>
                <span className="counter__dots" aria-hidden="true" />
                <span className="counter__note">{note}</span>
              </li>
            ))}
          </ul>
          <p className="counter__foot rv">
            The list turns with the week — the full menu is chalked up in the café.
          </p>
        </section>

        {/* photographic band */}
        <figure className="band rv" id="mornings">
          <img
            src="./morning-duo.jpg"
            width={1206}
            height={900}
            loading="lazy"
            alt="A flat white with latte art beside a chocolate-chip croissant, the word ‘Morning’ set across the two"
          />
          <figcaption>Morning at Luma — flat white, chocolate-chip croissant</figcaption>
        </figure>

        {/* visit — dark inversion */}
        <section className="visit" id="visit" aria-labelledby="visit-h">
          <div className="visit__grid">
            <div className="visit__where">
              <h2 className="visit__fine rv" id="visit-h">№ 02 — Find us</h2>
              <p className="visit__address rv">
                48a Station Road<br />
                Cheadle Hulme, Stockport<br />
                SK8 7AB
              </p>
              <p className="visit__area rv">
                Station Road, a short walk from Cheadle Hulme station. Come as
                you are — stay for one cup or three.
              </p>
            </div>
            <div className="visit__hours">
              <p className="rv">
                <strong>Hours.</strong> While we find our rhythm, the week’s
                opening times are pinned at the top of our Instagram grid.
              </p>
              <p className="visit__links rv">
                <a className="link link--dark" href={IG} target="_blank" rel="noreferrer">
                  See this week’s hours <span className="arr" aria-hidden="true">→</span>
                </a>
                <a className="link link--dark" href={MAPS} target="_blank" rel="noreferrer">
                  Open in Google Maps <span className="arr" aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* the feed — mosaic doorway to Instagram */}
        <section className="section" id="feed" aria-labelledby="feed-h">
          <p className="section__fine rv">№ 03 — mostly mornings</p>
          <h2 className="section__title rv" id="feed-h">From the feed</h2>
          <div className="feed__grid">
            {feedTiles.map((t) => (
              <a
                key={t.src}
                className={`feed__tile ${t.cls} rv`}
                href={IG}
                target="_blank"
                rel="noreferrer"
              >
                <img src={t.src} alt={t.alt} width={900} height={900} loading="lazy" />
              </a>
            ))}
          </div>
          <a className="feed__cta rv" href={IG} target="_blank" rel="noreferrer">
            @luma.cafe.manchester <span className="arr" aria-hidden="true">→</span>
          </a>
        </section>
      </main>

      {/* Ft6 · letter close + clipped colophon */}
      <footer className="foot">
        <p className="foot__close rv">
          See you at the counter,
          <span className="foot__sign">— Luma</span>
        </p>
        <p className="foot__ps rv">
          P.S. — The day’s bake and this week’s hours are on Instagram:{' '}
          <a href={IG} target="_blank" rel="noreferrer">@luma.cafe.manchester</a>.
          Letters back welcome there too.
        </p>
        <p className="foot__meta rv">
          <span>© 2026 Luma Cafe</span>
          <span>48a Station Road, Cheadle Hulme SK8 7AB</span>
          <span>Coffee · Conversation · Community</span>
        </p>
        <p className="foot__big" aria-hidden="true">Luma Cafe</p>
      </footer>
    </>
  )
}
