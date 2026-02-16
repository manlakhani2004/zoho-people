import Joi from "joi";

export const CreateDepartmentSchema = Joi.object({
  departmentCode: Joi.string().trim().required(),
  departmentName: Joi.string().trim().required(),

  description: Joi.string().allow("").optional(),

  parentDepartmentId: Joi.string().allow(null, "").optional(),
  departmentHeadId: Joi.string().allow(null, "").optional(),

  status: Joi.string().valid("ACTIVE", "INACTIVE").optional(),
});


export const UpdateDepartmentSchema = Joi.object({
  departmentCode: Joi.string().trim().optional(),
  departmentName: Joi.string().trim().optional(),

  description: Joi.string().allow("").optional(),

  parentDepartmentId: Joi.string().allow(null, "").optional(),
  departmentHeadId: Joi.string().allow(null, "").optional(),

  status: Joi.string().valid("ACTIVE", "INACTIVE").optional(),
});
