import styled from "@emotion/styled";

export const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const HeaderText = styled("h2")(() => ({
  fontSize: "24px",
}));

export const ConnectWalletButton = styled("button")(() => ({
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
