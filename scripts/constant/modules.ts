import { libs } from './libs';

export function modules() {
  return ['schemas','page', 'tool', 'script', 'env', ...libs()];
}
