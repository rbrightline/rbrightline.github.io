import { AuthPathBuilder } from './auth-path-builder';

describe('AuthPathBuilder', () => {
  it('With prefix', () => {
    const {
      LOGIN,
      LOGIN_WITH_SSO,
      LOGOUT,
      LOGOUT_ALL,
      SIGNUP,
      FORGOT_PASSWORD,
      RESET_PASSWORD,
    } = new AuthPathBuilder({ prefix: 'auth' });

    expect(LOGIN).toBe('auth/login');
    expect(LOGIN_WITH_SSO).toBe('auth/login-with-sso');
    expect(LOGOUT).toBe('auth/logout');
    expect(LOGOUT_ALL).toBe('auth/logout-all');
    expect(SIGNUP).toBe('auth/signup');
    expect(FORGOT_PASSWORD).toBe('auth/forgot-password');
    expect(RESET_PASSWORD).toBe('auth/reset-password');
  });
});
