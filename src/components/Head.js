import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import logo from "./../assets/app-logo.png";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

function Head() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [searchSuggestions,setSearchSuggestions] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
        clearTimeout(timer);
    }

  }, [searchText]);

  const getSearchSuggestions = async () => {

    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();

    setSearchSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-5 bg-white shadow-lg fixed top-0 z-10 w-lvw">
      <div className="flex col-span-1 align-middle h-9">
        <RxHamburgerMenu
          style={{ height: "2em", width: "2em" }}
          onClick={toggleMenuHandler}
          className="cursor-pointer"
        />
        <img src={logo} alt="logo" className="mx-2" />
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 rounded-l-full h-9 px-5"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={()=>setShowSearchSuggestions(true)}
            onBlur={()=>setShowSearchSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full h-9 px-5 relative top-[1.75px] bg-gray-100">
            <IoIosSearch />
          </button>
        </div>
        {showSearchSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute bg-white mt-1 shadow-lg rounded-lg w-[568px] border border-gray-200">
            <ul className="mt-2">
                {searchSuggestions.map((suggestion)=>(
                    <li key={suggestion} className="px-5 py-2 hover:bg-gray-200 flex items-center text-md">
                        <IoIosSearch className="mr-4 w-[20px] h-[20px]" /> {suggestion}
                    </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <FaCircleUser style={{ height: "2em", width: "2em" }} />
      </div>
    </div>
  );
}

export default Head;
