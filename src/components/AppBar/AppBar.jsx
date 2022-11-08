import { Divider } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
`;

const LeftSide = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const rightSide = styled.div`

`

export default function AppBar() {
  return (
    <Container>
      <LeftSide>
        <b>Wish Cart</b>
        <Divider orientation="vertical" flexItem />
        <span>Home</span>
        <span>About</span>
      </LeftSide>
      <rightSide>
        <div></div>
      </rightSide>
    </Container>
  );
}
