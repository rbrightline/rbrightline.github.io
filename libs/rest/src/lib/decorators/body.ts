import { Body } from '@nestjs/common';
import { CustomValidationPipe } from '../pipes/validation';

export function BodyParams(): ParameterDecorator {
  return (t, p, d) => {
    Body(CustomValidationPipe)(t, p, d);
  };
}
