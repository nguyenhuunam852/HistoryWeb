import {MigrationInterface, QueryRunner} from "typeorm";

export class ThirdMigrate1642082522671 implements MigrationInterface {
    name = 'ThirdMigrate1642082522671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blob_entity\` DROP FOREIGN KEY \`FK_474ba388a14c3be77e9153de0db\``);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` DROP FOREIGN KEY \`FK_2582a6399734e968139cd70f1b5\``);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` CHANGE \`tabId\` \`tabId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` CHANGE \`datingId\` \`datingId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` ADD CONSTRAINT \`FK_474ba388a14c3be77e9153de0db\` FOREIGN KEY (\`tabId\`) REFERENCES \`tab_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` ADD CONSTRAINT \`FK_2582a6399734e968139cd70f1b5\` FOREIGN KEY (\`datingId\`) REFERENCES \`dating\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blob_entity\` DROP FOREIGN KEY \`FK_2582a6399734e968139cd70f1b5\``);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` DROP FOREIGN KEY \`FK_474ba388a14c3be77e9153de0db\``);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` CHANGE \`datingId\` \`datingId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` CHANGE \`tabId\` \`tabId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` ADD CONSTRAINT \`FK_2582a6399734e968139cd70f1b5\` FOREIGN KEY (\`datingId\`) REFERENCES \`dating\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blob_entity\` ADD CONSTRAINT \`FK_474ba388a14c3be77e9153de0db\` FOREIGN KEY (\`tabId\`) REFERENCES \`tab_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
