import * as EmailValidator from "email-validator"
import { IEmailValidator } from "../models/i-email-validator"

export const EmailValidation = (data: IEmailValidator): boolean =>
	EmailValidator.validate(data?.user?.email ?? "")
