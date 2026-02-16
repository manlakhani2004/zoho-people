"use client"
import { useEffect, useState } from "react";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/employee/employees");
      // console.log("running employees")
      // console.log(res);
      const data = await res.json();
      setEmployees(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
<div className="mt-6 rounded-2xl border border-slate-200 bg-white">
  {/* Header */}
  <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <div className="text-base font-semibold text-slate-900">Employees</div>
      <div className="mt-1 text-sm text-slate-500">
        Manage employees, departments and reporting managers
      </div>
    </div>

    <div className="flex items-center gap-2">
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
        Total: <span className="font-semibold text-slate-900">{employees.length}</span>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="p-6">
    {loading ? (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        Loading employees...
      </div>
    ) : employees.length === 0 ? (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        No employees found
      </div>
    ) : (
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="py-3">Employee</th>
              <th className="py-3">Role</th>
              <th className="py-3">Phone</th>
              <th className="py-3">Department</th>
              <th className="py-3">Manager</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => {
              const name = emp.fullName || emp.firstName || emp.email;
              const role = emp.role;

              return (
                <tr
                  key={emp._id}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >
              
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                        {(name?.[0] || "E").toUpperCase()}
                      </div>

                      <div>
                        <div className="font-medium text-slate-900">{name}</div>
                        <div className="text-xs text-slate-500">{emp.email}</div>
                      </div>
                    </div>
                  </td>

                  
                  <td className="py-4">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium capitalize text-slate-700">
                      {role}
                    </span>
                  </td>

                  <td className="py-4 text-slate-700">{emp.phone || "-"}</td>

                 
                  <td className="py-4 text-slate-700">
                    {emp.departmentId?.departmentName || "-"}
                  </td>

                 
                  <td className="py-4 text-slate-700">
                    {emp.managerId?.name || emp.managerId?.email || "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )}
  </div>
</div>

  );
}
