export type ResourcePathBuilderOptions = {
  singular: string;
  plural?: string;
  prefix?: string;
};

export class ResourcePathBuilder {
  protected readonly options: ResourcePathBuilderOptions;
  readonly SINGULAR: string;
  readonly PLURAL: string;
  readonly ID: string;
  readonly RELATION: string;
  readonly RELATION_ID: string;

  constructor(options: ResourcePathBuilderOptions) {
    this.options = options;
    const singular = options.singular;
    const plural = options.plural || singular + 's';
    const prefix = options.prefix;

    this.SINGULAR = this.build(prefix, singular);
    this.PLURAL = this.build(prefix, plural);
    this.ID = this.build(this.SINGULAR, ':id');
    this.RELATION = this.build(this.ID, ':rn');
    this.RELATION_ID = this.build(this.RELATION, ':rid');
  }

  private build(...args: (string | undefined)[]) {
    return args.filter((e) => e).join('/');
  }
}
