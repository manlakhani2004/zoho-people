"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { signinUser } from "../services/auth.service";
import { toast } from "sonner";

interface LoginFormValues {
  email: string;
  password: string;
}

function page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const response = await signinUser(data);
      if (response?.success) {
        toast.success("signin succesfully");
        router.push("/dashboard");
      }
    } catch (e: any) {
      toast.error(e.message);
      console.log(e);
    }
    console.log("signin Data:", data);
  };
  return (
    <div className="flex justify-center items-center bg-gray-200 w-full min-h-screen px-4 py-6">
      <div className="bg-white w-full max-w-4xl rounded-md flex flex-col md:flex-row shadow shadow-blue-200/50 overflow-hidden">
        <div className="w-[60%]  md:min-w-[55%] border-b-2 md:border-b-0 md:border-r-2 p-6 sm:p-10 md:p-16 border-gray-200 flex flex-col gap-8">
          <div>
            <img
              src="https://static.zohocdn.com/iam/v2/components/images/newZoho_logo.5f6895fcb293501287eccaf0007b39a5.svg"
              width={110}
              alt=""
            />
          </div>

          <div>
            <p className="text-2xl font-semibold">Sign in</p>
            <p className="pt-2 text-gray-600">to access People</p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter email address or mobile number"
                  className="bg-gray-300/20 w-full py-2 placeholder:text-gray-400 px-3 border rounded-sm border-gray-400/40 focus:outline-none"
                  {...register("email", {
                    required: "Email or mobile is required",
                    validate: (value) => {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      const phoneRegex = /^[6-9]\d{9}$/; // India 10-digit

                      return (
                        emailRegex.test(value) ||
                        phoneRegex.test(value) ||
                        "Enter a valid email or mobile number"
                      );
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
                  placeholder="Enter password"
                  className="bg-gray-300/20 w-full py-2 px-3 border rounded-sm placeholder:text-gray-400 border-gray-400/40 focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-blue-500/90 text-white font-semibold rounded-sm"
                >
                  Next
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
            <p>Don't have a Zoho account?</p>
            <p
              className="cursor-pointer font-semibold text-blue-500"
              onClick={() => router.push("/signup")}
            >
              Sign up now
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] p-6 sm:p-10 flex gap-3 flex-col items-center justify-center">
          <div>
            <img
              src="https://static.zohocdn.com/iam/v2/components/images/Passwordless_illustration.5c0b2b6048ba19d2dec9f1fba38291c9.svg"
              className="w-[220px] sm:w-[260px] md:w-[300px]"
              alt=""
            />
          </div>

          <p className="font-semibold">Passwordless sign-in</p>

          <p className="text-center text-sm text-gray-600">
            Move away from risky passwords and experience one-tap access to
            Zoho. Download and install OneAuth.
          </p>

          <button className="bg-blue-200/70 text-blue-600 font-semibold py-2 px-5 text-sm rounded-full">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
