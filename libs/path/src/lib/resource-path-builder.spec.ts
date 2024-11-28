import { ResourcePathBuilder } from './resource-path-builder';

describe('ResourcePathBuilder', () => {
  describe('Without Prefix', () => {
    it('should build the resource paths', () => {
      const paths = new ResourcePathBuilder({
        singular: 'sample',
      });

      expect(paths.SINGULAR).toBe('sample');
      expect(paths.PLURAL).toBe('samples');
      expect(paths.RELATION).toBe('sample/:id/:rn');
      expect(paths.RELATION_ID).toBe('sample/:id/:rn/:rid');
      expect(paths.ID).toBe('sample/:id');
    });
  });
  describe('Prefix', () => {
    it('should build the resource paths', () => {
      const paths = new ResourcePathBuilder({
        singular: 'sample',
        prefix: 'api',
      });

      expect(paths.SINGULAR).toBe('api/sample');
      expect(paths.PLURAL).toBe('api/samples');
      expect(paths.RELATION).toBe('api/sample/:id/:rn');
      expect(paths.RELATION_ID).toBe('api/sample/:id/:rn/:rid');
      expect(paths.ID).toBe('api/sample/:id');
    });
  });
});
