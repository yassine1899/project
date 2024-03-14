import React from "react";

function SearchBar() {
  return (
    <div>
      <form className="searchForm">
        <input type="text" placeholder="Search" />
        <button type="Submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={4}
            >
              <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></path>
              <path
                strokeLinecap="round"
                d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
