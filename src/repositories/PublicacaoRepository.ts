import { EntityRepository, Repository } from "typeorm";
import { Publicacao } from "../entities/Publicacao";

@EntityRepository(Publicacao)
class PublicacaoRepository extends Repository<Publicacao> {}

export { PublicacaoRepository }