import {define} from 'typeorm-seeding';
import {Chapter} from '../../modules/content/models/chapter';
import {Faker} from 'faker';
import slugify from 'slugify';

define(Chapter, (faker: typeof Faker) => {
  const chapter = new Chapter();
  const date = new Date();
  chapter.name = faker.lorem.word();
  chapter.slug = slugify(chapter.name);
  chapter.order = faker.random.number(0, 100);
  chapter.visible = faker.random.boolean(95);
  chapter.createdAt = date;
  chapter.updatedAt = date;
  return chapter;
})
