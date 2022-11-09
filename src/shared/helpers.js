import { useMediaQuery } from "@mui/material";
import { theme } from "../theme";

export const CheckMobile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return { isMobile };
};

export function rupiahCurrencyFormat(num) {
  return (
    "Rp" +
    Number(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}
