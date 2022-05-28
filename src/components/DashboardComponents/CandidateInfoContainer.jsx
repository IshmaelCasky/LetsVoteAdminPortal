import React from 'react'

export const CandidateInfoContainer = ({name, age, description, votes}) => {
  return (
    <div className='flex border-b-[1px] border-[#d4d4d4] mt-3 w-[100%] overflow-auto justify-center items-center flex-col'>
      <div className='flex w-[90%] h-[30%] justify-center flex-col'>
        <div className='flex flex-col ml-5 '>
          <p className='font-poppins text-[1.2rem] font-semibold text-[#5b5b5b]'>{name}, {age}</p>
          <p className='font-poppins mt-3 mb-3 text-[1rem]'>{description}</p>
          <div className='flex'>
            <p className='text-green-primary mb-3 text-[1.3rem] w-[30%]'><span className='text-green-primary font-semibold text-xl font-poppins'>{votes}</span> Votes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
