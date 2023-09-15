import { generateEthereumKeys } from '../utils/ethereumUtils';
import * as ethUtil from 'ethereumjs-util';

describe('Ethereum Utils - Key Generation', () => {
  it('should generate private and public keys', () => {
    const keys = generateEthereumKeys();
    expect(keys.privateKey).toBeDefined();
    expect(keys.publicKey).toBeDefined();
  });

  it('should generate valid key lengths', () => {
    const keys = generateEthereumKeys();
    expect(keys.privateKey.length).toBe(64); 
    expect(keys.publicKey.length).toBe(130); 
  });

  it('should derive the public key from the private key', () => {
    const keys = generateEthereumKeys();
    const derivedPublicKey = ethUtil.privateToPublic(Buffer.from(keys.privateKey, 'hex')).toString('hex');
    expect(derivedPublicKey).toBe(keys.publicKey);
  });
});
