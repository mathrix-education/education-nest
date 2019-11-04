import {define} from 'typeorm-seeding';
import {Product} from '../../modules/trainings/models/product';
import {Faker} from 'faker';
import slugify from 'slugify';

define(Product, (faker: typeof Faker) => {
  const product = new Product();
  const date = new Date();
  product.name = faker.lorem.sentence(faker.random.number(1, 2));
  product.slug = slugify(product.name);
  product.image = 'img/products/' + faker.random.uuid() + '.jpg';
  product.type = faker.random.arrayElement(['pack', 'training', 'section', 'lesson']);
  product.description = faker.lorem.text();
  product.price = faker.random.number(0, 100);
  product.visible = faker.random.boolean();
  product.buyable = faker.random.boolean();
  product.order = faker.random.number(0, 100);
  product.createdAt = date;
  product.updatedAt = date;
  return product;
});
