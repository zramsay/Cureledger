"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useWatchBalance } from "~~/hooks/scaffold-eth/useWatchBalance";
import { getTokenPrice } from "~~/utils/scaffold-eth/priceInWei";

const ClaimDsci: NextPage = () => {
  const [projectName, setProjectName] = useState<string | null>("");
  const [projectWebsite, setProjectWebsite] = useState<string | null>("");

  const { address } = useAccount();
  const { data: dsciTokenSymbol } = useScaffoldReadContract({
    contractName: "DsciToken",
    functionName: "symbol",
  });

  const { data: dsciTokenBalance } = useScaffoldReadContract({
    contractName: "DsciToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: vendorContractData } = useDeployedContractInfo("Vendor");
  const { writeContractAsync: writeVendorAsync } = useScaffoldWriteContract("Vendor");
  const { writeContractAsync: writeDesciCoreAsync } = useScaffoldWriteContract("DesciCore");

  const { data: vendorTokenBalance } = useScaffoldReadContract({
    contractName: "DsciToken",
    functionName: "balanceOf",
    args: [vendorContractData?.address],
  });

  const { data: vendorEthBalance } = useWatchBalance({ address: vendorContractData?.address });

  const { data: tokensPerEth } = useScaffoldReadContract({
    contractName: "Vendor",
    functionName: "tokensPerEth",
  });

  useEffect(() => {
    setProjectName(localStorage.getItem("project-nameInput"));
    setProjectWebsite(localStorage.getItem("project-websiteInput"));
  }, []);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        
        {/* Project Name and Website Box */}
        <div className="flex flex-col items-center bg-base-200 shadow-lg shadow-secondary-content border-8 border-secondary-content rounded-xl p-6 mb-8 w-full max-w-lg">
          <div className="text-xl font-bold">Project Information</div>
          <div className="mt-4">
            <div><strong>Project Name:</strong> {projectName || "No project name provided"}</div>
            <div><strong>Website:</strong> {projectWebsite || "No website provided"}</div>
          </div>
        </div>

        {/* Claim DSCI Tokens */}
        <div className="flex flex-col items-center space-y-4 bg-base-200 shadow-lg shadow-secondary-content border-8 border-secondary-content rounded-xl p-6 mt-8 w-full max-w-lg">
          <div className="text-xl">Claim DSCI Tokens for your DeSci Project</div>
          <button
            className="btn btn-secondary mt-2"
            onClick={async () => {
              try {
                await writeVendorAsync({ functionName: "buyTokens", value: 0 }); // Free claim
              } catch (err) {
                console.error("Error calling buyTokens function");
              }
            }}
          >
            Claim DSCI
          </button>
        </div>

        {/* DSCI-Core Redemption Box */}
        {dsciTokenBalance && dsciTokenBalance > BigInt(0) && (
          <div className="flex flex-col items-center space-y-4 bg-base-200 shadow-lg shadow-secondary-content border-8 border-secondary-content rounded-xl p-6 mt-8 w-full max-w-lg">
            <div className="text-xl">Redeem DSCI-Core License</div>
            <button
              className="btn btn-primary mt-2"
              onClick={async () => {
                try {
                  await writeDesciCoreAsync({
                    functionName: "mintLicense",
                    args: [projectName, projectWebsite, "dummyHash"], // Replace "dummyHash" with the actual hash if needed
                  });
                } catch (err) {
                  console.error("Error minting DSCI-Core License");
                }
              }}
            >
              Redeem DSCI-Core
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default ClaimDsci;
