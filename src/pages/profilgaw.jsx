import { useState } from "react";

const aboutText = `Halo! Nama saya Ghaura Furqon Nugraha, seorang pelajar yang penuh semangat di bidang teknologi dan pengembangan perangkat lunak. Saya lahir di Jakarta, kota yang terkenal dengan lalu lintas dan dramanya. Sejak kecil, saya selalu tertarik dengan dunia komputer dan bagaimana teknologi dapat mengubah cara manusia berinteraksi satu sama lain.`;

const tickerItems = [
  "Teknologi Informasi",
  "Kelas T2A",
  "Malang, Jawa Timur",
  "Mahasiswa Aktif",
  "Ghaura Furqon Nugraha",
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Instrument Sans', sans-serif;
    background-color: #05080d;
  }

  .profile-root {
    background-color: #05080d;
    background-image:
      linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
    background-size: 60px 60px;
    min-height: 100vh;
    color: white;
    position: relative;
    font-family: 'Instrument Sans', sans-serif;
  }

  .profile-root::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 50;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.045'/%3E%3C/svg%3E");
  }

  .glass {
    background: rgba(13,18,32,.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,.07);
    transition: border-color .3s;
  }
  .glass:hover {
    border-color: rgba(184,255,60,.18);
  }

  .avatar-glow {
    box-shadow: 0 0 0 2px #b8ff3c, 0 0 30px rgba(184,255,60,.3);
  }

  .lift {
    transition: transform .22s ease, box-shadow .22s ease;
  }
  .lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 40px rgba(184,255,60,.12);
  }

  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 42px;
    font-weight: 800;
    line-height: 1;
    color: #b8ff3c;
    letter-spacing: -.03em;
  }

  .font-syne { font-family: 'Syne', sans-serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .a1 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .05s both; }
  .a2 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .15s both; }
  .a3 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .25s both; }
  .a4 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .35s both; }
  .a5 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .45s both; }

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-inner { animation: marquee 14s linear infinite; }

  @keyframes pulse-green {
    0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,.5); }
    50%       { box-shadow: 0 0 0 6px rgba(74,222,128,0); }
  }
  .pulse { animation: pulse-green 2.4s ease infinite; }

  .grid-profile {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (min-width: 640px) {
    .grid-profile {
      grid-template-columns: repeat(5, 1fr);
    }
    .col-span-3 { grid-column: span 3; }
    .col-span-2 { grid-column: span 2; }
  }
  .col-span-5 { grid-column: 1 / -1; }
`;

function BackIcon() {
  return (
    <svg className="w-3 h-3" style={{ width: 12, height: 12 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
  );
}

function LocationIcon({ dim }) {
  const s = dim ? { color: "rgba(255,255,255,0.4)" } : { color: "#b8ff3c" };
  return (
    <svg style={{ width: 12, height: 12, ...s }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg style={{ width: 12, height: 12, color: "rgba(255,255,255,0.5)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function GradIcon() {
  return (
    <svg style={{ width: 20, height: 20, color: "#b8ff3c" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div
      className="a5"
      style={{
        marginTop: 24,
        borderRadius: 16,
        padding: "12px 0",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.05)",
        background: "rgba(13,18,32,.7)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="marquee-inner" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", padding: "0 32px" }}>
              {item}
            </span>
            <span style={{ color: "#b8ff3c", fontSize: 11 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProfileGhaura() {
  const [year] = useState(new Date().getFullYear());
  const wordCount = aboutText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <style>{styles}</style>
      <div className="profile-root">
        <div style={{ position: "relative", zIndex: 10, maxWidth: 768, margin: "0 auto", padding: "48px 20px 80px" }}>

          {/* Header nav */}
          <div className="a1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
            <a
              href="/"
              className="glass"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", borderRadius: 9999, padding: "10px 20px",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#b8ff3c"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >
              <BackIcon />
              Kembali
            </a>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Halaman Profil
            </span>
          </div>

          {/* Card grid */}
          <div className="grid-profile">

            {/* [1] Identity card — 3 cols */}
            <div
              className="a2 glass lift col-span-3"
              style={{ borderRadius: 24, padding: 28, position: "relative", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, width: 128, height: 128,
                borderRadius: "0 0 100% 0",
                background: "radial-gradient(circle at 0 0, rgba(184,255,60,.08), transparent 70%)",
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* Avatar */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div
                    className="avatar-glow"
                    style={{ width: 80, height: 80, borderRadius: 16, overflow: "hidden", background: "#131a2e" }}
                  >
                    <img
                      src="/public/profile/gaw/gaw.png"
                      alt="GFN"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={e => {
                        e.currentTarget.outerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-weight:700;font-size:20px;color:#b8ff3c;">GF</div>';
                      }}
                    />
                  </div>
                  <span
                    className="pulse"
                    style={{
                      position: "absolute", bottom: -4, right: -4,
                      width: 16, height: 16, background: "#4ade80",
                      borderRadius: "50%", border: "2px solid #05080d", display: "block",
                    }}
                  />
                </div>
                {/* Name */}
                <div>
                  <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b8ff3c", marginBottom: 4, fontWeight: 500 }}>
                    Mahasiswa Aktif
                  </p>
                  <h1 className="font-syne" style={{ fontWeight: 800, fontSize: 30, lineHeight: 1, color: "white", letterSpacing: "-0.03em" }}>
                    Ghaura<br />
                    <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "rgba(255,255,255,0.35)" }}>
                      Furqon Nugraha
                    </span>
                  </h1>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(184,255,60,0.1)", border: "1px solid rgba(184,255,60,0.25)",
                  color: "#b8ff3c", fontSize: 11, padding: "6px 12px", borderRadius: 9999,
                }}>
                  <LocationIcon />
                  Malang, Jawa Timur
                </span>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)", fontSize: 11, padding: "6px 12px", borderRadius: 9999,
                }}>
                  <BookIcon />
                  Teknologi Informasi
                </span>
              </div>
            </div>

            {/* [2] Kelas card — 2 cols */}
            <div
              className="a2 glass lift col-span-2"
              style={{ borderRadius: 24, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", right: -24, bottom: -24,
                fontFamily: "Syne, sans-serif", fontWeight: 800,
                fontSize: 90, color: "rgba(255,255,255,0.03)",
                lineHeight: 1, pointerEvents: "none", userSelect: "none",
              }}>
                T2A
              </div>
              <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>
                Kelas
              </p>
              <div>
                <p className="stat-num">T2A</p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4, fontWeight: 300 }}>Semester Aktif</p>
              </div>
            </div>

            {/* [3] About card — full width */}
            <div
              className="a3 glass lift col-span-5"
              style={{ borderRadius: 24, padding: 28, position: "relative", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0, width: 192, height: 192,
                borderRadius: "0 0 0 100%", opacity: 0.4,
                background: "radial-gradient(circle at 100% 0, rgba(184,255,60,.05), transparent 70%)",
              }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <h2 className="font-syne" style={{ fontWeight: 700, fontSize: 15, color: "white", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 20, height: 2, background: "#b8ff3c", borderRadius: 9999, display: "inline-block" }} />
                  Tentang Diri
                </h2>
                <span style={{
                  fontSize: 11, color: "#b8ff3c",
                  background: "rgba(184,255,60,0.1)", border: "1px solid rgba(184,255,60,0.2)",
                  padding: "4px 12px", borderRadius: 9999,
                }}>
                  {wordCount} kata
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, fontWeight: 300, maxWidth: 672 }}>
                {aboutText}
              </p>
            </div>

            {/* [4] Prodi — 3 cols */}
            <div
              className="a4 glass lift col-span-3"
              style={{ borderRadius: 24, padding: 28, display: "flex", alignItems: "center", gap: 20 }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(184,255,60,0.1)", border: "1px solid rgba(184,255,60,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <GradIcon />
              </div>
              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
                  Program Studi
                </p>
                <p className="font-syne" style={{ fontWeight: 700, fontSize: 20, color: "white" }}>
                  Teknologi Informasi
                </p>
              </div>
            </div>

            {/* [5] Domisili — 2 cols */}
            <div
              className="a4 glass lift col-span-2"
              style={{ borderRadius: 24, padding: 28, display: "flex", alignItems: "center", gap: 16 }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <LocationIcon dim />
              </div>
              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
                  Domisili
                </p>
                <p className="font-syne" style={{ fontWeight: 700, fontSize: 16, color: "white" }}>Malang</p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 300 }}>Jawa Timur</p>
              </div>
            </div>

          </div>

          {/* Marquee ticker */}
          <Ticker />

          {/* Footer */}
          <div className="a5" style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <div style={{ height: 1, flex: 1, maxWidth: 72, background: "rgba(255,255,255,0.1)" }} />
            <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
              Profile · {year}
            </p>
            <div style={{ height: 1, flex: 1, maxWidth: 72, background: "rgba(255,255,255,0.1)" }} />
          </div>

        </div>
      </div>
    </>
  );
}