import {
  useState,      // 1. REACT HOOK: useState
  useEffect,     // 2. REACT HOOK: useEffect
  useRef,        // 3. REACT HOOK: useRef
  useReducer,    // 4. REACT HOOK: useReducer
  useCallback,   // 5. REACT HOOK: useCallback
  useMemo,       // 6. REACT HOOK: useMemo
} from 'react'
import { useCampus } from '../context/CampusContext' // 7. REACT HOOK: useContext
import TablePMB, { type Pendaftar } from '../TablePMB'

// Initial data awal pendaftar
const dataAwal: Pendaftar[] = [
  {
    nama: 'Muhammad Farhan',
    noHp: '081234567890',
    asalSekolah: 'SMAN 1 Padang',
    jurusan: 'S1 - Sistem Informasi',
    jalur: 'Reguler (Gelombang 1)',
  },
  {
    nama: 'Annisa Putri',
    noHp: '082198765432',
    asalSekolah: 'SMKN 2 Padang',
    jurusan: 'D4 - Bisnis Digital',
    jalur: 'Beasiswa Prestasi',
  },
  {
    nama: 'Rizky Pratama',
    noHp: '085277889900',
    asalSekolah: 'MAN 2 Padang',
    jurusan: 'S1 - Teknologi Informasi',
    jalur: 'KIP Kuliah',
  },
  {
    nama: 'Siti Rahmawati',
    noHp: '081366554433',
    asalSekolah: 'SMAN 3 Padang',
    jurusan: 'D3 - Komputerisasi Akuntansi',
    jalur: 'Reguler (Gelombang 1)',
  },
]

// 4. REACT HOOK: useReducer - Definisi Tipe Aksi & Fungsi Reducer
type ActionPendaftar =
  | { type: 'TAMBAH_PENDAFTAR'; payload: Pendaftar }
  | { type: 'HAPUS_PENDAFTAR'; payload: number }
  | { type: 'SET_PENDAFTAR'; payload: Pendaftar[] }
  | { type: 'RESET_PENDAFTAR' }

function pendaftarReducer(state: Pendaftar[], action: ActionPendaftar): Pendaftar[] {
  switch (action.type) {
    case 'TAMBAH_PENDAFTAR':
      return [...state, action.payload]
    case 'HAPUS_PENDAFTAR':
      return state.filter((_, index) => index !== action.payload)
    case 'SET_PENDAFTAR':
      return action.payload
    case 'RESET_PENDAFTAR':
      return dataAwal
    default:
      return state
  }
}

// Komponen Header PMB
interface HeaderPMBProps {
  onDownloadBrosur: () => void
}

function HeaderPMB({ onDownloadBrosur }: HeaderPMBProps) {
  // 7. REACT HOOK: useContext - Mengambil data global dari CampusContext
  const { namaKampus, tahunAkademik, gelombangPMB } = useCampus()

  return (
    <div className="pmb-hero-banner">
      <div className="pmb-hero-text">
        <div className="pmb-badge-row">
          <span className="pmb-wave-badge">✨ {gelombangPMB}</span>
          <span className="pmb-year-badge">T.A. {tahunAkademik}</span>
        </div>
        <h2 className="pmb-hero-heading">
          Penerimaan Mahasiswa Baru (PMB Online)
        </h2>
        <p className="pmb-hero-sub">
          <strong>{namaKampus}</strong> — Daftarkan diri Anda sekarang untuk mengamankan kuota program studi impian, fasilitas laboratorium canggih, dan akses beasiswa kuliah!
        </p>

        <div className="pmb-hero-actions">
          <button onClick={onDownloadBrosur} className="btn-brosur-download">
            📥 Unduh Panduan & Brosur PMB (PDF)
          </button>
          <span className="pmb-free-notice">✓ Pendaftaran Online Praktis & Cepat</span>
        </div>
      </div>

      <div className="pmb-hero-media">
        <div className="pmb-img-frame">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
            alt="Mahasiswa Baru Universitas Jayanusa"
            className="pmb-banner-img"
          />
          <div className="pmb-img-overlay-card">
            <strong>Akreditasi BAN-PT</strong>
            <p>Baik Sekali — Ijazah Resmi Dikti</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Komponen Form PMB
interface FormPMBProps {
  onSubmitPMB: (dataBaru: Pendaftar) => void
}

function FormPMB({ onSubmitPMB }: FormPMBProps) {
  // 1. REACT HOOK: useState - State lokal untuk setiap field input
  const [nama, setNama] = useState('')
  const [noHp, setNoHp] = useState('')
  const [asalSekolah, setAsalSekolah] = useState('')
  const [jurusan, setJurusan] = useState('S1 - Sistem Informasi')
  const [jalur, setJalur] = useState('Reguler (Gelombang 1)')

  // 3. REACT HOOK: useRef - Referensi elemen input nama agar bisa auto-focus
  const inputNamaRef = useRef<HTMLInputElement>(null)

  // 3. REACT HOOK: useRef - Menyimpan hitungan render tanpa memicu re-render
  const renderCountRef = useRef(0)
  renderCountRef.current += 1

  const daftarJurusan = [
    'S1 - Sistem Informasi',
    'S1 - Teknologi Informasi',
    'D4 - Bisnis Digital',
    'D3 - Manajemen Informatika',
    'D3 - Komputerisasi Akuntansi',
  ]

  // 2. REACT HOOK: useEffect - Fokuskan kursor ke input nama saat form dimuat
  useEffect(() => {
    inputNamaRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nama.trim() || !noHp.trim() || !asalSekolah.trim()) {
      alert('Harap lengkapi seluruh data formulir pendaftaran!')
      inputNamaRef.current?.focus()
      return
    }

    const dataBaru: Pendaftar = {
      nama: nama.trim(),
      noHp: noHp.trim(),
      asalSekolah: asalSekolah.trim(),
      jurusan,
      jalur,
    }

    // Cetak ke console.log
    console.log('=== DATA SUBMIT PMB JAYANUSA ===')
    console.log('Nama Lengkap    :', dataBaru.nama)
    console.log('Nomor WhatsApp  :', dataBaru.noHp)
    console.log('Asal Sekolah    :', dataBaru.asalSekolah)
    console.log('Program Studi   :', dataBaru.jurusan)
    console.log('Jalur Masuk     :', dataBaru.jalur)
    console.log('Objek Data Baru :', dataBaru)

    onSubmitPMB(dataBaru)

    // Reset formulir
    setNama('')
    setNoHp('')
    setAsalSekolah('')
    setJurusan(daftarJurusan[0])
    setJalur('Reguler (Gelombang 1)')

    // 3. REACT HOOK: useRef - Kembalikan fokus ke kolom nama setelah simpan
    inputNamaRef.current?.focus()
  }

  return (
    <div className="pmb-form-card">
      <div className="form-card-header">
        <div className="form-header-title-box">
          <span className="form-icon">📝</span>
          <div>
            <h3 className="form-title">
              Formulir Registrasi Calon Mahasiswa Baru (PMB Online)
            </h3>
            <p className="form-subtitle">
              Silakan lengkapi biodata pendaftaran di bawah ini secara teliti dan akurat.
            </p>
          </div>
        </div>
        <span className="render-counter-pill" title="Hitungan render dengan useRef">
          Render ke-{renderCountRef.current}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="pmb-registration-form">
        <table className="form-pmb-table">
          <tbody>
            {/* Field Nama */}
            <tr>
              <td className="form-col-label">
                <label className="form-label">
                  Nama Lengkap Calon Mahasiswa <span className="req-star">*</span>
                </label>
                <span className="form-hint">Sesuai nama pada ijazah / rapor</span>
              </td>
              <td className="form-colon">:</td>
              <td className="form-col-input">
                {/* 3. REACT HOOK: useRef dipasang pada input ini */}
                <input
                  ref={inputNamaRef}
                  type="text"
                  className="form-input-field"
                  placeholder="Contoh: Muhammad Farhan"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                />
              </td>
            </tr>

            {/* Field No WhatsApp */}
            <tr>
              <td className="form-col-label">
                <label className="form-label">
                  Nomor WhatsApp / HP Aktif <span className="req-star">*</span>
                </label>
                <span className="form-hint">Untuk konfirmasi kelulusan & seleksi</span>
              </td>
              <td className="form-colon">:</td>
              <td className="form-col-input">
                <input
                  type="text"
                  className="form-input-field"
                  placeholder="Contoh: 081234567890"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  required
                />
              </td>
            </tr>

            {/* Field Asal Sekolah */}
            <tr>
              <td className="form-col-label">
                <label className="form-label">
                  Asal Sekolah / Jurusan Asal <span className="req-star">*</span>
                </label>
                <span className="form-hint">SMA / SMK / MA / Sederajat</span>
              </td>
              <td className="form-colon">:</td>
              <td className="form-col-input">
                <input
                  type="text"
                  className="form-input-field"
                  placeholder="Contoh: SMAN 1 Padang (Jurusan IPA/IPS)"
                  value={asalSekolah}
                  onChange={(e) => setAsalSekolah(e.target.value)}
                  required
                />
              </td>
            </tr>

            {/* Field Program Studi */}
            <tr>
              <td className="form-col-label">
                <label className="form-label">
                  Pilihan Program Studi <span className="req-star">*</span>
                </label>
                <span className="form-hint">Tersedia jenjang Sarjana (S1), D4 & D3</span>
              </td>
              <td className="form-colon">:</td>
              <td className="form-col-input">
                <select
                  className="form-input-field form-select"
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                >
                  {daftarJurusan.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            {/* Field Jalur Pendaftaran */}
            <tr>
              <td className="form-col-label">
                <label className="form-label">
                  Jalur Pendaftaran PMB <span className="req-star">*</span>
                </label>
                <span className="form-hint">Pilih opsi beasiswa jika memenuhi syarat</span>
              </td>
              <td className="form-colon">:</td>
              <td className="form-col-input">
                <select
                  className="form-input-field form-select"
                  value={jalur}
                  onChange={(e) => setJalur(e.target.value)}
                >
                  <option value="Reguler (Gelombang 1)">Reguler (Gelombang 1) — Potongan Biaya Awal</option>
                  <option value="Beasiswa Prestasi">Beasiswa Prestasi (Rapor / Seni / Olahraga / Juara)</option>
                  <option value="KIP Kuliah">Jalur KIP Kuliah (Bantuan Pemerintah Bebas Kuliah)</option>
                </select>
              </td>
            </tr>

            {/* Submit Action */}
            <tr>
              <td className="form-col-label"></td>
              <td className="form-colon"></td>
              <td className="form-col-input" style={{ paddingTop: '16px' }}>
                <button type="submit" className="btn-submit-pmb">
                  <span>🚀</span> Simpan & Kirim Pendaftaran Sekarang ➜
                </button>
                <p className="form-submit-note">
                  🔒 Data pendaftaran Anda aman dan akan langsung terhubung ke sistem seleksi Universitas Jayanusa.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

function PMB() {
  // 4. REACT HOOK: useReducer - Mengelola daftar pendaftar
  const [dataPendaftar, dispatch] = useReducer(pendaftarReducer, dataAwal)

  // 1. REACT HOOK: useState - Kata kunci pencarian tabel & notifikasi & brosur alert
  const [keywordCari, setKeywordCari] = useState('')
  const [pesanSukses, setPesanSukses] = useState<string | null>(null)
  const [brosurNotif, setBrosurNotif] = useState(false)
  const [detikTersisa, setDetikTersisa] = useState(3600 * 24 * 7) // 7 hari dalam detik

  // 2. REACT HOOK: useEffect - Update document.title khusus di halaman PMB
  useEffect(() => {
    const titleLama = document.title
    document.title = 'Pendaftaran PMB 2026/2027 - Universitas Jayanusa Padang'

    return () => {
      document.title = titleLama // Cleanup saat pindah halaman
    }
  }, [])

  // 2. REACT HOOK: useEffect - Membaca data dari localStorage saat mount
  useEffect(() => {
    try {
      const dataTersimpan = localStorage.getItem('pmb_jayanusa_data')
      if (dataTersimpan) {
        dispatch({ type: 'SET_PENDAFTAR', payload: JSON.parse(dataTersimpan) })
      }
    } catch {
      console.log('Gagal memuat localStorage')
    }
  }, [])

  // 2. REACT HOOK: useEffect - Menyimpan data ke localStorage setiap kali dataPendaftar berubah
  useEffect(() => {
    try {
      localStorage.setItem('pmb_jayanusa_data', JSON.stringify(dataPendaftar))
    } catch {
      console.log('Gagal menyimpan ke localStorage')
    }
  }, [dataPendaftar])

  // 2. REACT HOOK: useEffect - Timer hitung mundur batas penutupan pendaftaran
  useEffect(() => {
    const timer = setInterval(() => {
      setDetikTersisa((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer) // Cleanup timer saat unmount
  }, [])

  // Format detik hitung mundur ke komponen Hari, Jam, Menit, Detik
  const countdownParts = useMemo(() => {
    const d = Math.floor(detikTersisa / (3600 * 24))
    const h = Math.floor((detikTersisa % (3600 * 24)) / 3600)
    const m = Math.floor((detikTersisa % 3600) / 60)
    const s = detikTersisa % 60
    return { d, h, m, s }
  }, [detikTersisa])

  // 5. REACT HOOK: useCallback - Memoize fungsi penambahan pendaftar
  const handleTambahPendaftar = useCallback((dataBaru: Pendaftar) => {
    dispatch({ type: 'TAMBAH_PENDAFTAR', payload: dataBaru })
    setPesanSukses(`Selamat! Data calon mahasiswa "${dataBaru.nama}" berhasil disimpan ke sistem PMB Universitas Jayanusa.`)
  }, [])

  // 5. REACT HOOK: useCallback - Memoize fungsi penghapusan pendaftar
  const handleHapusPendaftar = useCallback((indexHapus: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus data pendaftar ini dari sistem PMB?')) {
      dispatch({ type: 'HAPUS_PENDAFTAR', payload: indexHapus })
      setPesanSukses('Data pendaftar telah berhasil dihapus.')
    }
  }, [])

  // 6. REACT HOOK: useMemo - Filter pencarian pendaftar secara efisien
  const pendaftarTerfilter = useMemo(() => {
    if (!keywordCari.trim()) return dataPendaftar

    const lower = keywordCari.toLowerCase()
    return dataPendaftar.filter((item) =>
      item.nama.toLowerCase().includes(lower) ||
      item.jurusan.toLowerCase().includes(lower) ||
      item.asalSekolah.toLowerCase().includes(lower) ||
      item.jalur.toLowerCase().includes(lower)
    )
  }, [dataPendaftar, keywordCari])

  // 6. REACT HOOK: useMemo - Perhitungan statistik pendaftar (Beasiswa vs Reguler)
  const statistik = useMemo(() => {
    const total = dataPendaftar.length
    const beasiswa = dataPendaftar.filter((p) => p.jalur.includes('Beasiswa') || p.jalur.includes('KIP')).length
    const reguler = total - beasiswa
    const sisaKuota = Math.max(0, 50 - total)
    return { total, beasiswa, reguler, sisaKuota }
  }, [dataPendaftar])

  const handleDownloadBrosur = () => {
    setBrosurNotif(true)
    setTimeout(() => setBrosurNotif(false), 5000)
  }

  return (
    <div className="page-card">
      <HeaderPMB onDownloadBrosur={handleDownloadBrosur} />

      {/* Notifikasi Brosur Diunduh */}
      {brosurNotif && (
        <div className="alert-info-banner">
          <span>📄</span>
          <div style={{ flex: 1 }}>
            <strong>Brosur PMB Universitas Jayanusa Siap!</strong> Rincian kurikulum, biaya kuliah, dan panduan beasiswa 2026/2027 telah disiapkan untuk Anda.
          </div>
          <button onClick={() => setBrosurNotif(false)} className="btn-close-alert">✕</button>
        </div>
      )}

      {/* Countdown Timer Batas Pendaftaran (Efek dari useEffect) */}
      <div className="countdown-timer-box">
        <div className="countdown-left">
          <span className="clock-icon">⏳</span>
          <div>
            <strong>Batas Akhir Pendaftaran PMB Gelombang 1</strong>
            <p>Segera submit pendaftaran Anda sebelum sistem ditutup!</p>
          </div>
        </div>
        <div className="countdown-clock-grid">
          <div className="clock-unit">
            <span className="clock-num">{countdownParts.d}</span>
            <span className="clock-lbl">Hari</span>
          </div>
          <div className="clock-sep">:</div>
          <div className="clock-unit">
            <span className="clock-num">{String(countdownParts.h).padStart(2, '0')}</span>
            <span className="clock-lbl">Jam</span>
          </div>
          <div className="clock-sep">:</div>
          <div className="clock-unit">
            <span className="clock-num">{String(countdownParts.m).padStart(2, '0')}</span>
            <span className="clock-lbl">Menit</span>
          </div>
          <div className="clock-sep">:</div>
          <div className="clock-unit">
            <span className="clock-num">{String(countdownParts.s).padStart(2, '0')}</span>
            <span className="clock-lbl">Detik</span>
          </div>
        </div>
      </div>

      {/* Syarat Pendaftaran PMB Quick Checklist */}
      <div className="pmb-requirements-strip">
        <div className="req-header">
          <span className="req-title-badge">📌 SYARAT BERKAS PMB:</span>
        </div>
        <div className="req-items-list">
          <span className="req-item-pill">1. Fotokopi Ijazah / SKL Legalitas</span>
          <span className="req-item-pill">2. Fotokopi KTP / Kartu Keluarga</span>
          <span className="req-item-pill">3. Pasfoto 3x4 (Latar Merah / Biru)</span>
          <span className="req-item-pill">4. Rapor Smt 1-5 (Khusus Beasiswa/KIP)</span>
        </div>
      </div>

      {/* Alert Notifikasi Sukses Simpan */}
      {pesanSukses && (
        <div className="alert-success">
          <span>✅</span>
          <div style={{ flex: 1 }}>{pesanSukses}</div>
          <button
            onClick={() => setPesanSukses(null)}
            className="btn-close-alert"
          >
            ✕
          </button>
        </div>
      )}

      {/* Formulir Pendaftaran */}
      <FormPMB onSubmitPMB={handleTambahPendaftar} />

      {/* Statistik Ringkas Hasil dari useMemo */}
      <div className="pmb-stats-dashboard">
        <div className="pmb-stat-card card-total">
          <div className="pmb-stat-top">
            <span className="pmb-stat-icon">👥</span>
            <span className="pmb-stat-tag">Terkonfirmasi</span>
          </div>
          <div className="pmb-stat-number">{statistik.total}</div>
          <div className="pmb-stat-title">Total Pendaftar Masuk</div>
        </div>

        <div className="pmb-stat-card card-scholarship">
          <div className="pmb-stat-top">
            <span className="pmb-stat-icon">⭐</span>
            <span className="pmb-stat-tag">Prestasi & KIP</span>
          </div>
          <div className="pmb-stat-number">{statistik.beasiswa}</div>
          <div className="pmb-stat-title">Jalur Beasiswa / KIP</div>
        </div>

        <div className="pmb-stat-card card-regular">
          <div className="pmb-stat-top">
            <span className="pmb-stat-icon">🎓</span>
            <span className="pmb-stat-tag">Gelombang 1</span>
          </div>
          <div className="pmb-stat-number">{statistik.reguler}</div>
          <div className="pmb-stat-title">Jalur Reguler</div>
        </div>

        <div className="pmb-stat-card card-quota">
          <div className="pmb-stat-top">
            <span className="pmb-stat-icon">🔥</span>
            <span className="pmb-stat-tag">Sisa Kuota</span>
          </div>
          <div className="pmb-stat-number">{statistik.sisaKuota}</div>
          <div className="pmb-stat-title">Kursi Tersedia</div>
        </div>
      </div>

      {/* Filter Pencarian (useState & useMemo) & Tombol Reset (useReducer) */}
      <div className="table-controls-bar">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Cari berdasarkan nama mahasiswa, sekolah, atau program studi..."
            value={keywordCari}
            onChange={(e) => setKeywordCari(e.target.value)}
            className="search-input-field"
          />
          {keywordCari && (
            <button onClick={() => setKeywordCari('')} className="btn-clear-search">✕</button>
          )}
        </div>

        <div className="table-actions-right">
          <span className="filter-count-badge">
            Menampilkan <strong>{pendaftarTerfilter.length}</strong> dari <strong>{dataPendaftar.length}</strong> pendaftar
          </span>

          <button
            onClick={() => {
              if (confirm('Apakah Anda yakin ingin mengembalikan data pendaftar ke data awal bawaan?')) {
                dispatch({ type: 'RESET_PENDAFTAR' })
                localStorage.removeItem('pmb_jayanusa_data')
                setPesanSukses('Data pendaftar berhasil direset ke data awal bawaan.')
              }
            }}
            className="btn-reset-data"
            title="Kembalikan data ke contoh awal"
          >
            🔄 Reset Data Bawaan
          </button>
        </div>
      </div>

      {/* Tabel Data Pendaftar (Props onHapus menggunakan useCallback) */}
      <TablePMB data={pendaftarTerfilter} onHapus={handleHapusPendaftar} />
    </div>
  )
}

export default PMB