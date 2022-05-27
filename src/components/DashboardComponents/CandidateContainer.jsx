import React from 'react'
import { motion } from 'framer-motion'
import cancelIcon from "../../assets/cancel-icon.png"

export const CandidateContainer = ({id, name, age, handleDeleteCandidate}) => {
  return (
    <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.2 }} className='flex mt-4 bg-green-primary w-[80%] h-[2.5rem] p-3 justify-evenly rounded-2xl'>
        <p>{name}</p>
        <p>{age}</p>
        <div className='flex items-end justify-end w-[30%]'>
          <button id="deleteNote" className='w-[1.3rem] rounded-full h-[100%]' onClick={() => handleDeleteCandidate(id)}><img src={cancelIcon}/></button>
        </div>
    </motion.div>
  )
}
