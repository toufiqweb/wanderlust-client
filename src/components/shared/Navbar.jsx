"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import logo from "@/assets/Wanderlast.png";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Admin", path: "/admin" },
    { name: "Add-Destination", path: "/add-destination" },
  ];

  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  // Session
  const { data: session, isPending } = authClient.useSession();

  // Logout Function
  const handleLogout = async () => {
    await authClient.signOut();

    setIsOpen(false);
  };

  return (
    <nav className="sticky md:fixed top-0 left-0 w-full z-50 md:p-4">
      <div className="container mx-auto bg-white/90 backdrop-blur-md shadow-sm px-6">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <Image
              src={logo}
              alt="Wanderlast Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-8">
            {session?.user ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-sky-500 transition"
                >
                  <User size={16} />
                  Profile
                </Link>

                <div className="flex items-center gap-2">
                  <Avatar>
                    <Avatar.Image
                    referrerPolicy="no-referer"
                      alt={session?.user?.name || "User Avatar"}
                      src={session?.user?.image || "/default-avatar.png"}
                    />
                    <Avatar.Fallback>{session?.user?.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-500 transition cursor-pointer"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              authLinks.map((link) => {
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
              })
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-125 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {/* Nav Links */}
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

            {/* Session Based UI */}
            {session?.user ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <User size={16} />
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              authLinks.map((link) => {
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
              })
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
