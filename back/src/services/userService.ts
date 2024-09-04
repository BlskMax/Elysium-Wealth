import User from "../entities/User";
import ICreateUserDto from "../interfaces/ICreateUserDto";
// import IUser from "../interfaces/IUser";
import { userModel } from "../repositories/index ";
import Credential, { createCredential } from "./credentialService";

export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[]= await userModel.find({
        relations: {appointments: true}
    });
    return allUsers;
};


export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user: User | null = await userModel.findOne ({
        where: {id},
        relations: ["appointments"]
    });
    if (!user) throw new Error("Usuario no encontrado"); 
    return user;
};

export const createUserService = async (createUserDto: ICreateUserDto) => {
    //CREAR USUARIO
    const newUser: User = userModel.create(createUserDto);
    await userModel.save(newUser);

    //Crear credencial
    const newCredential: Credential = await createCredential({
        username: createUserDto.username, 
        password: createUserDto.password,
    });
    //ASOCIAR newUser con newCredential
    newUser.credential = newCredential;
    await userModel.save(newUser);

    return newUser;
};

// SERVICIO QUE RETORNA EL USUARIO A PARTIR DEL USERNAME
export const findUserByCredentialId = async (credentialid: number) => {
    const user: User | null = await userModel.findOneBy({
        credential: {id: credentialid}
    })
    //VERIFICAR SI !User
    if (!user) throw new Error ("Usuario no encontrado")
    return user;
};