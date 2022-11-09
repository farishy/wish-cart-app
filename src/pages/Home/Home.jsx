import AppBar from "../../components/AppBar/AppBar";
import homepage_img from "../../assets/img_1.png";
import MyBalance from "../../components/MyBalance/MyBalance";
import { Button, Divider } from "@mui/material";
import WishCard from "../../components/Card/WistCard";
import styled from "@emotion/styled";
import ModalUpdateBalance from "../../components/Modal/ModalUpdateBalance";
import { useEffect, useState } from "react";
import ModalTambahKeinginan from "../../components/Modal/ModalTambahKeinginan/ModalTambahKeinginan";
import { useDispatch, useSelector } from "react-redux";
import { __getLists } from "../../redux/modules/listSlice";
import ModalUpdateKeinginan from "../../components/Modal/ModalUpdateKeinginan/ModalUpdateKeinginan";
const Greeting = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  ${(p) => p.theme.breakpoints.down("md")} {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;

const GreetingText = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding: 4rem;
  ${(p) => p.theme.breakpoints.down("md")} {
    padding: 1rem;
    order: 2;
  }
`;

const GreetingImage = styled.div`
  .image_home {
    width: 100%;
    height: 100%;
  }
`;

const WishContainer = styled.div`
  padding: 1.5rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  row-gap: 1.5rem;
  column-gap: 1.5rem;
  ${(p) => p.theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }
  ${(p) => p.theme.breakpoints.down("md")} {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  ${(p) => p.theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
  }
`;

export default function Home() {
  const dispatch = useDispatch();
  const { lists, isLoading, error } = useSelector((state) => state.lists);

  useEffect(() => {
    dispatch(__getLists());
  }, [dispatch]);

  console.log(lists, "list here");
  if (isLoading) {
    console.log("loading");
  }

  if (isLoading) {
    console.log(JSON.stringify(error));
  }

  const [showModalUpdateBalance, setShowModalUpdateBalance] = useState(false);
  const [showModalTambahKeinginan, setShowModalTambahKeinginan] =
    useState(false);
  const [showModalUpdateKeinginan, setShowModalUpdateKeinginan] =
    useState(false);

  const [selectedId, setSelectedId] = useState("");
  const [selectedLinkGambar, setSelectedLinkGambar] = useState("");
  const [selectedNamaBarang, setSelectedNamaBarang] = useState("");
  const [selectedDeskripsiBarang, setSelectedDeskripsiBarang] = useState("");
  const [selectedHargaBarang, setSelectedHargaBarang] = useState("");
  const [selectedJumlahBarang, setSelectedJumlahBarang] = useState("");
  const [selectedLinkPembelian, setSelectedLinkPembelian] = useState("");
  const [selectedTotalHarga, setSelectedTotalHarga] = useState("");

  const handleClickUpdateBtn = ({
    id,
    namaBarang,
    linkGambar,
    deskripsiBarang,
    hargaBarang,
    jumlahBarang,
    linkPembelian,
    totalHarga,
  }) => {
    setSelectedId(id);
    setSelectedNamaBarang(namaBarang);
    setSelectedLinkGambar(linkGambar);
    setSelectedDeskripsiBarang(deskripsiBarang);
    setSelectedHargaBarang(hargaBarang);
    setSelectedJumlahBarang(jumlahBarang);
    setSelectedLinkPembelian(linkPembelian);
    setSelectedTotalHarga(totalHarga);
    setShowModalUpdateKeinginan(true);
  };

  return (
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "100vh",
      }}
    >
      {showModalUpdateBalance && (
        <ModalUpdateBalance onClose={() => setShowModalUpdateBalance(false)} />
      )}
      {showModalTambahKeinginan && (
        <ModalTambahKeinginan
          onClose={() => setShowModalTambahKeinginan(false)}
        />
      )}
      {showModalUpdateKeinginan && (
        <ModalUpdateKeinginan
          id={selectedId}
          namaBarang={selectedNamaBarang}
          linkGambar={selectedLinkGambar}
          deskripsiBarang={selectedDeskripsiBarang}
          hargaBarang={selectedHargaBarang}
          jumlahBarang={selectedJumlahBarang}
          linkPembelian={selectedLinkPembelian}
          totalHarga={selectedTotalHarga}
          onClose={() => setShowModalUpdateKeinginan(false)}
          onOpen={() => setShowModalUpdateKeinginan(true)}
        />
      )}
      <AppBar onClick={() => setShowModalTambahKeinginan(true)} />
      <Greeting>
        <GreetingText>
          <h1 className="mb-3">Wish Cart &#128722;</h1>
          <h3 className="text-secondary mb-3">
            Kepingin dulu aja, belinya bisa kapan aja!
          </h3>
          <p>
            Wish Cart merupakan solusi menampung barang keinginanmu dan tracking
            dana untuk membeli barangnya.
          </p>
          <MyBalance onClick={() => setShowModalUpdateBalance(true)} />
        </GreetingText>
        <GreetingImage>
          <img className="image_home" alt="homepage_img" src={homepage_img} />
        </GreetingImage>
      </Greeting>
      <Divider variant="middle" />
      <WishContainer>
        <h5 className="mb-4">Daftar Keinginan</h5>
        <CardContainer>
          {lists.map((list, idx) => (
            <WishCard
              key={idx}
              id={list.id}
              gambar={list.linkGambar}
              namaBarang={list.namaBarang}
              deskripsiBarang={list.deskripsiBarang}
              hargaBarang={list.hargaBarang}
              jumlahBarang={list.jumlahBarang}
              linkPembelian={list.linkPembelian}
              totalHarga={list.totalHarga}
              updateButton={
                <Button
                  size="small"
                  variant="outlined"
                  color="warning"
                  onClick={() =>
                    handleClickUpdateBtn({
                      id: list.id,
                      namaBarang: list.namaBarang,
                      linkGambar: list.linkGambar,
                      deskripsiBarang: list.deskripsiBarang,
                      hargaBarang: list.hargaBarang,
                      jumlahBarang: list.jumlahBarang,
                      linkPembelian: list.linkPembelian,
                      totalHarga: list.totalHarga,
                    })
                  }
                >
                  Ubah Keinginan
                </Button>
              }
            />
          ))}
        </CardContainer>
      </WishContainer>
      <div style={{ padding: "3rem" }}></div>
    </div>
  );
}
