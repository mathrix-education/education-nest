import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateChaptersTable1571883753778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'chapters',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        CommonColumns.slug,
        CommonColumns.order,
        {
          name: 'discipline_id',
          type: 'bigint',
          unsigned: true,
        },
        {
          name: 'grade_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['discipline_id'],
          referencedTableName: 'disciplines',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['grade_id'],
          referencedTableName: 'grades',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chapters');
  }
}
