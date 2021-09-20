import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuarios1632077439661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id_usuario",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "adm",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "nome_usuario",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "15",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "estado",
                        type: "varchar",
                        length: "2",
                    },
                    {
                        name: "avatar",
                        type: "integer",
                    },
                    {
                        name: "excluido",
                        type: "boolean",
                        default: false,
                    },
                ],             
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("usuarios");
    }

}
