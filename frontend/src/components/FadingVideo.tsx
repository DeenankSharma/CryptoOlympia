import { useEffect, useState } from "react";

const FadingVideo = () => {
    const [opacity, setOpacity] = useState(0);
  
    useEffect(() => {
      const fadeInOut = () => {
        // Fade in
        setOpacity(1);
        
        // Start fade out after 3 seconds
        const fadeOutTimeout = setTimeout(() => {
          setOpacity(0);
        }, 3000);
  
        return () => clearTimeout(fadeOutTimeout);
      };
  
      // Initial fade in
      fadeInOut();
  
      // Set up interval for repeated fade in/out
      const interval = setInterval(fadeInOut, 6000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity }}
        >
          <source src="../assets/12575392_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default FadingVideo;