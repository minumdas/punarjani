import { motion, useScroll, useTransform } from "framer-motion";

const MandalaLeaf = ({ index, total, scrollYProgress }) => {
  // Leaves start randomly scattered near the top and converge to a mandala at the bottom
  const startX = (Math.random() - 0.5) * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.5;
  
  // Mandala target coordinates (a circle near the bottom center)
  const angle = (index / total) * Math.PI * 2;
  const radius = 100;
  const targetX = Math.cos(angle) * radius;
  const targetY = window.innerHeight * 0.8 + Math.sin(angle) * radius; // 80vh down

  // Swoop path coordinates (curves inward)
  const midX = startX * 0.5;
  const midY = startY + (targetY - startY) * 0.4;

  const x = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [startX, midX, targetX, targetX]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [startY, midY, targetY, targetY]);
  
  // Rotate so they point outwards from the center of the mandala, spinning gracefully as they fall
  const targetRotation = (index / total) * 360 + 90; 
  const rotate = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [Math.random() * 180, Math.random() * 360, targetRotation, targetRotation]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.95, 1], [0, 0.8, 0.8, 0, 0]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        marginLeft: "-1rem", // half of 2rem width to center it
        fontSize: "2rem",
        pointerEvents: "none",
        zIndex: 40,
        x,
        y,
        rotate,
        opacity,
      }}
    >
      🌿
    </motion.div>
  );
};

export default function FloatingLeaves() {
  const { scrollYProgress } = useScroll();
  const totalLeaves = 12;

  // We need to render only on client side to get window dimensions, 
  // but since this is Vite/React it's client-side anyway.
  return (
    <>
      {[...Array(totalLeaves)].map((_, i) => (
        <MandalaLeaf
          key={i}
          index={i}
          total={totalLeaves}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </>
  );
}
