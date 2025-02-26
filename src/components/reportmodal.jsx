import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import { ImFire } from "react-icons/im";

const ReportModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Summary");
  const [activePeriod, setActivePeriod] = useState("Month");

  if (!isOpen) return null;

  const rankingData = [
    { rank: 1, name: "Jay Jay", time: "107:05" },
    { rank: 2, name: "Soly", time: "88:33" },
    { rank: 3, name: "Griz", time: "88:25" },
    { rank: 4, name: "Vevi(neet 2025)", time: "84:24" },
    { rank: 5, name: "Johnny Sarante", time: "84:18" },
    { rank: 6, name: "Melchizedek.", time: "83:16" },
    { rank: 7, name: "Aniii", time: "82:32" },
    { rank: 8, name: "AfterLike99", time: "81:28" },
    { rank: 9, name: "Shakhriev", time: "81:21" },
    { rank: 10, name: "Ilon Mask", time: "88:00" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000be] bg-opacity-50 z-50">
      <div className="bg-white w-[500px] p-5 rounded-md shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-2 mb-4">
          <h2 className="text-lg font-bold">Report</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <FaTimes size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mb-4 border-amber-800 rounded-md gap-1">
          {["Summary", "Detail", "Ranking"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 p-2 rounded-md cursor-pointer ${
                activeTab === tab ? "bg-red-400 text-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        {activeTab === "Summary" && (
          <>
            
              {/* Activity Summary */}
         <h3 className="font-semibold mb-2">Activity Summary</h3>
         <p className="text-sm text-gray-500">* This report will be available when you are logged in</p>
         <div className="grid grid-cols-3 gap-2 mt-2 text-white">
           <div className="p-3 bg-red-400 text-center rounded-md flex items-center justify-between">
             <Ri24HoursLine /> Hours focused
           </div>
           <div className="p-3 bg-red-400 text-center rounded-md flex items-center justify-between">
             <FaRegCalendarDays /> Days accessed
           </div>
           <div className="p-3 bg-red-400 text-center rounded-md flex items-center ">
             <ImFire />  Day streak
           </div>
         </div>

         {/* Focus Hours */}
         <h3 className="font-semibold mt-4">Focus Hours</h3>
         <div className="flex gap-2 mt-2">
         {["Week", "Month", "Year"].map((period) => (
            <button
              key={period}
              className={`p-2 border rounded-lg ${
                activePeriod === period ? "bg-red-300 text-white" : ""
              }`}
              onClick={() => setActivePeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
        <div className="mt-[30px] flex justify-between items-center">
          <button className="border p-1">&lt;</button>
          <span>This {activePeriod}</span>
          <button className="border p-1">&gt;</button>
        </div>

        {/* Placeholder for Chart */}
        <div className="h-40 border mt-2 flex items-center justify-center text-gray-500">
          * This report will be available when you are logged in
        </div>

        {/* Edit Button */}
        <div className="text-right mt-4">
          <button className="border px-4 py-1">Edit</button>
        </div>

        {/* Project Summary */}
        <div className="mt-4 border-t pt-2 text-sm">
          <div className="flex justify-between">
            <span>PROJECT</span>
            <span>TIME(HH:MM)</span>
          </div>
          <div className="flex justify-between mt-2 font-bold">
            <span>Total</span>
            <span>00:00</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-right">
          <button onClick={onClose} className="bg-[#707070ca] text-white px-4 py-2 rounded-md">OK</button>
        </div>
      
          </>
        )}

        {activeTab === "Detail" && (
          <>
            <h3 className="font-semibold mb-2 text-[#525252]">Focus Time Detail</h3>
            <p className="text-sm text-gray-500">* This report will be available when you are logged in</p>
            <div className="mt-4 border-t pt-2 text-sm text-[#525252]">
              <div className="flex justify-between font-semibold">
                <span>DATE</span>
                <span>PROJECT / TASK</span>
                <span>MINUTES</span>
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center gap-4">
              <span>1</span>
              <button className="border px-3 py-1 rounded">&gt;</button>
            </div>
          </>
        )}

        {activeTab === "Ranking" && (
          <>
            <h3 className="font-semibold mb-2">Focus Time This Week</h3>
            <div className="mt-4 border-t pt-2 text-sm">
              <div className="flex justify-between font-semibold mb-2 text-[#525252]">
                <span>USER</span>
                <span>TIME(HH:MM)</span>
              </div>
              {rankingData.map((user) => (
                <div key={user.rank} className="flex justify-between mt-2">
                  <span>{user.rank}. {user.name}</span>
                  <span className="font-bold">{user.time}</span>
                </div>
              ))}
            </div>
          </>
        )}

      
      </div>
    </div>
  );
};

export default ReportModal;











// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { Ri24HoursLine } from "react-icons/ri";
// import { FaRegCalendarDays } from "react-icons/fa6";
// import { ImFire } from "react-icons/im";

// const ReportModal = ({ isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState("Summary");
//   const [activePeriod, setActivePeriod] = useState("Month");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex font-serif items-center justify-center bg-[#000000a9] bg-opacity-50 z-50 text-[#5b5b5b]">
//       <div className="bg-white w-[500px] p-5 rounded-md shadow-lg max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center pb-2 mb-4">
//           <h2 className="text-lg font-bold">Report</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-black">
//             <FaTimes size={18} />
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex mb-4 border-amber-800 rounded-xl gap-1">
//           {["Summary", "Detail", "Ranking"].map((tab) => (
//             <button
//               key={tab}
//               className={`flex-1 p-2 rounded-md  cursor-pointer ${
//                 activeTab === tab ? "bg-red-300 text-white" : "bg-gray-300"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>



//         {/* Activity Summary */}
//         <h3 className="font-semibold mb-2">Activity Summary</h3>
//         <p className="text-sm text-gray-500">* This report will be available when you are logged in</p>
//         <div className="grid grid-cols-3 gap-2 mt-2 text-white">
//           <div className="p-3 bg-red-400 text-center rounded-md flex items-center justify-between">
//             <Ri24HoursLine /> Hours focused
//           </div>
//           <div className="p-3 bg-red-400 text-center rounded-md flex items-center justify-between">
//             <FaRegCalendarDays /> Days accessed
//           </div>
//           <div className="p-3 bg-red-400 text-center rounded-md flex items-center ">
//             <ImFire />  Day streak
//           </div>
//         </div>

//         {/* Focus Hours */}
//         <h3 className="font-semibold mt-4">Focus Hours</h3>
//         <div className="flex gap-2 mt-2">
//           {["Week", "Month", "Year"].map((period) => (
//             <button
//               key={period}
//               className={`p-2 border rounded-lg ${
//                 activePeriod === period ? "bg-red-300 text-white" : ""
//               }`}
//               onClick={() => setActivePeriod(period)}
//             >
//               {period}
//             </button>
//           ))}
//         </div>
//         <div className="mt-[30px] flex justify-between items-center">
//           <button className="border p-1">&lt;</button>
//           <span>This {activePeriod}</span>
//           <button className="border p-1">&gt;</button>
//         </div>

//         {/* Placeholder for Chart */}
//         <div className="h-40 border mt-2 flex items-center justify-center text-gray-500">
//           * This report will be available when you are logged in
//         </div>

//         {/* Edit Button */}
//         <div className="text-right mt-4">
//           <button className="border px-4 py-1">Edit</button>
//         </div>

//         {/* Project Summary */}
//         <div className="mt-4 border-t pt-2 text-sm">
//           <div className="flex justify-between">
//             <span>PROJECT</span>
//             <span>TIME(HH:MM)</span>
//           </div>
//           <div className="flex justify-between mt-2 font-bold">
//             <span>Total</span>
//             <span>00:00</span>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-4 text-right">
//           <button onClick={onClose} className="bg-[#707070ca] text-white px-4 py-2 rounded-md">OK</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportModal;





