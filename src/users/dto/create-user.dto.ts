import {  IsEmail, Min, Max, IsInt, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsEmail() // Valida que sea un email
    email?: string;
    @IsInt()
    @Max(70,   {message:"la edad no puede ser mayor a 70"})
    @Min(18,  {message:"la edad deve ser mayor a 18"})
    age?: number;
    @MinLength(3, {message:"el nombre deve contener al menos 3 caracteres"})
    @IsNotEmpty()
    name:string
    @IsNotEmpty({ message: 'La dirección no puede estar vacía' })
    address: string; // Nuevo campo
  }

    
    
   
    

    


    


