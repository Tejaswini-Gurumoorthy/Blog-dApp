/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan")
const{GOERLI_TESTNET, PRIVATE_KEY}= process.env;
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: GOERLI_TESTNET,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  etherscan:{
    apiKey: process.env.API_KEY,
  }
};
