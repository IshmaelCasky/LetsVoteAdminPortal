import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDataContext } from '../DataContext';
import { CandidateList } from './CandidateList';

export const AddCandidate = () => {

  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Description, setDescription] = useState('');

  const { addCandidate, deleteCandidate, candidates } = useDataContext();

  const handleCandidate = (e) => {
    if(Number.isInteger(Number(Age))){
      if(Name !== '' && Age !== '' && Description !== '') {
        setName('');
        setAge('');
        setDescription('');
        addCandidate(Name, Age, Description);
      } else {
        toast.error('Please fill out all fields');
      }
    } else {
      toast.error("Please enter a valid number for age");
    }
		
	};

  return (
    <div className='flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse w-[100%] h-[100%]'>
        <div className='flex flex-col items-center justify-center h-[70%] w-[100%] border-t-[0.1rem]'>
            <h2 className='p-5'>Candidate Name</h2>
            <input id="Name" maxLength={"30"} placeholder='Name' value={Name} onChange={(e) => {setName(e.target.value)}} className='form-control
            block
            w-[50%]
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
            focus:text-gray-700 focus:bg-white focus:border-green-primary focus:outline-none'>
            </input>

            <input id="Age" maxLength={"30"} value={Age} onChange={(e) => {setAge(e.target.value)}} placeholder='Age' className='form-control
            block
            w-[50%]
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
            mt-4
            focus:text-gray-700 focus:bg-white focus:border-green-primary focus:outline-none'>
            </input>

            <textarea id="Description" maxLength={"150"} value={Description} onChange={(e) => {setDescription(e.target.value)}}
            className="
            form-control
            block
            mt-4
            w-[50%]
            md:h-[5rem]
            lg:h-[5rem]
            xl:h-[5rem]
            2xl:h-[5rem]
            text-center
            px-3
            py-1.5
            text-sm
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-2xl
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-green-primary focus:outline-none
            "
            rows="3"
            placeholder="Description">
            </textarea>

            <button className=' mb-6 mt-6 bg-green-primary rounded-full text-zinc-600 2xl:w-[40%] xl:w-[40%] md:w-[40%] w-[60%] h-[2.6rem] text-center' onClick={handleCandidate}>Add Candidate</button>

        </div>
        <div className='flex justify-center items-center xl:h-[40%] lg:h-[40%] h-[30%] w-[99%]'>
            {candidates.length === 0 ? <div></div> : <CandidateList candidates={candidates} handleDeleteCandidate={deleteCandidate}/>}
        </div>
    </div>
  )
}
