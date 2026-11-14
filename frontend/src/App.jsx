import OrderPage from "./pages/OrderPage";
import { useState } from "react";

export default function App() {
  const [showOrderPage, setShowOrderPage] = useState(false);

  if (showOrderPage) {
    return <OrderPage onBack={() => setShowOrderPage(false)} />;
  }
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-600 tracking-tight">
                JahitKita.
              </span>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <a
                href="#layanan"
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Layanan
              </a>
              <a
                href="#katalog"
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Katalog
              </a>
              <a
                href="#ulasan"
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Ulasan
              </a>
              <a
                href="#kontak"
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Kontak
              </a>
              <button
                onClick={() => setShowOrderPage(true)}
                className="bg-slate-900 text-white px-5 py-2 rounded-md font-medium hover:bg-slate-800 transition-colors shadow-sm text-sm"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Fitur 1) */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-900 rounded-full text-sm font-semibold mb-2">
            #1 Platform Jahit Online
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Permak & Jahit Pakaian Tanpa Perlu Keluar Rumah
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            JahitKita menghubungkan Anda dengan penjahit profesional terdekat.
            Mulai dari permak ukuran hingga jahit kustom, serahkan pada ahlinya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#kontak"
              className="bg-brand-600 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-500 transition-colors shadow-md text-center"
            >
              Hubungi WhatsApp
            </a>
            <button className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-md font-medium hover:bg-slate-50 transition-colors text-center">
              Lihat Harga
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="/test.jpeg"
              alt="Penjahit sedang bekerja"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-slate-600">
              Pilih layanan jahit atau permak sesuai dengan kebutuhan pakaian
              Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Permak Pakaian
              </h3>
              <p className="text-slate-600 text-sm">
                Ubah ukuran, potong panjang celana, ganti resleting, hingga
                perbaikan kerah pakaian lama.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Jahit Kustom
              </h3>
              <p className="text-slate-600 text-sm">
                Buat pakaian baru dari bahan pilihan Anda. Cocok untuk seragam,
                kebaya, atau gaun pesta.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Konsultasi Desain
              </h3>
              <p className="text-slate-600 text-sm">
                Diskusikan model dan ukuran secara virtual dengan mitra penjahit
                profesional kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog Produk (Fitur 2) */}
      <section id="katalog" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Katalog & Hasil Jahitan
              </h2>
              <p className="text-slate-600">
                Beberapa karya terbaik dari mitra penjahit JahitKita. Dari gaya
                kasual hingga formal.
              </p>
            </div>
            <button className="hidden md:block text-brand-600 font-medium hover:text-brand-700">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-xl overflow-hidden bg-slate-200 aspect-[4/5] shadow-sm">
              <img
                src="/1.jpeg"
                alt="Kemeja Kustom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <h3 className="text-white font-semibold text-lg">
                  Setelan Anak
                </h3>
                <p className="text-slate-300 text-sm">Jahit Kustom</p>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden bg-slate-200 aspect-[4/5] shadow-sm">
              <img
                src="/3.jpeg"
                alt="Gaun Wanita"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <h3 className="text-white font-semibold text-lg">
                  Batik Motif
                </h3>
                <p className="text-slate-300 text-sm">Jahit Kustom</p>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden bg-slate-200 aspect-[4/5] shadow-sm">
              <img
                src="/2.jpeg"
                alt="Permak Kemeja"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <h3 className="text-white font-semibold text-lg">
                  Permak Ukuran Kemeja
                </h3>
                <p className="text-slate-300 text-sm">Permak Pakaian</p>
              </div>
            </div>
          </div>

          <button className="md:hidden mt-8 w-full border border-slate-300 text-slate-700 font-medium py-3 rounded-md hover:bg-slate-100">
            Lihat Semua Katalog
          </button>
        </div>
      </section>

      {/* Customer Reviews (Fitur 3) */}
      <section id="ulasan" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-slate-600">
              Ribuan pakaian telah diperbaiki dan dibuat oleh mitra kami dengan
              tingkat kepuasan tinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-8 border border-slate-100 bg-slate-50 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 line-clamp-4">
                "Sangat praktis! Saya memotong ujung celana jeans saya yang
                kepanjangan tanpa harus repot pergi ke pasar. Penjahitnya datang
                mengambil dan mengantarkannya kembali ke rumah dengan hasil yang
                sangat rapi."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0 flex items-center justify-center font-bold text-slate-600">
                  A
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Annisa L.</p>
                  <p className="text-xs text-slate-500">Permak Celana</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 border border-slate-100 bg-slate-50 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 line-clamp-4">
                "Membuat seragam kantor via JahitKita benar-benar memuaskan.
                Kualitas bahannya dikurasi dengan baik dan potongannya pas di
                badan. Layanan konsultasi desainnya sangat membantu."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0 flex items-center justify-center font-bold text-slate-600">
                  B
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Budi Santoso
                  </p>
                  <p className="text-xs text-slate-500">Jahit Seragam</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-8 border border-slate-100 bg-slate-50 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg
                  className="w-5 h-5 fill-current text-slate-300"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-slate-600 mb-6 line-clamp-4">
                "Penjahit sangat detail dalam menanyakan ukuran sebelum
                mengeksekusi gaun saya. Hasil jadinya persis dengan desain
                referensi yang saya kirimkan."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0 flex items-center justify-center font-bold text-slate-600">
                  C
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Citra D.</p>
                  <p className="text-xs text-slate-500">Jahit Kebaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi dan Kontak (Fitur 4) */}
      <section id="kontak" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="p-10 md:p-12 md:w-3/5 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Siap untuk Memperbaiki Pakaian Anda?
              </h2>
              <p className="text-brand-50 mb-8 leading-relaxed">
                Tim admin dan mitra penjahit kami siap membantu segala kebutuhan
                pakaian Anda. Hubungi kami melalui WhatsApp untuk konsultasi
                cepat, penawaran harga, atau jadwal penjemputan barang.
              </p>
              <div className="space-y-4 text-brand-50">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Soreang, Kab. Bandung, Jawa Barat</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>halo@jahitkita.id</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-700 p-10 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold text-white mb-6">
                Konsultasi via WhatsApp
              </h3>
              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-700 hover:bg-slate-50 w-full py-4 px-8 rounded-lg font-bold transition-all shadow-md transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 fill-current text-green-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Hubungi Kami
              </a>
              <p className="text-brand-200 text-sm mt-4">
                Balasan cepat di jam kerja (09.00 - 17.00)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tight">
              JahitKita.
            </span>
            <p className="mt-2 text-sm">
              Platform layanan jahit & permak terintegrasi.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#kontak" className="hover:text-white transition-colors">
              Bantuan
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-sm text-center md:text-left border-t border-slate-800 pt-8">
          &copy; 2026 JahitKita. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
