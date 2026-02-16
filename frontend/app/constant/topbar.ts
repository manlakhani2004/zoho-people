export const level1Tabs = [
  { label: "My Space", key: "my-space", href: "/dashboard" },
  { label: "Team", key: "team", href: "/dashboard/team" },
  { label: "Organization", key: "organization", href: "/dashboard/organization" },
];

export const level2TabsByKey: Record<string, { label: string; href: string }[]> = {
  "my-space": [
    { label: "Overview", href: "/dashboard" },
    { label: "Dashboard", href: "/dashboard/my-space/dashboard" },
    { label: "Calendar", href: "/dashboard/my-space/calendar" },
  ],
  team: [
    { label: "Team Space", href: "/dashboard/team" },
    { label: "Department", href: "/dashboard/team/department" },
    { label: "Projects", href: "/dashboard/team/projects" },
    { label: "Peers", href: "/dashboard/team/peers" },
    { label: "Approvals", href: "/dashboard/team/approvals" },
  ],
  organization: [
    { label: "Overview", href: "/dashboard/organization" },
    { label: "Announcements", href: "/dashboard/organization/announcements" },
    { label: "Policies", href: "/dashboard/organization/policies" },
    { label: "Employee Tree", href: "/dashboard/organization/employee-tree" },
    { label: "Employee List", href: "/dashboard/organization/employee-list" },
    { label: "Department Tree", href: "/dashboard/organization/department-tree" },
    {
      label: "Department Directory",
      href: "/dashboard/organization/department-directory",
    },
    { label: "Birthday Folks", href: "/dashboard/organization/birthday" },
    { label: "New Hires", href: "/dashboard/organization/new-hires" },
  ],
};
