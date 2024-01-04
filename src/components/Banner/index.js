import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerShopButton,
} from "./styledComponents";


function Banner() {
  return (
    <BannerContainer>
      <BannerImage src="../../images/banner-cat1.png"></BannerImage>
      <BannerContent>
        <Typography variant="h5"> Our motto</Typography>
        <BannerTitle variant="h2">Help animals</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BannerDescription>
        <BannerShopButton color="primary" variant="contained">
          Donate
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
