// import { useNavigate } from "react-router-dom"
import '../index.css'
// import { ModeToggle } from "@/components/ThemeToggle";
import bg_vid from '../assets/12575392_3840_2160_30fps.mp4';
import TransitionsModal from "@/components/Modal";
import { useAuth } from '@/context/AuthContext';
import ProfileCard from '@/components/ProfileCard';
import GradualSpacing from '@/components/ui/gradual-spacing';


export default function LandingPage() {
    const { userLoggedIn } = useAuth()


    return (
        <>
            <div className='bg_vid'>
                <video src={bg_vid} autoPlay loop muted></video>
            </div>
            <div className='pr-4 absolute top-1/2 left-1/2 w-[32rem] -translate-x-1/2 -translate-y-1/2'>
                <GradualSpacing
                    className="font-display mb-1 text-center text-8xl font-bold -tracking-widest  text-black dark:text-white md:leading-[5rem]"
                    text="Crypto"
                />
                <GradualSpacing
                    className="font-display mt-1 text-center text-8xl font-bold -tracking-widest  text-black dark:text-white md:leading-[5rem]"
                    text="Olympia"
                />

            </div>
            <div className="landing_navbar">
                <div className="landing_logo">Logo</div>
                <div className="landing_about">About</div>
                <div className="landing_marketplace">MarketPlace</div>
                {userLoggedIn ? <ProfileCard /> : <TransitionsModal />}
            </div>
        </>
    )
}