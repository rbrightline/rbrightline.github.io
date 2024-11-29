import {
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ApiGeneratorSchema } from './schema';

export async function apiGenerator(tree: Tree, options: ApiGeneratorSchema) {
  const projectRoot = `apps`;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name)
  });
  await formatFiles(tree);
}

export default apiGenerator;
