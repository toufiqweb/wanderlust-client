"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import logo from "@/assets/Wanderlast.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "My Bookings", path: "/bookings" },
    { name: "Admin", path: "/admin" },
  ];

  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <div className="w-full absolute ">
      <nav className="  bg-white border-b border-gray-200 shadow-sm sticky top-2 z-50 m-3 md:m-5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            {/* Left Side */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-sky-500"
                        : "text-gray-700 hover:text-sky-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
            >
              <Image
                src={logo}
                alt="Wanderlast Logo"
                width={150}
                height={150}
                className="object-contain "
              />
            </Link>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/profile"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-sky-500 transition"
              >
                <User size={16} />
                Profile
              </Link>

              {authLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-sky-500"
                        : "text-gray-700 hover:text-sky-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-125 py-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-sky-50 text-sky-500"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="border-t border-gray-200 my-2" />

              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                <User size={16} />
                Profile
              </Link>

              {authLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-sky-50 text-sky-500"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
