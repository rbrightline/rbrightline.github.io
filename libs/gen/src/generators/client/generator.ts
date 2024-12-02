import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import { ClientGeneratorSchema } from './schema';
import { join } from 'path';

export async function clientGenerator(
  tree: Tree,
  options: ClientGeneratorSchema
) {
  const projectRoot = `apps`;

  generateFiles(tree, join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });

  await formatFiles(tree);
}

export default clientGenerator;
