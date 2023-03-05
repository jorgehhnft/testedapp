import styled from "@emotion/styled";

export const Wrapper = styled("div")(() => ({
  width: "100%",
  heigh: "40%",
  background: "#a49df9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "40px",
}));

export const IncrementButton = styled("button")(() => ({
  borderRadius: "30px",
  background: "#ffe6f4",
  border: "0px solid black",
  width: "10rem",
  height: "3rem",
  boxShadow: " 2px 2px 2px 2px #ffe6f4",
  ":hover": {
    background: "#fffb7d",
    boxShadow: " 2px 2px 2px 2px #ffe6f4",
  },
}));
