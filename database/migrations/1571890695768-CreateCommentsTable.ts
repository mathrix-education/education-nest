import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateCommentsTable1571890695768 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'comments',
      columns: [
        CommonColumns.id,
        {
          name: 'content',
          type: 'text',
        },
        {
          name: 'parent_id',
          type: 'bigint',
          unsigned: true,
          isNullable: true,
          default: null,
        },
        {
          name: 'module_id',
          type: 'bigint',
          unsigned: true,
        },
        {
          name: 'user_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['parent_id'],
          referencedTableName: 'comments',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['module_id'],
          referencedTableName: 'modules',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comments');
  }
}
