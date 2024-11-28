### Install

`pnpm add @rline/validation`

### Summary

Input validation decorators.

### Examples

```typescript
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
```

### Release Notes
