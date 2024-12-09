### Install

`pnpm add @rline/validation`

### Summary

Input validation decorator.

### Examples

```typescript

import { validateSync, plaintoInstance} from '@rline/validation';

class TargetClass {}

class Sample {
  @Validation({ type: 'string', minLength: 3, maxLength: 30 })
  str: string;

  @Validation({ type: 'number', minimum: 0, maximum: 100 })
  num: string;

  @Validation({ type: 'date', future: true })
  date: string;

  @Validation({ type: 'object', target: () => TargetClass })
  obj: string;

  @Validation({ type: 'array', items: { type: 'string' } })
  arr: string[];
}


const value = plainToInstance({...});
const errors = validateSync(value);


```

### Release Notes
