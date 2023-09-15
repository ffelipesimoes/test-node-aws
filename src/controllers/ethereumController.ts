import { Request, Response } from 'express';
import * as ethUtil from 'ethereumjs-util';
import { generateEthereumKeys } from '../utils/ethereumUtils';


export const generateKeys = (req: Request, res: Response) => {
  const keys = generateEthereumKeys();
  res.json(keys);
};

export const getEthereumAddress = (req: Request, res: Response) => {
  const { publicKey }: { publicKey: string } = req.body;
  const publicKeyBuffer = Buffer.from(publicKey, 'hex'); 
  const addressBuffer = ethUtil.publicToAddress(publicKeyBuffer, true);
  const address = '0x' + addressBuffer.toString('hex'); 
  res.json({ address });
};
