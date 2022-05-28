import React, { useState } from 'react'
import { motion } from "framer-motion"
import { AddCandidate } from './AddCandidate'
import DateTimePicker from 'react-datetime-picker';
import { useDataContext } from '../DataContext';
import { toast } from 'react-toastify';

export const CreateVoteSession = () => {
  const [VoteName, setVoteName] = useState('');
  const { CreateVoteSession } = useDataContext();

  const date = new Date();
  date.setDate(date.getDate() + 1);
  const [value, onChange] = useState(date);

  const handleCreateSession = () => {
    if(VoteName === '') {
      toast.error("Please enter a name for the voting session");
      return;
    }
    CreateVoteSession(VoteName, value)
  }

  return (
    <div className='flex mt-3 justify-center 2xl:flex-row items-center xl:flex-row lg:flex-row sm:flex-col-reverse sm:items-center md:flex-col-reverse md:items-center sm:flex-col  flex-col-reverse justify-evenly justify-center w-[100%] h-[100%]'>
        
        <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.2 }} className='flex items-center flex-col justify-center rounded-2xl md:h-[45%] md:w-[90%] sm:h-[42%] sm:w-[90%] lg:h-[90%] 2xl:w-[20%] xl:w-[25%] lg:w-[30%] bg-white h-[42%] w-[90%]'>
            <h2 className='p-3'>Vote Session Name</h2>
            <input onChange={(e) => {setVoteName(e.target.value)}} placeholder='Name' className='form-control
        block
        w-[90%]
        md:h-[2rem]
        lg:h-[2.4rem]
        xl:h-[2.4rem]
        2xl:h-[2.4rem]
        text-center
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        text-sm
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-primary focus:outline-none'></input>

            <h2 className='p-5'>Voting Date End</h2>
            <DateTimePicker required className="md:mb-3 xl:mb-1 mb-2" minDate={date} onChange={onChange} value={value} />
            <button onClick={handleCreateSession} className='xl:mt-5 mt-4 bg-green-primary rounded-full text-zinc-600 w-[70%] h-[2.4rem] text-center'>Create Session</button>
        </motion.div>

        <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.5 }} className='flex flex-col items-center rounded-2xl bg-white md:h-[50%] h-[50%] w-[90%] md:w-[90%] sm:h-[50%] sm:w-[90%] 2xl:h-[96%]  xl:h-[96%]  lg:h-[96%] 2xl:w-[55%] xl:w-[55%] lg:w-[55%]'>
            <AddCandidate/>
        </motion.div>
        
    </div>
  )
}
