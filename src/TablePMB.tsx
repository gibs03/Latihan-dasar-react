export interface Pendaftar {
  id?: number
  nama: string
  noHp: string
  asalSekolah: string
  jurusan: string
  jalur: string
}

interface TablePMBProps {
  data: Pendaftar[]
  onHapus?: (index: number) => void
}

function getInitials(name: string): string {
  const parts = name.trim().split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function getProdiBadgeClass(jurusan: string): string {
  if (jurusan.includes('Sistem Informasi')) return 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
  if (jurusan.includes('Teknologi Informasi')) return 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
  if (jurusan.includes('Bisnis Digital')) return 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
  if (jurusan.includes('Manajemen Informatika')) return 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
  if (jurusan.includes('Komputerisasi Akuntansi')) return 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
  return 'bg-slate-50 text-slate-700 border-slate-200'
}

const avatarGradients = [
  'bg-gradient-to-br from-blue-500 to-blue-700',
  'bg-gradient-to-br from-purple-500 to-indigo-700',
  'bg-gradient-to-br from-pink-500 to-rose-700',
  'bg-gradient-to-br from-emerald-500 to-teal-700',
  'bg-gradient-to-br from-amber-500 to-orange-700',
  'bg-gradient-to-br from-cyan-500 to-blue-700',
]

function TablePMB({ data, onHapus }: TablePMBProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden mt-4">
      {/* Table Header Card */}
      <div className="p-4 md:p-5 bg-slate-50/80 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center text-lg shrink-0">
            📋
          </div>
          <div>
            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white m-0">
              Daftar Rekapitulasi Calon Mahasiswa Terdaftar
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
              Data tersimpan di sistem PMB dan dapat diverifikasi langsung oleh panitia seleksi.
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
          Total: <strong className="text-sky-800 dark:text-sky-200">{data.length}</strong> Pendaftar
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/70 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-[11px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-4 text-center w-12">No</th>
              <th className="py-3 px-4">Calon Mahasiswa</th>
              <th className="py-3 px-4">WhatsApp</th>
              <th className="py-3 px-4">Asal Sekolah</th>
              <th className="py-3 px-4">Program Studi</th>
              <th className="py-3 px-4">Jalur Pendaftaran</th>
              <th className="py-3 px-4">Status</th>
              {onHapus && <th className="py-3 px-4 text-center w-24">Aksi</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs md:text-sm">
            {data.length === 0 ? (
              <tr>
                <td colSpan={onHapus ? 8 : 7} className="text-center py-12 px-4 text-slate-500 dark:text-slate-400">
                  <span className="text-3xl block mb-2">🔍</span>
                  <p className="m-0 text-sm">Tidak ada data pendaftar yang sesuai dengan kata kunci pencarian.</p>
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const isBeasiswa = item.jalur.includes('Beasiswa')
                const isKip = item.jalur.includes('KIP')
                const prodiBadge = getProdiBadgeClass(item.jurusan)
                const avatarBg = avatarGradients[index % avatarGradients.length]

                return (
                  <tr key={index} className="hover:bg-slate-50/80 dark:hover:bg-slate-750 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                      <span className="inline-block w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700/60 leading-6 text-center text-xs">
                        {index + 1}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${avatarBg} text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                          {getInitials(item.nama)}
                        </div>
                        <div>
                          <strong className="block text-slate-900 dark:text-white font-bold">{item.nama}</strong>
                          <span className="block text-[11px] font-mono text-slate-400">ID: JYN-2026-{String(index + 101).padStart(3, '0')}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-700 dark:text-slate-300">
                      <span className="text-slate-400 mr-1">📱</span>{item.noHp}
                    </td>

                    <td className="py-3.5 px-4 font-semibold text-slate-600 dark:text-slate-300">
                      {item.asalSekolah}
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold border ${prodiBadge}`}>
                        {item.jurusan}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold border ${
                          isBeasiswa
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                            : isKip
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                        }`}
                      >
                        {isBeasiswa ? '⭐ ' : isKip ? '🎓 ' : '✓ '}
                        {item.jalur}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Terdaftar
                      </span>
                    </td>

                    {onHapus && (
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => onHapus(index)}
                          className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 text-xs font-bold transition-colors cursor-pointer"
                          title="Hapus data pendaftar ini"
                        >
                          🗑️ Hapus
                        </button>
                      </td>
                    )}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePMB