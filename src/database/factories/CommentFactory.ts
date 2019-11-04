import {define} from 'typeorm-seeding';
import {Comment} from '../../modules/interactions/models/comment';
import {Faker} from 'faker';

define(Comment, (faker: typeof Faker) => {
  const comment = new Comment();
  const date = new Date();
  comment.content = faker.lorem.text();
  comment.createdAt = date;
  comment.updatedAt = date;
  return comment;
});
