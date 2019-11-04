import {define} from 'typeorm-seeding';
import {Report, ReportStatus, ReportType} from '../../modules/interactions/models/report';
import {Faker} from 'faker';

define(Report, (faker: typeof Faker) => {
  const report = new Report();
  const date = new Date();
  report.context = null;
  report.type = faker.random.arrayElement(ReportType);
  report.content = faker.lorem.sentence(10);
  report.status = faker.random.arrayElement(ReportStatus);
  report.createdAt = date;
  report.updatedAt = date;
  return report;
});
