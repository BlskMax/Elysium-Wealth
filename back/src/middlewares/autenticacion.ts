import { NextFunction, Request, Response } from "express";

const autenticacion = (req: Request, res: Response, next: NextFunction): void => {
    const token: string | undefined = req.headers["token"] as string;

    if (!token) {
        res.status(400).json({message: "Token requerido"});
        return;
    }

    if(token !== "TokenInvalido") {
        res.status(400).json({ message: "Token invalido!"});
        return;
    }
    next();
};

export default autenticacion;