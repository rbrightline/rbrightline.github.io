import { Query } from '@nestjs/common';
import { CustomValidationPipe } from '../pipes/validation';

export function QueryParams(): ParameterDecorator {
  return (t, p, d) => {
    Query(CustomValidationPipe)(t, p, d);
  };
}
