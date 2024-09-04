"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialId = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
// import IUser from "../interfaces/IUser";
const index_1 = require("../repositories/index ");
const credentialService_1 = require("./credentialService");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield index_1.userModel.find({
        relations: { appointments: true }
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield index_1.userModel.findOne({
        where: { id },
        relations: ["appointments"]
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    //CREAR USUARIO
    const newUser = index_1.userModel.create(createUserDto);
    yield index_1.userModel.save(newUser);
    //Crear credencial
    const newCredential = yield (0, credentialService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    //ASOCIAR newUser con newCredential
    newUser.credential = newCredential;
    yield index_1.userModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
// SERVICIO QUE RETORNA EL USUARIO A PARTIR DEL USERNAME
const findUserByCredentialId = (credentialid) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield index_1.userModel.findOneBy({
        credential: { id: credentialid }
    });
    //VERIFICAR SI !User
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.findUserByCredentialId = findUserByCredentialId;
