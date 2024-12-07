import { DataSource, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from './../decorators/entity';
import { Column } from './../decorators/column';
import { Relation } from './../decorators/relation';

class Base {
  @PrimaryGeneratedColumn()
  id: number;
}

@Entity()
class Category extends Base {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}

@Entity()
class Product extends Base {
  @Column({ type: 'string' }) name: string;
  @Column({ type: 'number' }) price: number;
  @Column({ type: 'date' }) lastPurchase: Date;
  @Column({ type: 'boolean' }) active: boolean;

  @Relation({
    type: 'many-to-one',
    join: true,
    target: () => Category,
    eager: true,
  })
  category: Category;
}

@Entity()
class Price extends Base {
  @Column({ type: 'number', required: true, minimum: 0 }) price: number;

  @Relation({
    type: 'many-to-one',
    target: () => Product,
    relationId: 'id',
    onDelete: 'CASCADE',
    eager: true,
  })
  product: Product;
}

describe('Entity', () => {
  it('should build the entity', async () => {
    const ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/orm/orm.sqlite',
      entities: [Product, Category, Price],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    const productRepo = ds.getRepository<Product>(Product);
    const categoryRepo = ds.getRepository<Category>(Category);

    expect(productRepo).toBeTruthy();

    const cat1 = await categoryRepo.save({ name: 'FirstF' });
    const cat2 = await categoryRepo.save({ name: 'Select' });

    const prod1 = await productRepo.save({
      name: 'sample 1',
      age: 100,
      category: cat1,
      active: true,
      lastPurchase: new Date().getTime(),
    });

    const prod2 = await productRepo.save({
      name: 'sample 2',
      age: 100,
      category: cat2,
      active: true,
      lastPurchase: new Date().getTime(),
    });

    expect(prod1).toBeTruthy();
    expect(prod1.id).toBeTypeOf('number');
    expect(prod1.name).toBeTypeOf('string');
    expect(prod1.age).toBeTypeOf('number');
    expect(prod1.category).toBeTypeOf('object');

    const foundProd = await productRepo.findOneBy({ id: prod1.id });

    expect(foundProd).toBeTruthy();
    if (foundProd) {
      console.log(foundProd);
      expect(foundProd).toBeTruthy();
      expect(foundProd.id).toBeTypeOf('number');
      expect(foundProd.name).toBeTypeOf('string');
      expect(foundProd.active).toBeTypeOf('boolean');
      expect(foundProd.lastPurchase).toBeTypeOf('number');
      expect(foundProd.category).toBeTypeOf('object');
    }
  });
});
