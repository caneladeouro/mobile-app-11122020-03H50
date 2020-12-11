import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class tbUser1607636789148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tb_user",
        columns: [
          {
            name: "cd_id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nm_user",
            type: "varchar",
          },
          {
            name: "nm_email",
            type: "varchar",
          },
          {
            name: "ds_password",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tb_user");
  }
}
