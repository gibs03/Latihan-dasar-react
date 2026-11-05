import { useState } from 'react'
import { useCampus } from '../context/CampusContext'

function Contact() {
  const { namaKampus, kontakWA } = useCampus()
  const [pesanTerkirim, setPesanTerkirim] = useState(false)
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pertanyaan: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nama || !formData.email || !formData.pertanyaan) {
      alert('Harap lengkapi semua kolom pesan!')
      return
    }

    console.log('=== PESAN MASUK CONTACT US ===', formData)
    setPesanTerkirim(true)
    setFormData({ nama: '', email: '', pertanyaan: '' })
  }

  return (
    <div className="page-card">
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h2 style={{ color: '#0f2e59', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 8px 0' }}>
          Hubungi Kami & Layanan Informasi PMB
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto' }}>
          Punya pertanyaan seputar program studi, beasiswa, atau pendaftaran? Tim PMB {namaKampus} siap membantu Anda!
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '36px' }}>
        {/* Info Kontak & Alamat dengan Foto Kantor */}
        <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
            alt={`Layanan Front Office PMB ${namaKampus}`}
            style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '14px' }}
          />

          <h3 style={{ margin: '0 0 14px 0', color: '#0f2e59', fontSize: '1.15rem' }}>
            📍 Lokasi & Kontak Kampus
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#334155' }}>
            <div>
              <strong>Alamat Kampus:</strong>
              <p style={{ margin: '2px 0 0 0', color: '#64748b' }}>
                Jl. Damar No. 69, Kel. Olo, Kec. Padang Barat, Kota Padang, Sumatera Barat 25117
              </p>
            </div>
            <div>
              <strong>Hotline WhatsApp PMB:</strong>
              <p style={{ margin: '2px 0 0 0', color: '#0369a1', fontWeight: 600 }}>
                {kontakWA} (Chat Aktif)
              </p>
            </div>
            <div>
              <strong>Telepon Kantor:</strong>
              <p style={{ margin: '2px 0 0 0', color: '#64748b' }}>
                (0751) 33691 / (0751) 33692
              </p>
            </div>
            <div>
              <strong>Email Resmi:</strong>
              <p style={{ margin: '2px 0 0 0', color: '#64748b' }}>
                pmb@jayanusa.ac.id
              </p>
            </div>
            <div>
              <strong>Jam Layanan PMB:</strong>
              <p style={{ margin: '2px 0 0 0', color: '#64748b' }}>
                Senin – Jumat: 08.00 – 17.00 WIB | Sabtu: 08.00 – 14.00 WIB
              </p>
            </div>
          </div>
        </div>

        {/* Form Pertanyaan Langsung */}
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
          <h3 style={{ margin: '0 0 14px 0', color: '#0f2e59', fontSize: '1.2rem' }}>
            💬 Kirim Pertanyaan Cepat
          </h3>

          {pesanTerkirim && (
            <div className="alert-success" style={{ marginBottom: '14px' }}>
              <span>✅</span>
              <div>Pesan berhasil dikirim! Panitia akan segera merespons via email/WhatsApp.</div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Nama Anda"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                Alamat Email / No. WhatsApp
              </label>
              <input
                type="text"
                placeholder="Email atau nomor WhatsApp aktif"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                Pertanyaan Seputar PMB
              </label>
              <textarea
                rows={3}
                placeholder="Tulis pertanyaan Anda seputar jurusan, beasiswa, atau biaya kuliah..."
                value={formData.pertanyaan}
                onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-submit-pmb"
              style={{ width: '100%', marginTop: '6px' }}
            >
              Kirim Pertanyaan ➜
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Singkat */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
        <h3 style={{ color: '#0f2e59', fontSize: '1.2rem', marginBottom: '16px' }}>
          ❓ Pertanyaan yang Sering Diajukan (FAQ)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: '#0f2e59', display: 'block', marginBottom: '4px' }}>
              Q: Apakah perkuliahan di {namaKampus} bisa sambil bekerja?
            </strong>
            <span style={{ color: '#475569', fontSize: '0.9rem' }}>
              A: Ya, tersedia pilihan kelas reguler pagi dan kelas malam/karyawan yang sangat fleksibel bagi Anda yang sudah bekerja.
            </span>
          </div>

          <div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: '#0f2e59', display: 'block', marginBottom: '4px' }}>
              Q: Bagaimana sistem pembayaran biaya kuliah?
            </strong>
            <span style={{ color: '#475569', fontSize: '0.9rem' }}>
              A: Biaya kuliah sangat terjangkau dan dapat diangsur setiap bulan untuk meringankan beban calon mahasiswa.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
