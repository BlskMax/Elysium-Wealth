import {Request, Response } from "express";
import { users } from "../../utils/users";

export default (req: Request, res: Response): void => {
    res.status(200).json(users);
}