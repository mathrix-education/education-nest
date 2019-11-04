import {define} from 'typeorm-seeding';
import {Category} from '../../modules/blog/models/category';
import {Faker} from 'faker';
import slugify from 'slugify';

define(Category, (faker: typeof Faker) => {
  const category = new Category();
  const date = new Date();
  category.name = faker.lorem.word();
  category.slug = slugify(category.name);
  category.image = 'img/categories/' + faker.random.uuid() + '.jpg';
  category.createdAt = date;
  category.updatedAt = date;
  return category;
});
