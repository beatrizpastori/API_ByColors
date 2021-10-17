import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePublicacoes1632701916705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "publicacao",
                columns: [
                    {
                        name: "id_publicacao",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "id_usuario",
                        type: "integer",
                    },
                    {
                        name: "id_doenca",
                        type: "integer",
                    },
                    {
                        name: "conteudo",
                        type: "varchar",
                        length: "200",
                    },
                    {
                        name: "imagem",
                        type: "varchar",
                        length: "1000",
                    },
                    {
                        name: "data",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "denuncias",
                        type: "integer",
                    },
                    {
                        name: "excluido",
                        type: "boolean",
                        default: false,
                    },
                ],     
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id_usuario"],
                        columnNames: ["id_usuario"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKDoenca",
                        referencedTableName: "doencas",
                        referencedColumnNames: ["id_doenca"],
                        columnNames: ["id_doenca"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],        
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("publicacao");
    }

}
