import { Request, Response } from 'express';
import * as ethUtil from 'ethereumjs-util';
import { generateEthereumKeys } from '../utils/ethereumUtils';


export const generateKeys = (req: Request, res: Response) => {
  const keys = generateEthereumKeys();
  res.json(keys);
};


