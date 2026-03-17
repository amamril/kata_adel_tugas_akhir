
const namaKelas = "T2A";
const namaSekolah = "UNIVERSITAS BRAWIJAYA";

const anggota = [
  {
    nama: "Ghaura Furqon Nugraha",
    kelas: "T2A",
    peran: "Backend Developer",
    foto: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ghaura&backgroundColor=d1d4f9",
    file: "/profile/profilgaw.html",
  },
  {
    nama: "Ahmad Amril Zul Hafizza",
    kelas: "T2A",
    peran: "Frontend Developer",
    foto: "https://api.dicebear.com/9.x/avataaars/svg?seed=Budi&backgroundColor=c0aede",
    file: "/profile/budi.html",
  },
  {
    nama: "tes",
    kelas: "T2A",
    peran: "UI/UX Designer",
    foto: "https://api.dicebear.com/9.x/avataaars/svg?seed=Siti&backgroundColor=ffd5dc",
    file: "/profile/siti.html",
  },
];

function getInitials(nama) {
  return nama.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function MemberCard({ member, index }) {
  return (
    <a
      href={member.file}
      style={{
        textDecoration: "none",
        display: "block",
        animation: `fadeUp .5s ease ${0.1 + index * 0.1}s both`,
      }}
    >
      <div className="member-card">
        <div className="member-avatar">
          <img
            src={member.foto}
            alt={member.nama}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <span className="member-initials" style={{ display: "none" }}>
            {getInitials(member.nama)}
          </span>
        </div>
        <div className="member-info">
          <p className="member-peran">{member.peran}</p>
          <h3 className="member-nama">{member.nama}</h3>
          <p className="member-kelas">{member.kelas}</p>
        </div>
        <div className="member-arrow">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5f0; font-family: 'Outfit', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp .6s ease .05s both; }
        .fade-2 { animation: fadeUp .6s ease .2s  both; }
        .fade-3 { animation: fadeUp .6s ease .3s  both; }

        .member-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fff;
          border: 1px solid #ece9e1;
          border-radius: 18px;
          padding: 20px 24px;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s, border-color .2s;
          position: relative;
          overflow: hidden;
        }
        .member-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #e8e0d0;
          border-radius: 0 4px 4px 0;
          transition: background .2s;
        }
        .member-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,.07);
          border-color: #d9d4ca;
        }
        .member-card:hover::before { background: #7eb89a; }
        .member-card:hover .member-arrow { color: #7eb89a; transform: translateX(3px); }

        .member-avatar {
          width: 56px; height: 56px;
          border-radius: 50%;
          overflow: hidden;
          background: #e8e4da;
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #f0ece4;
        }
        .member-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .member-initials {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-weight: 600; color: #9c8f78;
          align-items: center; justify-content: center;
          width: 100%; height: 100%;
        }

        .member-info { flex: 1; min-width: 0; }
        .member-peran {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .15em;
          color: #b5a990;
          margin-bottom: 4px;
        }
        .member-nama {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-weight: 600;
          color: #2c2820;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 2px;
        }
        .member-kelas {
          font-size: 12px;
          color: #b5a990;
        }

        .member-arrow {
          color: #d9d4ca;
          transition: color .2s, transform .2s;
          flex-shrink: 0;
        }

        .divider {
          display: flex; align-items: center; gap: 16px;
        }
        .divider .line { height: 1px; flex: 1; background: #ddd9ce; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#f7f5f0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "56px 24px 80px" }}>

          <div className="divider fade-1" style={{ marginBottom: 48 }}>
            <div className="line" />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic", fontSize: 13,
              letterSpacing: ".15em", color: "#9c8f78",
            }}>
              halaman utama
            </span>
            <div className="line" />
          </div>

          <div className="fade-2" style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#b5a990", marginBottom: 10 }}>
              Tim Kami
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 52, fontWeight: 600, lineHeight: 1.1,
              color: "#2c2820", marginBottom: 16,
            }}>
              {namaKelas} <em style={{ fontWeight: 400 }}></em>
            </h1>
            <p style={{ fontSize: 14, color: "#9c8f78", fontWeight: 300 }}>
              {namaSekolah} · {anggota.length} Anggota
            </p>
          </div>

          <div className="fade-3" style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22, fontWeight: 600, fontStyle: "italic",
              color: "#2c2820", whiteSpace: "nowrap",
            }}>
              Anggota
            </h2>
            <div style={{ height: 1, flex: 1, background: "#ddd9ce" }} />
            <span style={{ fontSize: 12, color: "#b5a990" }}>{anggota.length} orang</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {anggota.map((m, i) => (
              <MemberCard key={i} member={m} index={i} />
            ))}
          </div>

          <div style={{ marginTop: 56, textAlign: "center" }}>
            <div style={{ width: 32, height: 1, background: "#ddd9ce", margin: "0 auto 12px" }} />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic", fontSize: 12,
              color: "#c4b9a8", letterSpacing: ".1em",
            }}>
              {namaSekolah} · {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}