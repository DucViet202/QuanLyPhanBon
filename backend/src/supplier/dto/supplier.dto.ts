import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength, IsEnum, IsNumber, IsEmail, Length, IsArray } from "class-validator";

export class addSupplierDto {

    @ApiProperty({
        description: 'Tên nhà cung cấp',
        example: 'Công ty phân bón Bình Điền'
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    supplierName: string;

    @ApiProperty({
        description: 'Mô tả nhà cung cấp',
        example: 'Nhà cung cấp phân bón - thuốc trừ sâu uy tín, nhanh chóng trên vn',
        required: false,
    })
    @IsString()
    @IsOptional()
    @MaxLength(500)
    describeSupplier: string;

    @ApiProperty({
        description: 'Trạng thái',
        example: 'active'
    })
    @IsString()
    @IsOptional()
    @IsEnum(['active', 'inactive'])
    status: string;

    @ApiProperty({
        description: 'Địa chỉ nhà cung cấp',
        example: '720A Đ. Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Hồ Chí Minh 72300'
    })
    @IsString()
    @IsOptional()
    @MaxLength(100)
    supplierAddress: string;

    @ApiProperty({
        description: 'SĐT nhà cung cấp',
        example: '0901234567'
    })
    @IsString()
    @IsOptional()
    @Length(10, 10)
    supplierPhone: string;

    @ApiProperty({
        description: 'Email của nhà cung cấp',
        example: 'xx@gmail.com',
        required: false,
    })
    @IsEmail()
    @IsOptional()
    @MaxLength(50)
    supplierEmail: string;

    @ApiProperty({
        description: 'ID sản phẩm liên kết với nhà cung cấp',
        example: ['60d21bb67c1b2c001f6472d4'],
        required: false,
    })
    @IsArray()
    @IsOptional()
    listProductId: string[];

}

export class updateSupplierDto {


    @ApiProperty({
        description: 'Tên nhà cung cấp',
        example: 'Công ty phân bón Lâm Thao',
        required: false,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    supplierName: string;

    @ApiProperty({
        description: 'Mô tả nhà cung cấp',
        example: 'aaaaaaaaaaaaaaaa',
        required: false,
    })
    @IsString()
    @IsOptional()
    @MaxLength(500)
    describeSupplier: string;

    @ApiProperty({
        description: 'Trạng thái',
        example: 'active',
        required: false,
    })
    @IsString()
    @IsOptional()
    @IsEnum(['active', 'inactive'])
    status: string;

    @ApiProperty({
        description: 'Địa chỉ nhà cung cấp',
        example: '720A Đ. Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Hồ Chí Minh 72300',
        required: false,
    })
    @IsString()
    @IsOptional()
    @MaxLength(100)
    supplierAddress: string;

    @ApiProperty({
        description: 'SĐT nhà cung cấp',
        example: '0999999999',
        required: false,
    })
    @IsString()
    @IsOptional()
    @Length(10, 10)
    supplierPhone: string;

    @ApiProperty({
        description: 'Email của nhà cung cấp',
        example: 'xx@gmail.com',
        required: false,
    })
    @IsEmail()
    @IsOptional()
    @MaxLength(50)
    supplierEmail: string;

    @ApiProperty({
        description: 'ID sản phẩm liên kết với nhà cung cấp',
        example: ['60d21bb67c1b2c001f6472d4'],
        required: false,
    })
    @IsArray()
    @IsOptional()
    listProductId: string[];

}