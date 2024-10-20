import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {

    @IsNotEmpty({ message: `'username' is required` })
    @IsString({ message: `'username' must be a string` })
    username: string

    @IsNotEmpty({ message: `'password' is required` })
    @IsString({ message: `'password' must be a string` })
    password: string
    
    @IsNotEmpty({ message: `'restore' is required` })
    @IsBoolean({ message: `'restore' must be a boolean value` })
    restore: boolean

}   