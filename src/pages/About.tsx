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
      badgeClass: 'bg-sky-600 text-white',
      borderClass: 'border-t-4 border-sky-600',
      pillClass: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
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
      badgeClass: 'bg-indigo-600 text-white',
      borderClass: 'border-t-4 border-indigo-600',
      pillClass: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
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
      badgeClass: 'bg-emerald-600 text-white',
      borderClass: 'border-t-4 border-emerald-600',
      pillClass: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
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
      badgeClass: 'bg-amber-600 text-white',
      borderClass: 'border-t-4 border-amber-600',
      pillClass: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
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
      badgeClass: 'bg-cyan-600 text-white',
      borderClass: 'border-t-4 border-cyan-600',
      pillClass: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
    },
  ]

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm transition-colors duration-300">
      {/* Header Halaman */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold px-3.5 py-1 rounded-full mb-2 border border-blue-200 dark:border-blue-800">
          🏛️ TENTANG UNIVERSITAS JAYANUSA
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
          Pusat Unggulan Teknologi Informasi & Bisnis Digital
        </h2>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0">
          Berdiri sejak 1991 di Kota Padang, Universitas Jayanusa berkomitmen menyelenggarakan pendidikan tinggi berkualitas yang menjembatani talenta muda dengan industri teknologi global.
        </p>
      </div>

      {/* Banner Media Kampus */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
          alt="Gedung dan Lingkungan Kampus Universitas Jayanusa"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-extrabold text-white m-0">Kampus Terpadu Jayanusa Padang</h4>
            <p className="text-xs md:text-sm text-slate-200 m-0 mt-1">Jl. Damar No. 69, Pusat Kota Padang — Fasilitas Lengkap & Ramah Mahasiswa</p>
          </div>
          <span className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-xs px-4 py-2 rounded-full shadow-lg">
            Akreditasi Baik Sekali (BAN-PT)
          </span>
        </div>
      </div>

      {/* Visi dan Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🎯</span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white m-0">Visi Universitas Jayanusa</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed m-0 italic">
            "Menjadi perguruan tinggi unggulan, inovatif, dan berdaya saing nasional di bidang teknologi informasi dan bisnis digital pada tahun 2030 yang berlandaskan nilai-nilai etika dan profesionalisme."
          </p>
        </div>

        <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🚀</span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white m-0">Misi Universitas Jayanusa</h3>
          </div>
          <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-5 space-y-1.5 m-0 list-disc">
            <li>Menyelenggarakan proses pembelajaran mutakhir yang adaptif terhadap revolusi industri 4.0.</li>
            <li>Mengembangkan riset terapan inovatif yang memberikan solusi praktis bagi industri dan masyarakat.</li>
            <li>Memperluas kemitraan strategis dengan industri teknologi, BUMN, perbankan, dan perguruan tinggi bereputasi.</li>
            <li>Membina karakter mahasiswa menjadi insan pembelajar yang berakhlak mulia dan berjiwa wirausaha.</li>
          </ul>
        </div>
      </div>

      {/* Program Studi */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1">
            Program Studi Unggulan (S1, D4 & D3)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 m-0">
            Pilih program studi yang sesuai minat dan rencana karier masa depan Anda:
          </p>
        </div>
        {onPilihProdi && (
          <button
            className="px-5 py-2.5 bg-gradient-to-r from-[#0f2e59] to-[#1e4b8a] hover:from-[#091a33] hover:to-[#163b6e] text-white text-xs md:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer self-start sm:self-auto shrink-0"
            onClick={onPilihProdi}
          >
            Daftar PMB Sekarang ➜
          </button>
        )}
      </div>

      <div className="space-y-4">
        {programStudi.map((prodi, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${prodi.borderClass}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${prodi.badgeClass}`}>
                  {prodi.jenjang}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0">{prodi.nama}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Gelar Lulusan: <strong className="text-slate-700 dark:text-slate-200">{prodi.gelar}</strong></span>
                </div>
              </div>
              <span className="inline-block self-start sm:self-auto bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                BAN-PT: {prodi.akreditasi}
              </span>
            </div>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 m-0">
              {prodi.deskripsi}
            </p>

            <div className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-3">
              <strong className="text-slate-900 dark:text-white">Materi Utama:</strong> {prodi.fokus}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">💼 Peluang Karier:</span>
              <div className="flex flex-wrap gap-1.5">
                {prodi.prospek.map((job, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${prodi.pillClass}`}
                  >
                    {job}
                  </span>
                ))}
              </div>
            </div>

            {onPilihProdi && (
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-right">
                <button
                  onClick={onPilihProdi}
                  className="text-xs font-bold px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
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