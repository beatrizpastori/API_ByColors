import { EntityRepository, Repository } from "typeorm";
import { Contatos } from "../entities/Contatos";

@EntityRepository(Contatos)
class ContatosRepository extends Repository<Contatos> {}

export { ContatosRepository }