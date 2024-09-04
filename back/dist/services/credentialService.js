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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCrential = exports.createCredential = void 0;
const Credential_1 = __importDefault(require("../entities/Credential"));
const index_1 = require("../repositories/index ");
const createCredential = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    //VERIFICAR QUE NO EXISTA EL MAIL
    //CREAR CREDENCIAL
    const newCredential = index_1.credentialModel.create(createCredentialDto);
    //GUARDAR EN DB
    yield index_1.credentialModel.save(newCredential);
    return newCredential;
});
exports.createCredential = createCredential;
const validateCrential = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentialDto;
    const foundCredential = yield index_1.credentialModel.findOneBy({
        username
    });
    if (!foundCredential)
        throw Error("Credenciales incorrectas");
    if (password !== (foundCredential === null || foundCredential === void 0 ? void 0 : foundCredential.password))
        throw Error("Credenciales incorrectas");
    return foundCredential;
});
exports.validateCrential = validateCrential;
exports.default = Credential_1.default;
