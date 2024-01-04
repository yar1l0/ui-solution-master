import React from "react";
import {
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { itemData } from "./data";

function Content() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.only("xs"));
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box display={"flex"} justifyContent="center" pt={3}>
        <Typography variant="h4" color={Colors.shaft}>
          Waiting for their owners
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <ImageList
            variant="masonry"
            cols={isPhone ? 1 : isPad ? 2 : 3}
            gap={16}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`../../images/${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  sx={{
                    opacity: "40%",
                    color: Colors.black,
                    "&:hover": {
                      opacity: "90%",
                    },
                    p: 0,
                  }}
                  actionIcon={
                    <IconButton
                      size="small"
                      edge="start"
                      opacity="100%"
                      sx={{
                        color: Colors.dove_gray,
                        "&:hover": {
                          color: Colors.secondary,
                          bgcolor: Colors.shaft,
                        },
                      }}
                    >
                      <FavoriteIcon opacity="100%" />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </>
  );
}

export default Content;
