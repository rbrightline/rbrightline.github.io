import { LocalFile } from './local-file';
import { mkdirSync, rmSync, writeFileSync } from 'fs';

const testFilePath = 'tmp/fs/file.json';
const testFileContent = 'content';
const updatedContent = 'updatedContent';

describe('LocalFile', () => {
  beforeAll(() => {
    try {
      mkdirSync('tmp/fs', { recursive: true });
      writeFileSync(testFilePath, testFileContent);
    } catch (err) {}
  });

  afterAll(() => {
    try {
      rmSync('tmp/fs', { recursive: true });
    } catch (err) {}
  });
  describe('regular', () => {
    it('should read from file', () => {
      const file = new LocalFile(testFilePath);
      file.get();
      writeFileSync(testFilePath, updatedContent);
      expect(file.get()).toBe(updatedContent);
    });
  });

  describe('cache', () => {
    it('should read file from the cache', () => {
      const file = new LocalFile(testFilePath, { cache: true });
      const content = file.get();
      writeFileSync(testFilePath, updatedContent);
      expect(file.get()).toBe(content);
    });
  });
});
