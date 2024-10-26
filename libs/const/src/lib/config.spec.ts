import {
  DatabaseConfigKeys,
  FileSystemConfigKeys,
  JwtConfigKeys,
  ServerConfigKeys,
  toProfileConfigKey,
} from './config';

describe('Config', () => {
  describe('server', () => {
    it('should have the title, description, port, prefix configurations', () => {
      expect(ServerConfigKeys.TITLE).toBe('TITLE');
      expect(ServerConfigKeys.DESCRIPTION).toBe('DESCRIPTION');
      expect(ServerConfigKeys.PORT).toBe('PORT');
      expect(ServerConfigKeys.PREFIX).toBe('PREFIX');
    });
  });

  describe('database', () => {
    it('should have the type, name, username, and password keys', () => {
      expect(DatabaseConfigKeys.DATABASE_NAME).toBe('DATABASE_NAME');
      expect(DatabaseConfigKeys.DATABASE_TYPE).toBe('DATABASE_TYPE');

      expect(DatabaseConfigKeys.DATABASE_USERNAME).toBe('DATABASE_USERNAME');
      expect(DatabaseConfigKeys.DATABASE_PASSWORD).toBe('DATABASE_PASSWORD');
    });
  });

  describe('JWT', () => {
    it('should have the type, name, username, and password keys', () => {
      expect(JwtConfigKeys.EXPIRES).toBe('EXPIRES');
      expect(JwtConfigKeys.SECRET).toBe('SECRET');
    });
  });
  describe('JWT', () => {
    it('should have the type, name, username, and password keys', () => {
      expect(FileSystemConfigKeys.EMAIL_TEMPLATES_DIR).toBe(
        'EMAIL_TEMPLATES_DIR'
      );
      expect(FileSystemConfigKeys.UPLOAD_DIR).toBe('UPLOAD_DIR');
    });
  });

  describe('profile', () => {
    it('should convert config key into profile config key', () => {
      expect(toProfileConfigKey('SOME', ServerConfigKeys.PREFIX)).toBe(
        'SOME_PREFIX'
      );
    });
  });
});
