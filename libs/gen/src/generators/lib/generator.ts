import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { LibGeneratorSchema } from './schema';

export async function libGenerator(tree: Tree, options: LibGeneratorSchema) {
  const projectRoot = `libs`;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });
  await formatFiles(tree);
}

export default libGenerator;
