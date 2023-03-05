import { ethers } from "ethers";

import { COUNTER_ADDRESS } from "../helpers/contractAddress";
import { Counter__factory } from "../typechain";

export const getCounter = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-${process.env.REACT_APP_NETWORK_NAME}.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`
  );

  const counterContract = Counter__factory.connect(COUNTER_ADDRESS, provider);

  const counter = await counterContract;

  return counter;
};
