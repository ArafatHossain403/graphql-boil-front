// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="border-b shadow-md">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-2">
          <button className="btn btn-outline btn-sm">Anywhere</button>
          <button className="btn btn-outline btn-sm">Any week</button>
          <button className="btn btn-outline btn-sm">Add guests</button>
        </div>
        <div className="space-x-2 flex items-center">
          <button className="btn btn-sm btn-ghost">Become a host</button>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-sm btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img src="/images/profile-placeholder.png" alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100 px-6">
        <div className="navbar-start">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="h-8" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/stays">Stays</Link>
            </li>
            <li>
              <Link href="/experiences">Experiences</Link>
            </li>
            <li>
              <Link href="/places">Places</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/stays">Stays</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
              <li>
                <Link href="/places">Places</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
