export default function HargaPage() {
  const priceList = [
    {
      category: "Laundry Kiloan",
      items: [
        { service: "Laundry Kiloan Reguler", price: "Rp 10.000/kg", minOrder: "min. 3 kg", time: "24-48 jam", popular: true },
        { service: "Laundry Kiloan Express", price: "Rp 15.000/kg", minOrder: "min. 2 kg", time: "6-12 jam", popular: false },
        { service: "Cuci Saja", price: "Rp 7.000/kg", minOrder: "min. 3 kg", time: "24 jam", popular: false },
        { service: "Setrika Saja", price: "Rp 9.000/kg", minOrder: "min. 2 kg", time: "6-12 jam", popular: false }
      ]
    },
    {
      category: "Laundry Satuan & Dry Clean",
      items: [
        { service: "Jas / Blazer", price: "Rp 40.000/pcs", minOrder: "-", time: "2-3 hari", popular: true },
        { service: "Kebaya / Dress", price: "Rp 45.000/pcs", minOrder: "-", time: "3-4 hari", popular: false },
        { service: "Gaun Pesta", price: "Rp 60.000/pcs", minOrder: "-", time: "3-5 hari", popular: false },
        { service: "Kemeja Kantor", price: "Rp 15.000/pcs", minOrder: "-", time: "24 jam", popular: false }
      ]
    },
    {
      category: "Cuci Sepatu & Tas",
      items: [
        { service: "Sepatu Sneakers", price: "Rp 35.000/pasang", minOrder: "-", time: "3-5 hari", popular: true },
        { service: "Sepatu Kulit", price: "Rp 50.000/pasang", minOrder: "-", time: "4-6 hari", popular: false },
        { service: "Sepatu Olahraga", price: "Rp 40.000/pasang", minOrder: "-", time: "3-5 hari", popular: false },
        { service: "Tas Fashion", price: "Rp 45.000/pcs", minOrder: "-", time: "3-4 hari", popular: false }
      ]
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
              <a href="/layanan" className="text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="/harga" className="text-gray-700 hover:text-blue-600 font-semibold">Harga</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-600">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Harga Terjangkau,
            <span className="block text-blue-600">Kualitas Premium</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Harga transparan dan kompetitif untuk semua layanan laundry premium kami.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Tanya Harga Detail
          </a>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {priceList.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left font-semibold">Layanan</th>
                      <th className="px-6 py-3 text-center font-semibold">Harga</th>
                      <th className="px-6 py-3 text-center font-semibold">Min. Order</th>
                      <th className="px-6 py-3 text-center font-semibold">Estimasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className={item.popular ? "bg-blue-50" : "border-t"}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{item.service}</span>
                            {item.popular && (
                              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Populer</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-blue-600">{item.price}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{item.minOrder}</td>
                        <td className="px-6 py-4 text-center text-gray-600">⏰ {item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Penawaran Spesial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="font-semibold mb-2">Pelanggan Langganan</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Diskon 10%</div>
              <p className="text-gray-600 text-sm">Minimal 10kg/bulan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold mb-2">Pelanggan Baru</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Diskon 15%</div>
              <p className="text-gray-600 text-sm">Transaksi pertama</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold mb-2">Referal Teman</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Diskon 5%</div>
              <p className="text-gray-600 text-sm">Untuk Anda dan teman</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-semibold mb-2">Bulk Order</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Diskon 20%</div>
              <p className="text-gray-600 text-sm">Minimal 50kg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Penawaran Khusus?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami untuk mendapatkan penawaran harga terbaik
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Nego Harga di WhatsApp
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