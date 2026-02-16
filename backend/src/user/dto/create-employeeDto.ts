import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from "class-validator";
import { UserRole } from "../schemas/user.schema";

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsEnum(UserRole)
    role: UserRole;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    departmentId?: string;

    @IsOptional()
    @IsString()
    managerId?: string;

    @IsOptional() @IsString() firstName?: string;
    @IsOptional() @IsString() lastName?: string;
    @IsOptional() @IsString() fullName?: string;

    @IsOptional() @IsString() officialEmail?: string;
    @IsOptional() @IsString() personalEmail?: string;

    @IsOptional() @IsString() mobileNumber?: string;
    @IsOptional() @IsString() alternateNumber?: string;

    @IsOptional() @IsString() dateOfBirth?: string;
    @IsOptional() @IsString() gender?: string;
    @IsOptional() @IsString() maritalStatus?: string;
    @IsOptional() @IsString() nationality?: string;
    @IsOptional() @IsString() bloodGroup?: string;

    @IsOptional() @IsString() profilePhotoName?: string;

    @IsOptional() @IsString() dateOfJoining?: string;
    @IsOptional() @IsString() employmentType?: string;
    @IsOptional() @IsString() designation?: string;
    @IsOptional() @IsString() workLocation?: string;
    @IsOptional() @IsString() shiftTiming?: string;
    @IsOptional() @IsString() workMode?: string;
    @IsOptional() @IsString() probationPeriod?: string;
    @IsOptional() @IsString() confirmationDate?: string;
    @IsOptional() @IsString() noticePeriod?: string;


    @IsOptional() @IsString() currentAddressLine1?: string;
    @IsOptional() @IsString() currentAddressLine2?: string;
    @IsOptional() @IsString() currentCity?: string;
    @IsOptional() @IsString() currentState?: string;
    @IsOptional() @IsString() currentCountry?: string;
    @IsOptional() @IsString() currentPincode?: string;

    @IsOptional() sameAsCurrent?: boolean;

    @IsOptional() @IsString() permanentAddressLine1?: string;
    @IsOptional() @IsString() permanentAddressLine2?: string;
    @IsOptional() @IsString() permanentCity?: string;
    @IsOptional() @IsString() permanentState?: string;
    @IsOptional() @IsString() permanentCountry?: string;
    @IsOptional() @IsString() permanentPincode?: string;

    @IsOptional() @IsString() aadhaarNumber?: string;
    @IsOptional() @IsString() panNumber?: string;
    @IsOptional() @IsString() passportNumber?: string;
    @IsOptional() @IsString() drivingLicenseNumber?: string;
    @IsOptional() @IsString() uanNumber?: string;
    @IsOptional() @IsString() esicNumber?: string;


    @IsOptional() @IsString() accountHolderName?: string;
    @IsOptional() @IsString() bankName?: string;
    @IsOptional() @IsString() accountNumber?: string;
    @IsOptional() @IsString() ifscCode?: string;
    @IsOptional() @IsString() bankBranchName?: string;
    @IsOptional() @IsString() accountType?: string;


    @IsOptional() @IsString() emergencyContactName?: string;
    @IsOptional() @IsString() emergencyRelationship?: string;
    @IsOptional() @IsString() emergencyPhoneNumber?: string;
    @IsOptional() @IsString() emergencyAlternatePhone?: string;
    @IsOptional() @IsString() emergencyAddress?: string;

    @IsOptional() @IsString() highestQualification?: string;
    @IsOptional() @IsString() collegeOrUniversity?: string;
    @IsOptional() @IsString() passingYear?: string;
    @IsOptional() @IsString() percentageOrCgpa?: string;


    @IsOptional() @IsString() previousCompanyName?: string;
    @IsOptional() @IsString() previousDesignation?: string;
    @IsOptional() @IsString() previousFromDate?: string;
    @IsOptional() @IsString() previousToDate?: string;
    @IsOptional() @IsString() totalExperience?: string;
    @IsOptional() @IsString() reasonForLeaving?: string;
}
