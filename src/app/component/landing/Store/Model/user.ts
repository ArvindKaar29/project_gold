export class User {
    username: string;
    password: string;
    otp?: number;

    constructor(username: string, password: string, otp?: number) {
        this.username = username;
        this.password = password;
        this.otp = otp;
    }
}

export interface registerUser{
        userName: string,
        email: string,
        password: string,
        phonenumber: number,
        isadmin: boolean,
        reportee?: string 
  }
