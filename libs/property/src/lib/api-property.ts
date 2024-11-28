import { PropertyOptions } from '@rline/type';
import {
  ApiProperty as __ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';

export function toApiProeprtyOptions(
  options: PropertyOptions
): ApiPropertyOptions {
  const type = options.type;

  const commonOptions: ApiPropertyOptions = {
    required: options.required == true,
    nullable: options.required != true,
    description: options.description,
    example: options.example,
    examples: options.examples,
    default: options.default,
    type: options.type === 'date' ? 'integer' : (options.type as any),
    hash: options.hash,
    encrypt: options.encrypt,
    disabled: options.disabled,
    hideInput: options.hideInput,
    hideValue: options.hideValue,
    hint: options.hint,
    exclude: options.exclude,
    isString: options.isString,
    label: options.label,
    notSameAs: options.notSameAs,
    prefix: options.prefix,
    suffix: options.suffix,
    prefixIcon: options.prefixIcon,
    suffixIcon: options.suffixIcon,
    tooltip: options.tooltip,
    unique: options.unique,
  } as unknown as ApiPropertyOptions;

  switch (type) {
    case 'string':
      return {
        ...commonOptions,
        minLength: options.minLength,
        maxLength: options.maxLength,
        enum: options.isIn,
        format: options.format,
      };
    case 'boolean':
      return {
        ...commonOptions,
      };

    case 'date':
      return {
        ...commonOptions,
        maximum: options.past ? Date.now() : undefined,
        minimum: options.future ? Date.now() : undefined,
        moreThan: options.moreThan,
        lessThan: options.lessThan,
      } as unknown as ApiPropertyOptions;

    case 'number':
      return {
        ...commonOptions,
        minimum: options.minimum,
        maximum: options.maximum,
        type: options.isInt ? 'integer' : 'number',
        moreThan: options.moreThan,
        lessThan: options.lessThan,
        range: options.range,
      } as unknown as ApiPropertyOptions;

    case 'object':
      return { ...commonOptions } as unknown as ApiPropertyOptions;

    case 'array': {
      const items = options.items;

      if (!items) throw new Error('items is required!');
      return {
        ...commonOptions,
        items: {
          ...toApiProeprtyOptions(options.items as any),
        },
      } as unknown as ApiPropertyOptions;
    }
  }

  return {};
}

export function ApiProperty(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    const type = options.type;

    switch (type) {
      case 'array':
        __ApiProperty({
          type: 'array',
        })(t, p);
        break;
    }
  };
}
