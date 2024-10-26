import { PathBuilder } from './path-builder';

function shouldBuildPaths(prefix?: string) {
  const p = new PathBuilder({
    singular: 'cat',
    prefix,
  });

  const pPrefix = prefix ? prefix + '/' : '';

  expect(p.SINGULAR).toBe(pPrefix + `cat`);
  expect(p.PLURAL).toBe(pPrefix + `cats`);
  expect(p.ID).toBe(pPrefix + `cat/:id`);
  expect(p.RELATION).toBe(pPrefix + `cat/:id/:rn/:rid`);
  expect(p.UNSET_RELATION).toBe(pPrefix + `cat/:id/:rn`);
}

describe('PathBuilder', () => {
  it('should build the path', () => shouldBuildPaths());
  it('should build the path with prefix', () => shouldBuildPaths('api'));
});
