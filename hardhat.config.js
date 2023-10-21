require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",

  networks: {

    'scroll-testnet': {
      url: 'https://sepolia-rpc.scroll.io/',
      accounts: [PRIVATE_KEY],
    },

  },

  etherscan: {
    apiKey: {
      "scroll-testnet": "YourKEY",
    },

    customChains: [
      {
        network: "scroll-testnet",
        chainId: 534351,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: '',
        },

      },
    ],

  },
}
