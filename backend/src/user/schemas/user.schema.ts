import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  EMPLOYEE = "employee",
  HR = "hr",
}

@Schema({ timestamps: true })
export class User extends Document {

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @Prop({ required: true, trim: true })
  phone: string;

  @Prop({ type: Types.ObjectId, ref: "Department", default: null })
  departmentId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", default: null })
  managerId?: Types.ObjectId;

  @Prop({ default: null })
  employeeId?: string;

  @Prop({ default: null })
  firstName?: string;

  @Prop({ default: null })
  lastName?: string;

  @Prop({ default: null })
  fullName?: string;

  @Prop({ default: null })
  officialEmail?: string;

  @Prop({ default: null })
  personalEmail?: string;


  @Prop({ default: null })
  alternateNumber?: string;

  @Prop({ default: null })
  dateOfBirth?: string;

  @Prop({ default: null })
  gender?: string;

  @Prop({ default: null })
  maritalStatus?: string;

  @Prop({ default: null })
  nationality?: string;

  @Prop({ default: null })
  bloodGroup?: string;

  @Prop({ default: null })
  profilePhotoName?: string;


  @Prop({ default: null })
  dateOfJoining?: string;

  @Prop({ default: "Full-time" })
  employmentType?: string;

  @Prop({ default: null })
  designation?: string;


  @Prop({ default: null })
  workLocation?: string;

  @Prop({ default: null })
  shiftTiming?: string;

  @Prop({ default: "Office" })
  workMode?: string;

  @Prop({ default: null })
  probationPeriod?: string;

  @Prop({ default: null })
  confirmationDate?: string;

  @Prop({ default: null })
  noticePeriod?: string;


  @Prop({ default: null })
  currentAddressLine1?: string;

  @Prop({ default: null })
  currentAddressLine2?: string;

  @Prop({ default: null })
  currentCity?: string;

  @Prop({ default: null })
  currentState?: string;

  @Prop({ default: null })
  currentCountry?: string;

  @Prop({ default: null })
  currentPincode?: string;

  @Prop({ default: false })
  sameAsCurrent?: boolean;

  @Prop({ default: null })
  permanentAddressLine1?: string;

  @Prop({ default: null })
  permanentAddressLine2?: string;

  @Prop({ default: null })
  permanentCity?: string;

  @Prop({ default: null })
  permanentState?: string;

  @Prop({ default: null })
  permanentCountry?: string;

  @Prop({ default: null })
  permanentPincode?: string;

  // =========================
  // IDENTITY DOCUMENTS
  // =========================
  @Prop({ default: null })
  aadhaarNumber?: string;

  @Prop({ default: null })
  panNumber?: string;

  @Prop({ default: null })
  passportNumber?: string;

  @Prop({ default: null })
  drivingLicenseNumber?: string;

  @Prop({ default: null })
  uanNumber?: string;

  @Prop({ default: null })
  esicNumber?: string;

  // =========================
  // BANK DETAILS
  // =========================
  @Prop({ default: null })
  accountHolderName?: string;

  @Prop({ default: null })
  bankName?: string;

  @Prop({ default: null })
  accountNumber?: string;

  @Prop({ default: null })
  ifscCode?: string;

  @Prop({ default: null })
  bankBranchName?: string;

  @Prop({ default: "Savings" })
  accountType?: string;


  @Prop({ default: null })
  emergencyContactName?: string;

  @Prop({ default: null })
  emergencyRelationship?: string;

  @Prop({ default: null })
  emergencyPhoneNumber?: string;

  @Prop({ default: null })
  emergencyAlternatePhone?: string;

  @Prop({ default: null })
  emergencyAddress?: string;


  @Prop({ default: null })
  highestQualification?: string;

  @Prop({ default: null })
  collegeOrUniversity?: string;

  @Prop({ default: null })
  passingYear?: string;

  @Prop({ default: null })
  percentageOrCgpa?: string;

 
  @Prop({ default: null })
  previousCompanyName?: string;

  @Prop({ default: null })
  previousDesignation?: string;

  @Prop({ default: null })
  previousFromDate?: string;

  @Prop({ default: null })
  previousToDate?: string;

  @Prop({ default: null })
  totalExperience?: string;

  @Prop({ default: null })
  reasonForLeaving?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
