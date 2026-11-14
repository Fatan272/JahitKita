import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    namaPelanggan: {
      type: String,
      required: [true, "Nama pelanggan wajib diisi"],
      trim: true,
    },
    nomorWhatsApp: {
      type: String,
      required: [true, "Nomor WhatsApp wajib diisi"],
      trim: true,
    },
    jenisLayanan: {
      type: String,
      enum: ["Jahit", "Permak"],
      required: [true, "Jenis layanan wajib dipilih"],
    },
    modelPakaian: {
      type: String,
      required: [true, "Deskripsi model pakaian wajib diisi"],
      trim: true,
    },
    gambarReferensi: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["Menunggu Konfirmasi", "Diproses", "Selesai", "Dibatalkan"],
      default: "Menunggu Konfirmasi",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
