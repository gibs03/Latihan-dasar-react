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
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${tema === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Top Bar Informasi Kampus */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 relative z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-full text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Padang, Sumatera Barat
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline">📞 {kontakTelp}</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span>💬 WA PMB: <strong className="text-emerald-400">{kontakWA}</strong></span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="hidden lg:inline">✉️ {kontakEmail}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-extrabold px-3 py-0.5 rounded-full">
              T.A. {tahunAkademik}
            </span>
            <button
              onClick={toggleTema}
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer"
              title="Ganti Tema Warna"
            >
              {tema === 'light' ? '🌙 Mode Gelap' : '☀️ Mode Terang'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 py-4 flex-1">
        {/* Header Kampus & Navigasi */}
        <header className="bg-gradient-to-r from-[#091a33] via-[#0f2e59] to-[#16427d] text-white p-6 md:p-8 rounded-3xl shadow-xl mb-6 relative overflow-hidden border border-white/10">
          {/* Ambient Glow Orbs */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-6 relative z-10">
            <div
              className="flex items-center gap-4 cursor-pointer self-start md:self-auto"
              onClick={() => setHalamanAktif('home')}
            >
              <div className="p-1 rounded-2xl bg-gradient-to-br from-amber-400 to-blue-500 shadow-md">
                <img
                  src={logoJayanusa}
                  alt="Logo Universitas Jayanusa"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain bg-white rounded-xl p-1 shadow-inner"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
                    PORTAL PMB RESMI
                  </span>
                  <span className="bg-amber-500/25 text-amber-200 border border-amber-400/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ⭐ Akreditasi Baik Sekali (BAN-PT)
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl font-black tracking-tight text-white m-0">
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">UNIVERSITAS</span> JAYANUSA
                </h1>
                <p className="text-xs md:text-sm text-slate-300 m-0">
                  Kampus Unggulan Teknologi Informasi & Bisnis Digital di Sumatera Barat
                </p>
              </div>
            </div>

            <div className="self-end md:self-auto">
              <button
                className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs md:text-sm font-extrabold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer ${halamanAktif === 'pmb' ? 'ring-4 ring-amber-400/40' : ''}`}
                onClick={() => setHalamanAktif('pmb')}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                Daftar PMB Online ➜
              </button>
            </div>
          </div>

          {/* Menu Navigasi Tabs */}
          <nav className="flex flex-wrap gap-2 bg-slate-950/40 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 relative z-10">
            <button
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all text-center cursor-pointer ${
                halamanAktif === 'home'
                  ? 'bg-white text-[#0f2e59] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setHalamanAktif('home')}
            >
              🏠 Home
            </button>
            <button
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all text-center cursor-pointer ${
                halamanAktif === 'about'
                  ? 'bg-white text-[#0f2e59] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setHalamanAktif('about')}
            >
              ℹ️ Profil & Program Studi
            </button>
            <button
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 ${
                halamanAktif === 'pmb'
                  ? 'bg-white text-[#0f2e59] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setHalamanAktif('pmb')}
            >
              📝 Pendaftaran PMB
              <span className="bg-rose-600 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                Gel. 1
              </span>
            </button>
            <button
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all text-center cursor-pointer ${
                halamanAktif === 'contact'
                  ? 'bg-white text-[#0f2e59] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setHalamanAktif('contact')}
            >
              📞 Layanan Kontak & Lokasi
            </button>
          </nav>
        </header>

        {/* IMPLEMENTASI REACT SUSPENSE */}
        <main>
          <Suspense
            fallback={
              <div className="text-center py-20 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                <div className="w-10 h-10 border-4 border-blue-200 dark:border-slate-700 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Memuat halaman {namaKampus}, mohon tunggu sebentar...
                </p>
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
      <footer className="bg-slate-900 text-slate-300 pt-12 border-t border-slate-800 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-3">
              <img src={logoJayanusa} alt="Logo Jayanusa" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
              <div>
                <h4 className="text-base font-extrabold text-white m-0">{namaKampus}</h4>
                <p className="text-[11px] text-slate-400 m-0">Unggul, Inovatif, dan Berdaya Saing Global</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Pusat pendidikan tinggi teknologi informasi dan bisnis digital terakreditasi Baik Sekali oleh BAN-PT, berkomitmen mencetak lulusan kompeten yang langsung terserap di dunia industri modern.
            </p>
            <div className="bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl text-xs text-slate-300">
              🏛️ Akreditasi Institusi: <strong className="text-white">Baik Sekali (BAN-PT)</strong>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Program Studi</h5>
            <ul className="space-y-2 text-xs text-slate-400 p-0 m-0 list-none">
              <li><button onClick={() => setHalamanAktif('about')} className="hover:text-white transition-colors cursor-pointer text-left">S1 - Sistem Informasi (S.Kom.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')} className="hover:text-white transition-colors cursor-pointer text-left">S1 - Teknologi Informasi (S.Kom.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')} className="hover:text-white transition-colors cursor-pointer text-left">D4 - Bisnis Digital (S.Tr.Bns.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')} className="hover:text-white transition-colors cursor-pointer text-left">D3 - Manajemen Informatika (A.Md.Kom.)</button></li>
              <li><button onClick={() => setHalamanAktif('about')} className="hover:text-white transition-colors cursor-pointer text-left">D3 - Komputerisasi Akuntansi (A.Md.Kom.)</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Layanan PMB</h5>
            <ul className="space-y-2 text-xs text-slate-400 p-0 m-0 list-none">
              <li><button onClick={() => setHalamanAktif('pmb')} className="hover:text-white transition-colors cursor-pointer text-left">Formulir Registrasi</button></li>
              <li><button onClick={() => setHalamanAktif('pmb')} className="hover:text-white transition-colors cursor-pointer text-left">Jalur Beasiswa KIP</button></li>
              <li><button onClick={() => setHalamanAktif('pmb')} className="hover:text-white transition-colors cursor-pointer text-left">Jalur Reguler</button></li>
              <li><button onClick={() => setHalamanAktif('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Konsultasi WhatsApp</button></li>
              <li><button onClick={() => setHalamanAktif('contact')} className="hover:text-white transition-colors cursor-pointer text-left">FAQ Pendaftaran</button></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Sekretariat PMB</h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">📍 {alamatKampus}</p>
            <p className="text-xs text-slate-400 mb-1">📞 {kontakTelp}</p>
            <p className="text-xs text-slate-400 mb-1">💬 {kontakWA}</p>
            <p className="text-xs text-slate-400 mb-3">✉️ {kontakEmail}</p>
            <div className="bg-slate-800/60 p-2.5 rounded-lg text-[11px] text-slate-300">
              🕒 Senin - Jumat: 08:00 - 17:00 WIB<br />
              🕒 Sabtu: 08:00 - 14:00 WIB
            </div>
          </div>
        </div>

        <div className="bg-slate-950 py-4 border-t border-slate-800/60 text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="m-0">© {new Date().getFullYear()} {namaKampus}. Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="m-0 text-slate-400 font-semibold">Sistem PMB Online v2.6 — Tailwind CSS</p>
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