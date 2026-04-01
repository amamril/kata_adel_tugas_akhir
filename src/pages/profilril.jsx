import { Link } from "react-router-dom";

const aboutText = `Nama saya Ahmad Amril Zul Hafizza, seorang pelajar yang penuh semangat di bidang teknologi dan pengembangan perangkat lunak. Saya lahir dan besar di kabupaten Tulungagung, salah satu kabupaten di Jawa Timur yang terkenal dengan masakan tradisionalnya yang bernama lodho. Saya tertarik terhadap dunia teknologi karena teknologi pada zaman sekarang merupakan salah satu alat yang begitu berpengaruh terhadap kehidupan manusia, jadi menurut saya dengan mendalami teknologi saya berharap dapat memberikan pengaruh yang baik dalam kehidupan bermasyarakat, terutama dalam pengembangan aplikasi dan pemrograman. Saat ini, saya sedang menempuh pendidikan di Universitas Brawijaya, jurusan Teknologi Informasi, di mana saya terus mengasah keterampilan saya dalam berbagai bahasa pemrograman dan teknologi terkini.`;

const wordCount = aboutText.trim().split(/\s+/).filter(Boolean).length;

const statCards = [
  {
    label: "Kelas",
    value: "T2A",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: "Program Studi",
    value: "Teknologi Informasi",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "Domisili",
    value: "Malang, Jawa Timur",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Status",
    value: "Mahasiswa Aktif",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --yellow:  #f5c800;
    --yellow2: #e6b800;
    --dark:    #1a1a1a;
    --mid:     #3a3a3a;
    --muted:   #888;
    --light:   #f7f7f5;
    --white:   #ffffff;
    --border:  #e4e4e0;
    --blue:    #2d5fd4;
  }

  .ril-root {
    font-family: 'Instrument Sans', sans-serif;
    background: var(--white);
    color: var(--dark);
    line-height: 1.6;
  }

  /* ── Navbar ── */
  .ril-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    height: 64px;
    box-shadow: 0 1px 12px rgba(0,0,0,.05);
  }

  .ril-nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 18px;
    color: var(--dark);
    text-decoration: none;
  }
  .ril-nav-badge {
    background: var(--yellow);
    color: var(--dark);
    font-size: 11px;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 4px;
    letter-spacing: .04em;
  }
  .ril-nav-right { display: flex; align-items: center; gap: 20px; }
  .ril-nav-contact { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--muted); }
  .ril-nav-contact strong { color: var(--dark); font-size: 13px; }
  .ril-nav-cta {
    background: var(--yellow);
    color: var(--dark);
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 13px;
    padding: 10px 22px;
    border-radius: 4px;
    text-decoration: none;
    transition: background .2s, transform .15s;
  }
  .ril-nav-cta:hover { background: var(--yellow2); transform: translateY(-1px); }

  /* ── Hero ── */
  .ril-hero {
    background: linear-gradient(125deg, #e4edf9 0%, #dbe7f7 55%, #e8eef8 100%);
    overflow: hidden;
    position: relative;
  }
  .ril-hero::before {
    content: '';
    position: absolute;
    right: -100px; bottom: -100px;
    width: 520px; height: 520px;
    border-radius: 50%;
    background: rgba(245,200,0,.1);
    pointer-events: none;
  }
  .ril-hero-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 90px 60px;
    display: flex;
    align-items: center;
    gap: 70px;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }
  .ril-hero-text { flex: 1; min-width: 280px; }
  .ril-eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 18px;
  }
  .ril-hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(38px, 5vw, 60px);
    font-weight: 800;
    line-height: 1.05;
    color: var(--dark);
    letter-spacing: -.025em;
    margin-bottom: 22px;
  }
  .ril-hero-title em { font-style: normal; color: var(--blue); }
  .ril-hero-sub {
    font-size: 15px;
    color: #555;
    max-width: 440px;
    line-height: 1.8;
    margin-bottom: 36px;
  }

  /* Badges */
  .ril-badges { display: flex; gap: 10px; flex-wrap: wrap; }
  .ril-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
    padding: 7px 15px;
    color: var(--dark);
    box-shadow: 0 2px 8px rgba(0,0,0,.05);
  }
  .ril-badge svg { width: 12px; height: 12px; color: var(--muted); }
  .ril-badge .dot { width: 7px; height: 7px; border-radius: 50%; background: #3cc76a; flex-shrink: 0; }

  /* Photo */
  .ril-photo { flex-shrink: 0; position: relative; }
  .ril-photo-frame {
    width: 320px; height: 390px;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(145deg, #b8cef0, #95b5e8);
    border: 4px solid var(--white);
    box-shadow: 0 24px 64px rgba(45,95,212,.2);
    position: relative;
  }
  .ril-photo-frame img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .ril-sticker {
    position: absolute;
    bottom: -18px; left: -18px;
    background: var(--yellow);
    color: var(--dark);
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: .04em;
    padding: 12px 18px;
    border-radius: 6px;
    box-shadow: 0 6px 20px rgba(0,0,0,.12);
    line-height: 1.4;
    z-index: 2;
  }
  .ril-sticker span { display: block; font-size: 24px; }

  /* About section */
  .ril-section { padding: 90px 60px; }
  .ril-section-inner { max-width: 1160px; margin: 0 auto; }
  .ril-about-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 768px) {
    .ril-about-grid { grid-template-columns: 1fr; gap: 40px; }
    .ril-hero-inner { flex-direction: column; }
    .ril-nav { padding: 0 20px; }
    .ril-section { padding: 60px 20px; }
  }

  .ril-section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 12px;
  }
  .ril-section-eyebrow::before {
    content: '';
    display: block;
    width: 22px; height: 2px;
    background: var(--yellow);
    border-radius: 2px;
  }
  .ril-section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(26px, 3vw, 40px);
    font-weight: 800;
    color: var(--dark);
    line-height: 1.15;
    letter-spacing: -.02em;
    margin-bottom: 16px;
  }
  .ril-about-desc { font-size: 14.5px; color: #545454; line-height: 1.9; }
  .ril-word-count {
    display: inline-block;
    font-size: 11px;
    color: var(--dark);
    background: var(--white);
    border: 1px solid var(--dark);
    border-radius: 10px;
    padding: 4px 12px;
    margin-bottom: 12px;
  }

  /* Stat cards */
  .ril-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ril-stat-card {
    background: var(--light);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 26px 22px;
    transition: transform .2s, box-shadow .2s;
  }
  .ril-stat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,.07); }
  .ril-stat-icon {
    width: 36px; height: 36px;
    background: var(--yellow);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 14px;
  }
  .ril-stat-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .12em;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .ril-stat-value {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.3;
  }

  /* Footer */
  .ril-footer {
    background: var(--dark);
    color: var(--yellow2);
    text-align: center;
    font-size: 12px;
    letter-spacing: .06em;
    padding: 20px;
  }
  .ril-footer strong { color: var(--yellow); }
`;

export default function ProfileRil() {
  return (
    <>
      <style>{styles}</style>
      <div className="ril-root">

        {/* ── Navbar ── */}
        <nav className="ril-nav">
          <Link to="/" className="ril-nav-logo">
            <span className="ril-nav-badge">AAZH</span>
            Amril
          </Link>
          <div className="ril-nav-right">
            <div className="ril-nav-contact">
              <div>
                <strong>ahmadamril25@brawijaya.ac.id</strong>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>+62 838-7296-1162</div>
              </div>
            </div>
            <a href="#about" className="ril-nav-cta">Lihat Profil</a>
          </div>
        </nav>

        {/* ── Hero ── */}
        <div id="home">
          <div className="ril-hero">
            <div className="ril-hero-inner">

              {/* Text */}
              <div className="ril-hero-text">
                <span className="ril-eyebrow">Mahasiswa Aktif · Universitas Brawijaya</span>
                <h1 className="ril-hero-title">
                  AHMAD <em>AMRIL</em> ZUL HAFIZZA
                </h1>
                <p className="ril-hero-sub">
                  pelajar bersemangat di bidang teknologi dan pengembangan perangkat lunak, berharap memberikan dampak positif bagi masyarakat.
                </p>
                <div className="ril-badges">
                  <span className="ril-badge">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Malang, Jawa Timur
                  </span>
                  <span className="ril-badge">
                    <span className="dot" />
                    Aktif
                  </span>
                  <span className="ril-badge">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    Teknologi Informasi
                  </span>
                </div>
              </div>

              {/* Photo */}
              <div className="ril-photo">
                <div className="ril-photo-frame">
                  <img
                    src="/profile/ril/ril.jpeg"
                    alt="Foto Profil Ahmad Amril"
                    onError={e => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="ril-sticker">
                  Kelas<span>T2A</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── About ── */}
        <section id="about" className="ril-section" style={{ background: "var(--white)" }}>
          <div className="ril-section-inner">
            <div className="ril-about-grid">

              {/* Left: text */}
              <div>
                <div className="ril-section-eyebrow">Tentang Saya</div>
                <span className="ril-word-count">{wordCount} kata</span>
                <h2 className="ril-section-title">HALO!</h2>
                <p className="ril-about-desc">{aboutText}</p>
              </div>

              {/* Right: stat cards */}
              <div className="ril-stat-grid">
                {statCards.map(({ label, value, icon }) => (
                  <div key={label} className="ril-stat-card">
                    <div className="ril-stat-icon">{icon}</div>
                    <p className="ril-stat-label">{label}</p>
                    <p className="ril-stat-value">{value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <div className="ril-footer">
          <p>
            Profile · <strong>Ahmad Amril Zul Hafizza</strong> · {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </>
  );
}