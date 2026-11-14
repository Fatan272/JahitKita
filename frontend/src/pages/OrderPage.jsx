import { useState } from "react";
import axios from "axios";

export default function OrderPage({ onBack }) {
  const [formData, setFormData] = useState({
    namaPelanggan: "",
    nomorWhatsApp: "",
    jenisLayanan: "Jahit",
    modelPakaian: "",
  });
  const [gambarReferensi, setGambarReferensi] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setGambarReferensi(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setGambarReferensi(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = new FormData();
      payload.append("namaPelanggan", formData.namaPelanggan);
      payload.append("nomorWhatsApp", formData.nomorWhatsApp);
      payload.append("jenisLayanan", formData.jenisLayanan);
      payload.append("modelPakaian", formData.modelPakaian);

      if (gambarReferensi) {
        payload.append("gambarReferensi", gambarReferensi);
      }

      const response = await axios.post(
        "http://localhost:5000/api/orders",
        payload,
      );

      setStatusMessage({
        type: "success",
        text: response.data.message,
      });

      // Reset form setelah berhasil
      setFormData({
        namaPelanggan: "",
        nomorWhatsApp: "",
        jenisLayanan: "Jahit",
        modelPakaian: "",
      });
      handleRemoveImage();
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Gagal terhubung ke server. Pastikan server backend aktif.";

      setStatusMessage({
        type: "error",
        text: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header / Navigasi Kembali */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold text-brand-600 tracking-tight">
            JahitKita.
          </span>
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              &larr; Kembali ke Beranda
            </button>
          )}
        </div>

        {/* Card Form */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-900 rounded-full text-xs font-semibold mb-3">
              Formulir Pemesanan
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Buat Pesanan Jahit & Permak
            </h1>
            <p className="text-slate-600 text-sm mt-2">
              Lengkapi detail pesanan di bawah ini. Mitra penjahit kami akan
              menghubungi Anda melalui WhatsApp untuk konfirmasi ukuran dan
              estimasi biaya.
            </p>
          </div>

          {/* Notifikasi Sukses / Error */}
          {statusMessage.text && (
            <div
              className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
                statusMessage.type === "success"
                  ? "bg-brand-50 text-brand-900 border-brand-200"
                  : "bg-red-50 text-red-800 border-red-200"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Nama Pelanggan */}
            <div>
              <label
                htmlFor="namaPelanggan"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Nama Pelanggan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="namaPelanggan"
                name="namaPelanggan"
                required
                value={formData.namaPelanggan}
                onChange={handleChange}
                placeholder="Contoh: Annisa Lestari"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            {/* 2. Nomor WhatsApp */}
            <div>
              <label
                htmlFor="nomorWhatsApp"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Nomor WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="nomorWhatsApp"
                name="nomorWhatsApp"
                required
                value={formData.nomorWhatsApp}
                onChange={handleChange}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            {/* 3. Jenis Layanan */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Jenis Layanan <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {["Jahit", "Permak"].map((layanan) => {
                  const isSelected = formData.jenisLayanan === layanan;
                  return (
                    <label
                      key={layanan}
                      className={`cursor-pointer border rounded-xl p-4 flex items-center justify-between transition ${
                        isSelected
                          ? "border-brand-600 bg-brand-50 text-brand-900 ring-1 ring-brand-600"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div>
                        <span className="block font-semibold text-sm">
                          {layanan}
                        </span>
                        <span className="block text-xs text-slate-500 mt-0.5">
                          {layanan === "Jahit"
                            ? "Buat pakaian baru"
                            : "Ubah ukuran / perbaikan"}
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="jenisLayanan"
                        value={layanan}
                        checked={isSelected}
                        onChange={handleChange}
                        className="accent-brand-600 w-4 h-4"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 4. Model Pakaian */}
            <div>
              <label
                htmlFor="modelPakaian"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Model Pakaian <span className="text-red-500">*</span>
              </label>
              <textarea
                id="modelPakaian"
                name="modelPakaian"
                rows="4"
                required
                value={formData.modelPakaian}
                onChange={handleChange}
                placeholder="Jelaskan detail model pakaian, jenis bahan, ukuran, atau bagian yang ingin dipermak..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            {/* 5. Gambar Referensi */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Gambar Referensi{" "}
                <span className="text-slate-400 font-normal">(Opsional)</span>
              </label>

              {!previewUrl ? (
                <label
                  htmlFor="gambarReferensi"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition"
                >
                  <svg
                    className="w-8 h-8 text-slate-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">
                    Klik untuk unggah foto model pakaian
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    JPG, PNG, atau WEBP (Maks. 5MB)
                  </span>
                  <input
                    id="gambarReferensi"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src={previewUrl}
                    alt="Preview Model Pakaian"
                    className="w-full max-h-64 object-contain mx-auto"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-md hover:bg-slate-900 transition"
                  >
                    Hapus Foto
                  </button>
                </div>
              )}
            </div>

            {/* 6. Tombol Kirim */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-brand-500 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Mengirim Pesanan..." : "Kirim Pesanan"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
