import React from 'react'
import { motion } from "framer-motion"
import upvotePic from "../../assets/upvote-pic.png"
import { useDataContext } from '../DataContext';

export const DashboardInlineHomePage = () => {

    const { votingSessions } = useDataContext();
    const ongoing = votingSessions.filter(session => session.SessionEnd === false);
    const ended = votingSessions.filter(session => session.SessionEnd === true);

    console.log(ongoing.length + " ongoing");
    console.log(ended.length +  " ended");

    return (
    <motion.div className='flex md:flex-col-reverse items-center xl:flex-row lg:flex-row 2xl:flex-row flex-col-reverse justify-center w-[100%] h-[100%]'>
        <div className='flex flex-col 
        2xl:h-[95%] 2xl:w-[25%]
        xl:h-[85%] xl:w-[25%]
        lg:h-[85%] lg:w-[30%]
        md:h-[95%] md:w-[75%]
        h-[95%] w-[75%]
        items-center justify-center
        '>
            <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.2 }} className='flex flex-col items-center justify-center rounded-2xl bg-white 2xl:h-[25%] h-[35%] w-[80%] m-5 p-5'>
                <p>Overall Finished Voting Sessions</p>
                <p className='text-[2.5rem] text-green-primary font-poppins font-bold'>{ended.length}</p>
            </motion.div>
            <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.3 }} className='flex flex-col items-center justify-center rounded-2xl bg-white 2xl:h-[25%] h-[35%] w-[80%] m-5 p-5'>
                 <p>Overall Ongoing Voting Sessions</p>
                 <p className='text-[2.5rem] text-[#ff7373] font-poppins font-bold'>{ongoing.length}</p>
            </motion.div>
            <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.4 }} className='flex flex-col items-center justify-center rounded-2xl bg-white 2xl:h-[25%] h-[35%] w-[80%] m-5 p-5'>
                <p>Current Date</p>
                <p>{new Date().toLocaleDateString()}</p>
            </motion.div>
        </div>

        <motion.div animate={{y:8}} transition={{ease: "easeOut", duration: 0.5 }} className='flex flex-col rounded-2xl bg-white 
        2xl:h-[85%]
        2xl:w-[50%]
        xl:h-[80%]
        xl:w-[60%]
        lg:h-[80%]
        lg:w-[60%]
        md:w-[90%]
        md:h-[45%]
        h-[45%]
        w-[90%]
        '

        >
            <div className='flex justify-center h-[45%]'>
                <img src={upvotePic}></img>
            </div>
            <div className='flex flex-col items-center w-[100%] h-[100%]'>
                <h1 className="h-[2rem] text-center text-xl font-bold text-slate-700">Lets<span className="text-[#61FF16]">Vote</span></h1>
                <p className=' w-[80%] 2xl:text-base xl:text-base md:text-base sm:text-sm text-[0.8rem] p-3 text-center text-[1rem] font-'>Welcome to LetsVote Web Administrator Portal, Where you can create voting sessions, or even delete ongoing sessions. please handle with care and do not abuse the system</p>
            </div>
        
        </motion.div>

        
    </motion.div>
  )
}
