import {MigrationInterface, QueryRunner} from "typeorm";

export class PersonalCodeString1620630012885 implements MigrationInterface {
    name = 'PersonalCodeString1620630012885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "personal_code"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "personal_code" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "personal_code"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "personal_code" integer NOT NULL`);
    }

}
