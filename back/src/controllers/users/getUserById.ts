import {Request, Response} from "express";
import IUser from "../../interfaces/IUser";
import { users } from "../../utils/users";

export default(req: Request <{ id: string }, {}, {} >, res: Response): void => {
    const { id } = req.params;

    const index = users.findIndex((user) => user.id === Number(id));
    res.json("user");
}