import {define} from 'typeorm-seeding';
import {Vote} from '../../modules/interactions/models/vote';
import {Faker} from 'faker';

define(Vote, (faker: typeof Faker) => {
  const vote = new Vote();
  const date = new Date();
  
  return vote;
})
