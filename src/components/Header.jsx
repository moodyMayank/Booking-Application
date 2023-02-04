import hwlogo from "../assets/hwlogo.png";
import {
  MagnifyingGlassCircleIcon,
  Bars3Icon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between space-x-2 bg-white shadow-md p-3 md:px-10">
      {/* Left */}
      <div className="relative flex flex-1 items-center cursor-pointer h-10 my-auto">
        <img className="h-9 md:h-12" src={hwlogo} alt="HW Logo" />
      </div>

      {/* Center */}
      <div className="flex flex-1 rounded-full border-2 py-1 max-w-lg hover:shadow-lg">
        <input
          type="text"
          placeholder="start your search"
          className="flex-grow pl-4 bg-transparent outline-none cursor-pointer"
        />
        <MagnifyingGlassCircleIcon className="hidden text-[#7115CD] h-10 p-0.5 cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex flex-1  items-center justify-end space-x-4">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex rounded-full bg-gray-500 p-1 cursor-pointer hover:shadow-md">
          <Bars3Icon className="h-8 p-1" />
          <UserCircleIcon className="h-8 p-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
