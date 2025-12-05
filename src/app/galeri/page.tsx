export default function GaleriPage() {
  const galleryItems = [
    { id: 1, title: "Mesin Cuci Industri", category: "fasilitas" },
    { id: 2, title: "Area Setrika Profesional", category: "fasilitas" },
    { id: 3, title: "Rak Pakaian Rapi", category: "fasilitas" },
    { id: 4, title: "Area Packaging", category: "fasilitas" },
    { id: 5, title: "Hasil Laundry Kiloan", category: "hasil" },
    { id: 6, title: "Dry Clean Jas Premium", category: "hasil" },
    { id: 7, title: "Sepatu Bersih", category: "hasil" },
    { id: 8, title: "Bed Cover Wangi", category: "hasil" },
    { id: 9, title: "Konter Pelayanan", category: "suasana" },
    { id: 10, title: "Tim Profesional", category: "suasana" },
    { id: 11, title: "Quality Control", category: "suasana" },
    { id: 12, title: "Area Drop-off", category: "suasana" }
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dokumentasi
            <span className="block text-blue-600">Layanan Premium Kami</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lihat fasilitas modern, proses kerja profesional, dan hasil laundry 
            yang memuaskan.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Pesan Layanan
          </a>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Semua (12)</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">Fasilitas (4)</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">Hasil (4)</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">Suasana (4)</button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.category === "fasilitas" && "Fasilitas"}
                    {item.category === "hasil" && "Hasil"}
                    {item.category === "suasana" && "Suasana"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Fasilitas Unggulan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">12 Mesin Cuci Industri</h3>
              <p className="text-gray-600">Kapasitas besar dengan teknologi terbaru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Area Setrika Modern</h3>
              <p className="text-gray-600">Setrika uap profesional dengan area kerja luas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
              <p className="text-gray-600">Proses QC ketat untuk hasil sempurna</p>
            </div>
          </div>
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