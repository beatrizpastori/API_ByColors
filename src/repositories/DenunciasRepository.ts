import { EntityRepository, Repository } from "typeorm";
import { Denuncia } from "../entities/Denuncias";

@EntityRepository(Denuncia)
class DenunciasRepository extends Repository<Denuncia> {}

export { DenunciasRepository }