import {Request, Response} from "express";
import { MailService } from "../services/MailService";

class MailsController {
    async sendForgotEmail (request: Request, response:Response){
        const { email, nome, senha } = request.body;

        const mailService = new MailService();

        try{
            const res = await mailService.sendForgotEmail(email, nome, senha);

            return response.json(res);
        }
        catch(err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}

export {MailsController};