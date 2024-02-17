import { Request, Response } from "express";
import { userLoginService } from "../../shared/services/login/userLoginService";

const userLoginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const token = await userLoginService({ email, password});

        if (!token) {
            return res.status(401).json({ message: 'Email ou Senha inválidos' })
        }
        return res.status(200).json({ token });
    } catch (error) {
        console.error('Erro no login do usuário', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export { userLoginController };