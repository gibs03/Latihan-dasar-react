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
      a: 'Ya, seluruh tahapan pendaftaran mulai dari pengisian formulir biodata, pemilihan program studi, hingga verifikasi berkas dapat dilakukan 100% secara online melalui portal PMB ini tanpa harus datang langsung ke kampus.',
    },
    {
      q: 'Apakah alumni SMA/SMK/MA lulusan tahun-tahun sebelumnya masih bisa mendaftar?',
      a: 'Tentu bisa! Universitas Jayanusa menerima calon mahasiswa baik lulusan baru (fresh graduate tahun ini) maupun lulusan tahun-tahun sebelumnya tanpa batasan usia maksimal.',
    },
    {
      q: 'Apakah tersedia kelas karyawan / kelas malam bagi yang sudah bekerja?',
      a: 'Ya, kami menyediakan kelas Reguler Pagi dan kelas Karyawan/Malam dengan jadwal fleksibel yang dirancang khusus bagi Anda yang ingin kuliah sambil tetap bekerja atau berwirausaha.',
    },
    {
      q: 'Bagaimana cara mendaftar jalur beasiswa KIP Kuliah di Universitas Jayanusa?',
      a: 'Pilih jalur "KIP Kuliah" pada formulir pendaftaran PMB, kemudian sertakan kartu KIP / KKS / bukti pendaftaran akun KIP Kuliah Kemendikbudristek saat verifikasi bersama tim PMB.',
    },
    {
      q: 'Apakah biaya kuliah dapat diangsur per bulan?',
      a: 'Sangat bisa. Universitas Jayanusa menyediakan skema cicilan pembayaran uang kuliah (SPP) per bulan tanpa bunga, sehingga sangat terjangkau bagi seluruh lapisan masyarakat.',
    },
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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm transition-colors duration-300">
      {/* Header Halaman */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold px-3.5 py-1 rounded-full mb-2 border border-blue-200 dark:border-blue-800">
          📞 LAYANAN INFORMASI & KONSULTASI
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
          Hubungi Sekretariat PMB {namaKampus}
        </h2>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0">
          Punya pertanyaan seputar pemilihan jurusan, persyaratan beasiswa, atau rincian biaya kuliah? Tim konsultan akademik PMB kami siap membantu Anda setiap hari kerja.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Info Kontak & Alamat dengan Foto Kantor */}
        <div className="lg:col-span-6 bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="relative rounded-xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                alt={`Layanan Front Office PMB ${namaKampus}`}
                className="w-full h-44 object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#0f2e59]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Buka: Senin – Sabtu
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
              📍 Lokasi Sekretariat & Kontak Resmi
            </h3>

            <div className="space-y-4 text-xs md:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏛️</span>
                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Alamat Kampus:</strong>
                  <p className="m-0 leading-relaxed text-slate-500 dark:text-slate-400">{alamatKampus}</p>
                  <span className="inline-block bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-[11px] font-bold px-2.5 py-0.5 rounded border border-sky-200 dark:border-sky-800 mt-1">
                    📍 Patokan: Dekat Plaza Andalas / Pusat Kota Padang
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Hotline WhatsApp PMB (Resmi):</strong>
                  <p className="m-0 text-sky-600 dark:text-sky-400 font-extrabold">{kontakWA}</p>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Admin%20PMB%20Universitas%20Jayanusa,%20saya%20ingin%20konsultasi%20pendaftaran."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md transition-colors mt-2"
                  >
                    💬 Chat WhatsApp Langsung
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Telepon Kantor Kampus:</strong>
                  <p className="m-0 text-slate-500 dark:text-slate-400">{kontakTelp}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Email Informasi PMB:</strong>
                  <p className="m-0 text-slate-500 dark:text-slate-400">{kontakEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">🕒</span>
                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Jam Operasional Layanan:</strong>
                  <p className="m-0 text-slate-500 dark:text-slate-400">Senin – Jumat : 08.00 – 17.00 WIB</p>
                  <p className="m-0 text-slate-500 dark:text-slate-400">Sabtu : 08.00 – 14.00 WIB (Minggu Libur)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Pertanyaan Langsung */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
            ✉️ Kirim Pertanyaan Cepat ke Panitia PMB
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
            Isi formulir berikut jika Anda membutuhkan rincian brosur atau informasi spesifik prodi:
          </p>

          {pesanTerkirim && (
            <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs md:text-sm p-4 rounded-xl mb-5 flex items-center gap-2.5">
              <span className="text-lg">✅</span>
              <div>
                <strong>Pesan Anda Berhasil Terkirim!</strong> Tim PMB Jayanusa akan segera menghubungi Anda melalui WhatsApp/Email yang dicantumkan.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Nama Lengkap Anda
              </label>
              <input
                type="text"
                placeholder="Contoh: Muhammad Farhan"
                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email atau Nomor WhatsApp Aktif
              </label>
              <input
                type="text"
                placeholder="Contoh: farhan@gmail.com / 081234567890"
                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Pertanyaan atau Konsultasi Anda
              </label>
              <textarea
                rows={4}
                placeholder="Tuliskan pertanyaan Anda seputar jurusan, beasiswa KIP, kurikulum, atau cicilan biaya kuliah..."
                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y"
                value={formData.pertanyaan}
                onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#0f2e59] to-[#1e4b8a] hover:from-[#091a33] hover:to-[#163b6e] text-white text-xs md:text-sm font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Kirim Pertanyaan ke Panitia ➜
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-block bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
            PERTANYAAN UMUM
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">
            Frequently Asked Questions (FAQ) PMB
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Pertanyaan yang paling sering diajukan oleh calon mahasiswa baru dan orang tua:
          </p>
        </div>

        <div className="space-y-3">
          {daftarFAQ.map((faq, index) => {
            const isOpen = faqTerbuka === index
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-800 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                <button
                  type="button"
                  className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 cursor-pointer"
                  onClick={() => setFaqTerbuka(isOpen ? null : index)}
                >
                  <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">
                    ❓ {faq.q}
                  </span>
                  <span className={`text-xs text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 border-t border-slate-100 dark:border-slate-700/60 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="m-0">{faq.a}</p>
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