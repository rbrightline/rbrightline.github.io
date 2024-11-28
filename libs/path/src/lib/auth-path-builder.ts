export type AuthPathBuilderOptions = {
  prefix?: string;
};

export class AuthPathBuilder {
  readonly LOGIN: string;
  readonly LOGIN_WITH_SSO: string;
  readonly LOGOUT: string;
  readonly LOGOUT_ALL: string;
  readonly SIGNUP: string;
  readonly FORGOT_PASSWORD: string;
  readonly RESET_PASSWORD: string;

  constructor(protected readonly options: AuthPathBuilderOptions) {
    const prefix = options.prefix;
    this.LOGIN = this.build(prefix, 'login');
    this.LOGIN_WITH_SSO = this.build(prefix, 'login-with-sso');
    this.LOGOUT = this.build(prefix, 'logout');
    this.LOGOUT_ALL = this.build(prefix, 'logout-all');
    this.SIGNUP = this.build(prefix, 'signup');
    this.FORGOT_PASSWORD = this.build(prefix, 'forgot-password');
    this.RESET_PASSWORD = this.build(prefix, 'reset-password');
  }

  protected build(...args: (string | undefined)[]): string {
    return args.filter((e) => e).join('/');
  }
}
