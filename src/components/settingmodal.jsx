import React from "react";
import {
    FaChartBar,
    FaCog,
    FaUser,
    FaEllipsisV,
    FaCheckCircle,
    FaTimes,
  } from "react-icons/fa";
  

// MODAL KOMPONENTI
const SettingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 text-[#474747] font-serif">
        <div className="bg-white w-[400px] max-h-[90vh] overflow-y-auto rounded-md shadow-lg relative p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">SETTING</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-700 hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>
  
          {/* TIMER */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">TIMER</h3>
            <div className="flex gap-2 items-center text-sm">
              <label className="w-1/3">Time (minutes)</label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <label className="w-[70px]">Pomodoro</label>
                  <input
                    type="number"
                    className="w-16 border border-gray-300 rounded p-1"
                    defaultValue="25"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="w-[70px]">Short Break</label>
                  <input
                    type="number"
                    className="w-16 border border-gray-300 rounded p-1"
                    defaultValue="5"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="w-[70px]">Long Break</label>
                  <input
                    type="number"
                    className="w-16 border border-gray-300 rounded p-1"
                    defaultValue="15"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <label className="w-1/3">Auto Start Break</label>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <label className="w-1/3">Auto Start Pomodoro</label>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <label className="w-1/3">Long Break interval</label>
              <input
                type="number"
                className="w-16 border border-gray-300 rounded p-1"
                defaultValue="4"
              />
            </div>
            <hr className="my-3" />
          </div>
  
          {/* TASK */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">TASK</h3>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <label className="w-1/3">Auto Check Tasks</label>
              <input type="checkbox" />
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <label className="w-1/3">Auto Switch Tasks</label>
              <input type="checkbox" defaultChecked />
            </div>
            <hr className="my-3" />
          </div>
  
          {/* SOUND */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">SOUND</h3>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Alarm Sound</label>
              <select className="border border-gray-300 rounded p-1">
                <option>Kitchen</option>
                <option>Bell</option>
                <option>Digital</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Volume</label>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
                defaultValue="50"
              />
              <span>50</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">repeat</label>
              <input
                type="number"
                className="w-16 border border-gray-300 rounded p-1"
                defaultValue="1"
              />
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Ticking Sound</label>
              <select className="border border-gray-300 rounded p-1">
                <option>None</option>
                <option>Clock</option>
                <option>Metronome</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Tick Volume</label>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
                defaultValue="50"
              />
              <span>50</span>
            </div>
            <hr className="my-3" />
          </div>
  
          {/* THEME */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">THEME</h3>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Color Themes</label>
              <div className="flex gap-2">
                {/* Rangi har xil doira */}
                <div className="w-5 h-5 rounded-full bg-red-400 cursor-pointer" />
                <div className="w-5 h-5 rounded-full bg-pink-400 cursor-pointer" />
                <div className="w-5 h-5 rounded-full bg-cyan-400 cursor-pointer" />
                <div className="w-5 h-5 rounded-full bg-blue-400 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Hour Format</label>
              <select className="border border-gray-300 rounded p-1">
                <option>24-Hour</option>
                <option>12-Hour</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Dark Mode when running</label>
              <input type="checkbox" />
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Small Window</label>
              <select className="border border-gray-300 rounded p-1">
                <option>Open</option>
                <option>Close</option>
              </select>
            </div>
            <hr className="my-3" />
          </div>
  
          {/* NOTIFICATION */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">NOTIFICATION</h3>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Reminder</label>
              <select className="border border-gray-300 rounded p-1">
                <option>Last</option>
                <option>First</option>
              </select>
              <input
                type="number"
                className="w-16 border border-gray-300 rounded p-1"
                defaultValue="5"
              />
              <span>min</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Mobile Alarm</label>
              <a href="#add-device" className="text-blue-500 underline">
                + Add this device
              </a>
            </div>
            <hr className="my-3" />
          </div>
  
          {/* INTEGRATION */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">INTEGRATION</h3>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Todoist</label>
              <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">
                Connect
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <label className="w-1/3">Webhook</label>
              <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">
                Add
              </button>
            </div>
          </div>
  
          {/* OK BUTTON */}
          <div className="flex justify-end ">
            <button
              onClick={onClose}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default SettingModal