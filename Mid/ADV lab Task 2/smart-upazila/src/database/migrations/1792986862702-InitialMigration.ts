import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1792986862702 implements MigrationInterface {
    name = 'InitialMigration1792986862702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying(100) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "nid" character varying(30) NOT NULL, "upazila" character varying(100) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "complaints" ("id" SERIAL NOT NULL, "title" character varying(150) NOT NULL, "description" text NOT NULL, "category" character varying(50) NOT NULL, "location" character varying(150) NOT NULL, "status" character varying(30) NOT NULL DEFAULT 'Pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4b7566a2a489c2cc7c12ed076ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emergency_services" ("id" SERIAL NOT NULL, "serviceName" character varying(120) NOT NULL, "category" character varying(50) NOT NULL, "contactNumber" character varying(20) NOT NULL, "address" character varying(200) NOT NULL, CONSTRAINT "PK_55170f4caf2b532844bd0ea53cc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "emergency_services"`);
        await queryRunner.query(`DROP TABLE "complaints"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
