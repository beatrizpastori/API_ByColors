import { createConnection } from "typeorm";

createConnection();

//Criar Migration: npm run typeorm migration:create -- -n CreateNOME
//Rodar Migration: npm run typeorm migration:run