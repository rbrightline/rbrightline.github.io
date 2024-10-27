import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';

export type EncodeType<T = any> = {
  iv: string;
  data: T;
};

// Secret key and algorithm configuration
const algorithm = 'aes-256-cbc';
const key = randomBytes(32); // Use a secure random key (must be 32 bytes for AES-256)
const iv = randomBytes(16); // Initialization vector (must be 16 bytes for AES)

/**
 * Encode the string value
 * @param value
 * @returns
 */
export function encode(value: string): EncodeType {
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(value, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    iv: iv.toString('hex'),
    data: encrypted,
  };
}
/**
 * Decode the encoded data
 * @param encoded
 * @returns
 */
export function decode(encoded: EncodeType): string {
  const ivBuffer = Buffer.from(encoded.iv, 'hex');
  const decipher = createDecipheriv(algorithm, key, ivBuffer);
  let decrypted = decipher.update(encoded.data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

/**
 * Hash string value
 * @param value
 * @returns
 */
export function hash(value: string) {
  return hashSync(value, genSaltSync(8));
}

/**
 * Compare the raw value with hashed value
 * @param value
 * @param hashed
 * @returns
 */
export function compare(value: string, hashed: string) {
  return compareSync(value, hashed);
}
