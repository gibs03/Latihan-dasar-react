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
  const { namaKampus, tema, toggleTema } = useCampus()

  return (
    <div className={`container ${tema === 'dark' ? 'dark-mode' : ''}`}>
      {/* Header Kampus */}
      <header className="campus-header">
        <div className="header-top">
          <div className="brand-wrapper">
            <img src={logoJayanusa} alt="Logo Universitas Jayanusa" className="brand-logo-img" />
            <div>
              <h1 className="brand-title">{namaKampus.toUpperCase()}</h1>
              <p className="brand-subtitle">Kampus Teknologi Informasi & Bisnis Digital — Padang, Sumatera Barat</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="header-badge">
              ⭐ Akreditasi Baik Sekali (BAN-PT)
            </div>
            {/* Tombol Toggle Tema (Aplikasi Nyata dari useContext) */}
            <button
              onClick={toggleTema}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '20px',
                padding: '6px 14px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.8rem',
              }}
              title="Ganti Tema Warna"
            >
              {tema === 'light' ? '🌙 Mode Gelap' : '☀️ Mode Terang'}
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
            ℹ️ About Us
          </button>
          <button
            className={`nav-tab-btn ${halamanAktif === 'pmb' ? 'active' : ''}`}
            onClick={() => setHalamanAktif('pmb')}
          >
            📝 Pendaftaran PMB
          </button>
          <button
            className={`nav-tab-btn ${halamanAktif === 'contact' ? 'active' : ''}`}
            onClick={() => setHalamanAktif('contact')}
          >
            📞 Contact
          </button>
        </nav>
      </header>

      {/* IMPLEMENTASI REACT SUSPENSE */}
      <Suspense
        fallback={
          <div className="suspense-loading">
            <div className="spinner"></div>
            <p>Memuat halaman, mohon tunggu sebentar...</p>
          </div>
        }
      >
        {halamanAktif === 'home' && (
          <Home onPindahKePMB={() => setHalamanAktif('pmb')} />
        )}
        {halamanAktif === 'about' && <About />}
        {halamanAktif === 'pmb' && <PMB />}
        {halamanAktif === 'contact' && <Contact />}
      </Suspense>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.82rem', color: '#64748b' }}>
        © {new Date().getFullYear()} {namaKampus}. Hak Cipta Dilindungi Undang-Undang.
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
