import { join } from 'path';
import { chdir } from 'process';

export function goToWorkspace() {
  chdir(join(__dirname, '..', '..'));
}
