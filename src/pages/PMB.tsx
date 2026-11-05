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
function HeaderPMB() {
  // 7. REACT HOOK: useContext - Mengambil data global dari CampusContext
  const { namaKampus, tahunAkademik, gelombangPMB } = useCampus()

  return (
    <div className="pmb-banner-wrapper">
      <div>
        <span style={{ backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
          ✨ {gelombangPMB}
        </span>
        <h2 style={{ margin: '8px 0 4px 0', color: '#0f2e59', fontSize: '1.5rem', fontWeight: 800 }}>
          Penerimaan Mahasiswa Baru (PMB)
        </h2>
        <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
          {namaKampus} — Tahun Akademik {tahunAkademik}
        </p>
        <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: '0.82rem' }}>
          Daftar sekarang untuk mengamankan kuota program studi pilihanmu dan raih kesempatan beasiswa kuliah!
        </p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
          alt="Mahasiswa Baru Universitas Jayanusa"
          className="pmb-banner-img"
        />
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
      <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, color: '#0f2e59', fontSize: '1.25rem' }}>
          📝 Formulir Registrasi Calon Mahasiswa Baru
        </h3>
        <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '0.88rem' }}>
          Lengkapi biodata Anda dengan benar (Form render ke: {renderCountRef.current}).
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <table className="form-pmb-table">
          <tbody>
            <tr>
              <td style={{ width: '250px' }}>
                <label className="form-label">Nama Lengkap Calon Mahasiswa</label>
              </td>
              <td className="form-colon">:</td>
              <td>
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

            <tr>
              <td>
                <label className="form-label">Nomor WhatsApp / HP Aktif</label>
              </td>
              <td className="form-colon">:</td>
              <td>
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

            <tr>
              <td>
                <label className="form-label">Asal Sekolah (SMA / SMK / MA)</label>
              </td>
              <td className="form-colon">:</td>
              <td>
                <input
                  type="text"
                  className="form-input-field"
                  placeholder="Contoh: SMAN 1 Padang"
                  value={asalSekolah}
                  onChange={(e) => setAsalSekolah(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label className="form-label">Pilihan Program Studi (Jurusan)</label>
              </td>
              <td className="form-colon">:</td>
              <td>
                <select
                  className="form-input-field"
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

            <tr>
              <td>
                <label className="form-label">Jalur Pendaftaran</label>
              </td>
              <td className="form-colon">:</td>
              <td>
                <select
                  className="form-input-field"
                  value={jalur}
                  onChange={(e) => setJalur(e.target.value)}
                >
                  <option value="Reguler (Gelombang 1)">Reguler (Gelombang 1) — Potongan Biaya</option>
                  <option value="Beasiswa Prestasi">Beasiswa Prestasi (Rapor / Seni / Olahraga)</option>
                  <option value="KIP Kuliah">Jalur KIP Kuliah (Bantuan Pemerintah)</option>
                </select>
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="form-colon"></td>
              <td style={{ paddingTop: '14px' }}>
                <button type="submit" className="btn-submit-pmb">
                  Simpan Pendaftaran Sekarang ➜
                </button>
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

  // 1. REACT HOOK: useState - Kata kunci pencarian tabel & notifikasi
  const [keywordCari, setKeywordCari] = useState('')
  const [pesanSukses, setPesanSukses] = useState<string | null>(null)
  const [detikTersisa, setDetikTersisa] = useState(3600 * 24 * 7) // 7 hari dalam detik

  // 2. REACT HOOK: useEffect - Update document.title khusus di halaman PMB
  useEffect(() => {
    const titleLama = document.title
    document.title = 'Form Pendaftaran PMB - Universitas Jayanusa'

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

  // Format detik hitung mundur ke Hari, Jam, Menit, Detik
  const formatCountdown = (detik: number) => {
    const d = Math.floor(detik / (3600 * 24))
    const h = Math.floor((detik % (3600 * 24)) / 3600)
    const m = Math.floor((detik % 3600) / 60)
    const s = detik % 60
    return `${d} Hari ${h} Jam ${m} Menit ${s} Detik`
  }

  // 5. REACT HOOK: useCallback - Memoize fungsi penambahan pendaftar
  const handleTambahPendaftar = useCallback((dataBaru: Pendaftar) => {
    dispatch({ type: 'TAMBAH_PENDAFTAR', payload: dataBaru })
    setPesanSukses(`Data calon mahasiswa "${dataBaru.nama}" berhasil disimpan ke sistem!`)
  }, [])

  // 5. REACT HOOK: useCallback - Memoize fungsi penghapusan pendaftar
  const handleHapusPendaftar = useCallback((indexHapus: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus data pendaftar ini?')) {
      dispatch({ type: 'HAPUS_PENDAFTAR', payload: indexHapus })
      setPesanSukses('Data pendaftar berhasil dihapus.')
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
    return { total, beasiswa, reguler }
  }, [dataPendaftar])

  return (
    <div className="page-card">
      <HeaderPMB />

      {/* Countdown Timer Batas Pendaftaran (Efek dari useEffect) */}
      <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '12px 18px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ color: '#92400e', fontWeight: 600, fontSize: '0.88rem' }}>
          ⏳ Batas Akhir Pendaftaran Gelombang 1:
        </span>
        <span style={{ color: '#b45309', fontWeight: 800, fontSize: '0.95rem' }}>
          {formatCountdown(detikTersisa)}
        </span>
      </div>

      {/* Alert Notifikasi Sukses */}
      {pesanSukses && (
        <div className="alert-success">
          <span>✅</span>
          <div style={{ flex: 1 }}>{pesanSukses}</div>
          <button
            onClick={() => setPesanSukses(null)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#065f46' }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Formulir Pendaftaran */}
      <FormPMB onSubmitPMB={handleTambahPendaftar} />

      {/* Statistik Ringkas Hasil dari useMemo */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '24px 0 16px' }}>
        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0369a1' }}>{statistik.total}</div>
          <div style={{ fontSize: '0.8rem', color: '#0284c7' }}>Total Pendaftar</div>
        </div>
        <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#b45309' }}>{statistik.beasiswa}</div>
          <div style={{ fontSize: '0.8rem', color: '#92400e' }}>Jalur Beasiswa / KIP</div>
        </div>
        <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#334155' }}>{statistik.reguler}</div>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Jalur Reguler</div>
        </div>
      </div>

      {/* Filter Pencarian (useState & useMemo) & Tombol Reset (useReducer) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="🔍 Cari nama, sekolah, atau jurusan..."
          value={keywordCari}
          onChange={(e) => setKeywordCari(e.target.value)}
          style={{
            padding: '8px 14px',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            width: '100%',
            maxWidth: '320px',
            fontSize: '0.9rem',
          }}
        />

        <button
          onClick={() => {
            if (confirm('Kembalikan data ke daftar awal bawaan?')) {
              dispatch({ type: 'RESET_PENDAFTAR' })
              localStorage.removeItem('pmb_jayanusa_data')
              setPesanSukses('Data pendaftar berhasil direset ke data awal.')
            }
          }}
          style={{
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '8px 14px',
            fontSize: '0.82rem',
            cursor: 'pointer',
            fontWeight: 600,
            color: '#475569',
          }}
        >
          🔄 Reset Data Bawaan
        </button>
      </div>

      {/* Tabel Data Pendaftar (Props onHapus menggunakan useCallback) */}
      <TablePMB data={pendaftarTerfilter} onHapus={handleHapusPendaftar} />
    </div>
  )
}

export default PMB
