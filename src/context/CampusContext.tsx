import { createContext, useContext, useState, type ReactNode } from 'react'

// Tipe data untuk Context Kampus
export interface CampusContextType {
  namaKampus: string
  tahunAkademik: string
  gelombangPMB: string
  kontakWA: string
  tema: 'light' | 'dark'
  toggleTema: () => void
}

// 3. REACT HOOK: useContext - Membuat Context
const CampusContext = createContext<CampusContextType | undefined>(undefined)

export function CampusProvider({ children }: { children: ReactNode }) {
  // 2. REACT HOOK: useState di dalam Context
  const [tema, setTema] = useState<'light' | 'dark'>('light')

  const toggleTema = () => {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const value: CampusContextType = {
    namaKampus: 'Universitas Jayanusa Padang',
    tahunAkademik: '2026/2027',
    gelombangPMB: 'Gelombang 1 (Sisa Kuota: 45 Kursi)',
    kontakWA: '0812-3456-7890',
    tema,
    toggleTema,
  }

  return (
    <CampusContext.Provider value={value}>
      {children}
    </CampusContext.Provider>
  )
}

// Custom Hook untuk memudahkan penggunaan useContext di komponen lain
export function useCampus() {
  const context = useContext(CampusContext)
  if (!context) {
    throw new Error('useCampus harus digunakan di dalam CampusProvider')
  }
  return context
}
