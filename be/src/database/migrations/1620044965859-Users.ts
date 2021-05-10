import {MigrationInterface, QueryRunner} from "typeorm";

export class Users1620044965859 implements MigrationInterface {
    name = 'Users1620044965859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "registration_date" TIMESTAMP NOT NULL, "role" integer NOT NULL, "full_name" character varying NOT NULL, "personal_code" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
