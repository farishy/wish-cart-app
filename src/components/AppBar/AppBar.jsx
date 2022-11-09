import { Button, Divider } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
`;

const MenuContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  ${(p) => p.theme.breakpoints.down("md")} {
    display: none;
  }
`;

const LeftSide = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
`;

export default function AppBar({ onClick }) {
  return (
    <Container>
      <LeftSide>
        <b>Wish Cart</b>
        <MenuContainer>
          <Divider orientation="vertical" flexItem />
          <span>Beranda</span>
          <span>Tentang</span>
        </MenuContainer>
      </LeftSide>
      <RightSide>
        <Button variant="contained" size="small" onClick={onClick}>
          Tambah Keinginan
        </Button>
      </RightSide>
    </Container>
  );
}
