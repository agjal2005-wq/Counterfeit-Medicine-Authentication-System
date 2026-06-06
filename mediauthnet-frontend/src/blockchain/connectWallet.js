import { ethers } from "ethers";

import {
  contractAddress,
  contractABI,
} from "./contract";

export const connectWallet = async () => {

  try {

    if (!window.ethereum) {

      alert("Please install MetaMask");

      return null;
    }

    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider =
      new ethers.providers.Web3Provider(
        window.ethereum
      );

    const signer =
      provider.getSigner();

    const contract =
      new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

    console.log(
      "✅ Contract Connected:",
      contract
    );

    return contract;

  } catch (error) {

    console.error(error);

    return null;
  }
};