interface HomeProps {
  onPindahKePMB?: () => void
}

function Home({ onPindahKePMB }: HomeProps) {
  const alurPendaftaran = [
    {
      step: '01',
      title: 'Isi Formulir Online',
      desc: 'Lengkapi identitas diri, asal sekolah, dan pilih program studi impian Anda di menu PMB.',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Verifikasi & Kontak WA',
      desc: 'Panitia PMB akan menghubungi Anda via WhatsApp untuk validasi data dan pengarahan berkas.',
      icon: '📲'
    },
    {
      step: '03',
      title: 'Tes / Seleksi Beasiswa',
      desc: 'Ikuti tes potensi akademik online atau penilaian berkas rapor untuk jalur beasiswa prestasi.',
      icon: '🎯'
    },
    {
      step: '04',
      title: 'Registrasi Ulang & NIM',
      desc: 'Konfirmasi kelulusan, penerbitan Nomor Induk Mahasiswa (NIM), dan siap mengikuti perkuliahan!',
      icon: '🎓'
    }
  ]

  const testimoniAlumni = [
    {
      nama: 'Fajar Nugraha, S.Kom.',
      lulusan: 'Alumni S1 Sistem Informasi (Angkatan 2020)',
      posisi: 'Fullstack Software Engineer di PT Telkom Indonesia',
      foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      pesan: 'Kurikulum praktikal di Jayanusa benar-benar relevan dengan kebutuhan dunia kerja. Dosen selalu membimbing praktik langsung, sehingga saat lulus saya langsung dipercaya memegang proyek IT berskala nasional.'
    },
    {
      nama: 'Nadhira Rahmadani, S.Tr.Bns.',
      lulusan: 'Alumni D4 Bisnis Digital (Angkatan 2021)',
      posisi: 'Senior Digital Strategist di E-Commerce Global & Founder Startup',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      pesan: 'Di Jayanusa, saya tidak hanya belajar teori bisnis tetapi diajarkan cara mengeksekusi digital ads, analitik data, dan branding secara langsung. Lingkungan belajarnya sangat suportif untuk berinovasi.'
    },
    {
      nama: 'Bayu Pratama, A.Md.Kom.',
      lulusan: 'Alumni D3 Manajemen Informatika (Angkatan 2022)',
      posisi: 'IT Infrastructure & Database Administrator di Bank Nagari',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      pesan: 'Kuliah 3 tahun langsung kerja! Sertifikasi keahlian BNSP yang saya dapatkan selama kuliah di Universitas Jayanusa menjadi nilai jual utama saat seleksi rekrutmen perbankan.'
    }
  ]

  return (
    <div className="page-card">
      {/* Hero Section dengan Gambar Mahasiswa */}
      <div className="hero-grid-wrapper">
        <div className="hero-content-col">
          <div className="hero-pill-badge">
            <span className="hero-pulse"></span>
            🔥 PENERIMAAN MAHASISWA BARU T.A. 2026/2027
          </div>
          <h1 className="hero-heading">
            Wujudkan Karier Impian di Bidang Teknologi & Bisnis Digital
          </h1>
          <p className="hero-lead">
            Selamat datang di <strong>Universitas Jayanusa Padang</strong>. Kampus pelopor teknologi informasi di Sumatera Barat dengan kurikulum berbasis industri modern, laboratorium canggih, dan jaminan sertifikasi kompetensi kerja.
          </p>

          <div className="hero-cta-group">
            {onPindahKePMB && (
              <button className="btn-cta-pmb" onClick={onPindahKePMB}>
                Daftar PMB Sekarang ➜
              </button>
            )}
            <div className="hero-secondary-badge">
              <span>💳 Bebas Biaya Pendaftaran Online</span>
            </div>
          </div>

          <div className="hero-trust-row">
            <span className="trust-item">✓ Terakreditasi BAN-PT</span>
            <span className="trust-item">✓ Dosen Praktisi Industri</span>
            <span className="trust-item">✓ Program KIP Kuliah Resmi</span>
          </div>
        </div>

        <div className="hero-image-col">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Mahasiswa Universitas Jayanusa Belajar Bersama"
              className="hero-campus-img"
            />
            <div className="hero-floating-tag">
              <span className="tag-emoji">🎓</span>
              <div>
                <strong>Gelombang 1 Dibuka</strong>
                <p>Beasiswa Potongan UKT s/d 50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistik Prestasi Kampus */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrap">💼</div>
          <div className="stat-number">94%</div>
          <div className="stat-text">Lulusan Bekerja &lt; 6 Bulan</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrap">🎓</div>
          <div className="stat-number">5</div>
          <div className="stat-text">Program Studi Favorit (S1/D4/D3)</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrap">🏛️</div>
          <div className="stat-number">Baik Sekali</div>
          <div className="stat-text">Akreditasi Resmi BAN-PT</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrap">🤝</div>
          <div className="stat-number">50+</div>
          <div className="stat-text">Mitra Kerja BUMN & Perbankan</div>
        </div>
      </div>

      {/* Alur Pendaftaran PMB 4 Langkah */}
      <div className="flow-section-wrapper">
        <div className="section-header-centered">
          <span className="subhead-pill">PROSES MUDAH & CEPAT</span>
          <h3 className="section-title">Alur Pendaftaran PMB 2026/2027</h3>
          <p className="section-desc">
            Empat langkah sederhana untuk resmi menjadi mahasiswa Universitas Jayanusa Padang:
          </p>
        </div>

        <div className="flow-steps-grid">
          {alurPendaftaran.map((item, idx) => (
            <div key={idx} className="flow-step-card">
              <div className="step-number-tag">{item.step}</div>
              <div className="step-icon">{item.icon}</div>
              <h4 className="step-title">{item.title}</h4>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {onPindahKePMB && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="btn-cta-pmb" onClick={onPindahKePMB}>
              Mulai Pendaftaran Online Sekarang ➜
            </button>
          </div>
        )}
      </div>

      {/* Galeri Suasana Kampus & Fasilitas */}
      <div style={{ marginTop: '36px', marginBottom: '30px' }}>
        <div className="section-header-centered">
          <span className="subhead-pill">FASILITAS MODERN</span>
          <h3 className="section-title">Galeri Fasilitas Pembelajaran Kampus</h3>
          <p className="section-desc">
            Didukung sarana prasarana mutakhir untuk menjamin proses belajar mengajar optimal di pusat Kota Padang.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-img-box">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
                alt="Laboratorium Pemrograman Komputer"
                className="gallery-img"
              />
              <span className="gallery-tag">Laboratorium</span>
            </div>
            <div className="gallery-caption">
              <strong>Lab Pemrograman & Cloud Computing</strong>
              <span>Dilengkapi PC berspesifikasi tinggi, akses internet gigabit, dan software rekayasa perangkat lunak berlisensi.</span>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-img-box">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                alt="Perpustakaan & Ruang Belajar Digital"
                className="gallery-img"
              />
              <span className="gallery-tag">Perpustakaan</span>
            </div>
            <div className="gallery-caption">
              <strong>Digital Library & Coworking Hub</strong>
              <span>Akses ke puluhan ribu e-book, jurnal ilmiah internasional IEEE/Scopus, serta area kolaborasi proyek mahasiswa yang nyaman.</span>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-img-box">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80"
                alt="Wisuda dan Karier Mahasiswa"
                className="gallery-img"
              />
              <span className="gallery-tag">Karier</span>
            </div>
            <div className="gallery-caption">
              <strong>Wisuda & Pusat Pengembangan Karier</strong>
              <span>Penyelenggaraan job fair berkala, pelatihan sertifikasi BNSP, dan pendampingan karier profesional mahasiswa.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keunggulan Kampus */}
      <div style={{ marginTop: '36px', marginBottom: '30px' }}>
        <div className="section-header-centered">
          <span className="subhead-pill">KEUNGGULAN UTAMA</span>
          <h3 className="section-title">Kenapa Kuliah di Universitas Jayanusa?</h3>
          <p className="section-desc">
            Enam alasan utama mengapa ribuan calon mahasiswa memilih Universitas Jayanusa setiap tahunnya:
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-box">💻</div>
            <h4>Kurikulum Siap Kerja 70:30</h4>
            <p>70% porsi praktik lab dan 30% teori, dirancang bersama praktisi industri teknologi dan bisnis digital masa kini.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-box">🖥️</div>
            <h4>Laboratorium Komputer Lengkap</h4>
            <p>Lab iMac, Cisco networking lab, dan ruang komputasi awan yang siap melatih keahlian teknis mahasiswa.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-box">💰</div>
            <h4>Biaya Terjangkau & Bisa Dicicil</h4>
            <p>Sistem pembayaran SPP fleksibel yang dapat diangsur per bulan tanpa bunga, meringankan beban orang tua.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-box">📜</div>
            <h4>Sertifikasi Kompetensi BNSP</h4>
            <p>Setiap lulusan dibekali sertifikat kompetensi profesi berstandar nasional dan internasional sebagai modal melamar kerja.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-box">🤝</div>
            <h4>Jaminan Penyaluran Kerja & Magang</h4>
            <p>Kemitraan resmi dengan perbankan, BUMN, instansi pemerintahan, dan perusahaan startup di Padang dan Jakarta.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-box">📍</div>
            <h4>Lokasi Strategis di Pusat Kota</h4>
            <p>Berlokasi tepat di Jl. Damar No. 69, sangat dekat dengan pusat transportasi, perbelanjaan, dan fasilitas umum Kota Padang.</p>
          </div>
        </div>
      </div>

      {/* Testimoni Alumni */}
      <div className="testimonials-section">
        <div className="section-header-centered">
          <span className="subhead-pill">BUKTI NYATA</span>
          <h3 className="section-title">Kisah Sukses Alumni Universitas Jayanusa</h3>
          <p className="section-desc">
            Dengarkan langsung cerita mereka yang kini telah sukses berkarier di berbagai sektor industri:
          </p>
        </div>

        <div className="testimonials-grid">
          {testimoniAlumni.map((item, idx) => (
            <div key={idx} className="testi-card">
              <div className="testi-header">
                <img src={item.foto} alt={item.nama} className="testi-avatar" />
                <div>
                  <h5 className="testi-author-name">{item.nama}</h5>
                  <p className="testi-author-prodi">{item.lulusan}</p>
                  <span className="testi-position-badge">{item.posisi}</span>
                </div>
              </div>
              <blockquote className="testi-quote">
                "{item.pesan}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Call to Action Siap Pakai */}
      <div className="cta-banner-ready">
        <div className="cta-banner-content">
          <span className="cta-badge-pill">KUOTA TERBATAS</span>
          <h3 className="cta-banner-title">Siap Menjadi Ahli IT & Bisnis Digital Berikutnya?</h3>
          <p className="cta-banner-desc">
            Pendaftaran Gelombang 1 tahun akademik 2026/2027 sedang dibuka. Dapatkan potongan biaya kuliah dan kesempatan beasiswa penuh!
          </p>
        </div>
        {onPindahKePMB && (
          <button className="btn-cta-white" onClick={onPindahKePMB}>
            Daftar Sekarang Juga ➜
          </button>
        )}
      </div>
    </div>
  )
}

export default Home