import { BadRequestException, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error, value: validatedValue } = this.schema.validate(value, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      throw new BadRequestException({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    return validatedValue;
  }
}
