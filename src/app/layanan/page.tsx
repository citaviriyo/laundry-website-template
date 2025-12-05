export default function LayananPage() {
  const services = [
    {
      title: "Laundry Kiloan",
      description: "Cocok untuk pakaian harian keluarga. Kami mencuci pakaian Anda dengan detergen premium dan memisahkan berdasarkan warna.",
      time: "24-48 jam",
      badge: "Favorit Pelanggan"
    },
    {
      title: "Laundry Satuan",
      description: "Untuk pakaian berharga seperti jas, kebaya, dress, dan pakaian formal lainnya yang membutuhkan perhatian khusus.",
      time: "2-4 hari",
      badge: "Premium"
    },
    {
      title: "Dry Clean",
      description: "Teknologi dry clean modern untuk pakaian yang tidak boleh dicuci dengan air. Aman untuk semua jenis bahan.",
      time: "2-3 hari",
      badge: "Spesialis"
    },
    {
      title: "Cuci Sepatu",
      description: "Pembersihan sepatu profesional untuk semua jenis: kulit, kanvas, sneakers. Menggunakan produk khusus per jenis bahan.",
      time: "3-5 hari",
      badge: "Best Seller"
    },
    {
      title: "Cuci Bed Cover & Selimut",
      description: "Pencucian khusus untuk item besar seperti bed cover, selimut, gorden. Kapasitas mesin industrial.",
      time: "2-3 hari",
      badge: "Cocok untuk Keluarga"
    },
    {
      title: "Setrika Saja",
      description: "Untuk pakaian yang sudah dicuci tapi perlu disetrika rapi. Hasil setrika halus dan wangi.",
      time: "6-12 jam",
      badge: "Express"
    }
  ];

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
              <a href="/layanan" className="text-gray-700 hover:text-blue-600 font-semibold">Layanan</a>
              <a href="/harga" className="text-gray-700 hover:text-blue-600">Harga</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-600">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan Lengkap
            <span className="block text-blue-600">KilauCuci Laundry</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Solusi laundry profesional untuk semua kebutuhan Anda. 
            Dari pakaian harian hingga item berharga.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Konsultasi Gratis
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {service.badge && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">⏰ {service.time}</span>
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Pesan →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Bantuan Memilih Layanan?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tim kami siap membantu Anda memilih layanan yang paling cocok.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Konsultasi WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 KilauCuci Laundry & Dry Clean. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Website by Studio Web Salim</p>
        </div>
      </footer>
    </div>
  );
}