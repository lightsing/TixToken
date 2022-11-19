import { ethers } from "hardhat";

async function main() {
  const TixToken = await ethers.getContractFactory("TixToken");
  const token = await TixToken.deploy();
  await token.deployed();
  console.log("tx hash", token.deployTransaction.hash);
  console.log("token address", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
