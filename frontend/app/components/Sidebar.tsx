"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Employeemenu, HRmenu } from "../constant/sidebar";
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className=" w-[80px] bg-blue-950 text-white  min-h-screen p-4 hidden md:block">
      <div className=" flex justify-center">
        <img
          src="https://static.zohocdn.com/zohopeople/people5/images/ppl_logo.b70dd01cd185414f1793c0a089d331d7.svg"
          height={25}
          width={25}
          alt=""
        />
      </div>

      <div className="flex flex-col mt-3 items-center justify-center gap-2">
        {HRmenu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
            
          return (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-md"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <div
                  className={`p-2 rounded-lg transition ${
                    isActive ? "bg-blue-500" : "hover:bg-blue-800"
                  }`}
                >
                  <Icon size={25} className="text-white" />
                </div>

                <span
                  className={`text-xs text-center font-medium ${
                    isActive ? "text-gray-300" : "text-gray-100"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
