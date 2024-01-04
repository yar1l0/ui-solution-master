import React from "react";
import {
  Drawer,
  Box,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "./Logo";
import IconActions from "./IconActions";
import { Colors } from "../../styles";
import { MiddleDivider } from "./styledComponents";

function MobileMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        display={"inline-flex"}
        justifyContent="space-between"
        alignItems={"center"}
        pl={"30px"}
      >
        <IconButton
          onClick={() => setIsDrawerOpen(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          width="10%"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="250px" role="presentation" textAlign="center">
            <List>
              <ListItemButton>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
              <MiddleDivider />
              <ListItemButton>
                <ListItemText>Volonteer</ListItemText>
              </ListItemButton>
              <MiddleDivider />
              <ListItemButton>
                <Accordion
                  sx={{
                    width: "100%",
                    backgroundColor: Colors.dark,
                    color: Colors.dove_gray,
                    boxShadow: 0,
                    ml: 0,
                  }}
                  classes={{ ml: 0 }}
                  expanded={expanded === "panel1"}
                  onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel1")
                  }
                >
                  <AccordionSummary
                    id="panel1-header"
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: Colors.dove_gray,
                        }}
                      />
                    }
                    sx={{
                      pl: 0,
                    }}
                  >
                    <Typography>Stories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <MiddleDivider />
                    <ListItemButton>
                      <ListItemText>Blog</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                      <ListItemText>Podcast</ListItemText>
                    </ListItemButton>
                  </AccordionDetails>
                </Accordion>
              </ListItemButton>
              <MiddleDivider />
              <ListItemButton>
                <ListItemText>Login</ListItemText>
              </ListItemButton>
              <MiddleDivider />
              <ListItemButton>
                <ListItemText>Contact Us</ListItemText>
              </ListItemButton>
              <MiddleDivider />
            </List>
          </Box>
        </Drawer>

        <Toolbar sx={{ display: "inline", justifyContent: "space-evenly" }}>
          <Logo />
        </Toolbar>
        <Box />
      </Box>
      <IconActions />
    </>
  );
}

export default MobileMenu;
