import {define} from 'typeorm-seeding';
import {Activity, ActivityType} from '../../modules/content/models/activity';
import {Faker} from 'faker';

define(Activity, (faker: typeof Faker) => {
  const activity = new Activity();
  const date = new Date();
  activity.name = faker.lorem.word();
  activity.type = faker.random.arrayElement(ActivityType);
  activity.visible = faker.random.boolean(95);
  activity.order = faker.random.number(0, 100);
  activity.premium = faker.random.boolean(30);
  activity.reviewed = faker.random.boolean();
  activity.createdAt = date;
  activity.updatedAt = date;
  return activity;
});
