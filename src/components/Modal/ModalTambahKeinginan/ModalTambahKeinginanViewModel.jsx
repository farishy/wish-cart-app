import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ModalTambahKeinginanViewModel() {
  const schema = yup.object({
    namaBarang: yup.string().required("Masukkan Nama Barang"),
    deskripsiBarang: yup.string().required("Masukkan Deskripsi Barang"),
    linkGambar: yup
      .string()
      .required("Masukkan Link Gambar Barang")
      .matches(
        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        "Link Gambar Tidak Valid"
      ),
    hargaBarang: yup
      .string()
      .required("Masukkan Harga Barang")
      .test("is-valid-num", `Harga Harus Angka`, (val) => {
        return !isNaN(val);
      })
      .test({
        name: "more-than",
        message: "Minimal Harga Rp0",
        test(val) {
          return val >= 0;
        },
      }),
    jumlahBarang: yup
      .string()
      .required("Masukkan Jumlah Barang")
      .test("is-valid-num", `Harga Harus Angka`, (val) => {
        return !isNaN(val);
      })
      .test({
        name: "more-than",
        message: "Minimal Berjumlah 1",
        test(val) {
          return val >= 1;
        },
      }),
    linkPembelian: yup
      .string()
      .required("Masukkan Link Pembelian Barang")
      .matches(
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        "Link Pembelian Tidak Valid"
      ),
  });

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return {
    form,
  };
}
