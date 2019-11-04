import {define} from 'typeorm-seeding';
import {User} from '../../modules/users/models/user';
import {Faker} from 'faker';

define(User, (faker: typeof Faker) => {
  const user = new User();
  const date = new Date();
  const name = faker.random.boolean(30);
  user.username = name ? faker.internet.userName() : null;
  user.email =  faker.internet.email();
  user.firstName = name ? faker.name.firstName : null;
  user.lastName = name ? faker.name.lastName : null;
  user.password = null;
  user.scopes = [];
  user.token = faker.random.uuid();
  user.points = faker.random.number(0, 100) * 10;
  user.daily = faker.random.arrayElement([10, 20, 40]);
  user.settings = {sound: faker.random.boolean(30)};
  user.createdAt = date;
  user.updatedAt = date;
  if (faker.random.boolean(50)) {
    user.settings = {...user.settings, ...{facebook_id: faker.internet.password()}};
  }
  return user;
});
