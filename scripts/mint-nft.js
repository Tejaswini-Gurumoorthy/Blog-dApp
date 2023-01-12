require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY_ALCHEMY = process.env.API_KEY_ALCHEMY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY_ALCHEMY)
const contract= require("../artifacts/contracts/Blog.sol/Blog.json");
console.log(JSON.stringify(contract.abi));