import {define} from 'typeorm-seeding';
import {Mark, MarkStatus} from '../../modules/interactions/models/mark';
import {Faker} from 'faker';

define(Mark, (faker: typeof Faker) => {
  const mark = new Mark();
  const date = new Date();
  mark.status = faker.random.arrayElement(MarkStatus);
  mark.createdAt = date;
  mark.updatedAt = date;
  return mark;
});
