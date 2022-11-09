import { createTheme } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6D9886",
    },
    secondary: {
      main: "#393E46",
    },
    danger: {
      main: "#F73859",
    },
    warning: {
        main: "#F1D18A",
      },
  },
});
