import { EntityRepository, Repository } from "typeorm";
import { Mensagem } from "../entities/Mensagem";

@EntityRepository(Mensagem)
class MensagemRepository extends Repository<Mensagem> {}

export { MensagemRepository }