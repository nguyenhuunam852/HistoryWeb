import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigrate1642044394498 implements MigrationInterface {
    name = 'FirstMigrate1642044394498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`dating\` (\`id\` int NOT NULL AUTO_INCREMENT, \`dating_Name\` varchar(255) NOT NULL, \`dating_Year\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tab_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blob_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`tabId\` int NULL, \`datingId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` ADD CONSTRAINT \`FK_474ba388a14c3be77e9153de0db\` FOREIGN KEY (\`tabId\`) REFERENCES \`tab_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` ADD CONSTRAINT \`FK_2582a6399734e968139cd70f1b5\` FOREIGN KEY (\`datingId\`) REFERENCES \`dating\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE \`_cache\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifier\` varchar(255) NULL, \`time\` bigint NOT NULL, \`duration\` int NOT NULL, \`query\` text NOT NULL, \`result\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`_cache\``);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` DROP FOREIGN KEY \`FK_2582a6399734e968139cd70f1b5\``);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` DROP FOREIGN KEY \`FK_474ba388a14c3be77e9153de0db\``);
        await queryRunner.query(`DROP TABLE \`blob_entity\``);
        await queryRunner.query(`DROP TABLE \`tab_entity\``);
        await queryRunner.query(`DROP TABLE \`dating\``);
    }

}
