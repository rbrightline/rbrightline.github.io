import { join } from 'path';
import { chdir } from 'process';

export function goToLibrary(lib: string) {
  chdir(join(__dirname, '..', '..', 'libs', lib));
}
