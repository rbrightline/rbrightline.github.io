import { Param } from '@nestjs/common';
import { CustomValidationPipe } from '../pipes/validation';

export function Params(): ParameterDecorator {
  return (t, p, d) => {
    Param(CustomValidationPipe)(t, p, d);
  };
}
