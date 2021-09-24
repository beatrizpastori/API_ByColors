import { EntityRepository, Repository } from "typeorm";
import { Doenca } from "../entities/Doencas";

@EntityRepository(Doenca)
class DoencaRepository extends Repository<Doenca> {}

export { DoencaRepository }