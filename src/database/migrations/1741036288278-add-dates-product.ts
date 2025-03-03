import {MigrationInterface, QueryRunner} from "typeorm";

export class addDatesProduct1741036288278 implements MigrationInterface {
    name = 'addDatesProduct1741036288278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "status" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "status"`);
    }

}
