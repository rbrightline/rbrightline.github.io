# validation

Property validation library built as a wrapper around class-validator and class-transformer

### Examples

```typescript
class Sample {
  @Property({ type: 'string', format: 'short', required: true, unique: true })
  name: string;
  @Property({ type: 'number', isInt: true, minimum: 22, maximum: 99 })
  age: number;

  @Property({ type: 'string', format: 'phone' })
  phone: string;

  @Property({ type: 'string', format: 'email' })
  email: string;
}
```
