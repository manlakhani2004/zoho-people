export type FormData = {

  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  role: Role
  personalEmail: string;
  phone: string;
  password: string,
  alternateNumber: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  bloodGroup: string;
  profilePhotoName: string;

  dateOfJoining: string;
  employmentType: string;
  departmentId: string; 
  managerId: string;
  designation: string;
  workLocation: string;
  shiftTiming: string;
  workMode: string;
  probationPeriod: string;
  confirmationDate: string;
  noticePeriod: string;


  currentAddressLine1: string;
  currentAddressLine2: string;
  currentCity: string;
  currentState: string;
  currentCountry: string;
  currentPincode: string;


  sameAsCurrent: boolean;
  permanentAddressLine1: string;
  permanentAddressLine2: string;
  permanentCity: string;
  permanentState: string;
  permanentCountry: string;
  permanentPincode: string;


  aadhaarNumber: string;
  panNumber: string;
  passportNumber: string;
  drivingLicenseNumber: string;
  uanNumber: string;
  esicNumber: string;


  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  bankBranchName: string;
  accountType: string;


  emergencyContactName: string;
  emergencyRelationship: string;
  emergencyPhoneNumber: string;
  emergencyAlternatePhone: string;
  emergencyAddress: string;


  highestQualification: string;
  collegeOrUniversity: string;
  passingYear: string;
  percentageOrCgpa: string;


  previousCompanyName: string;
  previousDesignation: string;
  previousFromDate: string;
  previousToDate: string;
  totalExperience: string;
  reasonForLeaving: string;
};
export type Role = "admin" | "manager" | "employee" | "hr";
export const emptyForm: FormData = {
  firstName: "",
  lastName: "",
  fullName: "",
  email: "",
  password: "",
  role: "employee",
  personalEmail: "",
  phone: "",
  alternateNumber: "",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  nationality: "",
  bloodGroup: "",
  profilePhotoName: "",

  dateOfJoining: "",
  employmentType: "Full-time",
  departmentId: "",
  designation: "",
  managerId: "",
  workLocation: "",
  shiftTiming: "",
  workMode: "Office",
  probationPeriod: "",
  confirmationDate: "",
  noticePeriod: "",

  currentAddressLine1: "",
  currentAddressLine2: "",
  currentCity: "",
  currentState: "",
  currentCountry: "",
  currentPincode: "",

  sameAsCurrent: false,
  permanentAddressLine1: "",
  permanentAddressLine2: "",
  permanentCity: "",
  permanentState: "",
  permanentCountry: "",
  permanentPincode: "",


  aadhaarNumber: "",
  panNumber: "",
  passportNumber: "",
  drivingLicenseNumber: "",
  uanNumber: "",
  esicNumber: "",


  accountHolderName: "",
  bankName: "",
  accountNumber: "",
  ifscCode: "",
  bankBranchName: "",
  accountType: "Savings",


  emergencyContactName: "",
  emergencyRelationship: "",
  emergencyPhoneNumber: "",
  emergencyAlternatePhone: "",
  emergencyAddress: "",


  highestQualification: "",
  collegeOrUniversity: "",
  passingYear: "",
  percentageOrCgpa: "",


  previousCompanyName: "",
  previousDesignation: "",
  previousFromDate: "",
  previousToDate: "",
  totalExperience: "",
  reasonForLeaving: "",
};
