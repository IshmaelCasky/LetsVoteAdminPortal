import React from 'react'
import { CandidateContainer } from './CandidateContainer'

export const CandidateList = ({candidates, handleDeleteCandidate}) => {

  //candidates.map((candidate) => (
    //<CandidateContainer key={candidate.id} id={candidate.id} name={Object.entries(candidate)[1][0]} age={Object.entries(candidate)[1][1].Age} handleDeleteCandidate={handleDeleteCandidate}/>
    //))
  return ( 
    <div className='flex overflow-auto flex-col h-[80%] w-[100%] items-center'>
        {candidates.map((candidate) => (
    <CandidateContainer key={candidate.id} id={candidate.id} name={Object.entries(candidate)[1][0]} age={Object.entries(candidate)[1][1].Age} handleDeleteCandidate={handleDeleteCandidate}/>
    ))}
    </div>
  )
}
