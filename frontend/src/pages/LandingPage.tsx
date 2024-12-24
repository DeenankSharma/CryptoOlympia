import '../index.css'
import bg_vid from '../assets/12575392_3840_2160_30fps.mp4';
import GradualSpacing from '@/components/ui/gradual-spacing';
import Navbar from '@/components/NavBar';
import { useNav } from '@/context/NavBarContext';
import About from '@/components/About';


export default function LandingPage() {

    const { navNum } = useNav()

    switch (navNum) {
        case 1:
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
                    <Navbar />
                </>
            )
            break

        case 2:
            return (
                <>  
                 <Navbar />
                    <About/>
                </>
            )
            break

    }


}