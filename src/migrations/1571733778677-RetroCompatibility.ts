import {MigrationInterface, QueryRunner} from "typeorm";

export class RetroCompatibility1571733778677 implements MigrationInterface {
    name = 'RetroCompatibility1571733778677'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `products_products` (`id` bigint NOT NULL AUTO_INCREMENT, `order` smallint NOT NULL, `parent_id` bigint NULL, `child_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `products` (`id` bigint NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `image` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `description` text NOT NULL, `price` double NOT NULL, `visible` tinyint NOT NULL, `buyable` tinyint NOT NULL, `order` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `module_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `purchases` (`id` bigint NOT NULL AUTO_INCREMENT, `transaction_id` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `user_id` bigint NULL, `product_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `marks` (`id` bigint NOT NULL AUTO_INCREMENT, `status` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `user_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `votes` (`id` bigint NOT NULL AUTO_INCREMENT, `points` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `user_id` bigint NULL, `comment_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `disciplines` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `visible` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `chapters` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `order` smallint NOT NULL, `visible` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `grade_id` int NULL, `discipline_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `notions` (`id` bigint NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` enum ('further', 'normal', 'reminder') NOT NULL, `visible` tinyint NOT NULL, `order` smallint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `chapter_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `activities` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` enum ('course', 'exercise', 'flashcard', 'test', 'video') NOT NULL, `visible` tinyint NOT NULL, `order` smallint NOT NULL, `premium` tinyint NOT NULL, `reviewed` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `notion_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `countries` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `type` enum ('course', 'exercise', 'flashcard', 'test', 'video') NOT NULL, `visible` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users` (`id` bigint NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `scopes` json NOT NULL, `token` varchar(255) NOT NULL, `points` int NOT NULL, `daily` int NOT NULL DEFAULT 0, `daily_achievements` int NOT NULL DEFAULT 0, `premium_bypass` tinyint NOT NULL, `premium_bypass_expires_at` datetime NOT NULL, `grade_id` int NOT NULL, `stripe_id` varchar(255) NOT NULL, `braintree_id` varchar(255) NOT NULL, `metadata` json NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `comments` (`id` bigint NOT NULL AUTO_INCREMENT, `content` text NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `parent_id` bigint NULL, `module_id` bigint NULL, `user_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `reports` (`id` bigint NOT NULL AUTO_INCREMENT, `context` text NOT NULL, `type` varchar(255) NOT NULL, `content` text NOT NULL, `status` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `module_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `modules` (`id` bigint NOT NULL AUTO_INCREMENT, `type` enum ('course', 'flashcard', 'mcq', 'test') NOT NULL, `content` json NOT NULL, `questions` json NOT NULL, `choices` json NOT NULL, `solutions` json NOT NULL, `corrections` json NOT NULL, `options` json NULL, `visible` tinyint NOT NULL, `seo_index` tinyint NOT NULL, `seo_title` varchar(255) NOT NULL, `seo_slug` varchar(255) NOT NULL, `seo_keywords` text NOT NULL, `seo_description` varchar(255) NOT NULL, `order` smallint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `activity_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `posts` (`id` bigint NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `category_id` bigint NULL, `module_id` bigint NULL, `user_id` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `categories` (`id` bigint NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `order` smallint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `parent_id` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD `country_id` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `products_products` ADD CONSTRAINT `FK_9c7a022187484a03b2fbb51b020` FOREIGN KEY (`parent_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `products_products` ADD CONSTRAINT `FK_6b1b876a864c3b7930ba9f5b363` FOREIGN KEY (`child_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_5a7f87001c95f11719fa65f4a47` FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `purchases` ADD CONSTRAINT `FK_024ddf7e04177a07fcb9806a90a` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `purchases` ADD CONSTRAINT `FK_1ce91bd87ddfcecde930deeaab9` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `marks` ADD CONSTRAINT `FK_c6f61be2ef1af1de009594206a5` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_27be2cab62274f6876ad6a31641` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_edd21a11cce9afc9a6b990a1be1` FOREIGN KEY (`comment_id`) REFERENCES `comments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `chapters` ADD CONSTRAINT `FK_8a10cd098547e3d112a8b0de479` FOREIGN KEY (`grade_id`) REFERENCES `disciplines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `chapters` ADD CONSTRAINT `FK_8ebd5b2619be48294ccb8bde853` FOREIGN KEY (`discipline_id`) REFERENCES `disciplines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `notions` ADD CONSTRAINT `FK_ef1d62a5e75d56f58af69d81b4c` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `activities` ADD CONSTRAINT `FK_4d87dfe2b4e70cf1cce071791ad` FOREIGN KEY (`notion_id`) REFERENCES `notions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD CONSTRAINT `FK_58d5a36373db5c87bdfa86c1444` FOREIGN KEY (`parent_id`) REFERENCES `disciplines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` ADD CONSTRAINT `FK_a43c39ee7413b259f1f84f7ca8f` FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_96304bda4581e8a25603db88e4b` FOREIGN KEY (`grade_id`) REFERENCES `disciplines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_d6f93329801a93536da4241e386` FOREIGN KEY (`parent_id`) REFERENCES `comments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_a0a35040c92ebe5edad9ca063a0` FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_4c675567d2a58f0b07cef09c13d` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `reports` ADD CONSTRAINT `FK_af3b0daf24241d7db296732c38e` FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `modules` ADD CONSTRAINT `FK_03beb361455eceacbb4baba4f20` FOREIGN KEY (`activity_id`) REFERENCES `activities`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_852f266adc5d67c40405c887b49` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_7ffa7fc2153155c3a646f9c82ba` FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_c4f9a7bd77b489e711277ee5986` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_c4f9a7bd77b489e711277ee5986`", undefined);
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_7ffa7fc2153155c3a646f9c82ba`", undefined);
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_852f266adc5d67c40405c887b49`", undefined);
        await queryRunner.query("ALTER TABLE `modules` DROP FOREIGN KEY `FK_03beb361455eceacbb4baba4f20`", undefined);
        await queryRunner.query("ALTER TABLE `reports` DROP FOREIGN KEY `FK_af3b0daf24241d7db296732c38e`", undefined);
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_4c675567d2a58f0b07cef09c13d`", undefined);
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_a0a35040c92ebe5edad9ca063a0`", undefined);
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_d6f93329801a93536da4241e386`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_96304bda4581e8a25603db88e4b`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP FOREIGN KEY `FK_a43c39ee7413b259f1f84f7ca8f`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP FOREIGN KEY `FK_58d5a36373db5c87bdfa86c1444`", undefined);
        await queryRunner.query("ALTER TABLE `activities` DROP FOREIGN KEY `FK_4d87dfe2b4e70cf1cce071791ad`", undefined);
        await queryRunner.query("ALTER TABLE `notions` DROP FOREIGN KEY `FK_ef1d62a5e75d56f58af69d81b4c`", undefined);
        await queryRunner.query("ALTER TABLE `chapters` DROP FOREIGN KEY `FK_8ebd5b2619be48294ccb8bde853`", undefined);
        await queryRunner.query("ALTER TABLE `chapters` DROP FOREIGN KEY `FK_8a10cd098547e3d112a8b0de479`", undefined);
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_edd21a11cce9afc9a6b990a1be1`", undefined);
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_27be2cab62274f6876ad6a31641`", undefined);
        await queryRunner.query("ALTER TABLE `marks` DROP FOREIGN KEY `FK_c6f61be2ef1af1de009594206a5`", undefined);
        await queryRunner.query("ALTER TABLE `purchases` DROP FOREIGN KEY `FK_1ce91bd87ddfcecde930deeaab9`", undefined);
        await queryRunner.query("ALTER TABLE `purchases` DROP FOREIGN KEY `FK_024ddf7e04177a07fcb9806a90a`", undefined);
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_5a7f87001c95f11719fa65f4a47`", undefined);
        await queryRunner.query("ALTER TABLE `products_products` DROP FOREIGN KEY `FK_6b1b876a864c3b7930ba9f5b363`", undefined);
        await queryRunner.query("ALTER TABLE `products_products` DROP FOREIGN KEY `FK_9c7a022187484a03b2fbb51b020`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `country_id`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `parent_id`", undefined);
        await queryRunner.query("ALTER TABLE `disciplines` DROP COLUMN `order`", undefined);
        await queryRunner.query("DROP TABLE `categories`", undefined);
        await queryRunner.query("DROP TABLE `posts`", undefined);
        await queryRunner.query("DROP TABLE `modules`", undefined);
        await queryRunner.query("DROP TABLE `reports`", undefined);
        await queryRunner.query("DROP TABLE `comments`", undefined);
        await queryRunner.query("DROP TABLE `users`", undefined);
        await queryRunner.query("DROP TABLE `countries`", undefined);
        await queryRunner.query("DROP TABLE `activities`", undefined);
        await queryRunner.query("DROP TABLE `notions`", undefined);
        await queryRunner.query("DROP TABLE `chapters`", undefined);
        await queryRunner.query("DROP TABLE `disciplines`", undefined);
        await queryRunner.query("DROP TABLE `votes`", undefined);
        await queryRunner.query("DROP TABLE `marks`", undefined);
        await queryRunner.query("DROP TABLE `purchases`", undefined);
        await queryRunner.query("DROP TABLE `products`", undefined);
        await queryRunner.query("DROP TABLE `products_products`", undefined);
    }

}
