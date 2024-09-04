import {Request, Response} from "express";
import IUser from "../../interfaces/IUser";
import { users } from "../../utils/users";

export default(req: Request <{ id: string }, {}, Partial<IUser>>, res: Response): void => {
    const { id } = req.params;
    const {username} = req.body;

    // if (!username && !email && !password && !password) {
    if (!username) {
        res.status(400).json({message: "Faltan datos!"});
        return; 
    }

    const userFound = users.find((user) => user.id === Number(id));

    if (!userFound) {
        res.status(400).json({message: `No existe el Usuario con el id: ${id}`});
        return;
    }

    if(username) userFound.username = username;
    // if(password) userFound.username = password;
    
    res.json(userFound);
}