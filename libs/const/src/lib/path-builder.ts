export const ID_KEY = 'id';
export const RELATION_ID_KEY = 'rid';
export const RELATION_NAME_KEY = 'rn';

export type PathBuilderOptions = {
  singular: string;
  plural?: string;
  prefix?: string;
};
export class PathBuilder {
  readonly ID: string;
  readonly SINGULAR: string;
  readonly PLURAL: string;
  readonly RELATION: string;
  readonly UNSET_RELATION: string;

  private p(...args: (string | undefined)[]) {
    return args.filter((e) => e).join('/');
  }
  constructor(options: PathBuilderOptions) {
    let { singular, plural, prefix } = options;
    plural = plural ?? singular + 's';

    if (!singular) throw new Error('singular property is required');
    this.SINGULAR = this.p(prefix, singular);
    this.PLURAL = this.p(prefix, plural);
    this.ID = this.p(prefix, singular, `:${ID_KEY}`);
    this.RELATION = this.p(
      prefix,
      singular,
      `:${ID_KEY}`,
      `:${RELATION_NAME_KEY}`,
      `:${RELATION_ID_KEY}`
    );
    this.UNSET_RELATION = this.p(
      prefix,
      singular,
      `:${ID_KEY}`,
      `:${RELATION_NAME_KEY}`
    );
  }
}
