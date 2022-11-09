import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Input,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import FormGroup from "../../Base/FormGroup";
import ModalTambahKeinginanViewModel from "./ModalTambahKeinginanViewModel";
import { CheckMobile } from "../../../shared/helpers";
import axios from "axios";
import { useDispatch } from "react-redux";
import { __getLists } from "../../../redux/modules/listSlice";
import Swal from "sweetalert2";
import { rupiahCurrencyFormat } from "../../../shared/helpers";

const HeaderDialog = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const InputContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`;

export default function ModalTambahKeinginan({ onClose }) {
  const { form } = ModalTambahKeinginanViewModel();
  const { isMobile } = CheckMobile();
  const watchAllFields = form.watch();
  const rootUrl = "http://localhost:3000/lists";
  const dispatch = useDispatch();

  const createLists = async ({
    namaBarang,
    linkGambar,
    deskripsiBarang,
    hargaBarang,
    jumlahBarang,
    linkPembelian,
    totalHarga,
  }) => {
    await axios.post(rootUrl, {
      namaBarang,
      linkGambar,
      deskripsiBarang,
      hargaBarang,
      jumlahBarang,
      linkPembelian,
      totalHarga,
    });
    dispatch(__getLists());
    form.reset();
  };

  const handleTambah = (data) => {
    console.log(data);
    const totalHarga = data.hargaBarang * data.jumlahBarang;
    createLists({
      namaBarang: data.namaBarang,
      linkGambar: data.linkGambar,
      deskripsiBarang: data.deskripsiBarang,
      hargaBarang: data.hargaBarang,
      jumlahBarang: data.jumlahBarang,
      linkPembelian: data.linkPembelian,
      totalHarga: totalHarga,
    });
    onClose();
    Swal.fire({
      icon: "success",
      title: "Barang Keinginan Berhasil Ditambahkan!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <Dialog open onClose={onClose} fullScreen={isMobile ? true : false}>
        <HeaderDialog>
          <h5>Tambah Keinginan</h5>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#EB6440" }} />
          </IconButton>
        </HeaderDialog>
        <DialogContent>
          <InputContainer>
            <Controller
              control={form.control}
              name="namaBarang"
              render={({ field, fieldState }) => (
                <FormGroup
                  className="my-lg-2 my-md-1 my-sm-1 my-1 w-100"
                  label="Nama Barang"
                  isRequired
                  showChildErrorSign
                  errorMessage={fieldState?.error?.message}
                  isError={!!fieldState?.error}
                >
                  <Input
                    type="text"
                    className="text-center mt-1 w-100"
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  />
                </FormGroup>
              )}
            />
            <Controller
              control={form.control}
              name="linkGambar"
              render={({ field, fieldState }) => (
                <FormGroup
                  className="my-lg-2 my-md-1 my-sm-1 my-1 w-100"
                  label="Link Gambar"
                  isRequired
                  showChildErrorSign
                  errorMessage={fieldState?.error?.message}
                  isError={!!fieldState?.error}
                >
                  <Input
                    type="text"
                    className="text-center mt-1 w-100"
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  />
                </FormGroup>
              )}
            />
            <Controller
              control={form.control}
              name="deskripsiBarang"
              render={({ field, fieldState }) => (
                <FormGroup
                  className="my-lg-2 my-md-1 my-sm-1 my-1 w-100"
                  label="Deskripsi Barang"
                  isRequired
                  showChildErrorSign
                  errorMessage={fieldState?.error?.message}
                  isError={!!fieldState?.error}
                >
                  <Input
                    type="text"
                    className="text-center mt-1 w-100"
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                    onChange={field.onChange}
                    multiline
                    {...field}
                  />
                </FormGroup>
              )}
            />
            <div className="d-flex gap-3">
              <Controller
                control={form.control}
                name="hargaBarang"
                render={({ field, fieldState }) => (
                  <FormGroup
                    className="my-lg-2 my-md-1 my-sm-1 my-1 w-100"
                    label="Harga Barang"
                    isRequired
                    showChildErrorSign
                    errorMessage={fieldState?.error?.message}
                    isError={!!fieldState?.error}
                  >
                    <Input
                      type="text"
                      className="text-center mt-1 w-100"
                      onBlur={field.onBlur}
                      ref={field.ref}
                      value={field.value}
                      onChange={field.onChange}
                      {...field}
                    />
                  </FormGroup>
                )}
              />
              <Controller
                control={form.control}
                name="jumlahBarang"
                render={({ field, fieldState }) => (
                  <FormGroup
                    className="my-lg-2 my-md-1 my-sm-1 my-1 w-100"
                    label="Jumlah Barang"
                    isRequired
                    showChildErrorSign
                    errorMessage={fieldState?.error?.message}
                    isError={!!fieldState?.error}
                  >
                    <Input
                      type="text"
                      className="text-center mt-1 w-100"
                      onBlur={field.onBlur}
                      ref={field.ref}
                      value={field.value}
                      onChange={field.onChange}
                      {...field}
                    />
                  </FormGroup>
                )}
              />
            </div>
            <Controller
              control={form.control}
              name="linkPembelian"
              render={({ field, fieldState }) => (
                <FormGroup
                  className="my-lg-2 my-md-1 my-sm-1 my-1 w-100"
                  label="Link Pembelian"
                  isRequired
                  showChildErrorSign
                  errorMessage={fieldState?.error?.message}
                  isError={!!fieldState?.error}
                >
                  <Input
                    type="text"
                    className="text-center mt-1 w-100"
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  />
                </FormGroup>
              )}
            />
          </InputContainer>
          <div className="text-end my-3">
            <span>Jumlah Harga</span>
            <h1>
              {watchAllFields.hargaBarang && watchAllFields.jumlahBarang
                ? rupiahCurrencyFormat(
                    watchAllFields.hargaBarang * watchAllFields.jumlahBarang
                  )
                : rupiahCurrencyFormat(0)}
            </h1>
          </div>
        </DialogContent>
        <DialogActions className="me-3 mb-3 gap-3">
          <Button color="secondary" onClick={onClose}>
            Kembali
          </Button>
          <Button variant="contained" onClick={form.handleSubmit(handleTambah)}>
            Tambahkan
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
