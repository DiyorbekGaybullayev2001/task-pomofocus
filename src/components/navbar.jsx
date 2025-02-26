import React, { useState } from "react";
import {
  FaChartBar,
  FaCog,
  FaUser,
  FaEllipsisV,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import SettingModal from "./settingmodal";
import ReportModal from "./reportmodal";
import DropdownMenu from "./dropdown";
import { FcGoogle } from "react-icons/fc";



// NAVBAR KOMPONENTI
const Navbar = () => {
  const [modal, setModal] = useState(null);

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <>
      <nav className="p-4 flex items-center justify-between border-b border-[#6f6f6fa3] pb-[30px]">
        <div className="flex items-center gap-2 text-white text-2xl font-bold">
          <FaCheckCircle />
          <span>Pomofocus</span>
        </div>
        <div className="flex items-center gap-2 ml-[100px]">
          <button
            className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md"
            onClick={() => openModal("report")}
          >
            <FaChartBar /> Report
          </button>
          <button
            className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md"
            onClick={() => openModal("setting")}
          >
            <FaCog /> Setting
          </button>
          <button
            className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md"
            onClick={() => openModal("signin")}
          >
            <FaUser /> Sign In
          </button>
          <DropdownMenu isOpen={modal==="menu"} />
          {/* <button
            className="flex items-center cursor-pointer bg-[#ffffff73] text-white px-3 py-2 rounded-md"
            onClick={() => openModal("menu")}
          >
            <FaEllipsisV />
          </button> */}
        </div>
      </nav>

      {/* Setting Modal */}
      <SettingModal isOpen={modal === "setting"} onClose={closeModal} />

      {/* report modal  */}
      <ReportModal isOpen={modal==="report"} onClose={closeModal}/>

      {/* DropdownMenu */}
      

      {/* Shunga o‘xshash boshqa modal komponentlar bo‘lishi mumkin */}
      {modal === "signin" && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000cf]">
          <div className="bg-[#888888f1] p-6 rounded-md shadow-lg w-[400px] text-white text-center">
            <h2 className="text-xl font-bold mb-4">Create Account</h2>
            <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold mb-4">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              /> */}
              <FcGoogle/>
              Signup with Google
            </button>
            <div className="flex items-center my-2">
              <hr className="flex-grow border-white/50" />
              <span className="mx-2">or</span>
              <hr className="flex-grow border-white/50" />
            </div>
            <div className="text-left">
              <label className="block mb-1 text-sm">EMAIL</label>
              <input
                type="email"
                className="w-full p-2 bg-white/80 text-black rounded-md"
                placeholder="example@mail.com"
              />
              <p className="text-red-400 text-sm mt-1">
                Please input valid email
              </p>
            </div>
            <button className="w-full bg-gray-800 text-white py-2 rounded-md mt-4">
              Sign up with Email
            </button>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <span className="underline cursor-pointer">Log in</span>
            </p>
            <button
              className="mt-4 text-sm bg-red-400 px-4 py-2 rounded-md"
              onClick={() => setModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;







// import React from "react";
// import { useState } from "react";
// import { FaChartBar, FaCog, FaUser, FaEllipsisV, FaCheckCircle } from "react-icons/fa";

// const Navbar = () => {
//   const [modal, setModal] = useState(null);

//   const openModal = (type) => setModal(type);
//   const closeModal = () => setModal(null);

//   return (
//     <>
//       <nav className=" p-4 flex items-center justify-between border-b border-[#6f6f6fa3] pb-[30px]">
//         <div className="flex items-center gap-2 text-white text-2xl font-bold">
//           <FaCheckCircle />
//           <span>Pomofocus</span>
//         </div>
//         <div className="flex items-center gap-2 ml-[100px]">
//           <button className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md" onClick={() => openModal("report")}> 
//             <FaChartBar /> Report 
//           </button>
//           <button className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md" onClick={() => openModal("setting")}> 
//             <FaCog /> Setting 
//           </button>
//           <button className="flex items-center cursor-pointer gap-2 bg-[#ffffff73] text-white px-3 py-1 rounded-md" onClick={() => openModal("signin")}> 
//             <FaUser /> Sign In 
//           </button>
//           <button className="flex items-center cursor-pointer bg-[#ffffff73] text-white px-3 py-2 rounded-md" onClick={() => openModal("menu")}> 
//             <FaEllipsisV /> 
//           </button>
//         </div>
//       </nav>
      
//       {modal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-[#000000b5]">
//           <div className="bg-white p-6 rounded-md shadow-lg">
//             <h2 className="text-lg font-bold mb-4">{modal.charAt(0).toUpperCase() + modal.slice(1)} Modal</h2>
//             <p>This is the {modal} modal content.</p>
//             <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
