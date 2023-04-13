import React, { useEffect, useState } from "react";
import UrlListItems from "./UrlListItems";

const getlocalSearches = function () {
  let list = localStorage.getItem("serches");
  if (list) {
    return JSON.parse(localStorage.getItem("serches"));
  } else {
    return [];
  }
};

function SearchBar() {
  const [inputVal, setInputVal] = useState(" ");
  const [itemData, setItemData] = useState(getlocalSearches());

  //setting data on input
  const getInput = (e) => {
    setInputVal(e.target.value);
  };
  // creating an array of data's
  const setValue = () => {
    setItemData((olddata) => {
      return [...olddata, inputVal];
    });
    setInputVal("");
  };

  // add data on local storage
  useEffect(() => {
    localStorage.setItem("serches", JSON.stringify(itemData));

  }, [itemData]);
  useEffect(() => {
    alert("Fetching is not working right. now we can olny store the links ")
    
  }, []);

  return (
    <div className=" container-full mx-auto  ">
      <div className="header  px-10 py-8  text-[#00466E] flex justify-between border border-b-[#B4B4B4] ">
        <h3 className=" font-bold uppercase">live website tracking</h3>
        <p className="text-xs text-[#006B6E]">Currently tracking {itemData.length} websites</p>
      </div>

        <div className="px-10 mt-5  flex gap-3 justify-between">
          <input
            type="text"
            className="border border-[#B4B4B4] w-[80%] rounded py-5 p-3 placeholder-shown:border-gray-500 placeholder-shown:text-xs "
            placeholder="input with url validation "
            id="hello"
            value={inputVal}
            onChange={getInput}
          />
          <button
            className="uppercase bg-[#00466E] w-[18%] rounded text-white text-xs"
            onClick={setValue}
          >
            {" "}
            add webiste
          </button>
        </div>

        <div className="text-[#00466E] px-10 mt-10 ">
          <h3 className=" font-bold uppercase ">websites</h3>

          <div className="details mt-10">
            {itemData.map(function (ele, index) {
              return <UrlListItems url={ele} key={index} />;
            })}
          </div>
        </div>

    </div>
  );
}

export default SearchBar;

