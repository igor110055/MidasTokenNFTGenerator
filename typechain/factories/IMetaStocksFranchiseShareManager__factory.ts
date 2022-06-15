/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMetaStocksFranchiseShareManager,
  IMetaStocksFranchiseShareManagerInterface,
} from "../IMetaStocksFranchiseShareManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "enum MetaStocksFranchiseType",
        name: "_metaStocksFranchiseType",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createMetaStocksFranchise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMetaStocksFranchiseShareManager__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaStocksFranchiseShareManagerInterface {
    return new utils.Interface(
      _abi
    ) as IMetaStocksFranchiseShareManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaStocksFranchiseShareManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMetaStocksFranchiseShareManager;
  }
}
