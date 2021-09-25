import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContatos1632588502267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contatos",
                columns: [
                    {
                        name: "id_contato",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "id_doenca",
                        type: "integer",
                    },
                    {
                        name: "nome_lugar",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "30",
                    },
                    {
                        name: "site",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "excluido",
                        type: "boolean",
                        default: false,
                    },
                ],
                foreignKeys: [
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
        queryRunner.dropTable("contatos");
    }

}
