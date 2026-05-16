import { motion, useScroll, useSpring } from "framer-motion";

export default function AyurvedaPulseLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <style>{`
        .pulse-line-container {
          position: fixed;
          top: 0;
          left: 3vw;
          bottom: 0;
          width: 4px;
          z-index: 50;
          pointer-events: none;
          display: flex;
          justify-content: center;
        }
        .pulse-track {
          position: absolute;
          width: 2px;
          height: 100%;
          background: rgba(220, 230, 200, 0.4);
        }
        .pulse-fill {
          position: absolute;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #d4af37, #f3e5ab, #d4af37);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(212, 175, 55, 0.4);
          transform-origin: top;
          border-radius: 4px;
        }
        @media(max-width: 900px) {
          .pulse-line-container { left: 10px; }
        }
      `}</style>
      <div className="pulse-line-container">
        <div className="pulse-track" />
        <motion.div className="pulse-fill" style={{ scaleY }} />
      </div>
    </>
  );
}
