import { IsEmail, IsEmpty, IsNotEmpty, IsOptional,  } from 'class-validator';


export enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest',
  }

export class CreateUserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly lastName: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly role: UserRole;


    // Location information
    @IsOptional()
    readonly address?: string;

    @IsOptional()
    readonly city?: string;

    @IsOptional()
    readonly country?: string;

    @IsOptional()
    readonly countryCode?: string;

    // Contact information
    @IsOptional()
    readonly phoneCountryCode?: string;

    @IsOptional()
    readonly phoneNumber?: string;

    // Social Accounts information
    @IsOptional()
    readonly googleUrl?: string;

    @IsOptional()
    readonly facebookUrl?: string;

    @IsOptional()
    readonly twitterUrl?: string;

    @IsOptional()
    readonly githubUrl?: string;

    @IsOptional()
    readonly linkedinUrl?: string;

    @IsOptional()
    readonly instagramUrl?: string;

    @IsOptional()
    readonly websiteUrl?: string;

    @IsOptional()
    readonly youtubeUrl?: string;

    // Additional information
    @IsOptional()
    readonly bio?: string;

    @IsOptional()
    readonly profilePicture?: string;

    @IsOptional()
    readonly nickName?: string;

}
