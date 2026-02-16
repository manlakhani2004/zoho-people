import { CalendarCheck, Clock, BookOpen, MoreHorizontal } from "lucide-react";
import { GoHome } from "react-icons/go";
import { PiHandshake } from "react-icons/pi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { BiAlarm } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";

export const HRmenu = [
  {
    name: "Home",
    path: "/dashboard",
    icon: GoHome,
  },
  {
    name: "Attendance",
    path: "/dashboard/attendance",
    icon: CalendarCheck,
  },
  {
    name: "Onboarding",
    path: "/dashboard/onboarding",
    icon: PiHandshake,
  },
  {
    name: "Leave",
    path: "/dashboard/leave",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Timesheet",
    path: "/dashboard/timesheet",
    icon: Clock,
  },
  {
    name: "Performance",
    path: "/dashboard/performance",
    icon: GoTrophy,
  },
  {
    name: "LMS",
    path: "/dashboard/lms",
    icon: BookOpen,
  },
  {
    name: "More",
    path: "/dashboard/more",
    icon: MoreHorizontal,
  },
];

export const Employeemenu = [
  {
    name: "Home",
    path: "/dashboard",
    icon: GoHome,
  },
    {
    name: "Leave Tracker",
    path: "/dashboard/leavetracker",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Attendance",
    path: "/dashboard/attendance",
    icon: BiAlarm,
  },

  {
    name: "files",
    path: "/dashboard/files",
    icon: BsFolder2Open,
  },
  {
    name: "HR letters",
    path: "/dashboard/hrletters",
    icon: CiStar,
  },
  {
    name: "More",
    path: "/dashboard/more",
    icon: MoreHorizontal,
  },
];

export const ManagerMenu = [
  {
    name: "Home",
    path: "/dashboard",
    icon: GoHome,
  },
    {
    name: "Leave Tracker",
    path: "/dashboard/leavetracker",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Team",
    path: "/dashboard/team",
    icon: RiTeamLine,
  },

  {
    name: "Attendance",
    path: "/dashboard/attendance",
    icon: BiAlarm,
  },

  {
    name: "files",
    path: "/dashboard/files",
    icon: BsFolder2Open,
  },
  {
    name: "HR letters",
    path: "/dashboard/hrletters",
    icon: CiStar,
  },
  {
    name: "More",
    path: "/dashboard/more",
    icon: MoreHorizontal,
  },
];