import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { MoralisProvider } from "react-moralis";

import "./index.css";
import App from "./App";
import MetamaskProvider from "./components/Wallet/MetaMaskProvider";
import ChainSwapHandler from "./utils/ChainSwapHandler";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

root.render(
  <React.StrictMode>
    {/* <MoralisProvider
      appId={process.env.REACT_APP_MORALIS_APP_ID}
      serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
    > */}
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <ChainSwapHandler>
          <Router>
            <App />
          </Router>
        </ChainSwapHandler>
      </MetamaskProvider>
    </Web3ReactProvider>
    {/* </MoralisProvider> */}
  </React.StrictMode>
);
