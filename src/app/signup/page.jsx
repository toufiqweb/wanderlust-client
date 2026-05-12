"use client";

import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);
  };
  return (
    <div className="min-h-screen px-4 py-16 md:py-24 bg-[#f3f3f5] flex items-center justify-center">
      <div className="w-full max-w-140 bg-white border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-[38px] sm:text-[50px] font-light text-black leading-tight">
            Create Account
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Start your adventure with Wanderlust
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-[15px] font-semibold text-black mb-2">
              Full Name
            </label>

            <div className="flex items-center h-13.5 border border-gray-200 bg-[#f7f7f7] px-4">
              <FaUser className="text-gray-500 text-sm mr-3" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[15px] font-semibold text-black mb-2">
              Email Address
            </label>

            <div className="flex items-center h-13.5 border border-gray-200 bg-[#f7f7f7] px-4">
              <FaEnvelope className="text-gray-500 text-sm mr-3" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[15px] font-semibold text-black mb-2">
              Password
            </label>

            <div className="flex items-center h-13.5 border border-gray-200 bg-[#f7f7f7] px-4">
              <FaLock className="text-gray-500 text-sm mr-3" />

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[15px] font-semibold text-black mb-2">
              Confirm Password
            </label>

            <div className="flex items-center h-13.5 border border-gray-200 bg-[#f7f7f7] px-4">
              <FaLock className="text-gray-500 text-sm mr-3" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-13.5 bg-[#1aa5c8] hover:bg-[#1595b5] transition-all duration-300 text-white font-medium text-[16px]"
          >
            Create Account
          </button>

          <div className="flex items-center gap-4 py-1">
            <div className="flex-1 h-px bg-gray-200" />

            <span className="text-gray-500 text-sm whitespace-nowrap">
              Or sign up with
            </span>

            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            type="button"
            className="w-full h-13.5 border border-gray-200 flex items-center justify-center gap-3 text-black font-medium hover:bg-gray-50 transition-all duration-300"
          >
            <FaGoogle className="text-[#EA4335]" />

            <span>Sign Up With Google</span>
          </button>

          <p className="text-center text-gray-500 text-[15px] pt-2">
            Already have an account?{" "}
            <span className="text-[#1aa5c8] font-semibold cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
