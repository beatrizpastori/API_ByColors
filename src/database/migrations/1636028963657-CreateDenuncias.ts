import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDenuncias1636028963657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "denuncias",
                columns: [
                    {
                        name: "id_denuncia",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "id_post",
                        type: "integer",
                    },
                    {
                        name: "id_user",
                        type: "integer",
                    }
                ],     
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id_usuario"],
                        columnNames: ["id_user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKPost",
                        referencedTableName: "publicacao",
                        referencedColumnNames: ["id_publicacao"],
                        columnNames: ["id_post"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],        
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("denuncias");
    }

}