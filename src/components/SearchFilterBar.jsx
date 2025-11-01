import React from "react";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { searchJobs, sortJobs } from "../redux/jobSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mt-8 mb-5 flex items-center justify-between w-[90%] sm:w-[70%] md:w-[50%] bg-[#0d0d0f]/90 text-white rounded-full p-3 border border-gray-700 shadow-lg backdrop-blur-md transition-all duration-300">
      {/* 🔍 Search Input */}
      <div className="flex items-center w-3/4 px-4">
        <Search size={20} className="text-blue-400" />
        <input
          type="text"
          placeholder="Search for jobs, skills, or company..."
          onChange={(e) => dispatch(searchJobs(e.target.value))}
          className="bg-transparent outline-none text-gray-200 placeholder-gray-400 w-full text-sm sm:text-base"
        />
      </div>

      {/* 🔽 Sort Dropdown */}
      <select
        onChange={(e) => dispatch(sortJobs(e.target.value))}
        className="bg-gray-800/60 text-gray-200 text-sm px-3 py-2 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 focus:ring-2 focus:ring-blue-600 outline-none"
      >
        <option value="date" className="text-black">
          Sort by Date
        </option>
        <option value="salary" className="text-black">
          Sort by Salary
        </option>
      </select>
    </div>
  );
};

export default SearchBar;
