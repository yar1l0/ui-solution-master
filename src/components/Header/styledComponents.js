import { styled } from "@mui/material/styles";
import { List, Divider } from "@mui/material";

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  padding: "0px",
  justifyContent: "center",
}));

export const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))(() => {});
