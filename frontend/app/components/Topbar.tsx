"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {
  Plus,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import { level1Tabs, level2TabsByKey } from "../constant/topbar";

function isActive(pathname: string, href: string) {

  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Topbar() {
  
  let pathname = "/dashboard";
  try {
    pathname = usePathname() || "/dashboard";
  } catch {
    pathname = "/dashboard";
  }

  
  const activeLevel1Key = useMemo(() => {
    if (pathname.startsWith("/dashboard/team")) return "team";
    if (pathname.startsWith("/dashboard/organization")) return "organization";
    return "my-space";
  }, [pathname]);

  const level2Tabs = level2TabsByKey[activeLevel1Key] ?? [];



  return (
    <div className="w-full">
  
      <div className="h-12 bg-[#2f3d63] text-white flex items-center justify-between px-5">
      
        <div className="flex items-center gap-10">
          {level1Tabs.map((t) => {
            const active = t.key === activeLevel1Key;
            return (
              <Link
                key={t.key}
                href={t.href}
                className={`relative text-[16px]  pb-4 pt-4 transition ${
                  active ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                {t.label}
            
                <span
                  className={`absolute left-0 bottom-[5px] h-[3px] w-full rounded-full transition ${
                    active ? "bg-[#1a73e8]" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
      
          <button
            type="button"
            className="h-9 w-9 rounded-md bg-[#1a73e8] hover:bg-[#1668d2] transition flex items-center justify-center"
            aria-label="Add"
          >
            <Plus size={18} />
          </button>

          <button
            type="button"
            className="h-9 w-9 rounded-md hover:bg-white/10 transition flex items-center justify-center"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="h-9 w-9 rounded-md hover:bg-white/10 transition flex items-center justify-center"
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full hover:bg-white/10 transition px-2 py-1"
              aria-label="Open profile menu"
            >
              <img
                src="https://people.zoho.in/qrioustech/viewPhoto?erecno=196212000003065015&mode=2&avatarid=15"
                alt="profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <ChevronDown size={16} className="opacity-90" />
            </button>

          </div>
        </div>
      </div>

      
      <div className="h-12 bg-white border-b border-gray-500 flex items-end justify-between px-5">
        <div className="flex items-center gap-10 h-full overflow-x-auto">
          {level2Tabs.map((t) => {
            const active = isActive(pathname, t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`relative h-full flex items-center text-[16px]  px-1 whitespace-nowrap transition ${
                  active
                    ? "text-gray-900"
                    : "text-gray-800 hover:text-gray-950"
                }`}
              >
                {t.label}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] w-full rounded-full transition ${
                    active ? "bg-[#1a73e8]" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
