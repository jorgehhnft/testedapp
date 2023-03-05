import { useWeb3React } from "@web3-react/core";
import React from "react";

import {
  ConnectWalletButton,
  HeaderText,
  Wrapper,
} from "./ConnectWalletPageStyles";

import { injected } from "../../components/Wallet/Connector";

const ConnectWalletPage = () => {
  const { account, activate, deactivate, active } = useWeb3React();

  async function activateMetamask() {
    try {
      await activate(injected);
      sessionStorage.setItem("isWalletConnected", "true");
    } catch (e) {
      console.log(e);
    }
  }

  async function deactivateMetamask() {
    try {
      await deactivate();
      sessionStorage.setItem("isWalletConnected", "false");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Wrapper>
      <HeaderText>{account ? account : "Unconnected"}</HeaderText>
      {!active ? (
        <ConnectWalletButton onClick={activateMetamask}>
          Connect wallet 🦊
        </ConnectWalletButton>
      ) : (
        <ConnectWalletButton onClick={deactivateMetamask}>
          Unconnect wallet 🦊
        </ConnectWalletButton>
      )}
    </Wrapper>
  );
};

export default ConnectWalletPage;
