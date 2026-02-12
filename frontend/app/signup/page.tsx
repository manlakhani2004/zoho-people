"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupUser } from "../services/auth.service";
import { toast } from "sonner";

interface FormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  policy: boolean;
}

function page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await signupUser(data);
      if (response?.success) {
        toast.success("signup successfully");
        router.push("/signin");
      }
    } catch (e: any) {
      toast.error(e.message);
    }
    console.log("Form Data:", data);
  };
  return (
    <div className="text-black bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 flex justify-between items-center px-7 py-3">
        <div>
          <img
            src="//www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg"
            width={120}
            alt="Zoho Logo"
          />
        </div>

        <div
          className="flex items-center gap-2 text-sm cursor-pointer"
          onClick={() => router.push("/signin")}
        >
          <p>Have a Zoho Account?</p>
          <p className="font-semibold text-blue-700">SIGN IN</p>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-end lg:gap-72">
        <div className="w-full max-w-[500px] lg:w-[500px] flex flex-col mb-10 justify-center mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0">
          <div>
            <div>
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/productlogos/people.svg"
                width={120}
                alt=""
              />
            </div>
            <p className="text-xl sm:text-2xl font-semibold py-5">
              Start your 30-day free trial
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div>
              <input
                type="text"
                placeholder="Name*"
                className="    py-5 w-full px-2 border border-slate-600 rounded-lg  placeholder:font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email*"
                className=" py-5 w-full px-2 border border-slate-600 rounded-lg  placeholder:font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"

                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password*"
                className="py-5 w-full px-2 border border-slate-600 rounded-lg  placeholder:font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="py-5 w-full px-2 border border-slate-600 rounded-lg  placeholder:font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"

                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="text-sm text-slate-600 flex items-center gap-2">
              <input
                type="checkbox"
                {...register("policy", {
                  required: "You must accept the terms",
                })}
              />
              I agree to the Terms of Service and Privacy Policy.
            </div>
            {errors.policy && (
              <p className="text-red-600 text-sm">{errors.policy.message}</p>
            )}

            <button
              type="submit"
              className="py-4 font-semibold text-xl text-white w-full bg-red-600/85 rounded-md"
            >
              FREE SIGN UP
            </button>
          </form>
        </div>

        <div className="w-full max-w-[500px] lg:w-[480px] lg:h-screen px-6 sm:px-10 gap-9 flex flex-col items-start justify-center bg-blue-100/50 mx-auto lg:mx-0 py-8 lg:py-0">
          <div>
            <img
              src="https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/shortlist.png"
              width={140}
              alt=""
            />
          </div>
          <div className="text-lg sm:text-xl">
            "We were looking for a solution that was constantly evolving. Zoho
            People is straightforward and helped us automate some painful HR
            tasks"
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/recruit/zr-giles.jpg"
                width={50}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold">Giles Warburton</p>
              <p>Managing Director / Project Delivery</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-between w-full">
            <div>
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/crozdesk-quality-choice-2025.png"
                width={90}
                className="py-5 rounded-lg shadow shadow-gray-300 px-4 bg-white"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/g2-leader-enterprise-winter-2025.svg"
                width={90}
                className="py-5 rounded-lg shadow shadow-gray-300 px-4 bg-white"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/software-suggest-best-for-startups-2025.png"
                width={90}
                className="py-5 rounded-lg shadow shadow-gray-300 px-4 bg-white"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/gartner-peer-insights-customers-choice-2025.png"
                width={90}
                className="py-5 rounded-lg shadow shadow-gray-300 px-4 bg-white"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-200/10 py-3">
        <p className="text-center text-sm">
          © 2026, Zoho Corporation Pvt. Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default page;
