import { styled } from "@mui/material/styles";

export const Section = styled("div")(({ theme, props, dark = false }) => ({
  background: dark ? null : theme.palette.text.primary,
  padding: '20px 15px',
  ...props,
}));

export const Title = styled("div")(({ theme, props, dark = false }) => ({
  background: "transparent",
  
  boxShadow: "none",
  ...theme.typography.h3,
  color: dark ? "white" : "#123455",
  padding: theme.spacing(1),
  fontFamily: "PermanentMarker",
  ...props,
}));

export const Item = styled("div")(({ theme, props }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...props,
}));
