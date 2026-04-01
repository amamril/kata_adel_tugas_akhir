import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .del-root {
    font-family: 'Inter', sans-serif;
    background:
      radial-gradient(circle at 20% 20%, rgba(255,77,141,0.15), transparent 40%),
      radial-gradient(circle at 80% 0%,  rgba(255,77,141,0.12), transparent 40%),
      #0f172a;
    color: #e2e8f0;
    min-height: 100vh;
    position: relative;
  }

  .del-glow {
    position: fixed;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,77,141,0.25), transparent 60%);
    filter: blur(60px);
    z-index: 0;
    pointer-events: none;
  }

  .del-glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    transition: all .35s ease;
  }
  .del-glass:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 80px rgba(255,77,141,0.25);
  }

  .del-card {
    transition: all .3s ease;
  }
  .del-card:hover {
    transform: translateY(-6px) scale(1.03);
  }

  .del-title {
    background: linear-gradient(90deg, #fff, #ff4d8d, #ff7ab3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.1;
  }

  .del-link {
    position: relative;
    color: #f9a8d4;
    text-decoration: none;
    font-size: 14px;
    transition: color .2s;
  }
  .del-link::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    height: 2px; width: 0%;
    background: #ff4d8d;
    transition: width .3s;
  }
  .del-link:hover::after { width: 100%; }

  .del-social {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 12px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    transition: background .2s;
    color: #f9a8d4;
    text-decoration: none;
  }
  .del-social:hover {
    background: rgba(236,72,153,0.2);
    color: #f472b6;
  }
  .del-social svg { width: 20px; height: 20px; }
`;

function InstagramIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24A11.5 11.5 0 0 1 12 6.32c1.02 0 2.05.14 3.01.41 2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.25 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.82 5.65-5.5 5.95.43.38.81 1.11.81 2.24v3.32c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}

const infoCards = [
  { label: "Kelas",          value: "T2A" },
  { label: "Program Studi",  value: "Teknologi Informasi" },
  { label: "Domisili",       value: "Malang" },
];

export default function ProfileDel() {
  return (
    <>
      <style>{styles}</style>
      <div className="del-root">

        {/* Background glows */}
        <div className="del-glow" style={{ top: 0,    left: 0 }} />
        <div className="del-glow" style={{ bottom: 0, right: 0 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 896, margin: "0 auto", padding: "64px 24px 80px" }}>

          {/* Top nav */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <Link to="/" className="del-link">← Kembali</Link>
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "#64748b" }}>PROFILE</span>
          </div>

          {/* Hero card */}
          <div className="del-glass" style={{ borderRadius: 24, padding: 40, marginBottom: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 32 }}>

              {/* Avatar */}
              <div style={{ width: 144, height: 144, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
                <img
                  src="/profile/del/del.png"
                  alt="Adelia"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* Info */}
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "#f472b6", marginBottom: 8 }}>MAHASISWA</p>
                <h1 className="del-title">Adelia Maheswari</h1>
                <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 16 }}>Laksono</p>

                {/* Social links */}
                <div style={{ display: "flex", gap: 12 }}>
                  <a href="https://instagram.com/ad8lia" target="_blank" rel="noreferrer" className="del-social" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://github.com/h8roin" target="_blank" rel="noreferrer" className="del-social" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, marginBottom: 32 }}>
            {infoCards.map(({ label, value }) => (
              <div key={label} className="del-glass del-card" style={{ padding: 24, borderRadius: 16 }}>
                <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 6 }}>{label}</p>
                <p style={{ fontSize: 18, fontWeight: 600 }}>{value}</p>
              </div>
            ))}
          </div>

          {/* About */}
          <div className="del-glass" style={{ padding: 32, borderRadius: 24 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.2em", color: "#f472b6", marginBottom: 16 }}>ABOUT</h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontWeight: 300 }}>
              Halo, saya Adelia Maheswari Laksono, mahasiswa Teknologi Informasi yang memiliki minat pada pengembangan web, desain antarmuka, dan pengalaman pengguna. Saya fokus pada pembuatan tampilan yang modern, efisien, dan nyaman digunakan.
            </p>
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ fontSize: 12, color: "#475569" }}>
              © {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}