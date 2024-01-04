import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const FooterTitle = styled(Typography)(({ theme, mt }) => ({
  textTransform: "uppercase",
  [theme.breakpoints.down("lg")]: {
    marginTop: mt === undefined ? "40px" : mt,
  },
}));
