import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { __getLists } from "../../redux/modules/listSlice";
import { rupiahCurrencyFormat } from "../../shared/helpers";

export default function WishCard({
  id,
  gambar,
  namaBarang,
  deskripsiBarang,
  hargaBarang,
  jumlahBarang,
  linkPembelian,
  totalHarga,
  updateButton,
}) {
  const rootUrl = "https://expensive-coal-frog.glitch.me/lists";
  const dispatch = useDispatch();

  const handleLinkPembelian = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleHapusBarang = (id) => async () => {
    Swal.fire({
      text: "Anda yakin ingin menghapus keinginan barang ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6D9886",
      cancelButtonColor: "#F73859",
      confirmButtonText: "Ya, Hapus Keinginan!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${rootUrl}/${id}`);
        dispatch(__getLists());
      }
    });
  };

  return (
    <Card>
      <CardMedia component="img" alt="gambar" height="300px" image={gambar} />
      <CardContent className="d-grid gap-1">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ maxHeight: "150px" }}
        >
          {namaBarang}
        </Typography>
        <div className="d-flex gap-1 justify-content-between align-items-center">
          <Typography gutterBottom component="div">
            Harga perItem
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {rupiahCurrencyFormat(hargaBarang)}
          </Typography>
        </div>
        <Divider />
        <div className="d-flex gap-1 justify-content-between align-items-center">
          <Typography gutterBottom component="div">
            Jumlah
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {jumlahBarang}
          </Typography>
        </div>
        <Divider />
        <Typography gutterBottom component="div">
          Deskripsi
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "200px" }}
        >
          {deskripsiBarang}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-end mt-3"
        >
          {rupiahCurrencyFormat(totalHarga)}
        </Typography>
      </CardContent>
      <div className="m-3 d-grid gap-2">
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => handleLinkPembelian(linkPembelian)}
        >
          Link Pembelian
        </Button>
        <Button size="small" variant="outlined">
          Sudah Dibeli
        </Button>
        {updateButton}
        <Button
          size="small"
          variant="outlined"
          color="danger"
          onClick={handleHapusBarang(id)}
        >
          Hapus Keinginan
        </Button>
      </div>
    </Card>
  );
}
