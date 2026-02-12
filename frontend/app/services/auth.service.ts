import { toast } from "sonner";
export const signupUser = async (
  signupData:{
    name:string,
    email:string,
    password:string,
    phone:string 
  }
) => {
  const res = await fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (!res.status) {
    const error = await res.json();
    toast.error('signup failed');
    throw new Error(error.message || "Signup failed");
  }

  return await  res.json();
};


export const signinUser = async (
  signinData:{
    email:string,
    password:string,
  }
) => {
  const res = await fetch("http://localhost:5000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signinData),
  });

  if (!res.status) {
    const error = await res.json();
    toast.error('signin failed');
    throw new Error(error.message || "Signin failed");
  }

  return await  res.json();
};