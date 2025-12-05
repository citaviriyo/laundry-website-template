export default function TestimoniFaqPage() {
  const testimonials = [
    {
      name: "Ibu Sarah",
      location: "Apartemen Sudirman Residence",
      rating: 5,
      comment: "Pelayanan sangat memuaskan! Pakaian selalu wangi dan rapi. Antar-jemputnya juga tepat waktu."
    },
    {
      name: "Bapak Ahmad",
      location: "Perumahan Kelapa Gading",
      rating: 5,
      comment: "KilauCuci solusi tepat untuk saya yang sibuk. Hasilnya bersih dan harganya terjangkau."
    },
    {
      name: "Nina Putri",
      location: "Apartemen Kemang Village",
      rating: 5,
      comment: "Dry clean jas saya selalu sempurna. Staffnya ramah dan profesional. Highly recommended!"
    },
    {
      name: "Budi Santoso",
      location: "Apartemen Thamrin City",
      rating: 5,
      comment: "Cuci sepatu saya hasilnya luar biasa! Sepatu kulit yang sudah kotor jadi bersih seperti baru."
    },
    {
      name: "Dewi Lestari",
      location: "Perumahan Pantai Indah Kapuk",
      rating: 5,
      comment: "Bed cover besar saya dicuci dengan sempurna. Wanginya tahan lama dan prosesnya cepat."
    },
    {
      name: "Rizky Firmansyah",
      location: "Apartemen Casablanca",
      rating: 5,
      comment: "Express laundry-nya benar-benar cepat! Butuh baju untuk meeting besok, pagi antar sore sudah siap."
    }
  ];

  const faqs = [
    {
      question: "Berapa lama proses pengerjaan laundry?",
      answer: "Untuk laundry kiloan reguler membutuhkan waktu 24-48 jam. Layanan express bisa selesai dalam 6-12 jam. Dry clean dan cuci sepatu membutuhkan waktu 3-5 hari."
    },
    {
      question: "Apakah bisa antar–jemput?",
      answer: "Ya, kami menyediakan layanan antar-jemput gratis untuk area coverage kami (Jakarta Utara dan sekitarnya)."
    },
    {
      question: "Apakah menerima laundry hotel/kos-kosan?",
      answer: "Ya, kami melayani kebutuhan laundry komersial untuk hotel, guest house, kos-kosan dengan harga khusus volume besar."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Pembayaran dapat dilakukan secara tunai saat pengantaran, transfer bank, atau e-wallet (OVO, GoPay, Dana)."
    },
    {
      question: "Apakah harga sudah termasuk ongkir?",
      answer: "Ya, harga yang tercantum sudah termasuk biaya antar-jemput gratis untuk area coverage kami."
    },
    {
      question: "Apakah ada diskon untuk pelanggan baru?",
      answer: "Ya, kami memberikan diskon 15% untuk transaksi pertama pelanggan baru dan berbagai promo menarik lainnya."
    },
    {
      question: "Bagaimana jika pakaian saya rusak?",
      answer: "Kami melakukan quality control ketat. Jika terjadi kerusakan akibat kelalaian kami, kami akan bertanggung jawab sesuai kebijakan."
    },
    {
      question: "Berapa minimum order untuk layanan kiloan?",
      answer: "Minimum order untuk laundry kiloan reguler adalah 3kg. Untuk layanan express minimum 2kg."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

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
            Apa Kata Pelanggan
            <span className="block text-blue-600">dan Pertanyaan Umum</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dengarkan pengalaman pelanggan setia kami dan temukan jawaban untuk 
            pertanyaan yang sering diajukan.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Bergabung Sekarang
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Testimoni Pelanggan Setia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{testimonial.location}</p>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Pelanggan Aktif</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Rating Rata-rata</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-gray-600">Kepuasan Pelanggan</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pertanyaan yang Sering Diajukan</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Masih Ada Pertanyaan?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Tim customer service kami siap membantu 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Chat WhatsApp
            </a>
            <a 
              href="tel:021-1234-5678" 
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Telepon Langsung
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