import { generateEthereumKeys, getEthereumAddressFromPublicKey } from '../utils/ethereumUtils';
import * as ethUtil from 'ethereumjs-util';

describe('Key Generation', () => {
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
    let derivedPublicKey = ethUtil.privateToPublic(Buffer.from(keys.privateKey, 'hex')).toString('hex');
  
    if (!derivedPublicKey.startsWith('04')) {
      derivedPublicKey = '04' + derivedPublicKey;
    }
  
    expect(derivedPublicKey).toBe(keys.publicKey);
  });
  
});

describe('Address Generation', () => {
  it('should generate a valid Ethereum address from a public key', () => {
    const keys = generateEthereumKeys();
    const address = getEthereumAddressFromPublicKey(keys.publicKey);
    expect(address).toBeDefined();
    expect(address.length).toBe(42); 
    expect(address.startsWith('0x')).toBe(true);
  });
});