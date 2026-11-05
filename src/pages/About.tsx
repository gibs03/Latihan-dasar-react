function About() {
  const programStudi = [
    {
      jenjang: 'S1',
      nama: 'Sistem Informasi',
      gelar: 'S.Kom.',
      prospek: 'Software Developer, Systems Analyst, IT Project Manager, Database Administrator',
      deskripsi: 'Fokus pada pengembangan sistem informasi bisnis, rekayasa perangkat lunak, dan manajemen data perusahaan.'
    },
    {
      jenjang: 'S1',
      nama: 'Teknologi Informasi',
      gelar: 'S.Kom.',
      prospek: 'Network Engineer, Cloud Architect, Cybersecurity Specialist, DevOps',
      deskripsi: 'Mempelajari arsitektur jaringan komputer, keamanan siber, komputasi awan, dan infrastruktur server.'
    },
    {
      jenjang: 'D4',
      nama: 'Bisnis Digital',
      gelar: 'S.Tr.Bns.',
      prospek: 'Digital Strategist, E-Commerce Specialist, Digital Marketing Manager, Tech Entrepreneur',
      deskripsi: 'Mengintegrasikan teknologi informasi dengan strategi pemasaran digital, marketplace, dan model bisnis masa kini.'
    },
    {
      jenjang: 'D3',
      nama: 'Manajemen Informatika',
      gelar: 'A.Md.Kom.',
      prospek: 'Web Programmer, Mobile App Developer, IT Technical Support',
      deskripsi: 'Pendidikan vokasi cepat kerja dengan fokus pemrograman aplikasi web, mobile, dan administrasi basis data.'
    },
    {
      jenjang: 'D3',
      nama: 'Komputerisasi Akuntansi',
      gelar: 'A.Md.Kom.',
      prospek: 'Accounting Software Specialist, Tax Staff, Auditor Junior, Financial Analyst',
      deskripsi: 'Keahlian ganda menguasai ilmu akuntansi modern yang berbasis software komputer akuntansi dan perpajakan.'
    }
  ]

  return (
    <div className="page-card">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ color: '#0f2e59', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 8px 0' }}>
          Profil Universitas Jayanusa Padang
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
          Mencetak generasi unggul yang menguasai keahlian teknologi dan berintegritas tinggi sejak tahun 1991.
        </p>
      </div>

      {/* Banner Foto Kampus */}
      <img
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
        alt="Gedung dan Lingkungan Kampus Universitas Jayanusa"
        className="about-banner-img"
      />

      {/* Visi dan Misi */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '36px' }}>
        <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#0f2e59', fontSize: '1.2rem' }}>🎯 Visi Kampus</h3>
          <p style={{ margin: 0, color: '#475569', lineHeight: '1.6' }}>
            Menjadi perguruan tinggi vokasi dan akademik yang unggul, inovatif, dan berdaya saing nasional di bidang teknologi informasi dan bisnis digital pada tahun 2030.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#0f2e59', fontSize: '1.2rem' }}>🚀 Misi Kampus</h3>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', lineHeight: '1.6' }}>
            <li>Menyelenggarakan proses pembelajaran aplikatif berbasis teknologi digital.</li>
            <li>Mengembangkan riset terapan yang solutif bagi masyarakat dan industri.</li>
            <li>Membina mahasiswa menjadi tenaga profesional yang beretika dan mandiri.</li>
          </ul>
        </div>
      </div>

      {/* Program Studi */}
      <h3 className="section-title">Program Studi Pilihan</h3>
      <p className="section-desc">Pilih program studi yang sesuai dengan minat dan target karier masa depanmu:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
        {programStudi.map((prodi, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#0f2e59' }}>
                <span style={{ backgroundColor: '#0f2e59', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85rem', marginRight: '8px' }}>
                  {prodi.jenjang}
                </span>
                {prodi.nama}
              </h4>
              <span style={{ backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', fontSize: '0.82rem' }}>
                Gelar: {prodi.gelar}
              </span>
            </div>
            <p style={{ margin: '0 0 10px 0', color: '#475569', fontSize: '0.92rem' }}>
              {prodi.deskripsi}
            </p>
            <div style={{ fontSize: '0.85rem', color: '#0369a1', background: '#f0f9ff', padding: '8px 12px', borderRadius: '6px' }}>
              <strong>💼 Prospek Karier:</strong> {prodi.prospek}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
