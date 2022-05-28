import React from 'react'
import { motion } from 'framer-motion';
import { useDataContext } from '../DataContext';
import { SessionWinnerShowCandidates } from './SessionWinnerShowCandidates';

export const VotingSessionsWinner = () => {

  const { votingSessions } = useDataContext();

  var len = 0.1;

  return (
    <>
    <div className='flex mt-10 w-[100%] h-[100%] justify-center'>
      <div className='flex w-[100%] justify-center overflow-auto'>
        <div className='w-[100%] h-[15%] justify-center flex flex-wrap'>
        { votingSessions.map(
        (sessions) => {
          len += 0.2;
          if(sessions.SessionEnd === true){
            return (
                // implement another component for this
                // using session name , vote count and session name ( sessions.SessionName)
              <motion.div animate={{y:25}} transition={{ease: "easeOut", duration: len }}>
                <SessionWinnerShowCandidates CandidatesObj={sessions}/>
              </motion.div>
            )
          }
          return null;
        })}
        </div>
      </div>
    </div>
    </>
  )
}
