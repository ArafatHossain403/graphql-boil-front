import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faGlobe,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-md">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left - Logo */}
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/airbnb.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Center - Nav Links */}
        <div className="navbar-center hidden md:flex space-x-6">
          <Link
            href="/stays"
            className="font-medium text-gray-600 hover:text-black"
          >
            Stays
          </Link>
          <Link
            href="/experiences"
            className="font-medium text-gray-600 hover:text-black"
          >
            Experiences
          </Link>
        </div>

        {/* Right - Profile and Buttons */}
        <div className="space-x-4 flex items-center">
          <button className="font-medium text-gray-600 hover:text-black">
            Airbnb your home
          </button>
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-5 cursor-pointer text-gray-600"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-full space-x-2"
            >
              <FontAwesomeIcon icon={faBars} className="h-5 text-gray-600" />
              <FontAwesomeIcon icon={faUser} className="h-5 text-gray-600" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 p-2 shadow menu menu-compact bg-base-100 rounded-box w-52"
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

      {/* Search Box */}
      <div className="flex justify-center items-center py-4 bg-white shadow-lg rounded-full mx-auto max-w-3xl px-6">
        <div className="flex justify-between w-full items-center space-x-4">
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Where</span>
            <span className="text-sm text-gray-500">Search destinations</span>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Check in</span>
            <span className="text-sm text-gray-500">Add dates</span>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Check out</span>
            <span className="text-sm text-gray-500">Add dates</span>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Who</span>
            <span className="text-sm text-gray-500">Add guests</span>
          </div>
          <button className="btn btn-primary btn-circle">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
