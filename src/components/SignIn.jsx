import { useState } from 'react'
import emailIcon from '../assets/email-icon.png';
import padlockIcon from '../assets/padlock-icon.png';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from './AuthContext';
import { motion } from 'framer-motion';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, user} = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    }

    return (
  <div>
        {user == null ? 

    <div className="flex h-screen flex-col">
      <ToastContainer />
      <h1 className="text-center text-xl font-bold text-slate-700 p-4">Lets<span className="text-[#61FF16]">Vote</span></h1>
      <motion.div animate={{y:8}} transition={{ease: "easeOut", duration: 1 }} className="flex justify-center items-center w-screen h-screen">
        <div className="flex justify-evenly justify-center items-center flex-col rounded-2xl md:h-[25rem] sm:h-[20rem] lg:w-[50rem] w-[90%] flex container bg-[#8FD974] h-96">
          <div className="flex justify-around flex-col items-center justify-center w-[98%] h-[15rem]">
            <div className="w-[100%]  justify-center items-center flex">
              <div className="flex items-center rounded-full w-[3.1rem] h-[3rem] justify-center items-center p-3 bg-white">
                <img src={emailIcon} alt="an email icon"/>
              </div>
              <input className="ml-3 text-center rounded-[3rem] w-[80%] h-[3.3rem]" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>

            <div className="w-[100%] justify-center items-center flex">
              <div className="flex items-center rounded-full w-[3.1rem] h-[3rem] justify-center items-center p-3 bg-white">
                <img src={padlockIcon} alt="an padlock icon"/>
              </div>
              <input type="password" className="ml-3 text-center rounded-[3rem] w-[80%] h-[3.3rem]" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></input>
            </div>
            <button className="bg-white text-base rounded-2xl text-[#5B5B5B] font-bold p-2.5 w-[30%]" onClick={handleSubmit}>LOGIN</button>
          </div>
        </div>
      </motion.div>
    </div> 
    

    :<div></div>}
  </div>
      );
}

export default SignIn