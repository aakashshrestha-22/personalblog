"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleShowPw = () => {
    setShow(!show);
  };
  const onSubmit = async (data) => {
    try {
      data = { ...data };
      const response = await axios.post("/api/login", data);
      if (response.status === 200) {
        toast.success(response.message, {
          icon: "🚀",
          autoClose: 1000,
        });
        router.push("/profile");
      }
    } catch (error) {
      console.log(error, "Login Failed");
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form
        className="mt-24 flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-5xl text-[#3E613E] text-center font-medium">
          {" "}
          Login
        </p>
        <div className="md:w-1/2  flex items-center flex-col justify-center mt-5 ">
          <div className=" grid items-center gap-10  w-3/4">
            <div className="">
              <label className="text-[#3E613E] font-medium text-xl">
                Email:
              </label>
              <input
                placeholder="address@gmail.com"
                className=" mt-4 border border-[#658265] text-lg rounded py-4 px-3 w-full focus:outline-none focus:border-[#3E613E]"
                type="email"
                {...register("email")}
              />
            </div>
            <div className="relative">
              <label className="text-[#3E613E] font-medium text-xl">
                Password:
              </label>
              <input
                type={show ? "text" : "password"}
                className="  mt-4 border border-[#658265] text-lg rounded py-4 px-3 w-full focus:outline-none focus:border-[#3E613E]"
                placeholder="Password..."
                {...register("password")}
              />
              {show ? (
                <IoEyeOutline
                  className="absolute right-4 bottom-5 text-[#3E613E ] text-2xl"
                  onClick={() => handleShowPw()}
                />
              ) : (
                <IoEyeOffOutline
                  className="absolute right-4 bottom-5 text-[#3E613E ] text-2xl"
                  onClick={() => handleShowPw()}
                />
              )}
            </div>
          </div>
          <div className="w-3/4 mt-5 rounded-md flex justify-center items-center bg-[#658265] hover:bg-[#3E613E] duration-300 ease-in-out">
            <button
              type="submit"
              className="text-white py-3 text-xl font-medium "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
