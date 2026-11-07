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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/60 dark:from-slate-800/80 dark:via-slate-900 dark:to-blue-950/40 border border-blue-100 dark:border-blue-900/40 p-6 md:p-8 rounded-2xl shadow-sm mb-6">
      <div className="lg:col-span-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-700 text-xs font-black px-3.5 py-1 rounded-full">
            ✨ {gelombangPMB}
          </span>
          <span className="bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700 text-xs font-bold px-3 py-1 rounded-full">
            T.A. {tahunAkademik}
          </span>
        </div>

        <h2 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
          Penerimaan Mahasiswa Baru{' '}
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            (PMB Online)
          </span>
        </h2>

        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 m-0">
          <strong className="text-slate-900 dark:text-white">{namaKampus}</strong> — Daftarkan diri Anda sekarang untuk mengamankan kuota program studi impian, fasilitas laboratorium canggih, dan akses beasiswa kuliah!
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onDownloadBrosur}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs md:text-sm font-bold rounded-xl border border-slate-300 dark:border-slate-600 shadow-sm transition-all cursor-pointer"
          >
            <span>📥</span> Unduh Panduan & Brosur PMB (PDF)
          </button>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            ✓ Pendaftaran Online Praktis & Cepat
          </span>
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white dark:border-slate-800">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
            alt="Mahasiswa Baru Universitas Jayanusa"
            className="w-full h-44 object-cover"
          />
          <div className="absolute bottom-2.5 right-2.5 bg-[#0f2e59]/90 backdrop-blur-md text-white p-2.5 rounded-lg text-right border border-white/20">
            <strong className="block text-[11px] font-bold text-amber-400">Akreditasi BAN-PT</strong>
            <p className="text-[10px] text-slate-200 m-0">Baik Sekali — Ijazah Resmi Dikti</p>
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
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
      {/* Form Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center text-lg shrink-0">
            📝
          </div>
          <div>
            <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white m-0">
              Formulir Registrasi Calon Mahasiswa Baru
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
              Silakan lengkapi biodata pendaftaran di bawah ini secara teliti dan akurat.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto border border-slate-200 dark:border-slate-600" title="Hitungan render dengan useRef">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Render ke-{renderCountRef.current}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Field Nama */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
          <div className="md:col-span-4">
            <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
              👤 Nama Lengkap Mahasiswa <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400">Sesuai nama pada ijazah / rapor</span>
          </div>
          <div className="md:col-span-8">
            {/* 3. REACT HOOK: useRef dipasang pada input ini */}
            <input
              ref={inputNamaRef}
              type="text"
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Contoh: Muhammad Farhan"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Field No WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
          <div className="md:col-span-4">
            <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
              📱 Nomor WhatsApp / HP Aktif <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400">Untuk konfirmasi kelulusan & jadwal seleksi</span>
          </div>
          <div className="md:col-span-8">
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Contoh: 081234567890"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Field Asal Sekolah */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
          <div className="md:col-span-4">
            <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
              🏫 Asal Sekolah / Jurusan Asal <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400">SMA / SMK / MA / Sederajat</span>
          </div>
          <div className="md:col-span-8">
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Contoh: SMAN 1 Padang (Jurusan IPA/IPS)"
              value={asalSekolah}
              onChange={(e) => setAsalSekolah(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Field Program Studi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
          <div className="md:col-span-4">
            <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
              🎓 Pilihan Program Studi <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400">Tersedia jenjang Sarjana (S1), D4 & D3</span>
          </div>
          <div className="md:col-span-8">
            <select
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
            >
              {daftarJurusan.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Field Jalur Pendaftaran */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
          <div className="md:col-span-4">
            <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
              🎯 Jalur Pendaftaran PMB <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400">Pilih opsi beasiswa jika memenuhi syarat</span>
          </div>
          <div className="md:col-span-8">
            <select
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
              value={jalur}
              onChange={(e) => setJalur(e.target.value)}
            >
              <option value="Reguler (Gelombang 1)">Reguler (Gelombang 1) — Potongan Biaya Awal</option>
              <option value="Beasiswa Prestasi">Beasiswa Prestasi (Rapor / Seni / Olahraga / Juara)</option>
              <option value="KIP Kuliah">Jalur KIP Kuliah (Bantuan Pemerintah Bebas Kuliah)</option>
            </select>
          </div>
        </div>

        {/* Submit Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center pt-3">
          <div className="md:col-span-4"></div>
          <div className="md:col-span-8">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0f2e59] to-[#1e4b8a] hover:from-[#091a33] hover:to-[#163b6e] text-white text-xs md:text-sm font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <span>🚀</span> Simpan & Kirim Pendaftaran Sekarang ➜
            </button>
            <p className="text-[11px] text-slate-400 mt-2 m-0">
              🔒 Data pendaftaran Anda aman dan akan langsung terhubung ke sistem seleksi Universitas Jayanusa.
            </p>
          </div>
        </div>
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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm transition-colors duration-300">
      <HeaderPMB onDownloadBrosur={handleDownloadBrosur} />

      {/* Notifikasi Brosur Diunduh */}
      {brosurNotif && (
        <div className="bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-200 text-xs md:text-sm p-4 rounded-xl mb-5 flex items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">📄</span>
            <div>
              <strong>Brosur PMB Universitas Jayanusa Siap!</strong> Rincian kurikulum, biaya kuliah, dan panduan beasiswa 2026/2027 telah disiapkan untuk Anda.
            </div>
          </div>
          <button onClick={() => setBrosurNotif(false)} className="text-slate-400 hover:text-slate-600 font-bold px-2 py-1 cursor-pointer">✕</button>
        </div>
      )}

      {/* Countdown Timer Batas Pendaftaran (Efek dari useEffect) */}
      <div className="bg-gradient-to-r from-[#091a33] via-[#0f2e59] to-[#1e4b8a] text-white p-5 md:p-6 rounded-2xl shadow-lg mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-amber-500/30">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shrink-0">
            ⏳
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <strong className="text-sm md:text-base font-extrabold text-white">Batas Akhir Pendaftaran PMB Gelombang 1</strong>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Sistem Aktif
              </span>
            </div>
            <p className="text-xs text-slate-300 m-0 mt-0.5">Segera submit pendaftaran Anda sebelum sistem ditutup!</p>
          </div>
        </div>

        {/* Digit Jam */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="bg-slate-950/60 border border-amber-500/40 rounded-xl px-3 py-2 text-center min-w-12 shadow-inner">
            <span className="block text-lg md:text-xl font-black text-amber-400 font-mono leading-tight">{countdownParts.d}</span>
            <span className="text-[10px] uppercase font-bold text-slate-300">Hari</span>
          </div>
          <span className="text-amber-400 font-bold text-lg">:</span>
          <div className="bg-slate-950/60 border border-amber-500/40 rounded-xl px-3 py-2 text-center min-w-12 shadow-inner">
            <span className="block text-lg md:text-xl font-black text-amber-400 font-mono leading-tight">{String(countdownParts.h).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold text-slate-300">Jam</span>
          </div>
          <span className="text-amber-400 font-bold text-lg">:</span>
          <div className="bg-slate-950/60 border border-amber-500/40 rounded-xl px-3 py-2 text-center min-w-12 shadow-inner">
            <span className="block text-lg md:text-xl font-black text-amber-400 font-mono leading-tight">{String(countdownParts.m).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold text-slate-300">Menit</span>
          </div>
          <span className="text-amber-400 font-bold text-lg">:</span>
          <div className="bg-slate-950/60 border border-amber-500/40 rounded-xl px-3 py-2 text-center min-w-12 shadow-inner">
            <span className="block text-lg md:text-xl font-black text-amber-400 font-mono leading-tight">{String(countdownParts.s).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold text-slate-300">Detik</span>
          </div>
        </div>
      </div>

      {/* Syarat Pendaftaran PMB Quick Checklist */}
      <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 p-4 rounded-xl mb-6 flex flex-wrap items-center gap-2 md:gap-3 text-xs">
        <span className="font-extrabold text-slate-800 dark:text-slate-200">📌 SYARAT BERKAS:</span>
        <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 font-medium">📄 Fotokopi Ijazah / SKL Legalitas</span>
        <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 font-medium">🪪 Fotokopi KTP / Kartu Keluarga</span>
        <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 font-medium">🖼️ Pasfoto 3x4 (Latar Merah / Biru)</span>
        <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 font-medium">📊 Rapor Smt 1-5 (Khusus Beasiswa/KIP)</span>
      </div>

      {/* Alert Notifikasi Sukses Simpan */}
      {pesanSukses && (
        <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs md:text-sm p-4 rounded-xl mb-6 flex items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">✅</span>
            <div>{pesanSukses}</div>
          </div>
          <button
            onClick={() => setPesanSukses(null)}
            className="text-emerald-600 hover:text-emerald-800 font-bold px-2 py-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Formulir Pendaftaran */}
      <FormPMB onSubmitPMB={handleTambahPendaftar} />

      {/* Statistik Ringkas Hasil dari useMemo */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl">👥</span>
            <span className="text-[10px] font-bold bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 px-2 py-0.5 rounded-full">Terkonfirmasi</span>
          </div>
          <div className="text-2xl md:text-3xl font-black text-sky-700 dark:text-sky-300 mb-0.5">{statistik.total}</div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Pendaftar Masuk</div>
        </div>

        <div className="bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl">⭐</span>
            <span className="text-[10px] font-bold bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-full">Prestasi & KIP</span>
          </div>
          <div className="text-2xl md:text-3xl font-black text-amber-700 dark:text-amber-300 mb-0.5">{statistik.beasiswa}</div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Jalur Beasiswa / KIP</div>
        </div>

        <div className="bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl">🎓</span>
            <span className="text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full">Gelombang 1</span>
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-200 mb-0.5">{statistik.reguler}</div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Jalur Reguler</div>
        </div>

        <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl">🔥</span>
            <span className="text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded-full">Sisa Kuota</span>
          </div>
          <div className="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-300 mb-0.5">{statistik.sisaKuota}</div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Kursi Tersedia</div>
        </div>
      </div>

      {/* Filter Pencarian (useState & useMemo) & Tombol Reset (useReducer) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
        <div className="relative flex-1 max-w-sm">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          <input
            type="text"
            placeholder="Cari berdasarkan nama, sekolah, atau prodi..."
            value={keywordCari}
            onChange={(e) => setKeywordCari(e.target.value)}
            className="w-full pl-9 pr-8 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          {keywordCari && (
            <button
              onClick={() => setKeywordCari('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Menampilkan <strong className="text-slate-800 dark:text-slate-200">{pendaftarTerfilter.length}</strong> dari {dataPendaftar.length} pendaftar
          </span>

          <button
            onClick={() => {
              if (confirm('Apakah Anda yakin ingin mengembalikan data pendaftar ke data awal bawaan?')) {
                dispatch({ type: 'RESET_PENDAFTAR' })
                localStorage.removeItem('pmb_jayanusa_data')
                setPesanSukses('Data pendaftar berhasil direset ke data awal bawaan.')
              }
            }}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            title="Kembalikan data ke contoh awal"
          >
            🔄 Reset Data Bawaan
          </button>
        </div>
      </div>

      {/* Tabel Data Pendaftar */}
      <TablePMB data={pendaftarTerfilter} onHapus={handleHapusPendaftar} />
    </div>
  )
}

export default PMB