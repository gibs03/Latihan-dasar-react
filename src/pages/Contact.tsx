import { useState } from 'react'
import { useCampus } from '../context/CampusContext'

function Contact() {
  const { namaKampus, kontakWA, kontakTelp, kontakEmail, alamatKampus } = useCampus()
  const [pesanTerkirim, setPesanTerkirim] = useState(false)
  const [faqTerbuka, setFaqTerbuka] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pertanyaan: '',
  })

  const daftarFAQ = [
    {
      q: 'Apakah pendaftaran PMB Universitas Jayanusa bisa dilakukan secara online sepenuhnya?',
      a: 'Ya, seluruh tahapan pendaftaran mulai dari pengisian formulir biodata, pemilihan program studi, hingga verifikasi berkas dapat dilakukan 100% secara online melalui portal PMB ini tanpa harus datang langsung ke kampus.'
    },
    {
      q: 'Apakah alumni SMA/SMK/MA lulusan tahun-tahun sebelumnya masih bisa mendaftar?',
      a: 'Tentu bisa! Universitas Jayanusa menerima calon mahasiswa baik lulusan baru (fresh graduate tahun ini) maupun lulusan tahun-tahun sebelumnya tanpa batasan usia maksimal.'
    },
    {
      q: 'Apakah tersedia kelas karyawan / kelas malam bagi yang sudah bekerja?',
      a: 'Ya, kami menyediakan kelas Reguler Pagi dan kelas Karyawan/Malam dengan jadwal fleksibel yang dirancang khusus bagi Anda yang ingin kuliah sambil tetap bekerja atau berwirausaha.'
    },
    {
      q: 'Bagaimana cara mendaftar jalur beasiswa KIP Kuliah di Universitas Jayanusa?',
      a: 'Pilih jalur "KIP Kuliah" pada formulir pendaftaran PMB, kemudian sertakan kartu KIP / KKS / bukti pendaftaran akun KIP Kuliah Kemendikbudristek saat verifikasi bersama tim PMB.'
    },
    {
      q: 'Apakah biaya kuliah dapat diangsur per bulan?',
      a: 'Sangat bisa. Universitas Jayanusa menyediakan skema cicilan pembayaran uang kuliah (SPP) per bulan tanpa bunga, sehingga sangat terjangkau bagi seluruh lapisan masyarakat.'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nama.trim() || !formData.email.trim() || !formData.pertanyaan.trim()) {
      alert('Harap lengkapi semua kolom formulir pesan!')
      return
    }

    console.log('=== PESAN MASUK CONTACT US ===', formData)
    setPesanTerkirim(true)
    setFormData({ nama: '', email: '', pertanyaan: '' })
  }

  return (
    <div className="page-card">
      <div className="page-header-box">
        <span className="hero-pill">📞 LAYANAN INFORMASI & KONSULTASI</span>
        <h2 className="page-main-heading">
          Hubungi Sekretariat PMB {namaKampus}
        </h2>
        <p className="page-main-subheading">
          Punya pertanyaan seputar pemilihan jurusan, persyaratan beasiswa, atau rincian biaya kuliah? Tim konsultan akademik PMB kami siap membantu Anda setiap hari kerja.
        </p>
      </div>

      <div className="contact-grid-wrapper">
        {/* Info Kontak & Alamat dengan Foto Kantor */}
        <div className="contact-info-panel">
          <div className="contact-office-image-box">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
              alt={`Layanan Front Office PMB ${namaKampus}`}
              className="contact-office-img"
            />
            <div className="office-status-badge">
              <span className="live-dot"></span> Buka: Senin – Sabtu
            </div>
          </div>

          <h3 className="panel-title">
            📍 Lokasi Sekretariat & Kontak Resmi
          </h3>

          <div className="contact-list">
            <div className="contact-list-item">
              <span className="item-icon">🏛️</span>
              <div>
                <strong>Alamat Kampus:</strong>
                <p>{alamatKampus}</p>
                <span className="landmark-tag">📍 Patokan: Dekat Plaza Andalas / Pusat Kota Padang</span>
              </div>
            </div>

            <div className="contact-list-item">
              <span className="item-icon">💬</span>
              <div>
                <strong>Hotline WhatsApp PMB (Resmi):</strong>
                <p style={{ color: '#0284c7', fontWeight: 700 }}>{kontakWA}</p>
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20PMB%20Universitas%20Jayanusa,%20saya%20ingin%20konsultasi%20pendaftaran.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-chat"
                >
                  💬 Chat WhatsApp Langsung
                </a>
              </div>
            </div>

            <div className="contact-list-item">
              <span className="item-icon">📞</span>
              <div>
                <strong>Telepon Kantor Kampus:</strong>
                <p>{kontakTelp}</p>
              </div>
            </div>

            <div className="contact-list-item">
              <span className="item-icon">✉️</span>
              <div>
                <strong>Email Informasi PMB:</strong>
                <p>{kontakEmail}</p>
              </div>
            </div>

            <div className="contact-list-item">
              <span className="item-icon">🕒</span>
              <div>
                <strong>Jam Operasional Layanan:</strong>
                <p>Senin – Jumat : 08.00 – 17.00 WIB</p>
                <p>Sabtu : 08.00 – 14.00 WIB (Minggu Libur)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Pertanyaan Langsung */}
        <div className="contact-form-panel">
          <h3 className="panel-title">
            ✉️ Kirim Pertanyaan Cepat ke Panitia PMB
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '0 0 16px 0' }}>
            Isi formulir berikut jika Anda membutuhkan rincian brosur atau informasi spesifik prodi:
          </p>

          {pesanTerkirim && (
            <div className="alert-success" style={{ marginBottom: '16px' }}>
              <span>✅</span>
              <div>
                <strong>Pesan Anda Berhasil Terkirim!</strong> Tim PMB Jayanusa akan segera menghubungi Anda melalui WhatsApp/Email yang dicantumkan.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Nama Lengkap Anda</label>
              <input
                type="text"
                placeholder="Contoh: Muhammad Farhan"
                className="form-input-field"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email atau Nomor WhatsApp Aktif</label>
              <input
                type="text"
                placeholder="Contoh: farhan@gmail.com / 081234567890"
                className="form-input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Pertanyaan atau Konsultasi Anda</label>
              <textarea
                rows={4}
                placeholder="Tuliskan pertanyaan Anda seputar jurusan, beasiswa KIP, kurikulum, atau cicilan biaya kuliah..."
                className="form-input-field form-textarea"
                value={formData.pertanyaan}
                onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-submit-pmb"
              style={{ width: '100%', padding: '12px', marginTop: '4px' }}
            >
              Kirim Pertanyaan ke Panitia ➜
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Interaktif */}
      <div className="faq-section-wrap">
        <div className="section-header-centered">
          <span className="subhead-pill">PERTANYAAN UMUM</span>
          <h3 className="section-title">Frequently Asked Questions (FAQ) PMB</h3>
          <p className="section-desc">
            Pertanyaan yang paling sering diajukan oleh calon mahasiswa baru dan orang tua:
          </p>
        </div>

        <div className="faq-accordion-list">
          {daftarFAQ.map((faq, index) => {
            const isOpen = faqTerbuka === index
            return (
              <div key={index} className={`faq-card-item ${isOpen ? 'active-faq' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setFaqTerbuka(isOpen ? null : index)}
                >
                  <span className="faq-q-text">❓ {faq.q}</span>
                  <span className="faq-toggle-arrow">{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Contact