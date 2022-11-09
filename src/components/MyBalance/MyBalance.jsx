import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { rupiahCurrencyFormat } from "../../shared/helpers";

const Container = styled.div`
  border-radius: 16px;
  padding: 1rem;
  ${(p) => p.theme.breakpoints.down("md")} {
    padding: 1rem 0;
  }
  /* background-color: #f7f7f7; */
`;

const InnerContainer = styled.div`
  background-color: #f1fffc;
  border-radius: 2rem;
  padding: 1.5rem;
  ${(p) => p.theme.breakpoints.down("md")} {
    padding: 1rem 0;
    border-radius: 1rem;
  }
`;

export default function MyBalance({ onClick }) {
  return (
    <Container>
      <InnerContainer>
        <div className="text-center">
          <div className="mb-1">
            Hello <b>Miechan</b>,
          </div>
          <h6>Tabungan Saat Ini</h6>
          <h1 style={{ color: "#328380" }}>{rupiahCurrencyFormat(1000000)}</h1>
          <Button variant="outlined" className="my-2" onClick={onClick}>
            Update Tabungan
          </Button>
        </div>
      </InnerContainer>
    </Container>
  );
}
