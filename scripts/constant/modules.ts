import { libs } from './libs';

export function modules() {
  return ['page', 'tool', 'script', 'env', ...libs()];
}
