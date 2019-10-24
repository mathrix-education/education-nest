import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateVotesTable1571891484368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'votes',
      columns: [
        {
          name: 'comment_id',
          type: 'bigint',
          unsigned: true,
          isPrimary: true,
        },
        {
          name: 'user_id',
          type: 'bigint',
          unsigned: true,
          isPrimary: true,
        },
        {
          name: 'value',
          type: 'tinyint',
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['comment_id'],
          referencedTableName: 'comments',
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
    await queryRunner.dropTable('votes');
  }
}
