import { AbstractConnector } from "@web3-react/abstract-connector";
import { ethers } from "ethers";

import { COUNTER_ADDRESS } from "../helpers/contractAddress";
import { Counter__factory } from "../typechain";

export const incrementCounter = async (connector: AbstractConnector) => {
  if (!connector) return alert("Connect Wallet!");
  const provider = new ethers.providers.Web3Provider(
    await connector.getProvider()
  );

  const signer = provider.getSigner();

  const counterContract = Counter__factory.connect(COUNTER_ADDRESS, signer);

  const tx = await counterContract.incrementCounter();
  await tx.wait();
};
