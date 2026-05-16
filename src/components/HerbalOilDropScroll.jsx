import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function HerbalOilDropScroll() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Map scroll progress to drop position to fall perfectly into the bowl
  // Container is 100vh. Bowl is 30px tall, 20px from bottom. Drop is 24px tall.
  // We want the drop to fall all the way into the bowl.
  const dropY = useTransform(smoothProgress, [0, 1], ["0px", "calc(100vh - 60px)"]);
  
  // Bowl fill level
  const bowlFillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <style>{`
        .oil-scroll-container {
          position: fixed;
          top: 0;
          right: 3vw;
          bottom: 0;
          width: 60px;
          z-index: 50;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .drop-track {
          position: absolute;
          width: 2px;
          height: 100%;
          background: rgba(212, 175, 55, 0.1);
          top: 0;
        }

        .oil-drop {
          position: absolute;
          top: 0;
          width: 14px;
          height: 24px;
          background: linear-gradient(180deg, rgba(255, 235, 150, 0.8), rgba(212, 175, 55, 1));
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.6);
          z-index: 2;
        }

        /* Bowl at the bottom */
        .bowl-wrapper {
          position: absolute;
          bottom: 20px;
          width: 50px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 1;
        }

        .bowl {
          width: 100%;
          height: 100%;
          border: 3px solid rgba(120, 157, 67, 0.8);
          border-top: none;
          border-radius: 0 0 25px 25px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(120, 157, 67, 0.2);
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(4px);
        }

        .bowl-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(0deg, rgba(212, 175, 55, 0.9), rgba(255, 235, 150, 0.7));
          box-shadow: 0 -2px 10px rgba(212, 175, 55, 0.5);
          border-radius: 0 0 20px 20px;
          transition: height 0.1s ease-out;
        }

        /* Ripples inside the bowl when scrolling */
        .ripple {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 6px;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          opacity: 0;
        }

        .ripple.active {
          animation: rippleEffect 1s infinite ease-out;
        }

        @keyframes rippleEffect {
          0% {
            width: 10px;
            height: 3px;
            opacity: 0.8;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            width: 40px;
            height: 12px;
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
          }
        }

        @media(max-width: 900px) {
          .oil-scroll-container { right: 10px; }
        }
      `}</style>
      <div className="oil-scroll-container">
        <div className="drop-track" />
        
        {/* The Falling Drop */}
        <motion.div 
          className="oil-drop" 
          style={{ y: dropY }}
          animate={{ scale: isScrolling ? [1, 0.9, 1.1] : 1 }}
          transition={{ duration: 0.3, repeat: isScrolling ? Infinity : 0 }}
        />

        {/* The Collecting Bowl */}
        <div className="bowl-wrapper">
          <div className="bowl">
            <motion.div className="bowl-fill" style={{ height: bowlFillHeight }}>
              {/* Dynamic Ripples */}
              <div className={`ripple ${isScrolling ? 'active' : ''}`} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
