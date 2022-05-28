import React, { useState } from 'react'
import Modal from 'react-modal';
import { CandidateInfoContainer } from './CandidateInfoContainer'
import { motion } from 'framer-motion'

Modal.setAppElement("#root");

export const SessionWinnerShowCandidates = ({CandidatesObj}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const entries =  Object.entries(CandidatesObj.SessionWinner).sort((a,b) => {
    return b[1].VoteCount - a[1].VoteCount ? b[1].VoteCount - a[1].VoteCount : a[0] > b[0] ? 1 : -1;
  });

  console.log(CandidatesObj.SessionWinners);

  return (
      <>
      <div onClick={openModal}>
      <div className='bg-white mr-5 w-[17rem] mb-5 h-[6.5rem] rounded-2xl flex flex-col'>
        <div className='h-[2.5rem] w-[100%] justify-center order-b-[1px] border-[#9e9e9ebb]'>
            <h1 className='font-poppins border-b-[1px] text-center border-[#9e9e9ebb] p-1'>{CandidatesObj.SessionName}</h1>
        </div>
        <p className='text-center text-[1rem] opacity-[90%]'>top 3 winners</p>
        <p className='text-center text-[0.7rem] opacity-[40%]'>click to see</p>
        <p className='text-[0.9rem] font-bold text-center'></p>
        </div>
      </div>
      <div className='flex w-[100%] '>
        <Modal isOpen={modalIsOpen} overlayClassName="Overlay" className='w-[50rem] h-[90%] my-auto mx-auto 2xl:w-[25%] xl:w-[40%] sm:w-3/4 md:w-2/4 w-3/4 fixed inset-0 flex items-center' onRequestClose={closeModal}>
          <motion.div animate={{y:10}} transition={{ease: "easeOut", duration: 0.5 }} className='bg-white rounded-2xl w-[100%] h-[100%]'>
            <h1 className='h-[3rem] text-center p-3 text-xl font-semibold text-[#5b5b5b] border-b-[1px] border-[#d6d6d6]'>Candidates</h1>
            <div className='h-[75%] overflow-auto'>
            {(entries.map(candidate => <CandidateInfoContainer key={candidate[0]} name={candidate[0]} age={candidate[1].Age} description={candidate[1].Description} votes={candidate[1].VoteCount}/>))}
            </div>
          </motion.div>
        </Modal>
      </div>
      </>
  )
}
