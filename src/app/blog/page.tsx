export default function BlogPage() {
  const blogPosts = [
    {
      title: "Tips Merawat Pakaian Putih Agar Tetap Cerah",
      excerpt: "Pakaian putih mudah sekali kusam dan berubah warna jika tidak dirawat dengan benar. Simak tips dari kami.",
      category: "Tips Perawatan",
      date: "15 Januari 2025",
      readTime: "5 menit",
      featured: true
    },
    {
      title: "Perbedaan Laundry Kiloan dan Laundry Satuan",
      excerpt: "Masing-masing jenis laundry memiliki kelebihan dan kekurangan. Pelajari perbedaannya untuk memilih layanan.",
      category: "Edukasi",
      date: "12 Januari 2025",
      readTime: "4 menit",
      featured: false
    },
    {
      title: "Kapan Perlu Dry Clean untuk Pakaian Anda?",
      excerpt: "Tidak semua pakaian boleh dicuci dengan air. Ketahui jenis pakaian mana yang memerlukan dry clean.",
      category: "Panduan",
      date: "8 Januari 2025",
      readTime: "6 menit",
      featured: false
    },
    {
      title: "Cara Menghilangkan Noda Membandel pada Baju",
      excerpt: "Noda kopi, minyak, atau tinta bisa merusak pakaian kesayangan. Pelajari teknik efektif untuk menghilangkannya.",
      category: "Tips Perawatan",
      date: "5 Januari 2025",
      readTime: "7 menit",
      featured: false
    },
    {
      title: "Mengenal Jenis-Jenis Detergen dan Fungsinya",
      excerpt: "Detergen tidak hanya satu jenis. Pelajari berbagai jenis detergen dan mana yang paling cocok untuk Anda.",
      category: "Edukasi",
      date: "2 Januari 2025",
      readTime: "5 menit",
      featured: false
    },
    {
      title: "Perawatan Sepatu Kulit Agar Awet dan Tampak Baru",
      excerpt: "Sepatu kulit membutuhkan perawatan khusus untuk menjaga kualitasnya. Ikuti panduan lengkap dari kami.",
      category: "Panduan",
      date: "28 Desember 2024",
      readTime: "6 menit",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);

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
            Tips & Panduan
            <span className="block text-blue-600">Dunia Laundry</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pelajari tips, trik, dan panduan lengkap tentang perawatan pakaian 
            dari para ahli laundry profesional.
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

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">⭐ Artikel Unggulan</span>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-square md:aspect-auto bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{featuredPost.category}</span>
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Oleh Tim KilauCuci</span>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Baca Selengkapnya →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Semua (6)</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">Tips Perawatan (2)</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">Edukasi (2)</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">Panduan (2)</button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Artikel Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div key={post.title} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-gray-500">⏰ {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>Oleh Tim KilauCuci</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium block text-center">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Dapatkan Tips Laundry Terbaru</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe newsletter kami dan dapatkan tips eksklusif serta promo menarik
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <a 
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20subscribe%20newsletter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Subscribe
            </a>
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