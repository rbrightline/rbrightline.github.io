import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';

export const CustomValidationPipe = new ValidationPipe({
  transform: true,
  validationError: {
    target: false,
    value: false,
  },
  exceptionFactory(errors) {
    throw new UnprocessableEntityException({
      errors,
    });
  },
});
