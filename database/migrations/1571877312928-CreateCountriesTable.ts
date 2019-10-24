import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateCountriesTable1571877312928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'countries',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        CommonColumns.slug,
        {
          name: 'visible',
          type: 'boolean',
          default: 1,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('countries');
  }
}
