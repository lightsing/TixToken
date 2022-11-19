import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import keys from "./config";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: keys.etherscanKey,
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${keys.infuraKey}`,
      accounts: [keys.privateKey]
    }
  }
};

export default config;
