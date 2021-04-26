import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey, TableUnique } from "typeorm";

export class UserModel1619424812999 implements MigrationInterface {
    name = 'UserModel1619424812999';
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "character varying(255)",
                },
                {
                    name: "password",
                    type: "character varying(255)",
                },
                {
                    name: "email",
                    type: "character varying(255)",
                    isUnique: true
                },
            ]
        }), true)
        await queryRunner.createUniqueConstraint('users', new TableUnique({name:'users_email_unique', columnNames:['email']}))
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}