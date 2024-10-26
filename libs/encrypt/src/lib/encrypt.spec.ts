import { encrypt } from './encrypt';

describe('encrypt', () => {
  it('should work', () => {
    expect(encrypt()).toEqual('encrypt');
  })
})
