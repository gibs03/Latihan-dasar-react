interface AboutProps {
  onPilihProdi?: () => void
}

function About({ onPilihProdi }: AboutProps) {
  const programStudi = [
    {
      jenjang: 'S1',
      nama: 'Sistem Informasi',
      gelar: 'S.Kom.',
      akreditasi: 'Baik Sekali',
      fokus: 'Enterprise Systems, UI/UX, Big Data, Business Intelligence',
      prospek: ['Software Engineer', 'System Analyst', 'IT Project Manager', 'Database Administrator'],
      deskripsi: 'Membekali mahasiswa dengan kemampuan merancang arsitektur sistem informasi enterprise, analisis proses bisnis digital, serta rekayasa piranti lunak skala industri.',
      color: '#0284c7',
      bgTag: '#e0f2fe'
    },
    {
      jenjang: 'S1',
      nama: 'Teknologi Informasi',
      gelar: 'S.Kom.',
      akreditasi: 'Baik Sekali',
      fokus: 'Cloud Computing, Cybersecurity, Internet of Things (IoT), Network Eng.',
      prospek: ['Cloud Solutions Architect', 'Network Engineer', 'Cybersecurity Analyst', 'DevOps Specialist'],
      deskripsi: 'Fokus pada infrastruktur komputasi modern, arsitektur cloud AWS/GCP, keamanan siber pertahanan data, dan konfigurasi jaringan enterprise tingkat lanjut.',
      color: '#4f46e5',
      bgTag: '#e0e7ff'
    },
    {
      jenjang: 'D4',
      nama: 'Bisnis Digital',
      gelar: 'S.Tr.Bns.',
      akreditasi: 'Baik Sekali',
      fokus: 'Growth Hacking, E-Commerce, Data Analytics, Fintech, Marketplace Strategy',
      prospek: ['Digital Marketing Manager', 'E-Commerce Strategist', 'Tech Product Specialist', 'Digital Business Founder'],
      deskripsi: 'Program Sarjana Terapan yang memadukan ilmu teknologi informasi modern dengan strategi pemasaran omni-channel, model monetisasi digital, dan analitik bisnis.',
      color: '#059669',
      bgTag: '#d1fae5'
    },
    {
      jenjang: 'D3',
      nama: 'Manajemen Informatika',
      gelar: 'A.Md.Kom.',
      akreditasi: 'Baik Sekali',
      fokus: 'Web Fullstack Programming, Mobile Apps (Flutter/React Native), Database',
      prospek: ['Frontend/Backend Web Developer', 'Mobile Application Developer', 'IT Support Specialist'],
      deskripsi: 'Program vokasi 3 tahun cepat kerja dengan 75% porsi praktik lab intensif. Lulusan terbukti cepat diserap oleh industri IT dan perbankan nasional.',
      color: '#d97706',
      bgTag: '#fef3c7'
    },
    {
      jenjang: 'D3',
      nama: 'Komputerisasi Akuntansi',
      gelar: 'A.Md.Kom.',
      akreditasi: 'Baik Sekali',
      fokus: 'ERP Accounting Systems, E-Faktur & Tax Online, Forensic Audit Tech',
      prospek: ['Accounting Software Specialist', 'Tax & Financial Staff', 'Junior Auditor', 'ERP Consultant'],
      deskripsi: 'Menggabungkan ketelitian ilmu akuntansi finansial modern dengan kepiawaian pengoperasian software ERP, payroll, sistem perpajakan, dan audit digital.',
      color: '#0891b2',
      bgTag: '#cffafe'
    }
  ]

  return (
    <div className="page-card">
      <div className="page-header-box">
        <span className="hero-pill">🏛️ TENTANG UNIVERSITAS JAYANUSA</span>
        <h2 className="page-main-heading">
          Pusat Unggulan Teknologi Informasi & Bisnis Digital
        </h2>
        <p className="page-main-subheading">
          Berdiri sejak 1991 di Kota Padang, Universitas Jayanusa berkomitmen menyelenggarakan pendidikan tinggi berkualitas yang menjembatani talenta muda dengan industri teknologi global.
        </p>
      </div>

      {/* Banner Foto Kampus */}
      <div className="about-media-wrapper">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
          alt="Gedung dan Lingkungan Kampus Universitas Jayanusa"
          className="about-banner-img"
        />
        <div className="about-media-overlay">
          <div>
            <h4 style={{ margin: 0, color: '#ffffff', fontSize: '1.2rem', fontWeight: 800 }}>Kampus Terpadu Jayanusa Padang</h4>
            <p style={{ margin: '4px 0 0 0', color: '#e2e8f0', fontSize: '0.88rem' }}>Jl. Damar No. 69, Pusat Kota Padang — Fasilitas Lengkap & Ramah Mahasiswa</p>
          </div>
          <span className="badge-accreditation-gold">Akreditasi Baik Sekali (BAN-PT)</span>
        </div>
      </div>

      {/* Visi dan Misi */}
      <div className="vision-mission-grid">
        <div className="vision-card">
          <div className="card-badge-header">
            <span className="card-icon">🎯</span>
            <h3 className="card-header-title">Visi Universitas Jayanusa</h3>
          </div>
          <p className="card-body-text">
            "Menjadi perguruan tinggi unggulan, inovatif, dan berdaya saing nasional di bidang teknologi informasi dan bisnis digital pada tahun 2030 yang berlandaskan nilai-nilai etika dan profesionalisme."
          </p>
        </div>

        <div className="mission-card">
          <div className="card-badge-header">
            <span className="card-icon">🚀</span>
            <h3 className="card-header-title">Misi Universitas Jayanusa</h3>
          </div>
          <ul className="mission-list">
            <li>Menyelenggarakan proses pembelajaran mutakhir yang adaptif terhadap revolusi industri 4.0 dan kecerdasan buatan.</li>
            <li>Mengembangkan riset terapan inovatif yang memberikan solusi praktis bagi industri dan masyarakat luas.</li>
            <li>Memperluas kemitraan strategis dengan industri teknologi, BUMN, perbankan, dan perguruan tinggi bereputasi.</li>
            <li>Membina karakter mahasiswa menjadi insan pembelajar yang berakhlak mulia, berjiwa kewirausahaan, dan mandiri.</li>
          </ul>
        </div>
      </div>

      {/* Program Studi */}
      <div style={{ marginTop: '36px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 className="section-title">Program Studi Unggulan (S1, D4 & D3)</h3>
            <p className="section-desc">Pilih program studi yang sesuai minat dan rencana karier masa depan Anda:</p>
          </div>
          {onPilihProdi && (
            <button className="btn-cta-pmb" onClick={onPilihProdi} style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
              Daftar PMB Sekarang ➜
            </button>
          )}
        </div>
      </div>

      <div className="prodi-cards-grid">
        {programStudi.map((prodi, index) => (
          <div key={index} className="prodi-detail-card" style={{ borderTop: `4px solid ${prodi.color}` }}>
            <div className="prodi-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="prodi-degree-tag" style={{ backgroundColor: prodi.color }}>
                  {prodi.jenjang}
                </span>
                <div>
                  <h4 className="prodi-name-title">{prodi.nama}</h4>
                  <span className="prodi-gelar-sub">Gelar Lulusan: <strong>{prodi.gelar}</strong></span>
                </div>
              </div>
              <span className="prodi-badge-status">BAN-PT: {prodi.akreditasi}</span>
            </div>

            <p className="prodi-description">{prodi.deskripsi}</p>

            <div className="prodi-focus-row">
              <strong>Materi Utama:</strong> {prodi.fokus}
            </div>

            <div className="prodi-prospects-row">
              <span className="prospects-label">💼 Peluang Karier:</span>
              <div className="prospects-pills">
                {prodi.prospek.map((job, idx) => (
                  <span key={idx} className="prospect-tag" style={{ backgroundColor: prodi.bgTag, color: prodi.color }}>
                    {job}
                  </span>
                ))}
              </div>
            </div>

            {onPilihProdi && (
              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f1f5f9', textAlign: 'right' }}>
                <button
                  onClick={onPilihProdi}
                  className="btn-select-prodi"
                  style={{ color: prodi.color, borderColor: prodi.color }}
                >
                  Pilih {prodi.nama} di PMB ➜
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About