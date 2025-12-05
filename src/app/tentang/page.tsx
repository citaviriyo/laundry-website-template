export default function TentangPage() {
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
            Cerita KilauCuci
            <span className="block text-blue-600">Laundry Premium Jakarta</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sejak 2022, kami telah menjadi pilihan utama untuk layanan laundry premium 
            di apartemen dan perumahan Jakarta Utara.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kisah Kami</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-6">
                KilauCuci lahir dari pengalaman pribadi kami sebagai penghuni apartemen yang 
                kesulitan menemukan layanan laundry yang dapat diandalkan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Pada tahun 2022, kami memulai dengan hanya 2 mesin cuci industri 
                dan 1 setrika uap. Fokus kami adalah melayani tetangga sekitar dengan komitmen 
                tiga hal: <strong>kebersihan sempurna, ketepatan waktu, dan layanan ramah</strong>.
              </p>
              <p className="text-lg text-gray-600">
                Hari ini, KilauCuci telah melayani lebih dari 500 pelanggan aktif dari berbagai 
                apartemen dan perumahan premium di Jakarta Utara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perjalanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2022</div>
              <h3 className="font-semibold mb-2">Awal Perjalanan</h3>
              <p className="text-gray-600 text-sm">2 mesin cuci di Jakarta Utara</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2023</div>
              <h3 className="font-semibold mb-2">Ekspansi Layanan</h3>
              <p className="text-gray-600 text-sm">Dry clean dan cuci sepatu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
              <h3 className="font-semibold mb-2">Digitalisasi</h3>
              <p className="text-gray-600 text-sm">Booking online dan WhatsApp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
              <h3 className="font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600 text-sm">500+ pelanggan aktif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-lg text-gray-600">
                Menjadi jasa laundry premium terpercaya di Indonesia yang memberikan 
                kemudahan, kualitas, dan kepuasan maksimal bagi setiap pelanggan.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Memberikan layanan laundry berkualitas tinggi</li>
                <li>• Menyediakan kemudahan antar-jemput gratis</li>
                <li>• Menggunakan produk ramah lingkungan</li>
                <li>• Membangun hubungan jangka panjang</li>
              </ul>
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