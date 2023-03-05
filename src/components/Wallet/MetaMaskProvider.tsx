import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

import { injected } from "./Connector";

const MetamaskProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { activate } = useWeb3React();

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (sessionStorage.getItem("isWalletConnected") === "true") {
        try {
          activate(injected);
          sessionStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);
  return children;
};

export default MetamaskProvider;
