import { execSync } from 'child_process';
import { goToLibrary } from './go-to-library';

export function build(lib: string) {
  goToLibrary(lib);
  execSync(`npx nx build ${lib}`);
}
