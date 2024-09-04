import { Request, Response } from "express";
import { users } from "../../utils/users"; 
import IUser from "../../interfaces/IUser"; 

let userId: number = 10;


export default (req: Request<{}, {}, IUser>, res: Response): void => {
    const { username, email, birthdate, nDni, credentialsId } = req.body;
    if (!username || !email || !birthdate || !nDni || !credentialsId) {
      res.status(400).json({ message: "Faltan datos" });
      return;
    }

    const newUser: IUser = {
        id: userId++,
        username,
        email,
        birthdate,
        nDni,
        credentialsId, 
    };

    users.push(newUser);
    res.status(200).json(users);
}