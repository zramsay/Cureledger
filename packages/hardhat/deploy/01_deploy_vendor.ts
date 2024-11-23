import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers"; // Ensuring that Contract is imported.

/**
 * Deploys a contract named "Vendor" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployVendor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // On localhost, the deployer account is the one provided by Hardhat, which is already funded.
  // When deploying on live networks (e.g., `yarn deploy --network goerli`), the deployer account
  // must have enough balance to cover the gas fees for contract creation.
  // You can generate a random account using `yarn generate`, which will populate DEPLOYER_PRIVATE_KEY
  // with a random private key in the .env file (later used in hardhat.config.ts).
  // You can use the `yarn account` command to check your balance on each network.

  // Deploy Vendor
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const dsciToken = await hre.ethers.getContract<Contract>("DsciToken", deployer);
  const dsciTokenAddress = await dsciToken.getAddress();
  await deploy("Vendor", {
    from: deployer,
    args: [dsciTokenAddress],
    log: true,
    autoMine: true, // Can be passed to the deploy function to make the deployment process faster on local networks by automatically mining the contract deployment transaction. Has no effect on live networks.
  });
  const vendor = await hre.ethers.getContract<Contract>("Vendor", deployer);
  const vendorAddress = await vendor.getAddress();

  // Transfer tokens to the Vendor
  await dsciToken.transfer(vendorAddress, hre.ethers.parseEther("1000"));

  // Transfer contract ownership to your frontend address
  await vendor.transferOwnership("0x1a29B2f286Ce79AdAD09D77b370C043E840e647B"); // Replace "**YOUR FRONTEND ADDRESS**" with the actual address of your frontend.
};

export default deployVendor;

// Tags are useful if you have multiple deployment files and only want to run one of them.
// For example, `yarn deploy --tags Vendor`
deployVendor.tags = ["Vendor"];
