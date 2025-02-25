import React from "react";
import { useState } from "react";
import { FaChartBar, FaCog, FaUser, FaEllipsisV, FaCheckCircle } from "react-icons/fa";

const Navbar = () => {
  const [modal, setModal] = useState(null);

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <>
      <nav className=" p-4 flex items-center justify-between border-b border-[#6f6f6fa3] pb-[30px]">
        <div className="flex items-center gap-2 text-white text-2xl font-bold">
          <FaCheckCircle />
          <span>Pomofocus</span>
        </div>
        <div className="flex items-center gap-2 ml-[100px]">
          <button className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md" onClick={() => openModal("report")}> 
            <FaChartBar /> Report 
          </button>
          <button className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md" onClick={() => openModal("setting")}> 
            <FaCog /> Setting 
          </button>
          <button className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md" onClick={() => openModal("signin")}> 
            <FaUser /> Sign In 
          </button>
          <button className="flex items-center cursor-pointer bg-[#ffffff73] text-white px-3 py-2 rounded-md" onClick={() => openModal("menu")}> 
            <FaEllipsisV /> 
          </button>
        </div>
      </nav>
      
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000b5]">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-4">{modal.charAt(0).toUpperCase() + modal.slice(1)} Modal</h2>
            <p>This is the {modal} modal content.</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
