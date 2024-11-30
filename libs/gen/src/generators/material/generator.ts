import {
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { MaterialGeneratorSchema } from './schema';

export async function materialGenerator(
  tree: Tree,
  options: MaterialGeneratorSchema
) {
  const projectRoot = `libs`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name)
  });
  await formatFiles(tree);
}

export default materialGenerator;
