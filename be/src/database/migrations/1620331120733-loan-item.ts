import {MigrationInterface, QueryRunner} from "typeorm";

export class loanItem1620331120733 implements MigrationInterface {
    name = 'loanItem1620331120733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "loans" ("id" SERIAL NOT NULL, "dateFrom" character varying NOT NULL, "dateTo" character varying NOT NULL, "loanItemId" integer NOT NULL, "loanItemsId" integer, CONSTRAINT "PK_5c6942c1e13e4de135c5203ee61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan_items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "desc" character varying NOT NULL, CONSTRAINT "PK_40643c64d2dd50c72949e3cd064" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "loans" ADD CONSTRAINT "FK_3cdacfe19b02a280884931e0ed0" FOREIGN KEY ("loanItemsId") REFERENCES "loan_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loans" DROP CONSTRAINT "FK_3cdacfe19b02a280884931e0ed0"`);
        await queryRunner.query(`DROP TABLE "loan_items"`);
        await queryRunner.query(`DROP TABLE "loans"`);
    }

}
