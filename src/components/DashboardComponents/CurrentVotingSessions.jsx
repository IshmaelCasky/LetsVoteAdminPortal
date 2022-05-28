import React , {useState, useEffect } from 'react'
import { VoteSessionsContainer } from './VoteSessionsContainer';
import { motion } from 'framer-motion';
import { useDataContext } from '../DataContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const CurrentVotingSessions = () => {

  const { votingSessions} = useDataContext();

  var len = 0.1;

  const Sessions = votingSessions;

  return (
    <>
    <div className='flex mt-10 w-[100%] h-[100%] justify-center'>
      <div className='flex w-[100%] justify-center overflow-auto'>
        <div className='w-[100%] h-[15%] justify-center flex flex-wrap'>
        {Sessions.map(
        (sessions) => {
          len += 0.2;
          if(sessions.SessionEnd === false){
            return (
              <motion.div animate={{y:25}} transition={{ease: "easeOut", duration: len }}><VoteSessionsContainer key={sessions.SessionName} SessionName={sessions.SessionName} CandidateCount={Object.keys(sessions.Candidates).length} CandidatesObj={sessions} /></motion.div>
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
