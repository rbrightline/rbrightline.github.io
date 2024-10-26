import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { extname } from 'path';

export type LocalFileType = 'json' | 'yaml' | 'text';

export type LocalFileOptions = {
  cache?: boolean;
};

export class LocalFile<T = any> {
  protected raw: string;
  protected isRead = false;
  protected content: T;

  constructor(
    protected readonly filePath: string,
    protected readonly options?: LocalFileOptions
  ) {}

  private __read() {
    if (this.options?.cache == true && this.isRead == true) return;

    this.raw = readFileSync(this.filePath, {
      encoding: 'utf8',
    }).toString();

    const ext = extname(this.filePath);

    if (ext === 'yaml') {
      this.content = load(this.raw) as T;
    } else if (ext === 'json') {
      this.content = JSON.parse(this.raw);
    } else {
      this.content = this.raw as T;
    }
  }

  get() {
    this.__read();
    return this.content;
  }
}
