interface Orang {
  nama: string
  deskripsi: string
}

function TableOrang({ data = [] }: { data?: Orang[] }) {
  return (
    <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', marginTop: '16px', width: '100%' }}>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={2} style={{ textAlign: 'center' }}>
              Belum ada data
            </td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.nama}</td>
              <td>{item.deskripsi}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default TableOrang
