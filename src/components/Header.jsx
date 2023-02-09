import hwlogo from "../assets/hwlogo.png";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useNavigate, Link } from "react-router-dom";

import {
  MagnifyingGlassCircleIcon,
  Bars3Icon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const navigate = useNavigate();

  const clickHandler = () => {
    const state = {
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      guests: noOfGuests,
    };

    navigate(`/search/${searchInput}&${noOfGuests}&${startDate}&${endDate}`, {
      state: state,
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const resetInput = () => {
    setSearchInput("");
  };
  return (
    <header>
      <div className="sticky top-0 z-50 flex items-center justify-between space-x-2 bg-white p-3 md:px-10">
        {/* Left */}
        <div className="relative flex flex-1 items-center h-10 my-auto">
          <img
            onClick={() => navigate("/")}
            className="h-9 md:h-12 cursor-pointer"
            src={hwlogo}
            alt="HW Logo"
          />
        </div>

        {/* Center */}
        <div className="flex flex-1 rounded-full border-2 py-1 max-w-lg hover:shadow-lg">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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
      </div>
      {searchInput && (
        <div className="relative flex flex-col items-center max-w-xl mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#7115CD"]}
            onChange={handleSelect}
          />
          <div className="flex items-center w-full justify-between border-b">
            <h2 className="text-2xl font-semibold">Number of Guests</h2>
            <div className="flex items-center">
              <UsersIcon className="h-7" />
              <input
                type="number"
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min={1}
                className="w-12 pl-2  border-solid border-2 border-purple-100 text-[#7115CD]"
              />
            </div>
          </div>
          <div className="flex w-full ">
            <button
              onClick={resetInput}
              className="flex-1 font-medium hover:border-2 p-4 text-gray-500 hover:bg-slate-100 hover:scale-105 transition transform duration-150 ease-out"
            >
              CANCEL
            </button>
            <button
              onClick={clickHandler}
              className="flex-1 font-medium hover:border-2 p-4 hover:bg-slate-100 hover:scale-105 transition transform duration-150 ease-out text-[#7115CD]"
            >
              SEARCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
