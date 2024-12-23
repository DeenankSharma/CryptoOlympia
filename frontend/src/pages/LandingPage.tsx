// import { useNavigate } from "react-router-dom"
import '../index.css'
// import { ModeToggle } from "@/components/ThemeToggle";
import bg_vid from '../assets/12575392_3840_2160_30fps.mp4';

export default function LandingPage() {
    // const navigate = useNavigate()
    // function toLoginPage() {
    //     navigate('/login')
    // }


    return (

        <>
        <div className='bg_vid'>
            <video src={bg_vid} autoPlay loop muted></video>
        </div>
        <div className="landing_navbar">
            <div className="landing_logo">Logo</div>
            <div className="landing_about">About</div>
            <div className="landing_marketplace">MarketPlace</div>
            <div className="landing_login_signup">Login / SignUp</div>
            {/* <div className="landing_theme">
                <div className='theme_title'>Theme</div> 
                <ModeToggle/>
            </div> */}
        </div>
        </>
    )
}