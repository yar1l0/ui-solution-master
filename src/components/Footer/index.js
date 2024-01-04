import { Typography, Grid, Box, ListItemText, List } from "@mui/material";
import React from "react";
import { Colors } from "../../styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterTitle } from "./styledComponents";

function Footer() {
  return (
    <Box
      display={"flex"}
      padding={3}
      margin={3}
      bgcolor={Colors.shaft}
      color={Colors.dove_gray}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignSelf={"center"}
      >
        <Grid item xs={12} lg={6}>
          <FooterTitle variant="body1" mt={0}>
            About us
          </FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Lorem ipsum
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <FooterTitle variant="body1">My account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Initiatives and projects
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Favorite animals
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
