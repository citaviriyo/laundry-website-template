import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Harga", href: "/harga" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Galeri", href: "/galeri" },
    { name: "Testimoni & FAQ", href: "/testimoni-faq" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <img
                  src="/logo.svg"
                  alt="KilauCuci Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-blue-600">KilauCuci</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Laundry & Dry Clean premium untuk apartemen dan perumahan. 
              Layanan antar-jemput gratis dengan hasil bersih, wangi, dan tepat waktu.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>021-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span>0812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>halo@kilaucuci-laundry.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Ruko Hijau Residence Blok B No. 12, Jakarta Utara</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
            <div className="flex space-x-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Butuh Bantuan?</h4>
              <p className="text-blue-700 text-sm mb-3">
                Chat dengan kami untuk respons cepat
              </p>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 KilauCuci Laundry & Dry Clean. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Website by <a href="#" className="text-blue-600 hover:underline">Studio Web Salim</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;