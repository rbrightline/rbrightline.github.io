import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';

export const InputValiationPipe = new ValidationPipe({
  transform: true,
  transformOptions: {
    exposeUnsetFields: false,
  },
  exceptionFactory(errors) {
    throw new UnprocessableEntityException({ errors });
  },
});
