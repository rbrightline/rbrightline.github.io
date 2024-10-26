import { Property } from './property';

describe('Property', () => {
  it('should work', () => {
    class Abc {
      @Property({ type: 'string' })
      value: any;
    }
    expect(new Abc()).toBeTruthy();
  });
});
