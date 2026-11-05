import { useState, lazy, Suspense } from 'react'
import { CampusProvider, useCampus } from './context/CampusContext' // 3. REACT HOOK: useContext
import logoJayanusa from './assets/logo-jayanusa.png'
import './App.css'

// Menggunakan React.lazy untuk Lazy Loading setiap halaman
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const PMB = lazy(() => import('./pages/PMB'))
const Contact = lazy(() => import('./pages/Contact'))

function AppContent() {
  // 1. REACT HOOK: useState - Melacak tab halaman aktif
  const [halamanAktif, setHalamanAktif] = useState<'home' | 'about' | 'pmb' | 'contact'>('home')

  // 3. REACT HOOK: useContext - Mengambil nilai dari Context global
  const { namaKampus, tahunAkademik, kontakWA, kontakTelp, kontakEmail, alamatKampus, tema, toggleTema } = useCampus()

  return (
    <div className={`app-root ${tema === 'dark' ? 'dark-mode' : ''}`}>
      {/* Top Bar Informasi Kampus */}
      <div className="campus-topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <span>📍 Padang, Sumatera Barat</span>
            <span className="topbar-divider">|</span>
            <span>📞 {kontakTelp}</span>
            <span className="topbar-divider">|</span>
            <span>💬 WA PMB: {kontakWA}</span>
            <span className="topbar-divider">|</span>
            <span>✉️ {kontakEmail}</span>
          </div>
          <div className="topbar-actions">
            <span className="academic-badge">T.A. {tahunAkademik}</span>
            <button
              onClick={toggleTema}
              className="theme-toggle-btn"
              title="Ganti Tema Warna"
            >
              {tema === 'light' ? '🌙 Gelap' : '☀️ Terang'}
            </button>
          </div>
        </div>
      </div>

      <div className="container main-content-wrap">
        {/* Header Kampus & Navigasi */}
        <header className="campus-header">
          <div className="header-top">
            <div className="brand-wrapper" onClick={() => setHalamanAktif('home')} style={{ cursor: 'pointer' }}>
              <img src={logoJayanusa} alt="Logo Universitas Jayanusa" className="brand-logo-img" />
              <div>
                <div className="brand-badge-row">
                  <span className="brand-univ-tag">PORTAL PMB RESMI</span>
                  <span className="header-badge">⭐ Akreditasi Baik Sekali (BAN-PT)</span>
                </div>
                <h1 className="brand-title">{namaKampus.toUpperCase()}</h1>
                <p className="brand-subtitle">Kampus Teknologi Informasi & Bisnis Digital Terkemuka di Sumatera Barat</p>
              </div>
            </div>

            <div className="header-cta-zone">
              <button
                className={`header-pmb-btn ${halamanAktif === 'pmb' ? 'active-pmb' : ''}`}
                onClick={() => setHalamanAktif('pmb')}
              >
                <span className="pulse-dot"></span>
                Daftar PMB Online ➜
              </button>
            </div>
          </div>

          {/* Menu Navigasi Tabs */}
          <nav className="navbar-tabs">
            <button
              className={`nav-tab-btn ${halamanAktif === 'home' ? 'active' : ''}`}
              onClick={() => setHalamanAktif('home')}
            >
              🏠 Home
            </button>
            <button
              className={`nav-tab-btn ${halamanAktif === 'about' ? 'active' : ''}`}
              onClick={() => setHalamanAktif('about')}
            >
              ℹ️ Profil & Program Studi
            </button>
            <button
              className={`nav-tab-btn ${halamanAktif === 'pmb' ? 'active' : ''}`}
              onClick={() => setHalamanAktif('pmb')}
            >
              📝 Pendaftaran PMB 2026
            </button>
            <button
              className={`nav-tab-btn ${halamanAktif === 'contact' ? 'active' : ''}`}
              onClick={() => setHalamanAktif('contact')}
            >
              📞 Layanan Kontak & Lokasi
            </button>
          </nav>
        </header>

        {/* IMPLEMENTASI REACT SUSPENSE */}
        <main className="main-stage">
          <Suspense
            fallback={
              <div className="suspense-loading">
                <div className="spinner"></div>
                <p>Memuat halaman {namaKampus}, mohon tunggu sebentar...</p>
              </div>
            }
          >
            {halamanAktif === 'home' && (
              <Home onPindahKePMB={() => setHalamanAktif('pmb')} />
            )}
            {halamanAktif === 'about' && (
              <About onPilihProdi={() => setHalamanAktif('pmb')} />
            )}
            {halamanAktif === 'pmb' && <PMB />}
            {halamanAktif === 'contact' && <Contact />}
          </Suspense>
        </main>
      </div>

      {/* Footer Lengkap Siap Pakai */}
      <footer className="campus-footer">
        <div className="container footer-inner">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src={logoJayanusa} alt="Logo Jayanusa" className="footer-logo-img" />
              <div>
                <h4 className="footer-title">{namaKampus}</h4>
                <p className="footer-tagline">Unggul, Inovatif, dan Berdaya Saing Global</p>
              </div>
            </div>
            <p className="footer-desc">
              Pusat pendidikan tinggi teknologi informasi dan bisnis digital terakreditasi Baik Sekali oleh BAN-PT, berkomitmen mencetak lulusan kompeten yang langsung terserap di dunia industri.
            </p>
            <div className="footer-accreditation">
              <span>🏛️ Akreditasi Institusi: <strong>Baik Sekali (BAN-PT)</strong></span>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Program Studi Pilihan</h5>
            <ul className="footer-links">
              <li><button onClick={() => setHalamanAktif('about')}>S1 - Sistem Informasi (S.Kom.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')}>S1 - Teknologi Informasi (S.Kom.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')}>D4 - Bisnis Digital (S.Tr.Bns.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')}>D3 - Manajemen Informatika (A.Md.Kom.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')}>D3 - Komputerisasi Akuntansi (A.Md.Kom.)</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Penerimaan Mahasiswa Baru</h5>
            <ul className="footer-links">
              <li><button onClick={() => setHalamanAktif('pmb')}>Formulir Registrasi Online</button></li>
              <li><button onClick={() => setHalamanAktif('pmb')}>Jalur Beasiswa Prestasi & KIP</button></li>
              <li><button onClick={() => setHalamanAktif('pmb')}>Jalur Masuk Reguler</button></li>
              <li><button onClick={() => setHalamanAktif('contact')}>Konsultasi PMB via WhatsApp</button></li>
              <li><button onClick={() => setHalamanAktif('contact')}>FAQ Pendaftaran</button></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h5 className="footer-heading">Sekretariat PMB</h5>
            <p className="footer-contact-item">
              📍 {alamatKampus}
            </p>
            <p className="footer-contact-item">
              📞 Telepon: {kontakTelp}
            </p>
            <p className="footer-contact-item">
              💬 WhatsApp: {kontakWA}
            </p>
            <p className="footer-contact-item">
              ✉️ Email: {kontakEmail}
            </p>
            <div className="footer-hours">
              🕒 Senin - Jumat: 08:00 - 17:00 WIB<br />
              🕒 Sabtu: 08:00 - 14:00 WIB
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>© {new Date().getFullYear()} {namaKampus}. Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="footer-credit">Sistem Informasi Penerimaan Mahasiswa Baru (PMB Online) v2.6 — Siap Pakai</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    // Membungkus seluruh aplikasi dengan Context Provider
    <CampusProvider>
      <AppContent />
    </CampusProvider>
  )
}

export default App
