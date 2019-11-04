import {Factory, Seeder, times} from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
import countriesJson from '../raws/countries.json';
import disciplinesJson from '../raws/disciplines.json';
import gradesJson from '../raws/grades.json';
import {Country} from '../../modules/content/models/country';
import {Discipline} from '../../modules/content/models/discipline';
import {Grade} from '../../modules/content/models/grade';
import {Activity} from '../../modules/content/models/activity';
import {Notion} from '../../modules/content/models/notion';

export default class DatabaseSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const em = connection.createEntityManager();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Country)
      .values(countriesJson)
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Discipline)
      .values(disciplinesJson)
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Grade)
      .values(gradesJson)
      .execute();

    await times(30, async n => {
      const activity = await factory(Activity)().make();
      const notion: Notion = await connection
        .createQueryBuilder()
        .select()
        .from(Notion, 'notions')
        .getOne();
      activity.notion = notion;
      notion.activities.push(activity);
      await em.save(activity);
      await em.save(notion);
    });

  }
}
