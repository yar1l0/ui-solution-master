import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../../styles";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "100%",

  marginTop: "20px",
  background: Colors.body_bg,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: "20px 100px",
  borderRadius: "0px",
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 50px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
  "&:hover": {
    color: Colors.dove_gray,
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,

  // width: "380px", //"600px",
  // [theme.breakpoints.down("lg")]: {
  //   width: "300px", //"500px",
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: "220px", //"300px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "200px", //"320px",
  // },

  width: "600px",
  [theme.breakpoints.down("lg")]: {
    width: "500px",
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "68px",
  color: Colors.shaft,
  marginBottom: "20px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "56px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "38px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));
