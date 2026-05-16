import { motion } from "framer-motion";

export default function AncientPalmLeaf() {
  return (
    <div style={{ 
      perspective: "2000px", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "650px", 
      background: "linear-gradient(180deg, #1a1410 0%, #0f0c08 50%, #05020a 100%)", 
      padding: "100px 20px", 
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        width: "1000px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(218, 180, 105, 0.08) 0%, transparent 60%)",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "500px" }}>
        {/* Book holder */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
          }}
          initial={{ rotateY: -25, rotateX: 15 }}
          whileInView={{ rotateY: 0, rotateX: 5 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Back cover */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "620px",
              height: "440px",
              background: "linear-gradient(135deg, #543d25 0%, #3d2817 50%, #2a1810 100%)",
              borderRadius: "12px",
              boxShadow: "inset 0 2px 8px rgba(0,0,0,0.7), 0 60px 100px rgba(0,0,0,0.8)",
              zIndex: 1,
            }}
          />

          {/* Pages container */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", transformStyle: "preserve-3d" }}>
            {/* Page 1 - Left (visible) */}
            <motion.div
              style={{
                position: "absolute",
                right: "50%",
                top: "50%",
                transform: "translateY(-50%)",
                width: "310px",
                height: "430px",
                background: "linear-gradient(to bottom, #e8d4b8 0%, #deb896 50%, #d4a878 100%)",
                borderRadius: "2px 10px 10px 2px",
                boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.4), -20px 30px 60px rgba(0,0,0,0.5)",
                transformStyle: "preserve-3d",
                transformOrigin: "right center",
              }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, -180, -180, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
            >
              <div style={{ padding: "45px 35px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    style={{
                      height: "1.5px",
                      background: `linear-gradient(90deg, rgba(120, 90, 50, ${0.85 - i*0.08}) 0%, rgba(120, 90, 50, ${0.4 - i*0.04}) 100%)`,
                      borderRadius: "1px",
                    }} 
                  />
                ))}
              </div>
              <div style={{ position: "absolute", width: "50px", height: "50px", borderRadius: "50%", background: "radial-gradient(circle, rgba(80, 40, 20, 0.12) 0%, transparent 70%)", top: "15%", left: "18%" }} />
              <div style={{ position: "absolute", width: "35px", height: "35px", borderRadius: "50%", background: "radial-gradient(circle, rgba(80, 40, 20, 0.08) 0%, transparent 70%)", bottom: "20%", right: "22%" }} />
            </motion.div>

            {/* Page 2 - Right (visible) */}
            <motion.div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translateY(-50%)",
                width: "310px",
                height: "430px",
                background: "linear-gradient(to bottom, #e4d0b4 0%, #dab896 50%, #d0a474 100%)",
                borderRadius: "10px 2px 2px 10px",
                boxShadow: "inset -2px 2px 5px rgba(255,255,255,0.3), 20px 30px 60px rgba(0,0,0,0.5)",
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
              }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 180, 180, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
            >
              <div style={{ padding: "45px 35px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    style={{
                      height: "1.5px",
                      background: `linear-gradient(90deg, rgba(120, 90, 50, ${0.85 - i*0.08}) 0%, rgba(120, 90, 50, ${0.4 - i*0.04}) 100%)`,
                      borderRadius: "1px",
                    }} 
                  />
                ))}
              </div>
              <div style={{ position: "absolute", width: "45px", height: "45px", borderRadius: "50%", background: "radial-gradient(circle, rgba(80, 40, 20, 0.1) 0%, transparent 70%)", top: "22%", right: "16%" }} />
              <div style={{ position: "absolute", width: "38px", height: "38px", borderRadius: "50%", background: "radial-gradient(circle, rgba(80, 40, 20, 0.08) 0%, transparent 70%)", bottom: "18%", left: "14%" }} />
            </motion.div>
          </div>

          {/* Center spine */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "22px",
              height: "95%",
              background: "linear-gradient(90deg, #3a2510 0%, #6b5133 50%, #3a2510 100%)",
              boxShadow: "inset -4px 0 8px rgba(0,0,0,0.7), inset 4px 0 8px rgba(255,255,255,0.05), 0 15px 40px rgba(0,0,0,0.6)",
              zIndex: 3,
              borderRadius: "4px",
            }}
          />
        </motion.div>

        {/* Center symbol - appears during animation */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 2,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.35, 0.5, 0.8, 1] }}
        >
          <motion.div 
            style={{ fontSize: "78px", color: "rgba(218, 195, 144, 0.7)", fontFamily: "Georgia, serif", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
            animate={{ scale: [1, 1, 1.3, 1.3, 1], rotate: [0, 0, 12, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.35, 0.5, 0.8, 1] }}
          >
            ✿
          </motion.div>
          <p style={{ color: "#dab896", fontSize: "16px", fontFamily: "Georgia, serif", marginTop: "18px", fontStyle: "italic", fontWeight: 600, letterSpacing: "0.12em", textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>Sacred Manuscript</p>
        </motion.div>
      </div>

      {/* Info text */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "15px",
          color: "#b89460",
          fontFamily: "Georgia, serif",
          fontWeight: 500,
          textAlign: "center",
          letterSpacing: "0.06em",
          textShadow: "0 2px 4px rgba(0,0,0,0.4)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Ancient wisdom unfolds
      </motion.div>
    </div>
  );
}
