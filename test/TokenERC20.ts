import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { TokenERC20, TokenERC20__factory } from "../typechain-types";
import { ContractTransaction } from "ethers";

describe("TokenERC20", function () {
  async function deployOneYearLockFixture() {
    const signers = await ethers.getSigners();
    const owner = signers[0];
    const contract: TokenERC20 = await new TokenERC20__factory(owner).deploy();
    const text: string = await contract.texto();
    const info: number = await contract.informacion();
    const addressOwner: string = await contract.owner();
    console.log(text, info, addressOwner);
    return { contract, owner };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { contract, owner } = await loadFixture(deployOneYearLockFixture);
      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  describe("Development", function () {
    it("change text", async function () {
      const { contract } = await loadFixture(deployOneYearLockFixture);
      const texto: string = await contract.texto();
      const textVariable: string = "adios";
      const tx: ContractTransaction = await contract.changeTexto(textVariable);
      tx.wait();
      const newTexto: string = await contract.texto();
      expect(texto).not.equal(newTexto);
      expect(textVariable).to.equal(newTexto);
    });
  });
});
