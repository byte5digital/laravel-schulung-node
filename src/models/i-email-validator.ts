export interface IUser {
    name: string
    email: string
}

export interface IEmailValidator {
    email: string
    user: IUser
}