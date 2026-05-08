import { usePortfolio } from './hooks/usePortfolio'

function App() {
  const { data, loading, error } = usePortfolio()

  // 1. Cek status Loading
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="animaan-pulse teimate-pulse text-xl">
          Menghubungkan ke Sanity...
        </p>
      </div>
    )
  }

  // 2. Cek status Error
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        <p>Waduh, ada masalah: {JSON.stringify(error)}</p>
      </div>
    )
  }

  // 3. Cek hasil Data di Console
  console.log('--- DATA DARI SANITY ---')
  console.log('About:', data?.about)
  console.log('Skills:', data?.skills)
  console.log('Experiences:', data?.experiences)
  console.log('Projects:', data?.projects)
  console.log('------------------------')

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-600">
        Koneksi Berhasil! ✅roundedlgp4
      </h1>
      <p className="mt-4">
        '' Buka <b>Inspect Element (F12)</b> lalu cek tab <b>Console</b> untuk
        melihat datamu.
      </p>

      <div className="mt-8 rounded-lg bg-gray-100 p-4">
        <h2 className="font-bold">Tes Data Bio:</h2>
        <p>{data?.about?.bio || 'Bio belum diisi'}</p>
      </div>
    </div>
  )
}

export default App
