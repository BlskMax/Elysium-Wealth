import  {Request, Response } from "express";
import { users } from "../../utils/users";

export default(req: Request <{ id: string }, {}, {} >, res: Response): void => {
    const { id } = req.params;

    const index = users.findIndex((user) => user.id === Number(id));

    if (index === -1) {
        res.status(404).json({ message: `El id: ${id} no existe!` });
        return;
    }

    users.splice(index, 1);
    res.json({message: `Usuario con el id: ${id} ha sido eliminado`})
};