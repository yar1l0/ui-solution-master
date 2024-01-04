import React from "react";
import { Box, Typography } from "@mui/material";

function Logo() {
  return (
    <Box pb="14px" minWidth="330px">
      <Typography
        variant="h1"
        color={"secondary"}
        fontFamily={'"Allison", "cursive"'}
      >
        Cats & friends
      </Typography>
    </Box>
  );
}

export default Logo;
