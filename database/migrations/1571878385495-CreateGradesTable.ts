import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateGradesTable1571878385495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'grades',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        CommonColumns.slug,
        {
          name: 'order',
          type: 'smallint',
        },
        {
          name: 'parent_id',
          type: 'bigint',
          unsigned: true,
          isNullable: true,
        },
        {
          name: 'country_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['parent_id'],
          referencedTableName: 'grades',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['country_id'],
          referencedTableName: 'countries',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('grades');
  }
}
