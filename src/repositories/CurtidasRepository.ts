import { EntityRepository, Repository } from "typeorm";
import { Curtida } from "../entities/Curtidas";

@EntityRepository(Curtida)
class CurtidasRepository extends Repository<Curtida> {}

export { CurtidasRepository }