export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-blue-600">KilauCuci</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="/layanan" className="text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="/harga" className="text-gray-700 hover:text-blue-600">Harga</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-600">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Laundry Bersih, Wangi, dan Tepat Waktu
            <span className="block text-blue-600">untuk Keseharian Anda</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Layanan antar-jemput gratis untuk area apartemen dan perumahan sekitar. 
            Cocok untuk keluarga & pekerja sibuk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Pesan via WhatsApp
            </a>
            <a 
              href="/harga" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Lihat Harga
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mengapa Memilih KilauCuci?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Antar–Jemput Gratis</h3>
              <p className="text-gray-600">Area Apartemen & Perumahan Sekitar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Selesai 24–48 Jam</h3>
              <p className="text-gray-600">Cepat dan Tepat Waktu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detergen Premium</h3>
              <p className="text-gray-600">Aman untuk Kulit & Anak</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Update Status</h3>
              <p className="text-gray-600">Via WhatsApp Real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Layanan Unggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">👔</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Laundry Kiloan</h3>
              <p className="text-gray-600 mb-3">Cocok untuk pakaian harian keluarga</p>
              <p className="text-sm text-gray-500">24-48 jam</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dry Clean</h3>
              <p className="text-gray-600 mb-3">Jas, gaun, dan pakaian formal</p>
              <p className="text-sm text-gray-500">2-3 hari</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">👟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Laundry Sepatu</h3>
              <p className="text-gray-600 mb-3">Sepatu kulit, kanvas, dan sneakers</p>
              <p className="text-sm text-gray-500">3-5 hari</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Setrika Saja</h3>
              <p className="text-gray-600 mb-3">Untuk pakaian yang sudah dicuci</p>
              <p className="text-sm text-gray-500">6-12 jam</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Jemput Cucian Anda Hari Ini?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dapatkan penawaran spesial untuk pelanggan baru. Hubungi kami sekarang juga!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Chat WhatsApp Sekarang
            </a>
            <a 
              href="tel:021-1234-5678" 
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Telepon Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 KilauCuci Laundry & Dry Clean. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Website by Studio Web Salim</p>
        </div>
      </footer>
    </div>
  );
}