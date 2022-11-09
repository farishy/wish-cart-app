import { useMediaQuery } from "@mui/material";
import { theme } from "../theme";

export const CheckMobile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return { isMobile };
};
