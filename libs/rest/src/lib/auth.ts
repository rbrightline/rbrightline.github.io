import { Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from './meta/public';
import { AuthPathBuilder } from '@rline/path';

export type RestAuthBuilderOptitions = {
  path: AuthPathBuilder;
};

export class RestAuthBuilder {
  constructor(protected readonly options: RestAuthBuilderOptitions) {}

  Controller(): ClassDecorator {
    return (t) => {
      Controller()(t);
      ApiTags(t.name + 'Controller')(t);
      ApiBearerAuth()(t);
    };
  }

  Login(): MethodDecorator {
    return (t, p, d) => {
      Public()(t, p, d);
      Post(this.options.path.LOGIN)(t, p, d);
    };
  }

  LoginWithSSO(): MethodDecorator {
    return (t, p, d) => {
      Public()(t, p, d);
      Post(this.options.path.LOGIN_WITH_SSO)(t, p, d);
    };
  }

  Logout(): MethodDecorator {
    return (t, p, d) => {
      Post(this.options.path.LOGOUT)(t, p, d);
    };
  }

  LogoutAll(): MethodDecorator {
    return (t, p, d) => {
      Post(this.options.path.LOGOUT_ALL)(t, p, d);
    };
  }

  Signup(): MethodDecorator {
    return (t, p, d) => {
      Public()(t, p, d);
      Post(this.options.path.SIGNUP)(t, p, d);
    };
  }

  ForgotPassword(): MethodDecorator {
    return (t, p, d) => {
      Public()(t, p, d);
      Post(this.options.path.FORGOT_PASSWORD)(t, p, d);
    };
  }

  ResetPassword(): MethodDecorator {
    return (t, p, d) => {
      Post(this.options.path.RESET_PASSWORD)(t, p, d);
    };
  }
}
