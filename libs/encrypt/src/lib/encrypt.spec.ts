import { encode, decode, hash } from './encrypt';

describe('encrypt', () => {
  it('should encode and decode', () => {
    const encoded = encode('sample');
    expect(encoded.data).not.toBe('sample');
    expect(decode(encoded)).toBe('sample');
  });

  it('should hash', () => {
    const encoded = hash('sample');
    expect(encoded).not.toBe('sample');
  });
});
