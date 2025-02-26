import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaSignInAlt, FaCrown, FaKeyboard, FaTrash, FaList, FaCheck, FaEyeSlash } from "react-icons/fa";

const DropdownMenu2 = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = type === "user" ? [
    { icon: <FaSignInAlt />, label: "Login" },
    { icon: <FaCrown />, label: "Premium" },
    { icon: <FaKeyboard />, label: "Shortcuts" }
  ] : [
    { icon: <FaTrash />, label: "Clear finished tasks" },
    { icon: <FaList />, label: "Use Template" },
    { icon: <FaList />, label: "Import from Todoist", locked: true },
    { icon: <FaCheck />, label: "Clear act pomodoros" },
    { icon: <FaEyeSlash />, label: "Hide tasks", locked: true },
    { icon: <FaTrash />, label: "Clear all tasks" }
  ];

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button onClick={toggleDropdown} className="p-2 bg-[#92929299] cursor-pointer text-white rounded-md">
        <FaEllipsisV />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ${item.locked ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu2;
