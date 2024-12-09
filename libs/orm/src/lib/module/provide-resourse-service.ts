import { Inject, Provider } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClassConstructor, ID } from '@rline/type';
import { Repository } from 'typeorm';
import { ResourceService } from './resource-service';

export function getResourceServiceToken(entity: ClassConstructor): string {
  return `${entity.name}ResourceService`;
}
export function provideResourceService<T extends ID>(
  entity: ClassConstructor<T>
): Provider {
  return {
    provide: getResourceServiceToken(entity),
    inject: [getRepositoryToken(entity)],
    useFactory(repo: Repository<T>) {
      return new ResourceService(repo);
    },
  };
}

export function InjectResourceService<T>(
  entity: ClassConstructor<T>
): ParameterDecorator {
  return (t, p, d) => {
    Inject(getResourceServiceToken(entity))(t, p, d);
  };
}
