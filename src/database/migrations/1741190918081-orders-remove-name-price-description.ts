import {MigrationInterface, QueryRunner} from "typeorm";

export class ordersRemoveNamePriceDescription1741190918081 implements MigrationInterface {
    name = 'ordersRemoveNamePriceDescription1741190918081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "price"`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "quantity" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updatedAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "name" character varying NOT NULL`);
    }

}
