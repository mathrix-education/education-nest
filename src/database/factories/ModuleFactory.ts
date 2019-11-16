import {define} from 'typeorm-seeding';
import {Module, ModuleType} from '../../modules/content/models/module';
import {Faker} from 'faker';
import slugify from 'slugify';

define(Module, (faker: typeof Faker) => {
  const module = new Module();
  const date = new Date();
  module.visible = faker.random.boolean(95);
  module.seoIndex = faker.random.boolean(95);
  module.seoTitle = faker.lorem.word();
  module.seoSlug = slugify(module.seoTitle);
  module.seoKeywords = faker.lorem.words();
  module.order = faker.random.number(0, 100);
  module.createdAt = date;
  module.updatedAt = date;
  module.type = faker.random.arrayElement(ModuleType);
  if (module.type === 'course') {
    if (faker.random.boolean(80)) {
      module.content = '[video]FNUTWw17rkM[/video]';
      for (let i = 0; i < faker.random.number(1, 3); i++) {
        module.content = module.content + faker.lorem.paragraph + '\n\n';
      }
    } else {
      for (let i = 0; i < faker.random.number(3, 8); i++) {
        module.content = module.content + faker.lorem.paragraph + '\n\n';
      }
    }
  }  else {
    for (let i = 0; i < faker.random.number(1, 5); i++) {
      module.questions[i] = faker.lorem.sentence().replace('.', '?');
      const choiceCount = faker.random.number(2, 4);
      module.corrections[i] = faker.lorem.paragraphs(faker.random.number(1, 3));
      if (module.type === 'mcq') {
        for (let k = 0; k < choiceCount; k++) {
          module.choices[i][k] = faker.lorem.word;
        }
        module.solutions[i] = faker.random.arrayElements(module.choices[i].keys(), faker.random.number(1, choiceCount));
      } else if (module.type === 'test') {
        module.options = {duration: faker.random.arrayElement([10, 15, 20, 25, 30]) * 60};
      }
    }
    if (module.type === 'flashcard') {
      module.corrections = [faker.lorem.paragraphs(faker.random.number(1, 3))];
    }
  }
  return module;
});
