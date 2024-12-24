import { useAuth } from "@/context/AuthContext"
import TransitionsModal from "./Modal"
import ProfileCard from "./ProfileCard"
import { useNav } from "@/context/NavBarContext"

function Navbar(){

    const { userLoggedIn } = useAuth()
    const {navNum,setNavNum} = useNav();

    return(
        <>
             <div className="landing_navbar">
                {navNum === 1 ?<div className="landing_logo selected_navitem">Logo</div> : <div onClick={()=>{setNavNum(1)}} className="landing_logo">Logo</div>}
                {navNum === 2 ?<div className="landing_about selected_navitem">About</div> : <div onClick={()=>{setNavNum(2)}} className="landing_about">About</div>}
                {navNum === 3 ?<div className="landing_marketplace selected_navitem">MarketPlace</div> : <div onClick={()=>{setNavNum(3)}} className="landing_marketplace">MarketPlace</div>}
                {userLoggedIn ? <ProfileCard /> : <TransitionsModal />}
            </div>
        </>
    )
}

export default Navbar