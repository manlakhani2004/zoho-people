import Joi from "joi";

export const CreateEmployeeSchema = Joi.object({

  email: Joi.string().trim().lowercase().email().required(),

  password: Joi.string().min(6).required(),

  role: Joi.string()
    .valid("admin", "manager", "employee", "hr")
    .required(),

  phone: Joi.string().trim().required(),


  departmentId: Joi.string().optional().allow(null, ""),
  managerId: Joi.string().optional().allow(null, ""),


  employeeId: Joi.string().optional().allow(null, ""),

  firstName: Joi.string().optional().allow(null, ""),
  lastName: Joi.string().optional().allow(null, ""),
  fullName: Joi.string().optional().allow(null, ""),

  officialEmail: Joi.string().optional().allow(null, ""),
  personalEmail: Joi.string().optional().allow(null, ""),

  alternateNumber: Joi.string().optional().allow(null, ""),

  dateOfBirth: Joi.string().optional().allow(null, ""),
  gender: Joi.string().optional().allow(null, ""),
  maritalStatus: Joi.string().optional().allow(null, ""),
  nationality: Joi.string().optional().allow(null, ""),
  bloodGroup: Joi.string().optional().allow(null, ""),
  profilePhotoName: Joi.string().optional().allow(null, ""),


  dateOfJoining: Joi.string().optional().allow(null, ""),
  employmentType: Joi.string().optional().allow(null, ""),
  designation: Joi.string().optional().allow(null, ""),
  reportingManager: Joi.string().optional().allow(null, ""),
  workLocation: Joi.string().optional().allow(null, ""),
  shiftTiming: Joi.string().optional().allow(null, ""),
  workMode: Joi.string().optional().allow(null, ""),
  probationPeriod: Joi.string().optional().allow(null, ""),
  confirmationDate: Joi.string().optional().allow(null, ""),
  noticePeriod: Joi.string().optional().allow(null, ""),


  currentAddressLine1: Joi.string().optional().allow(null, ""),
  currentAddressLine2: Joi.string().optional().allow(null, ""),
  currentCity: Joi.string().optional().allow(null, ""),
  currentState: Joi.string().optional().allow(null, ""),
  currentCountry: Joi.string().optional().allow(null, ""),
  currentPincode: Joi.string().optional().allow(null, ""),

  sameAsCurrent: Joi.boolean().optional(),

  permanentAddressLine1: Joi.string().optional().allow(null, ""),
  permanentAddressLine2: Joi.string().optional().allow(null, ""),
  permanentCity: Joi.string().optional().allow(null, ""),
  permanentState: Joi.string().optional().allow(null, ""),
  permanentCountry: Joi.string().optional().allow(null, ""),
  permanentPincode: Joi.string().optional().allow(null, ""),


  aadhaarNumber: Joi.string().optional().allow(null, ""),
  panNumber: Joi.string().optional().allow(null, ""),
  passportNumber: Joi.string().optional().allow(null, ""),
  drivingLicenseNumber: Joi.string().optional().allow(null, ""),
  uanNumber: Joi.string().optional().allow(null, ""),
  esicNumber: Joi.string().optional().allow(null, ""),


  accountHolderName: Joi.string().optional().allow(null, ""),
  bankName: Joi.string().optional().allow(null, ""),
  accountNumber: Joi.string().optional().allow(null, ""),
  ifscCode: Joi.string().optional().allow(null, ""),
  bankBranchName: Joi.string().optional().allow(null, ""),
  accountType: Joi.string().optional().allow(null, ""),


  emergencyContactName: Joi.string().optional().allow(null, ""),
  emergencyRelationship: Joi.string().optional().allow(null, ""),
  emergencyPhoneNumber: Joi.string().optional().allow(null, ""),
  emergencyAlternatePhone: Joi.string().optional().allow(null, ""),
  emergencyAddress: Joi.string().optional().allow(null, ""),

  highestQualification: Joi.string().optional().allow(null, ""),
  collegeOrUniversity: Joi.string().optional().allow(null, ""),
  passingYear: Joi.string().optional().allow(null, ""),
  percentageOrCgpa: Joi.string().optional().allow(null, ""),


  previousCompanyName: Joi.string().optional().allow(null, ""),
  previousDesignation: Joi.string().optional().allow(null, ""),
  previousFromDate: Joi.string().optional().allow(null, ""),
  previousToDate: Joi.string().optional().allow(null, ""),
  totalExperience: Joi.string().optional().allow(null, ""),
  reasonForLeaving: Joi.string().optional().allow(null, ""),
});
