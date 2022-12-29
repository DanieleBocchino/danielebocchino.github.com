import { styled } from "@mui/material/styles";

export const Section = styled("div")(({ theme, props, dark = false }) => ({
  background: dark ? null : theme.palette.text.primary,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 5,
  paddingRight: 5,
  padding: '20px 25px',
  ...props,
}));

export const Title = styled("div")(({ theme, props, dark = false }) => ({
  background: "transparent",
  fontFamily: "Seymour One",
  fontStyle: "italic",
  fontWeight: 700,
  boxShadow: "none",
  ...theme.typography.h3,
  color: dark ? "white" : "#123455",
  padding: theme.spacing(1),
  ...props,
}));

export const Item = styled("div")(({ theme, props }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...props,
}));
