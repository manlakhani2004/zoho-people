import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

@ValidatorConstraint({ name: "IsEmailOrPhone", async: false })
export class IsEmailOrPhone implements ValidatorConstraintInterface {
  validate(value: string) {
    if (!value) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return "Identifier must be a valid email or phone number";
  }
}
