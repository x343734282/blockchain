const hre = require("hardhat");

async function main() {
  const lockedAmount = hre.ethers.utils.parseEther("1");

  const ecr = await hre.ethers.getContractAt(
    "GameItem",
    "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
  );

  //   const item = await ecr.awardItem(
  //     "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  //     "https://cdn-icons-png.flaticon.com/128/8790/8790338.png"
  //   );

  const index = await ecr.getIndex();

  console.log(`index is ${index}`);

  const owner = await ecr.ownerOf(index);

  console.log(`owner is ${JSON.stringify(owner)}`);

  const tokenURI = await ecr.tokenURI(index);

  console.log(`tokenURI is ${tokenURI}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
