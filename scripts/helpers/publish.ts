import { execSync } from 'child_process';
import { goToLibrary } from './go-to-library';

export function publish(lib: string) {
  goToLibrary(lib);
  execSync('npm publish');
}
