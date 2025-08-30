import React, { useState } from "react";
import {  Menu, X } from "lucide-react";
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const clicking = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex justify-between p-3 text-xl  font-bold bg-blue-400 items-center nav ">
        <h1> Logo</h1>
        <ul className=" hidden md:flex gap-4 ">
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
        </ul>
        <div className="md:hidden" onClick={clicking}>{menu? <X /> : <Menu />}</div>
        {menu && (
          <ul className=" md:hidden absolute  right-0  top-13    bg-blue-500 w-full p-3  ">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
