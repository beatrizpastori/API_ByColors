import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDoencas1632701801917 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "doencas",
                columns: [
                    {
                        name: "id_doenca",
                        type: "integer",
                        isPrimary: true,
                    },
                    {
                        name: "id_mes",
                        type: "integer",
                    },
                    {
                        name: "nome_doenca",
                        type: "varchar",
                        length: "40",
                    },
                    {
                        name: "nome_mes",
                        type: "varchar",
                        length: "40",
                    },
                    {
                        name: "definicao",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "estatisticas",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "aumenta_risco",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "prevencao",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "sintomas",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "deteccao",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "diagnostico",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "tratamento",
                        type: "varchar",
                        length: "400",
                    },
                    {
                        name: "ordem",
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
        queryRunner.dropTable("doencas");
    }

}
