import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';
import { NotionType } from '../../modules/content/models/notion';

export class CreateNotionsTable1571884431222 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'notions',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        {
          name: 'type',
          type: 'enum',
          enum: [NotionType.FURTHER, NotionType.NORMAL, NotionType.REMINDER],
        },
        {
          name: 'chapter_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.order,
        CommonColumns.visible,
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['chapter_id'],
          referencedTableName: 'chapters',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notions');
  }
}
