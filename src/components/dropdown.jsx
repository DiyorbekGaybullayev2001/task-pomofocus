import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaSignInAlt, FaCrown, FaKeyboard } from "react-icons/fa";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center cursor-pointer bg-[#ffffff73] text-white px-3 py-2 rounded-md"
      >
        <FaEllipsisV />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden">
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100">
            <FaSignInAlt /> Login
          </button>
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100">
            <FaCrown /> Premium
          </button>
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100">
            <FaKeyboard /> Shortcuts
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
