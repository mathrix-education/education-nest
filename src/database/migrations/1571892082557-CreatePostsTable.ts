import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreatePostsTable1571892082557 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        CommonColumns.id,
        {
          name: 'title',
          type: 'varchar',
        },
        CommonColumns.slug,
        {
          name: 'category_id',
          type: 'bigint',
          unsigned: true,
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
          columnNames: ['category_id'],
          referencedTableName: 'categories',
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
    await queryRunner.dropTable('posts');
  }
}
