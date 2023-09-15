import * as ethUtil from 'ethereumjs-util';
import * as crypto from 'crypto';

export const generateEthereumKeys = () => {
  const privateKeyBuffer = crypto.randomBytes(32);
  const privateKey = privateKeyBuffer.toString('hex');
  const publicKey = ethUtil.privateToPublic(privateKeyBuffer).toString('hex');

  return {
    privateKey,
    publicKey
  };
};
