/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMetaStocksFranchise,
  IMetaStocksFranchiseInterface,
} from "../IMetaStocksFranchise";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum MetaStocksFranchiseType",
        name: "_metaStocksFranchiseType",
        type: "uint8",
      },
    ],
    name: "getMetaStocksFranchiseType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMetaStocksFranchise__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaStocksFranchiseInterface {
    return new utils.Interface(_abi) as IMetaStocksFranchiseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaStocksFranchise {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMetaStocksFranchise;
  }
}
