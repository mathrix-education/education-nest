import {define} from 'typeorm-seeding';
import {Faker} from 'faker';
import {Notion, NotionType} from '../../modules/content/models/notion';


define(Notion, (faker: typeof Faker) => {
  const notion = new Notion();
  const date = new Date();
  notion.name = faker.lorem.word();
  notion.type = faker.random.arrayElement(NotionType);
  notion.visible = faker.random.boolean(95);
  notion.name = faker.lorem.word();
  notion.createdAt = date;
  notion.updatedAt = date;
  return notion;
});
