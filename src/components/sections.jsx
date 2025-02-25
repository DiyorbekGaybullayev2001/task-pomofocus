import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";

function Sections() {
  return (
    <>
       <div className=' container m-auto pt-[50px] p-[10px]'>

         <div className='w-[700px] font-serif font-medium  m-auto '>
            <h1 className='text-[40px] text-[#1d1212]'>An online Pomodoro Timer to boost your productivity</h1>
         </div>

         <div className='w-[700px] font-serif font-medium  m-auto  mt-[50px]'>
            <h1 className='text-[30px] text-[#1d1212]'>What is Pomofocus ?</h1> 
            <span className='bg-[#cc7878] w-[50px] h-[5px] block my-[5px]'></span>
            <p className='text-gray-600'>
              Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by  
              <span className='text-[#c23333]'> <b><a href="https://www.pomodorotechnique.com">Pomodoro Technique</a></b></span> which is a time management method developed by Francesco Cirillo.
            </p>
         </div>

         <div className='w-[700px] font-serif font-medium  m-auto  mt-[50px]'>
            <h1 className='text-[30px] text-[#1d1212]'>What is Pomodoro Technique ?</h1> 
            <span className='bg-[#cc7878] w-[50px] h-[5px] block my-[5px]'></span>
            <p className='text-gray-600'>
               The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - 
              <span className='text-[#c23333]'> <b><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia </a></b></span> 
            </p>
         </div>

         <div className="w-[700px] font-serif font-medium  m-auto  mt-[50px]">
           <h1 className="text-[30px] text-[#1d1212]">
           How to use the Pomodoro Timer?
         </h1>
         <span className='bg-[#cc7878] w-[50px] h-[5px] block my-[5px]'></span>
       <ol className="list-decimal list-inside space-y-2 text-gray-600 mt-[10px]">
        <li>
          <span className="font-bold">Add tasks</span> to work on today
        </li>
        <li>
          <span className="font-bold">Set estimate pomodoros</span> (1 = 25min of work) for each task
        </li>
        <li>
          <span className="font-bold">Select a task</span> to work on
        </li>
        <li>
          <span className="font-bold">Start timer</span> and focus on the task for 25 minutes
        </li>
        <li>
          <span className="font-bold">Take a break</span> for 5 minutes when the alarm rings
        </li>
        <li>
          <span className="font-bold">Iterate</span> 3-5 until you finish the tasks
        </li>
      </ol>
    </div>

    <div className="w-[700px] font-serif font-medium  m-auto  mt-[50px]">
      <h2 className="text-[30px] text-[#1d1212]">
        Basic Features
      </h2>
      <span className='bg-[#cc7878] w-[50px] h-[5px] block my-[5px]'></span>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mt-[10px]">
        <li>
          <span className="font-bold">Estimate Finish Time:</span> Get an estimate of the time required to complete your daily tasks.
        </li>
        <li>
          <span className="font-bold">Add Templates:</span> Save your repetitive tasks as templates and add them with just one click.
        </li>
        <li>
          <span className="font-bold">Visual Reports:</span> See how much time you've focused each day, week, and month.
        </li>
        <li>
          <span className="font-bold">Custom Settings:</span> Personalize your focus/break time, alarm sounds, background sounds, and more.
        </li>
      </ul>
    </div>

    <div className="w-[700px] font-serif font-medium  m-auto  mt-[50px]">
      <h2 className="text-[30px] text-[#1d1212]">
        Premium Features
      </h2>
      <span className='bg-[#cc7878] w-[50px] h-[5px] block my-[5px]'></span>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mt-[10px]">
        <li>
          <span className="font-bold">Add Projects: </span> Track how much time you spend on each project.
        </li>
        <li>
          <span className="font-bold">Yearly Reports:</span> View your focus hours for each year. 
        </li>
        <li>
          <span className="font-bold">Download Reports:</span> Download your focus history in CSV format.
        </li>
        <li>
          <span className="font-bold">No Template Limit:</span> Save more than 3 templates.
        </li>
        <li>
          <span className="font-bold">Todoist Integration:</span> Load tasks from your Todoist account.
        </li>
        <li>
          <span className="font-bold">Webhook Integration:</span> Connect to other apps (Zapier, IFTTT, etc).
        </li>
        <li>
          <span className="font-bold">No Ads:</span> Enjoy a clean and distraction-free app experience.
        </li>
      </ul>
    </div>

    <div className="w-[700px] font-serif font-medium  m-auto  mt-[50px]">
      <h1 className="text-[30px] text-[#1d1212]">
        Download App
      </h1>
      <span className='bg-[#cc7878] w-[50px] h-[5px] block my-[5px]'></span>
      <ul className="list-none space-y-2 text-gray-600">
        <li>
          <span className="font-bold">For Mac:</span> <span className="text-gray-500"> Coming Soon...</span>
        </li>
        <li>
          <span className="font-bold">For Windows:</span> 
          <a href="#" className="text-[#c23333] font-bold"> pomofocus-1.1.0-win-x64.zip</a>
        </li>
        <li>
          <span className="font-bold">For Linux:</span> 
          <a href="#" className="text-[#c23333] font-bold"> pomofocus-1.1.0-lin-amd64.zip</a>
        </li>
      </ul>
      <p className="text-gray-600 mt-4">
        <span className="font-bold text-[#c23333]">Important:</span> For Windows, you may see a warning message about the app being unsafe. This is because the app is not signed with a developer certificate. For Windows, you can proceed by clicking "Details" and then "Run anyway".
      </p>
    </div>

       </div>
       <br /><br />
       <hr />
    

       <footer className="text-center mt-10 text-gray-600">
        <nav className="flex justify-center space-x-4 text-sm font-bold ">
          <a href="/" className="hover:text-red-800">HOME</a>
          <a href="https://pomofocus.io/privacy" className="hover:text-red-800">PRIVACY</a>
          <a href="https://pomofocus.io/terms" className="hover:text-red-800">TERMS</a>
          <a href="https://pomofocus.io/contact" className="hover:text-red-800">CONTACT</a>
          <a href="/" className="hover:text-red-800">SIMPLE PAGE</a>
        </nav>
        <div className="flex justify-center space-x-4 my-4">
          <span className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
            <a href="https://www.facebook.com/pomofocus">
             <FaFacebookF/>
            </a>
          </span>
          <span className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
            <a href="https://twitter.com/pomofocus">
             <FaTwitter/>
            </a>
          </span>
          <span className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
            <a href="https://climate.stripe.com/kfwPBZ">
             <FcGlobe/>
            </a>
          </span>
        </div>
        <p className="text-sm">
          Made with 3 by <span className="text-red-800 font-bold">Yuya Uzu</span>
        </p>
        <p className="text-xs text-gray-500">©Pomofocus 2024. All Rights Reserved.</p>
        <br />
      </footer>
    </>
  )
}

export default Sections