import { useAuthContext } from "../AuthContext"
import homeIcon from '../../assets/home-icon.png';
import trophyIcon from '../../assets/trophy-icon.png';
import eventIcon from '../../assets/event-accepted-icon.png'
import logoutIcon from '../../assets/logout-icon.png';
import envelopeIcon from '../../assets/envelope-icon.png';
import { DashboardInlinePage } from "./DashboardInlinePage";
import { motion } from "framer-motion"
import { useDataContext } from "../DataContext";
import { ToastContainer } from "react-toastify";

const DashboardLayout = () => {
  const { logout } = useAuthContext();
  const { setPage, InlinePage } = useDataContext();

  return (
      <div id="dashboard" className="flex font-poppins h-[200vh] sm:h-[200vh] md:h-[200vh] lg:h-[125vh] xl:h-[125vh] 2xl:h-[100vh] flex-col w-screen items-center">
      <h1 className="h-[5rem] p-5 text-center text-xl font-bold text-slate-700">Lets<span className="text-[#61FF16]">Vote</span></h1>
      <div className="flex mt-2 flex-col bg-green-primary 2xl:h-[80%] w-[90%] h-[85%] rounded-2xl">
        <ToastContainer />
        <div className="flex w-[100%] h-[10%]">
          <ul className="flex p-2">
            
            <motion.li animate={{y: 5}} transition={{ease: "easeOut", duration: 1 }} className=" bg-white text-center rounded-full m-2 w-[3rem] h-[3rem]">
              <button onClick={()=>setPage("Home")} className="flex justify-center w-[100%] h-[100%] items-center"><img src={homeIcon} /></button>
            </motion.li>
              
            <motion.li animate={{y: 5}} transition={{ease: "easeOut", duration: 2}} className=" bg-white text-center rounded-full m-2 w-[3rem] h-[3rem]">
              <button onClick={()=>setPage("CreateVoteSession")} className="flex justify-center w-[100%] h-[100%] items-center"><img src={trophyIcon} /></button>
            </motion.li>

            <motion.li animate={{ y: 5}} transition={{ease: "easeOut", duration: 2}} className=" bg-white text-center rounded-full m-2 w-[3rem] h-[3rem]">
              <button onClick={()=>setPage("Winners")} className="flex justify-center w-[100%] h-[100%] items-center"><img src={eventIcon} /></button>
            </motion.li>

            <motion.li animate={{y: 5}} transition={{ease: "easeOut", duration: 2}} className=" bg-white text-center rounded-full m-2 w-[3rem] h-[3rem]">
              <button onClick={()=>setPage("CurrentVotingSessions")} className="flex justify-center w-[100%] h-[100%] items-center"><img className="w-[55%]" src={envelopeIcon} /></button>
            </motion.li>

          </ul>
        </div>

        <div className="flex w-[100%] h-[83.4%]">
          <DashboardInlinePage page={InlinePage} />
        </div>
        <div className="flex h-[6.5%]">
          <button onClick={logout} className="flex justify-end w-[100%] h-[100%] p-3 items-center"><img src={logoutIcon} /></button>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout