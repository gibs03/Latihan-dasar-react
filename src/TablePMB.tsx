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

function TablePMB({ data, onHapus }: TablePMBProps) {
  return (
    <div style={{ marginTop: '20px' }}>
      <div className="table-data-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ width: '45px', textAlign: 'center' }}>No</th>
              <th>Nama Lengkap</th>
              <th>No. WhatsApp</th>
              <th>Asal Sekolah</th>
              <th>Program Studi</th>
              <th>Jalur Pendaftaran</th>
              {onHapus && <th style={{ width: '80px', textAlign: 'center' }}>Aksi</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={onHapus ? 7 : 6} style={{ textAlign: 'center', color: '#64748b', padding: '24px' }}>
                  Tidak ada data pendaftar yang cocok dengan pencarian.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{index + 1}</td>
                  <td><strong>{item.nama}</strong></td>
                  <td>{item.noHp}</td>
                  <td>{item.asalSekolah}</td>
                  <td>
                    <span className="badge-prodi">{item.jurusan}</span>
                  </td>
                  <td>
                    <span className={`badge-jalur ${item.jalur.includes('Beasiswa') ? 'beasiswa' : ''}`}>
                      {item.jalur}
                    </span>
                  </td>
                  {onHapus && (
                    <td style={{ textAlign: 'center' }}>
                      <button
                        onClick={() => onHapus(index)}
                        style={{
                          backgroundColor: '#fee2e2',
                          color: '#dc2626',
                          border: '1px solid #fca5a5',
                          borderRadius: '4px',
                          padding: '4px 10px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                        }}
                        title="Hapus pendaftar ini"
                      >
                        Hapus
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePMB
