import { LoginModel } from "../login/loginModel";

export interface RegisterModel extends LoginModel{
    firstName:string,
    lastName:string
}