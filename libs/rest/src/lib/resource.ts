import { ResourcePathBuilder } from '@rline/path';
import { Controller, Delete, Get, Options, Post, Put } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiUnprocessableEntityResponse,
  ApiUnauthorizedResponse,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { ResourceName } from './meta/resource';
import {
  DeletedOperation,
  ReadOperation,
  UpdateOperation,
  WriteOperation,
} from './meta/operation';

export type RestResourceBuilderOptions = {
  path: ResourcePathBuilder;
};

export class RestResourceBuilder {
  constructor(protected readonly options: RestResourceBuilderOptions) {}

  protected Common(): MethodDecorator {
    return (t, p, d) => {
      ApiBadRequestResponse()(t, p, d);
      ApiInternalServerErrorResponse()(t, p, d);
      ApiUnauthorizedResponse()(t, p, d);
    };
  }

  Controller(): ClassDecorator {
    return (t) => {
      Controller()(t);
      ApiTags(t.name + 'Controller')(t);
      ApiBearerAuth()(t);
      ResourceName(t.name);
    };
  }

  FindAll(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      ReadOperation()(t, p, d);
      ApiOperation({ summary: 'FindAll' })(t, p, d);
      ApiOkResponse()(t, p, d);

      Get(this.options.path.PLURAL)(t, p, d);
    };
  }

  FindOneById(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      ReadOperation()(t, p, d);
      ApiOperation({ summary: 'FindOneById' })(t, p, d);
      ApiOkResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);

      Get(this.options.path.ID)(t, p, d);
    };
  }

  Save(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      WriteOperation()(t, p, d);
      ApiOperation({ summary: 'Save' })(t, p, d);
      ApiCreatedResponse()(t, p, d);
      ApiUnprocessableEntityResponse()(t, p, d);

      Post(this.options.path.SINGULAR)(t, p, d);
    };
  }

  Update(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      UpdateOperation()(t, p, d);
      ApiOperation({ summary: 'Update' })(t, p, d);
      ApiOkResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);
      ApiUnprocessableEntityResponse()(t, p, d);

      Put(this.options.path.ID)(t, p, d);
    };
  }

  Delete(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      DeletedOperation()(t, p, d);
      ApiOperation({ summary: 'Delete' })(t, p, d);
      ApiOkResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);

      Delete(this.options.path.ID)(t, p, d);
    };
  }

  Count(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      ReadOperation()(t, p, d);
      ApiOperation({ summary: 'Count' })(t, p, d);
      ApiOkResponse()(t, p, d);

      Get(this.options.path.SINGULAR)(t, p, d);
    };
  }

  Metadata(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      ReadOperation()(t, p, d);
      ApiOperation({ summary: 'Metadata' })(t, p, d);
      ApiOkResponse()(t, p, d);

      Options(this.options.path.SINGULAR)(t, p, d);
    };
  }

  AddRelation(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      UpdateOperation()(t, p, d);
      ApiOperation({ summary: 'AddRelation' })(t, p, d);
      ApiOkResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);

      Put(this.options.path.RELATION_ID)(t, p, d);
    };
  }
  RemoveRelation(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      UpdateOperation()(t, p, d);
      ApiOperation({ summary: 'RemoveRelation' })(t, p, d);
      ApiOkResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);

      Delete(this.options.path.RELATION_ID)(t, p, d);
    };
  }
  SetRelation(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      WriteOperation()(t, p, d);
      ApiOperation({ summary: 'SetRelation' })(t, p, d);
      ApiCreatedResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);

      Post(this.options.path.RELATION)(t, p, d);
    };
  }

  UnsetRelation(): MethodDecorator {
    return (t, p, d) => {
      this.Common()(t, p, d);
      DeletedOperation()(t, p, d);
      ApiOperation({ summary: 'UnsetRelation' })(t, p, d);
      ApiOkResponse()(t, p, d);
      ApiNotFoundResponse()(t, p, d);

      Delete(this.options.path.RELATION)(t, p, d);
    };
  }
}
