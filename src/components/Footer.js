import { Copyright } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  const d = new Date();
let year = d.getFullYear();
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: "auto",
        width: "100%",
        textAlign: "center",
        my: 5,
      }}
    >
      <Typography variant="body1">
        Daniele Bocchino | P.IVA 04038390136
      </Typography>
      <Typography variant="body2">
        {" "}
        Copyright <Copyright fontSize="5" /> {year}
      </Typography>
    </Box>
  );
}

export default Footer;
