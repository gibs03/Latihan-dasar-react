interface HomeProps {
  onPindahKePMB?: () => void
}

function Home({ onPindahKePMB }: HomeProps) {
  return (
    <div className="page-card">
      {/* Hero Section dengan Gambar Mahasiswa */}
      <div className="hero-grid-wrapper">
        <div>
          <span className="hero-pill">🔥 PMB 2026/2027 Gelombang 1 Dibuka</span>
          <h1 className="hero-heading">
            Wujudkan Karier Masa Depan di Bidang Teknologi & Bisnis Digital
          </h1>
          <p className="hero-lead">
            Bergabunglah bersama ribuan mahasiswa sukses lainnya di <strong>Universitas Jayanusa Padang</strong>. 
            Belajar dengan kurikulum industri, lab modern, dan sertifikasi keahlian.
          </p>

          {onPindahKePMB && (
            <button className="btn-cta-pmb" onClick={onPindahKePMB}>
              Daftar Sekarang di PMB ➜
            </button>
          )}
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
            alt="Mahasiswa Universitas Jayanusa Belajar Bersama"
            className="hero-campus-img"
          />
        </div>
      </div>

      {/* Statistik Prestasi Kampus */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">94%</div>
          <div className="stat-text">Lulusan Langsung Kerja</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5</div>
          <div className="stat-text">Program Studi Favorit</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">Baik Sekali</div>
          <div className="stat-text">Akreditasi BAN-PT</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-text">Peluang Beasiswa</div>
        </div>
      </div>

      {/* Galeri Suasana Kampus & Fasilitas */}
      <h3 className="section-title">Galeri Fasilitas & Kegiatan Kampus</h3>
      <p className="section-desc">
        Lingkungan belajar modern yang didesain nyaman dan kondusif untuk eksplorasi teknologi.
      </p>

      <div className="gallery-grid">
        <div className="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
            alt="Laboratorium Pemrograman Komputer"
            className="gallery-img"
          />
          <div className="gallery-caption">
            <strong>Lab Pemrograman & Jaringan</strong>
            <span>Praktik coding & testing dengan PC berkecepatan tinggi</span>
          </div>
        </div>

        <div className="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
            alt="Perpustakaan & Ruang Belajar Digital"
            className="gallery-img"
          />
          <div className="gallery-caption">
            <strong>Perpustakaan & Coworking</strong>
            <span>Akses ribuan e-book, jurnal ilmiah, dan area diskusi</span>
          </div>
        </div>

        <div className="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80"
            alt="Wisuda dan Masa Depan Karier Mahasiswa"
            className="gallery-img"
          />
          <div className="gallery-caption">
            <strong>Karier & Wisuda Berprestasi</strong>
            <span>Lulusan kompeten yang siap bersaing di dunia industri</span>
          </div>
        </div>
      </div>

      {/* Keunggulan Kampus */}
      <h3 className="section-title">Kenapa Harus Memilih Universitas Jayanusa?</h3>
      <p className="section-desc">
        Kami memastikan setiap mahasiswa memiliki keahlian praktis yang dicari oleh industri modern.
      </p>

      <div className="features-grid">
        <div className="feature-box">
          <div className="feature-icon-box">💻</div>
          <h4>Kurikulum Siap Kerja</h4>
          <p>70% praktik dan 30% teori, dirancang langsung sesuai kebutuhan teknologi industri masa kini.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon-box">🖥️</div>
          <h4>Laboratorium Komputer Lengkap</h4>
          <p>Dilengkapi PC spesifikasi tinggi dan software berlisensi untuk pemrograman, multimedia, dan jaringan.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon-box">💰</div>
          <h4>Biaya Kuliah Terjangkau</h4>
          <p>Biaya kuliah sangat bersahabat, dapat dicicil per bulan, serta tersedia banyak program beasiswa.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon-box">📜</div>
          <h4>Sertifikasi Kompetensi</h4>
          <p>Lulusan dibekali sertifikat kompetensi keahlian BNSP / internasional sebagai nilai tambah di dunia kerja.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon-box">🤝</div>
          <h4>Penyaluran Kerja & Magang</h4>
          <p>Bekerja sama dengan puluhan perusahaan BUMN, perbankan, dan startup teknologi terkemuka.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon-box">📍</div>
          <h4>Lokasi Strategis di Pusat Kota</h4>
          <p>Terletak di pusat Kota Padang (Jl. Damar), sangat mudah dijangkau dari berbagai penjuru kota.</p>
        </div>
      </div>

      {/* Testimoni Singkat */}
      <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '10px' }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#0f2e59' }}>Apa Kata Mahasiswa & Alumni?</h4>
        <blockquote style={{ margin: 0, fontStyle: 'italic', color: '#475569', lineHeight: '1.6' }}>
          "Kuliah di Universitas Jayanusa Padang beneran praktikal banget. Pas magang, ilmu programming dan sistem informasi yang diajarin dosen langsung kepakai di kantor. Sekarang saya sudah bekerja sebagai IT Support sebelum wisuda!"
        </blockquote>
        <div style={{ marginTop: '10px', fontSize: '13px', fontWeight: 'bold', color: '#0f2e59' }}>
          — Fajar Nugraha (Alumni S1 Sistem Informasi, Bekerja di Sektor Perbankan)
        </div>
      </div>
    </div>
  )
}

export default Home
