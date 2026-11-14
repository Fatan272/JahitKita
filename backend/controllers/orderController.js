import fs from "fs";
import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { namaPelanggan, nomorWhatsApp, jenisLayanan, modelPakaian } =
      req.body;

    if (!namaPelanggan || !nomorWhatsApp || !jenisLayanan || !modelPakaian) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: "Semua kolom wajib diisi kecuali gambar referensi.",
      });
    }

    const gambarReferensi = req.file ? `/uploads/${req.file.filename}` : null;

    const newOrder = await Order.create({
      namaPelanggan,
      nomorWhatsApp,
      jenisLayanan,
      modelPakaian,
      gambarReferensi,
    });

    res.status(201).json({
      success: true,
      message:
        "Pesanan berhasil dikirim! Tim kami akan segera menghubungi Anda.",
      data: newOrder,
    });
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({
      success: false,
      message: error.message || "Terjadi kesalahan saat menyimpan pesanan.",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data pesanan.",
    });
  }
};
