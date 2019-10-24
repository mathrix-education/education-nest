import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';
import { ModuleType } from '../../src/modules/content/models/module';

export class CreateModulesTable1571887921373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'modules',
      columns: [
        CommonColumns.id,
        {
          name: 'type',
          type: 'enum',
          enum: [
            ModuleType.COURSE,
            ModuleType.FLASHCARD,
            ModuleType.MCQ,
            ModuleType.TEST,
          ],
        },
        {
          name: 'content',
          type: 'json',
        },
        {
          name: 'questions',
          type: 'json',
        },
        {
          name: 'choices',
          type: 'json',
        },
        {
          name: 'solutions',
          type: 'json',
        },
        {
          name: 'corrections',
          type: 'json',
        },
        {
          name: 'options',
          type: 'json',
        },
        {
          name: 'seo_index',
          type: 'boolean',
          default: true,
        },
        {
          name: 'seo_title',
          type: 'varchar',
          isNullable: true,
          default: null,
        },
        {
          name: 'seo_slug',
          type: 'varchar',
          isNullable: true,
          default: null,
        },
        {
          name: 'seo_description',
          type: 'varchar',
          isNullable: true,
          default: null,
        },
        CommonColumns.visible,
        CommonColumns.order,
        {
          name: 'activity_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['activity_id'],
          referencedTableName: 'activities',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('modules');
  }
}
