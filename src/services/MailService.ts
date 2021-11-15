import * as nodemailer from 'nodemailer';

class MailService{

    constructor() {}

    async sendForgotEmail(email: string, nome: string, senha: string) {
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            secure: false,
            auth: {
                user: '95bd5c594cc84c',
                pass: '2d8b4cb01d1d6e'
            },
        });
    
        const info = await transporter.sendMail({
            from: '"ByColors" <noreply@bycolors.com.br>',
            to: email,
            subject: "CorAção - Redefinir Senha",
            // text: "Hello world?",
            html: `Olá, ${nome}! <br><br>A sua nova senha para o acesso da plataforma é <b>${senha}</b>`,
        });

        return info;
    }
    
}

export {MailService};