import {define} from 'typeorm-seeding';
import {Vote} from '../../modules/interactions/models/vote';
import {Faker} from 'faker';

define(Vote, (faker: typeof Faker) => {
  const vote = new Vote();
  const date = faker.date.recent(30);
  vote.value = faker.random.boolean(70) ? 1 : -1;
  vote.createdAt = date;
  vote.updatedAt = faker.random.boolean(90) ? vote.createdAt : faker.date.between(date, new Date());
  return vote;
});
