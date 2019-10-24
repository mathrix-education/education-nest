import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';
import { ActivityType } from '../../src/modules/content/models/activity';

export class CreateActivitiesTable1571885675143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'activities',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        {
          name: 'type',
          type: 'enum',
          enum: [
            ActivityType.COURSE,
            ActivityType.EXERCISE,
            ActivityType.FLASHCARD,
            ActivityType.TEST,
            ActivityType.VIDEO,
          ],
        },
        {
          name: 'premium',
          type: 'boolean',
          default: false,
        },
        {
          name: 'reviewed',
          type: 'boolean',
          default: false,
        },
        CommonColumns.order,
        CommonColumns.visible,
        {
          name: 'notion_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['notion_id'],
          referencedTableName: 'notions',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activities');
  }
}
