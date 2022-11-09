import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { CheckMobile } from "../../shared/helpers";
import modal_img from "../../assets/img_3.png";
import styled from "@emotion/styled";

const ImageDialog = styled.div`
  margin-left: auto;
  margin-right: auto;
  .image_dialog {
    width: 300px;
    height: auto;
    ${(p) => p.theme.breakpoints.down("sm")} {
      display: flex;
      width: 100%;
      height: auto;
      /* display: none; */
    }
  }
`;

export default function ModalUpdateBalance({ onClose }) {
  const { isMobile } = CheckMobile();
  return (
    <Dialog open onClose={onClose} fullScreen={isMobile ? true : false}>
      <DialogTitle>Balance</DialogTitle>
      <ImageDialog>
        <img className="image_dialog" alt="modal_img" src={modal_img} />
      </ImageDialog>
      <DialogContent>
        <DialogContentText>
          Ayo catat saldo tabungan untuk membeli barang keinginan
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="mybalance"
          label="Tabungan Saat ini"
          type="text"
          fullWidth
          variant="standard"
          className="my-3"
        />
      </DialogContent>
      <DialogActions className="me-3 mb-3 gap-3">
        <Button color="secondary" onClick={onClose}>
          Kembali
        </Button>
        <Button variant="contained" onClick={onClose}>
          Update Tabungan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
