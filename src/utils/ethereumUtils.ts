import * as ethUtil from 'ethereumjs-util';
import * as crypto from 'crypto';

export const generateEthereumKeys = () => {
  const privateKeyBuffer = crypto.randomBytes(32);
  const privateKey = privateKeyBuffer.toString('hex');
  let publicKey = ethUtil.privateToPublic(privateKeyBuffer).toString('hex');

  if (!publicKey.startsWith('04')) {
    publicKey = '04' + publicKey;
  }

  return {
    privateKey,
    publicKey
  };
};


export const getEthereumAddressFromPublicKey = (publicKey: string) => {
  const publicKeyBuffer = Buffer.from(publicKey, 'hex');
  const addressBuffer = ethUtil.publicToAddress(publicKeyBuffer, true);
  return '0x' + addressBuffer.toString('hex');
};
