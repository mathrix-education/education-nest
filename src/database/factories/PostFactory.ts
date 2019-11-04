import {define} from 'typeorm-seeding';
import {Post} from '../../modules/blog/models/post';
import {Faker} from 'faker';
import slugify from 'slugify';

define(Post, (faker: typeof Faker) => {
  const post = new Post();
  const date = new Date();
  post.title = faker.lorem.sentence(faker.random.number(3, 5));
  post.slug = slugify(post.title);
  post.createdAt = date;
  post.updatedAt = date;
  return post;
});
