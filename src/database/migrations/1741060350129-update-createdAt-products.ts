import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCreatedAtProducts1741060350129 implements MigrationInterface {
    name = 'updateCreatedAtProducts1741060350129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "UQ_03846b4bae9df80f19c76005a82"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "UQ_03846b4bae9df80f19c76005a82" UNIQUE ("phone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "UQ_03846b4bae9df80f19c76005a82"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "UQ_03846b4bae9df80f19c76005a82" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "lastName" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "name" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "createdAt"`);
    }

}
