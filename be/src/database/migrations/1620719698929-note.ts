import {MigrationInterface, QueryRunner} from "typeorm";

export class note1620719698929 implements MigrationInterface {
    name = 'note1620719698929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "content" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
