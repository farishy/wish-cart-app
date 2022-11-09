import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Input,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import FormGroup from "../../Base/FormGroup";
import ModalUpdateKeinginanViewModel from "./ModalUpdateKeinginanViewModel";
import { useDispatch } from "react-redux";
import { __getLists } from "../../../redux/modules/listSlice";
import { CheckMobile } from "../../../shared/helpers";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

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

export default function ModalUpdateKeinginan({
  id,
  onClose,
  onOpen,
  namaBarang,
  deskripsiBarang,
  hargaBarang,
  jumlahBarang,
  linkPembelian,
  totalHarga,
}) {
  const { form } = ModalUpdateKeinginanViewModel();
  const { isMobile } = CheckMobile();
  const watchAllFields = form.watch();
  const rootUrl = "http://localhost:3000/lists";
  const dispatch = useDispatch();

  useEffect(() => {
    form.setValue("id", id);
    form.setValue("namaBarang", namaBarang);
    form.setValue("deskripsiBarang", deskripsiBarang);
    form.setValue("hargaBarang", hargaBarang);
    form.setValue("jumlahBarang", jumlahBarang);
    form.setValue("linkPembelian", linkPembelian);
  }, [form.setValue]);

  const handleUpdate = (data) => {
    const totalHarga = data.hargaBarang * data.jumlahBarang;
    console.log(data);
    onClose();
    Swal.fire({
      text: "Anda yakin ingin mengubah barang keinginan ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6D9886",
      cancelButtonColor: "#F73859",
      confirmButtonText: "Ya, Ubah Barang!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.patch(`${rootUrl}/${data.id}`, {
          namaBarang: data.namaBarang,
          deskripsiBarang: data.deskripsiBarang,
          hargaBarang: data.hargaBarang,
          jumlahBarang: data.jumlahBarang,
          linkPembelian: data.linkPembelian,
          totalHarga: totalHarga,
        });
        dispatch(__getLists());
        Swal.fire({
          icon: "success",
          title: "Barang Keinginan Berhasil Diubah!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        onOpen();
      }
    });
  };

  // const handleUpdate = (id) => async () => {

  // };

  return (
    <>
      <Dialog open onClose={onClose} fullScreen={isMobile ? true : false}>
        <HeaderDialog>
          <h5>Ubah Barang Keinginan</h5>
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
                    multiline
                    {...field}
                  />
                </FormGroup>
              )}
            />
            <div className="d-flex gap-5">
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
                    {...field}
                  />
                </FormGroup>
              )}
            />
          </InputContainer>
          <div className="text-end my-3">
            <span>Jumlah Harga</span>
            <h1>
              Rp
              {watchAllFields.hargaBarang && watchAllFields.jumlahBarang
                ? watchAllFields.hargaBarang * watchAllFields.jumlahBarang
                : 0}
            </h1>
          </div>
        </DialogContent>
        <DialogActions className="me-3 mb-3 gap-3">
          <Button color="secondary" onClick={onClose}>
            Kembali
          </Button>
          <Button variant="contained" onClick={form.handleSubmit(handleUpdate)}>
            Ubah
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
