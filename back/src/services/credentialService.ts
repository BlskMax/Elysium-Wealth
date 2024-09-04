import Credential from "../entities/Credential";
import ICreateCredentialDto from "../interfaces/ICreateCredentialDto";
import IValidateCredentialDto from "../interfaces/IValidateCredentialDto";
import { credentialModel } from "../repositories/index ";


export const createCredential = async (
    createCredentialDto: ICreateCredentialDto
): Promise <Credential> => {
    //VERIFICAR QUE NO EXISTA EL MAIL

    //CREAR CREDENCIAL
    const newCredential: Credential = credentialModel.create
    (createCredentialDto);

    //GUARDAR EN DB
    await credentialModel.save(newCredential);

    return newCredential;
};

export const validateCrential = async (
    validateCredentialDto: IValidateCredentialDto
): Promise<Credential> => {
    const {username, password} = validateCredentialDto;
    const foundCredential: Credential | null = await credentialModel.findOneBy({
        username
    })

    if (!foundCredential) throw Error("Credenciales incorrectas");
    if (password !== foundCredential?.password)
        throw Error ("Credenciales incorrectas");
    return foundCredential;
}

export default Credential;
