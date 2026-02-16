"use client";

import React, { useEffect, useState } from "react";
import Section from "@/app/components/common/Section";
import Field from "@/app/components/common/Field";
import { emptyForm, FormData, Role } from "@/app/types/onboarding";
import { Onboarding } from "@/app/services/onboarding";
import { toast } from "sonner";
import EmployeeTable from "@/app/components/EmployeesTable";

const inputClass =
  "w-full border-b border-slate-200 bg-transparent px-0 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900";

const selectClass =
  "w-full border-b border-slate-200 bg-transparent px-0 py-2 text-sm outline-none focus:border-slate-900";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<FormData>(emptyForm);
  const [departments, setDepartments] = useState<any[]>([]);
  const [managers, setManagers] = useState<any[]>([]);

  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        // departments
        const depRes = await fetch("http://localhost:5000/departments");
        const depData = await depRes.json();
        setDepartments(depData.data);

        // managers
        const manRes = await fetch("http://localhost:5000/employee/managers");
        const manData = await manRes.json();
        setManagers(manData.data);
      } catch (err) {
        console.log("Dropdown API error:", err);
      }
    };

    fetchDropdowns();
  }, []);

  const set = (key: keyof FormData, value: any) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const fn = data.firstName.trim();
    const ln = data.lastName.trim();
    set("fullName", [fn, ln].filter(Boolean).join(" "));
  }, [data.firstName, data.lastName]);

  useEffect(() => {
    if (!data.sameAsCurrent) return;

    setData((prev) => ({
      ...prev,
      permanentAddressLine1: prev.currentAddressLine1,
      permanentAddressLine2: prev.currentAddressLine2,
      permanentCity: prev.currentCity,
      permanentState: prev.currentState,
      permanentCountry: prev.currentCountry,
      permanentPincode: prev.currentPincode,
    }));
  }, [
    data.sameAsCurrent,
    data.currentAddressLine1,
    data.currentAddressLine2,
    data.currentCity,
    data.currentState,
    data.currentCountry,
    data.currentPincode,
  ]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // console.log("ONBOARDING PAYLOAD:", data);
    // alert("Saved! Check console.");
    try {
      const respose = await Onboarding(data);
      console.log(respose);
      if (!respose?.success) {
        toast.error(respose.message);
      } else {
        toast.success("Employee added succesfully");
        setOpen(false);
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Employees</h1>
            <p className="mt-1 text-sm text-slate-500">
              Click Add Employee to open onboarding form
            </p>
          </div>

          <button
            onClick={openModal}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            + Add Employee
          </button>
        </div>
        <div>
        <EmployeeTable />

        </div>

        {open ? (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={closeModal}
            />

            <div className="absolute left-1/2 top-1/2 w-[95vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <div>
                  <div className="text-base font-semibold text-slate-900">
                    Add Employee
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Fill onboarding details
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="max-h-[78vh] overflow-auto px-6 py-6">
                <form onSubmit={onSubmit}>
                  <Section title="Basic Employee Details" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Email*">
                      <input
                        className={inputClass}
                        value={data.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="name@company.com"
                        required
                      />
                    </Field>

                    <Field label="Password*">
                      <input
                        type="password"
                        className={inputClass}
                        value={data.password}
                        onChange={(e) => set("password", e.target.value)}
                        placeholder="Enter password"
                        required
                      />
                    </Field>
                    <Field label="Role*">
                      <select
                        className={selectClass}
                        value={data.role}
                        onChange={(e) => set("role", e.target.value as Role)}
                        required
                      >
                        <option value="admin">admin</option>
                        <option value="manager">manager</option>
                        <option value="employee">employee</option>
                        <option value="hr">hr</option>
                      </select>
                    </Field>

                    <Field label="Mobile Number*">
                      <input
                        className={inputClass}
                        value={data.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="9876543210"
                      />
                    </Field>

                    <Field label="First Name*">
                      <input
                        className={inputClass}
                        value={data.firstName}
                        onChange={(e) => set("firstName", e.target.value)}
                        required
                      />
                    </Field>

                    <Field label="Last Name*">
                      <input
                        className={inputClass}
                        value={data.lastName}
                        onChange={(e) => set("lastName", e.target.value)}
                        required
                      />
                    </Field>

                    <Field label="Full Name (auto)">
                      <input
                        className={inputClass}
                        value={data.fullName}
                        readOnly
                      />
                    </Field>

                    <Field label="Department">
                      <select
                        className={selectClass}
                        value={data.departmentId}
                        onChange={(e) => set("departmentId", e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departments?.map((dep) => (
                          <option key={dep._id} value={dep._id}>
                            {dep.departmentName}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Reporting Manager">
                      <select
                        className={selectClass}
                        value={data.managerId}
                        onChange={(e) => set("managerId", e.target.value)}
                      >
                        <option value="">Select Manager</option>
                        {managers?.map((m) => (
                          <option key={m._id} value={m._id}>
                            {m.name || m.email}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Personal Email">
                      <input
                        className={inputClass}
                        value={data.personalEmail}
                        onChange={(e) => set("personalEmail", e.target.value)}
                        placeholder="name@gmail.com"
                      />
                    </Field>

                    <Field label="Alternate Number">
                      <input
                        className={inputClass}
                        value={data.alternateNumber}
                        onChange={(e) => set("alternateNumber", e.target.value)}
                        placeholder="Optional"
                      />
                    </Field>

                    <Field label="Date of Birth">
                      <input
                        type="date"
                        className={inputClass}
                        value={data.dateOfBirth}
                        onChange={(e) => set("dateOfBirth", e.target.value)}
                      />
                    </Field>

                    <Field label="Gender">
                      <select
                        className={selectClass}
                        value={data.gender}
                        onChange={(e) => set("gender", e.target.value)}
                      >
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </Field>

                    <Field label="Marital Status">
                      <select
                        className={selectClass}
                        value={data.maritalStatus}
                        onChange={(e) => set("maritalStatus", e.target.value)}
                      >
                        <option value="">Select</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                      </select>
                    </Field>

                    <Field label="Nationality">
                      <input
                        className={inputClass}
                        value={data.nationality}
                        onChange={(e) => set("nationality", e.target.value)}
                        placeholder="Indian"
                      />
                    </Field>

                    <Field label="Blood Group (optional)">
                      <select
                        className={selectClass}
                        value={data.bloodGroup}
                        onChange={(e) => set("bloodGroup", e.target.value)}
                      >
                        <option value="">Select</option>
                        {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                          (bg) => (
                            <option key={bg}>{bg}</option>
                          ),
                        )}
                      </select>
                    </Field>

                    <Field label="Profile Photo (optional)">
                      <input
                        type="file"
                        className="w-full text-sm"
                        accept="image/*"
                        onChange={(e) =>
                          set(
                            "profilePhotoName",
                            e.target.files?.[0]?.name || "",
                          )
                        }
                      />
                      {data.profilePhotoName ? (
                        <div className="text-xs text-slate-500">
                          Selected: {data.profilePhotoName}
                        </div>
                      ) : null}
                    </Field>
                  </div>

                  <Section title="Joining & Job Details" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Date of Joining">
                      <input
                        type="date"
                        className={inputClass}
                        value={data.dateOfJoining}
                        onChange={(e) => set("dateOfJoining", e.target.value)}
                      />
                    </Field>

                    <Field label="Employment Type">
                      <select
                        className={selectClass}
                        value={data.employmentType}
                        onChange={(e) => set("employmentType", e.target.value)}
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                        <option>Contract</option>
                      </select>
                    </Field>

                    <Field label="Designation">
                      <input
                        className={inputClass}
                        value={data.designation}
                        onChange={(e) => set("designation", e.target.value)}
                      />
                    </Field>

                    <Field label="Work Location (Branch)">
                      <input
                        className={inputClass}
                        value={data.workLocation}
                        onChange={(e) => set("workLocation", e.target.value)}
                        placeholder="Ahmedabad"
                      />
                    </Field>

                    <Field label="Shift Timing">
                      <input
                        className={inputClass}
                        value={data.shiftTiming}
                        onChange={(e) => set("shiftTiming", e.target.value)}
                        placeholder="10:00 AM - 7:00 PM"
                      />
                    </Field>

                    <Field label="Work Mode">
                      <select
                        className={selectClass}
                        value={data.workMode}
                        onChange={(e) => set("workMode", e.target.value)}
                      >
                        <option>Office</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                      </select>
                    </Field>

                    <Field label="Probation Period">
                      <input
                        className={inputClass}
                        value={data.probationPeriod}
                        onChange={(e) => set("probationPeriod", e.target.value)}
                        placeholder="3 months"
                      />
                    </Field>

                    <Field label="Confirmation Date">
                      <input
                        type="date"
                        className={inputClass}
                        value={data.confirmationDate}
                        onChange={(e) =>
                          set("confirmationDate", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Notice Period">
                      <input
                        className={inputClass}
                        value={data.noticePeriod}
                        onChange={(e) => set("noticePeriod", e.target.value)}
                        placeholder="30 days"
                      />
                    </Field>
                  </div>

                  <Section title="Address Details" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Current Address Line 1">
                      <input
                        className={inputClass}
                        value={data.currentAddressLine1}
                        onChange={(e) =>
                          set("currentAddressLine1", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Current State">
                      <input
                        className={inputClass}
                        value={data.currentState}
                        onChange={(e) => set("currentState", e.target.value)}
                      />
                    </Field>

                    <Field label="Current Address Line 2">
                      <input
                        className={inputClass}
                        value={data.currentAddressLine2}
                        onChange={(e) =>
                          set("currentAddressLine2", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Current PIN Code">
                      <input
                        className={inputClass}
                        value={data.currentPincode}
                        onChange={(e) => set("currentPincode", e.target.value)}
                      />
                    </Field>

                    <Field label="Current City">
                      <input
                        className={inputClass}
                        value={data.currentCity}
                        onChange={(e) => set("currentCity", e.target.value)}
                      />
                    </Field>

                    <Field label="Current Country">
                      <input
                        className={inputClass}
                        value={data.currentCountry}
                        onChange={(e) => set("currentCountry", e.target.value)}
                        placeholder="India"
                      />
                    </Field>

                    <div className="md:col-span-2 flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                      <input
                        type="checkbox"
                        checked={data.sameAsCurrent}
                        onChange={(e) => set("sameAsCurrent", e.target.checked)}
                      />
                      <div className="text-sm text-slate-700">
                        Permanent address is same as current address
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Permanent Address Line 1">
                      <input
                        className={inputClass}
                        value={data.permanentAddressLine1}
                        onChange={(e) =>
                          set("permanentAddressLine1", e.target.value)
                        }
                        disabled={data.sameAsCurrent}
                      />
                    </Field>

                    <Field label="Permanent State">
                      <input
                        className={inputClass}
                        value={data.permanentState}
                        onChange={(e) => set("permanentState", e.target.value)}
                        disabled={data.sameAsCurrent}
                      />
                    </Field>

                    <Field label="Permanent Address Line 2">
                      <input
                        className={inputClass}
                        value={data.permanentAddressLine2}
                        onChange={(e) =>
                          set("permanentAddressLine2", e.target.value)
                        }
                        disabled={data.sameAsCurrent}
                      />
                    </Field>

                    <Field label="Permanent PIN Code">
                      <input
                        className={inputClass}
                        value={data.permanentPincode}
                        onChange={(e) =>
                          set("permanentPincode", e.target.value)
                        }
                        disabled={data.sameAsCurrent}
                      />
                    </Field>

                    <Field label="Permanent City">
                      <input
                        className={inputClass}
                        value={data.permanentCity}
                        onChange={(e) => set("permanentCity", e.target.value)}
                        disabled={data.sameAsCurrent}
                      />
                    </Field>

                    <Field label="Permanent Country">
                      <input
                        className={inputClass}
                        value={data.permanentCountry}
                        onChange={(e) =>
                          set("permanentCountry", e.target.value)
                        }
                        disabled={data.sameAsCurrent}
                      />
                    </Field>
                  </div>

                  <Section title="Identity / Government Documents" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Aadhaar Number">
                      <input
                        className={inputClass}
                        value={data.aadhaarNumber}
                        onChange={(e) => set("aadhaarNumber", e.target.value)}
                        placeholder="XXXX XXXX XXXX"
                      />
                    </Field>

                    <Field label="PAN Number">
                      <input
                        className={inputClass}
                        value={data.panNumber}
                        onChange={(e) => set("panNumber", e.target.value)}
                        placeholder="ABCDE1234F"
                      />
                    </Field>

                    <Field label="Passport Number (optional)">
                      <input
                        className={inputClass}
                        value={data.passportNumber}
                        onChange={(e) => set("passportNumber", e.target.value)}
                      />
                    </Field>

                    <Field label="Driving License (optional)">
                      <input
                        className={inputClass}
                        value={data.drivingLicenseNumber}
                        onChange={(e) =>
                          set("drivingLicenseNumber", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="UAN Number (optional)">
                      <input
                        className={inputClass}
                        value={data.uanNumber}
                        onChange={(e) => set("uanNumber", e.target.value)}
                      />
                    </Field>

                    <Field label="ESIC Number (optional)">
                      <input
                        className={inputClass}
                        value={data.esicNumber}
                        onChange={(e) => set("esicNumber", e.target.value)}
                      />
                    </Field>
                  </div>

                  <Section title="Bank Details (Salary)" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Account Holder Name">
                      <input
                        className={inputClass}
                        value={data.accountHolderName}
                        onChange={(e) =>
                          set("accountHolderName", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Bank Name">
                      <input
                        className={inputClass}
                        value={data.bankName}
                        onChange={(e) => set("bankName", e.target.value)}
                      />
                    </Field>

                    <Field label="Account Number">
                      <input
                        className={inputClass}
                        value={data.accountNumber}
                        onChange={(e) => set("accountNumber", e.target.value)}
                      />
                    </Field>

                    <Field label="IFSC Code">
                      <input
                        className={inputClass}
                        value={data.ifscCode}
                        onChange={(e) => set("ifscCode", e.target.value)}
                      />
                    </Field>

                    <Field label="Branch Name">
                      <input
                        className={inputClass}
                        value={data.bankBranchName}
                        onChange={(e) => set("bankBranchName", e.target.value)}
                      />
                    </Field>

                    <Field label="Account Type">
                      <select
                        className={selectClass}
                        value={data.accountType}
                        onChange={(e) => set("accountType", e.target.value)}
                      >
                        <option>Savings</option>
                        <option>Current</option>
                      </select>
                    </Field>
                  </div>

                  <Section title="Emergency Contact" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Emergency Contact Name">
                      <input
                        className={inputClass}
                        value={data.emergencyContactName}
                        onChange={(e) =>
                          set("emergencyContactName", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Relationship">
                      <input
                        className={inputClass}
                        value={data.emergencyRelationship}
                        onChange={(e) =>
                          set("emergencyRelationship", e.target.value)
                        }
                        placeholder="Father / Mother / Spouse"
                      />
                    </Field>

                    <Field label="Phone Number">
                      <input
                        className={inputClass}
                        value={data.emergencyPhoneNumber}
                        onChange={(e) =>
                          set("emergencyPhoneNumber", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Alternate Phone">
                      <input
                        className={inputClass}
                        value={data.emergencyAlternatePhone}
                        onChange={(e) =>
                          set("emergencyAlternatePhone", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Address (optional)">
                      <input
                        className={inputClass}
                        value={data.emergencyAddress}
                        onChange={(e) =>
                          set("emergencyAddress", e.target.value)
                        }
                      />
                    </Field>
                  </div>

                  <Section title="Education Details" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Highest Qualification">
                      <input
                        className={inputClass}
                        value={data.highestQualification}
                        onChange={(e) =>
                          set("highestQualification", e.target.value)
                        }
                        placeholder="B.Tech"
                      />
                    </Field>

                    <Field label="College / University">
                      <input
                        className={inputClass}
                        value={data.collegeOrUniversity}
                        onChange={(e) =>
                          set("collegeOrUniversity", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Passing Year">
                      <input
                        className={inputClass}
                        value={data.passingYear}
                        onChange={(e) => set("passingYear", e.target.value)}
                        placeholder="2024"
                      />
                    </Field>

                    <Field label="Percentage / CGPA (optional)">
                      <input
                        className={inputClass}
                        value={data.percentageOrCgpa}
                        onChange={(e) =>
                          set("percentageOrCgpa", e.target.value)
                        }
                        placeholder="8.2"
                      />
                    </Field>
                  </div>

                  <Section title="Previous Employment" />

                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field label="Company Name">
                      <input
                        className={inputClass}
                        value={data.previousCompanyName}
                        onChange={(e) =>
                          set("previousCompanyName", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="Designation">
                      <input
                        className={inputClass}
                        value={data.previousDesignation}
                        onChange={(e) =>
                          set("previousDesignation", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="From Date">
                      <input
                        type="date"
                        className={inputClass}
                        value={data.previousFromDate}
                        onChange={(e) =>
                          set("previousFromDate", e.target.value)
                        }
                      />
                    </Field>

                    <Field label="To Date">
                      <input
                        type="date"
                        className={inputClass}
                        value={data.previousToDate}
                        onChange={(e) => set("previousToDate", e.target.value)}
                      />
                    </Field>

                    <Field label="Experience (years/months)">
                      <input
                        className={inputClass}
                        value={data.totalExperience}
                        onChange={(e) => set("totalExperience", e.target.value)}
                        placeholder="2 years"
                      />
                    </Field>

                    <Field label="Reason for Leaving">
                      <input
                        className={inputClass}
                        value={data.reasonForLeaving}
                        onChange={(e) =>
                          set("reasonForLeaving", e.target.value)
                        }
                      />
                    </Field>
                  </div>

                  <div className="mt-12 flex flex-col-reverse justify-end gap-3 border-t border-slate-200 pt-5 sm:flex-row">
                    <button
                      type="button"
                      className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
                    >
                      Save Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
