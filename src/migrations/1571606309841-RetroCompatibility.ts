import {MigrationInterface, QueryRunner} from "typeorm";

export class RetroCompatibility1571606309841 implements MigrationInterface {
    name = 'RetroCompatibility1571606309841'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `disciplines` DROP FOREIGN KEY `FK_58d5a36373db5c87bdfa86c1444`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP FOREIGN KEY `FK_a43c39ee7413b259f1f84f7ca8f`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `country_id`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `order`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `parent_id`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `order` smallint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `parent_id` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `country_id` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD CONSTRAINT `FK_58d5a36373db5c87bdfa86c1444` FOREIGN KEY (`parent_id`) REFERENCES `disciplines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD CONSTRAINT `FK_a43c39ee7413b259f1f84f7ca8f` FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `disciplines` DROP FOREIGN KEY `FK_a43c39ee7413b259f1f84f7ca8f`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP FOREIGN KEY `FK_58d5a36373db5c87bdfa86c1444`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `country_id`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `parent_id`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `order`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `parent_id` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `order` smallint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `country_id` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD CONSTRAINT `FK_a43c39ee7413b259f1f84f7ca8f` FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD CONSTRAINT `FK_58d5a36373db5c87bdfa86c1444` FOREIGN KEY (`parent_id`) REFERENCES `disciplines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
