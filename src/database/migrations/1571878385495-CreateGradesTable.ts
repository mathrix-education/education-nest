import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateGradesTable1571878385495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'grades',
      columns: [
        {
          name: 'id',
          type: 'bigint',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'slug',
          type: 'varchar',
        },
        {
          name: 'order',
          type: 'smallint',
        },
        {
          name: 'parent_id',
          type: 'bigint',
          isNullable: true,
        },
        {
          name: 'country_id',
          type: 'bigint',
        },
        {
          name: 'created_at',
          type: 'datetime',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'updated_at',
          type: 'datetime',
          default: 'CURRENT_TIMESTAMP',
          onUpdate: 'CURRENT_TIMESTAMP',
        },
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
