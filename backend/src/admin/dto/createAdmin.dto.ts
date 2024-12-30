import { ApiProperty } from "@nestjs/swagger";
import { IsDate, MinLength, IsEmail, IsNotEmpty, IsString, MaxLength, Matches, IsMongoId } from "class-validator";

export class CreateAdminDto {

    @ApiProperty({
        description: 'Tên của quản trị viên',
        example: 'Admin01'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    nameAdmin: string;

    @ApiProperty({
        description: 'Tên người dùng của quản trị viên',
        example: 'admin1'
    })
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    userName: string;

    @ApiProperty({
        description: 'Mật khẩu của quản trị viên',
        example: 'Admin@123'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(15)
    password: string;

    @ApiProperty(
        {
            description: 'Role of the admin',
            example: '["66445e3ad052f97add5912c1","66445e3ad052f97add5912c1"]'
        }
    )
    @IsNotEmpty()
    @IsMongoId({ each: true })
    roleId: string[];
}