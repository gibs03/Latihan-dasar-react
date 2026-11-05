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

function getProdiClass(jurusan: string): string {
  if (jurusan.includes('Sistem Informasi')) return 'prodi-si'
  if (jurusan.includes('Teknologi Informasi')) return 'prodi-ti'
  if (jurusan.includes('Bisnis Digital')) return 'prodi-bd'
  if (jurusan.includes('Manajemen Informatika')) return 'prodi-mi'
  if (jurusan.includes('Komputerisasi Akuntansi')) return 'prodi-ka'
  return ''
}

function TablePMB({ data, onHapus }: TablePMBProps) {
  return (
    <div className="table-container-card">
      <div className="table-top-header">
        <div className="table-title-box">
          <span className="table-icon">📋</span>
          <div>
            <h4 className="table-heading">Daftar Rekapitulasi Calon Mahasiswa Baru Terdaftar</h4>
            <p className="table-subheading">Data tersimpan di sistem PMB dan dapat diverifikasi langsung oleh panitia seleksi.</p>
          </div>
        </div>
        <div className="table-badge-counter">
          Total: <strong>{data.length}</strong> Pendaftar
        </div>
      </div>

      <div className="table-data-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ width: '45px', textAlign: 'center' }}>No</th>
              <th>Calon Mahasiswa</th>
              <th>Kontak WhatsApp</th>
              <th>Asal Sekolah</th>
              <th>Program Studi</th>
              <th>Jalur Pendaftaran</th>
              <th>Status</th>
              {onHapus && <th style={{ width: '90px', textAlign: 'center' }}>Aksi</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={onHapus ? 8 : 7} className="empty-table-cell">
                  <div className="empty-state-box">
                    <span style={{ fontSize: '2rem' }}>🔍</span>
                    <p>Tidak ada data pendaftar yang sesuai dengan kata kunci pencarian.</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const isBeasiswa = item.jalur.includes('Beasiswa')
                const isKip = item.jalur.includes('KIP')
                const prodiClass = getProdiClass(item.jurusan)

                return (
                  <tr key={index}>
                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#64748b' }}>
                      {index + 1}
                    </td>

                    <td>
                      <div className="candidate-cell">
                        <div className="candidate-avatar">
                          {getInitials(item.nama)}
                        </div>
                        <div className="candidate-info">
                          <strong className="candidate-name">{item.nama}</strong>
                          <span className="candidate-meta">ID: JYN-2026-{String(index + 101).padStart(3, '0')}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="phone-cell">
                        <span className="phone-icon">📱</span>
                        <span>{item.noHp}</span>
                      </div>
                    </td>

                    <td>
                      <span className="school-name">{item.asalSekolah}</span>
                    </td>

                    <td>
                      <span className={`badge-prodi ${prodiClass}`}>
                        {item.jurusan}
                      </span>
                    </td>

                    <td>
                      <span className={`badge-jalur ${isBeasiswa ? 'beasiswa' : isKip ? 'kip' : 'reguler'}`}>
                        {isBeasiswa ? '⭐ ' : isKip ? '🎓 ' : '✓ '}
                        {item.jalur}
                      </span>
                    </td>

                    <td>
                      <span className="status-verified-badge">
                        <span className="status-dot"></span> Terdaftar
                      </span>
                    </td>

                    {onHapus && (
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => onHapus(index)}
                          className="btn-delete-row"
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