import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMensagens1632702018269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "mensagem",
                columns: [
                    {
                        name: "id_msg",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "id_user",
                        type: "integer",
                    },
                    {
                        name: "id_doenca",
                        type: "integer",
                    },
                    {
                        name: "conteudo_msg", 
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "data",
                        type: "timestamp",
                        default: "now()",
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
                        columnNames: ["id_user"],
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
        queryRunner.dropTable("mensagem"); 
    }

}
