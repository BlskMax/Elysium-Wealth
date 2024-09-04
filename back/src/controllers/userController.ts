import Credential from "../services/credentialService"
import User from "../entities/User";
import ICreateCredentialDto from "../interfaces/ICreateCredentialDto";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import { validateCrential } from "../services/credentialService";
// import IUser from "../interfaces/IUser";
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "../services/userService"
import { Request, Response } from "express";
// import ICredential


export const getAllusers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
            res.status(400).json({
                message: error.message,
            });
        }
    };

    export const getUserById = async (
        req: Request <{id: number}, {}, {}>,
        res: Response
    ) => {
        try {
            const { id } = req. params;
            const user: User | null = await getUserByIdService(Number(id));
            res.status(200).json(user);
        } catch (error: any) {
            res.status(404).json({
                message: error.message,
            });
        }
    };

    export const register = async (
        req: Request<{}, {}, ICreateUserDto>,
        res: Response
    ) => {
        try {
            const {name, email, birthdate, nDni, username, password} = req.body;
            const newUser : User = await createUserService({
                name,
                email,
                birthdate,
                nDni,
                username,
                password,
            });
        res.status(201).json(newUser);
        } catch (error: any) {
            res.status(404).json({
                message: error.message,
            });
        }
    };

export const login = async (
    req: Request<{}, {}, ICreateCredentialDto>,
    res: Response
) => {
    try {
        const { username, password} = req.body;
        const Credential: Credential =  await validateCrential({
            username,
            password,
        });
        const user: User | null = await findUserByCredentialId(Credential.id);
        res.status(200).json({
            loggin: true,
            user,
        });
    }   catch (error:any) {
    res.status(400).json({
        message: error.message,
    });
  }
};