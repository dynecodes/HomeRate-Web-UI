import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
    return (
        <div className="w-full flex justify-center mt-8 px-4">
        <div className="bg-white shadow-lg rounded-2xl flex items-center w-full md:w-[600px] lg:w-[700px] overflow-hidden">
            {/* Input field */}
            <input
            type="text"
            placeholder="Search by city, address, or ZIP..."
            className="flex-1 px-4 py-3 text-gray-700 outline-none text-sm sm:text-base"
            />
            {/* Search button */}
            <div className="bg-white hover:bg-rose-700 hover:gap-3 text-black px-3 py-3 flex items-center gap-3 font-medium transition-all rounded-full">
            <FaSearch className="w-4 h-4" />
            <span className="hidden sm:inline"></span>
            </div>
        </div>
        </div>
    );
};

export default SearchBox;
