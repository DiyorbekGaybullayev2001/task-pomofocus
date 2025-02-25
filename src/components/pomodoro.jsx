import React from "react";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaEllipsisV } from "react-icons/fa";
import Navbar from "./navbar";
import { RiCloseLargeLine } from "react-icons/ri";


const PomodoroTimer = () => {
    const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("pomodoro");
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    const [estimatedPomodoros, setEstimatedPomodoros] = useState(1);
    const [notes, setNotes] = useState("");
    const [editingTask, setEditingTask] = useState(null);
    const [showTaskForm, setShowTaskForm] = useState(false);
  
    useEffect(() => {
      let timer;
      if (isRunning) {
        timer = setInterval(() => {
          setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
      } else {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isRunning]);
  
    useEffect(() => {
      if (mode === "pomodoro") setTime(25 * 60);
      else if (mode === "shortBreak") setTime(5 * 60);
      else if (mode === "longBreak") setTime(15 * 60);
    }, [mode]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleModeChange = (selectedMode) => {
        setMode(selectedMode);
        if (selectedMode === "pomodoro") setTime(25 * 60);
        else if (selectedMode === "shortBreak") setTime(5 * 60);
        else if (selectedMode === "longBreak") setTime(15 * 60);
        setIsRunning(false);
      };
      
  
    const addTask = () => {
      if (taskInput.trim() !== "") {
        if (editingTask) {
          setTasks(tasks.map(task => task.id === editingTask.id ? { ...task, text: taskInput, estimatedPomodoros, notes } : task));
          setEditingTask(null);
        } else {
          setTasks([...tasks, { 
            id: Date.now(), 
            text: taskInput, 
            estimatedPomodoros,
            notes,
            completed: false 
          }]);
        }
        setTaskInput("");
        setEstimatedPomodoros(1);
        setNotes("");
        setShowTaskForm(false);
      }
    };
  
    const editTask = (task) => {
      setTaskInput(task.text);
      setEstimatedPomodoros(task.estimatedPomodoros);
      setNotes(task.notes);
      setEditingTask(task);
      setShowTaskForm(true);
    };
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
    };

    const [premum, setpremum] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("MONTHLY");

    const plans = [
     { name: "MONTHLY", price: "$3", period: "/ month" },
     { name: "YEARLY", price: "$18", period: "/ year" },
     { name: "LIFETIME", price: "$54", period: "/ lifetime" },
    ];

  return (
    <>
    <div className={`flex flex-col items-center  h-full pb-[100px]   ${
        mode === "pomodoro" ? "bg-[#a34040]" : mode === "shortBreak" ? "bg-[#408485]" : "bg-[#3e4276]"
    }`}>
        <Navbar/>
        <hr />
      
      <div className="bg-[#ffffff25] flex flex-col items-center mt-[20px] p-[50px] rounded-xl">

      
      <div className="flex space-x-4 font-serif">
        <button 
          className={`px-10 py-1 rounded-lg ${mode === "pomodoro" ? "bg-[#7d5b5b8a] text-white" : "bg-gray-300"}`}
          onClick={() => handleModeChange("pomodoro", 25)}
        >
          Pomodoro
        </button>
        <button 
          className={`px-10 py-1 rounded-lg ${mode === "shortBreak" ? "bg-[#507681] text-white" : "bg-gray-300"}`}
          onClick={() => handleModeChange("shortBreak", 5)}
        >
          Short Break
        </button>
        <button 
          className={`px-10 py-1 rounded-lg ${mode === "longBreak" ? "bg-[#4f4984] text-white" : "bg-gray-300"}`}
          onClick={() => handleModeChange("longBreak", 15)}
        >
          Long Break
        </button>
      </div>
      <div className="text-[100px] font-mono text-white">{formatTime(time)}</div>
      <div>
        <button
          className="px-6 py-2 bg-white text-black text-xl font-serif rounded-lg mr-2"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="px-6 py-2 bg-[#00000081] text-white rounded-lg"
          onClick={() => {
            setTime(mode === "pomodoro" ? 25 * 60 : mode === "shortBreak" ? 5 * 60 : 15 * 60);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>

      </div>
      
      <div className="border-b border-gray-200 flex justify-between w-[90%] sm:w-[77%] md:w-[55%] lg:w-[45%] xl:w-[35%] mt-[30px] p-[10px]">
        <h1 className="text-xl font-bold text-white">Tasks</h1>
        <button className="flex items-center cursor-pointer bg-[#ffffff73] text-white px-2 py-2 rounded-md"> 
            <FaEllipsisV /> 
          </button>
      </div>

      <div className="mt-[40px] p-4 rounded-lg shadow-md border-dashed border-2 border-[#bbbbbbae] w-96">
        {!showTaskForm && (
          <div className="p-4  rounded-lg cursor-pointer flex items-center space-x-2" onClick={() => setShowTaskForm(true)}>
            <FaPlus className="text-gray-400" />
            <span className="text-gray-400 font-serif text-[20px] text-center">Add Task</span>
          </div>
        )}
        {showTaskForm && (
          <div className="p-4 bg-[#ffffffe6] rounded-lg">
            <input 
              type="text" 
              className="w-full px-3 py-3 border border-[#75757583] text-[20px] outline-none rounded-lg mb-2" 
              placeholder="What are you working on?" 
              value={taskInput} 
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <label className="block text-sm font-bold text-[#474747]">Est Pomodoros</label>
            <input 
              type="number" 
              className="w-full px-3 py-3 border border-[#75757583] text-[20px] outline-none rounded-lg mb-2" 
              value={estimatedPomodoros} 
              onChange={(e) => setEstimatedPomodoros(Number(e.target.value))}
            />
            <textarea 
              className="w-full px-2 py-1 border border-[#75757583] rounded-lg mb-2 outline-none" 
              placeholder="Some notes..." 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>

               <button onClick={()=> setpremum(true)} className="bg-[#7b7b7b85] w-full p-[10px] cursor-pointer rounded-lg font-serif text-gray-200">+ Add project</button>

            <div className="flex justify-end space-x-2 mt-[10px]">
              <button className="px-7 py-2 cursor-pointer bg-[#2c2c2ca8] text-white rounded-lg" onClick={addTask}>{editingTask ? "Update" : "Save"}</button>
            </div>
          </div>
        )}
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="p-4 border rounded-lg mt-2 flex justify-between items-center bg-gray-100">
              <div>
                <span className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>{task.text}</span>
                <div className="text-sm text-gray-500">Est. Pomodoros: {task.estimatedPomodoros}</div>
                {task.notes && <div className="text-xs italic text-gray-600">{task.notes}</div>}
              </div>
              <div className="space-x-2 flex">
                <FaEdit className="text-blue-500 cursor-pointer" onClick={() => editTask(task)} />
                <FaTrash className="text-red-500 cursor-pointer" onClick={() => deleteTask(task.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {
      premum && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000087]">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
          <button onClick={() => setpremum(false)} className="absolute top-3 right-4  cursor-pointer text-gray-600">
            <RiCloseLargeLine className="font-bold hover:text-red-600"/>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span className="text-yellow-500">🔱</span> Premium Plan
          </h2>
          <div className="text-gray-700 space-y-2 mb-4">
            <p>✅ Add projects</p>
            <p>✅ See yearly report</p>
            <p>✅ Add more than 3 templates</p>
            <p>✅ Download report</p>
            <p>✅ Import tasks from Todoist</p>
            <p>✅ Connect to other apps via webhook</p>
            <p>✅ No ads</p>
            <p>✅ ... and all the future updates</p>
          </div>
          <h3 className="text-gray-800 font-bold mb-2">Select plan</h3>
          <div className="flex gap-2 mb-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`border rounded-lg p-2 text-center w-1/3 cursor-pointer ${
                  selectedPlan === plan.name ? "bg-red-100 border-red-500" : ""
                }`}
              >
                <p className={selectedPlan === plan.name ? "text-red-500 font-bold" : "text-gray-800 font-bold"}>
                  {plan.name}
                </p>
                <p className={selectedPlan === plan.name ? "text-red-600 text-xl font-bold" : "text-gray-800 text-xl font-bold"}>
                  {plan.price}
                </p>
                <p className="text-gray-600">{plan.period}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mb-4">
            * The subscription will be auto-renewed until you unsubscribe.<br />
            * You will be notified a week prior to the renewal date.
          </p>
          <button className="w-full bg-[#565656] text-white p-3 rounded-lg font-bold">💳 Purchase the plan</button>
          <p className="text-center my-2 text-gray-600">or</p>
          <button className="w-full bg-gray-200 text-gray-800 p-3 rounded-lg font-bold">⏳ Try for 7 days (free)</button>
        </div>
      </div>
      )
    }
    </>
  );
};

export default PomodoroTimer;
