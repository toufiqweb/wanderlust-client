import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen px-4 py-16 md:py-24 bg-[#f3f3f5] flex items-center justify-center">
      <div className="w-full max-w-110 bg-white border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Resume your adventure with Wanderlust
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-[15px] font-semibold text-black mb-2">
              Email Address
            </label>

            <div className="flex items-center h-13.5 border border-gray-200 bg-[#f7f7f7] px-4">
              <FaEnvelope className="text-gray-500 text-sm mr-3" />

              <input
                type="email"
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
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#1aa5c8]" />

              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="text-[#1aa5c8] hover:underline font-medium"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-13.5 bg-[#1aa5c8] hover:bg-[#1595b5] transition-all duration-300 text-white font-medium text-[16px]"
          >
            Sign In
          </button>

          <div className="flex items-center gap-4 py-1">
            <div className="flex-1 h-px bg-gray-200" />

            <span className="text-gray-500 text-sm whitespace-nowrap">
              Or continue with
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
            Don't have an account?{" "}
            <span className="text-[#1aa5c8] font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
