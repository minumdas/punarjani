import { motion } from "framer-motion";

const HeroAnimations = () => {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {/* Steam Effect */}
      <motion.div
        animate={{ y: [0, -100, 0], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "-10%", left: "10%", width: "40%", height: "40vh",
          background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)", borderRadius: "50%"
        }}
      />
      <motion.div
        animate={{ y: [0, -80, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "-5%", right: "10%", width: "50%", height: "50vh",
          background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(50px)", borderRadius: "50%"
        }}
      />
      
      {/* Oil Drops */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`oil-${i}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: ["0vh", "100vh"], opacity: [0, 1, 0] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5, ease: "easeIn" }}
          style={{
            position: "absolute",
            left: `${15 + Math.random() * 70}%`,
            width: "8px", height: "16px",
            background: "linear-gradient(180deg, rgba(255, 215, 0, 0.2), rgba(212, 175, 55, 1))",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            boxShadow: "0 4px 10px rgba(212, 175, 55, 0.4)"
          }}
        />
      ))}
      
      {/* Energy Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{ 
            y: [0, -200], 
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0] 
          }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
          style={{
            position: "absolute",
            bottom: "20%",
            left: `${10 + Math.random() * 80}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: "#ffd700",
            borderRadius: "50%",
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.8)"
          }}
        />
      ))}
    </div>
  );
};

const GlowingHerbVisual = () => {
  return (
    <div style={{ position: 'relative', height: '560px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Central Glowing Aura */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(162, 193, 114, 0.4) 0%, rgba(212, 175, 55, 0.1) 50%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />

      {/* Falling Golden Oil Drops falling directly into the bowl */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`oil-drop-${i}`}
          initial={{ y: -300, opacity: 0, scale: 0.5 }}
          animate={{ y: 280, opacity: [0, 1, 1, 0], scale: [0.5, 1, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
          style={{
            position: 'absolute',
            left: '50%',
            marginLeft: '-6px',
            top: '20%',
            width: '12px',
            height: '24px',
            background: 'linear-gradient(180deg, rgba(255, 235, 150, 0.9), rgba(212, 175, 55, 1))',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.8), 0 0 5px rgba(255, 255, 255, 0.8)',
            zIndex: 3
          }}
        />
      ))}

      {/* Beautiful Uruli Image with splashing ripples */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2
      }}>
        {/* Container for Image & Ripples */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          
          {/* The generated Uruli Bowl Image */}
          <img 
            src="/uruli.png" 
            alt="Ayurvedic Uruli Bowl" 
            style={{
              width: '100%',
              objectFit: 'contain',
              mixBlendMode: 'darken', // Blends the light background seamlessly
              filter: 'contrast(1.1) brightness(0.95)',
              position: 'relative',
              zIndex: 1
            }}
          />

          {/* Splashing / Collecting Effect on top of the oil surface */}
          {/* We position this roughly where the oil surface is in an isometric bowl */}
          <div style={{
            position: 'absolute',
            top: '40%', // Adjust to the liquid surface
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '40px',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <motion.div
              animate={{ scaleX: [0.8, 1.5, 0.8], scaleY: [0.8, 1.2, 0.8], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '2px solid rgba(255, 235, 150, 0.8)',
                borderRadius: '50%',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.8)'
              }}
            />
            <motion.div
              animate={{ scaleX: [1, 1.8, 1], scaleY: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 10px rgba(212, 175, 55, 0.6)'
              }}
            />
            
            {/* Inner Glow to make the collecting look magical */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '60px',
                height: '20px',
                background: 'radial-gradient(ellipse at center, rgba(255,235,150,0.8) 0%, transparent 70%)',
                filter: 'blur(4px)',
                borderRadius: '50%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const PHONE_NUMBER = "+919744499119";

  return (
    <>
      <style>{`
        .hero-story{min-height:100vh;position:relative;overflow:hidden;background:linear-gradient(120deg,#fffaf0 0%,#fbf7ea 48%,#f5efd9 100%);font-family:Inter,system-ui,sans-serif;padding:130px 5vw 70px;color:#26321f}
        .soft-bg{position:absolute;inset:0;background:radial-gradient(circle at 16% 18%,rgba(222,236,187,.85),transparent 32%),radial-gradient(circle at 85% 24%,rgba(255,226,191,.65),transparent 26%),radial-gradient(circle at 70% 78%,rgba(226,238,207,.7),transparent 30%);pointer-events:none}
        .hero-grid{position:relative;max-width:1180px;margin:auto;display:grid;grid-template-columns:1.02fr .98fr;gap:52px;align-items:center;z-index:1}
        .kicker{display:inline-flex;align-items:center;gap:8px;background:white;border:1px solid #edf0df;border-radius:999px;padding:9px 14px;color:#68863a;font-weight:800;font-size:12px;box-shadow:0 12px 40px rgba(74,61,39,.08);animation:fadeUp .8s both}
        .story-title{font-family:Georgia,serif;font-size:clamp(44px,7vw,88px);line-height:.95;letter-spacing:-.06em;margin:26px 0 22px;color:#24311f;animation:fadeUp .8s .1s both}
        .story-title span{display:block;color:#779d42;font-style:italic;font-weight:400}
        .story-text{font-size:18px;line-height:1.8;color:#6d735f;max-width:610px;margin:0 0 30px;animation:fadeUp .8s .2s both}
        .hero-actions{display:flex;gap:14px;flex-wrap:wrap;animation:fadeUp .8s .3s both}
        .primary-story{border:0;border-radius:999px;background:#638a32;color:#fff;padding:15px 24px;font-weight:800;box-shadow:0 18px 40px rgba(99,138,50,.22);cursor:pointer}
        .secondary-story{border:1px solid #dbe6c7;border-radius:999px;background:rgba(255,255,255,.65);color:#3d4a31;padding:15px 24px;font-weight:800;cursor:pointer}
        .stats-strip{max-width:1180px;margin:58px auto 0;position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:14px;z-index:1}.stat-story{background:rgba(255,255,255,.6);border:1px solid #edf0df;border-radius:24px;padding:20px;text-align:center}.stat-story b{font-size:28px;color:#638a32}.stat-story span{display:block;color:#7a806e;font-size:13px;margin-top:5px;font-weight:700}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.stats-strip{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.hero-story{padding-top:105px}.stats-strip{grid-template-columns:1fr}.hero-actions button{width:100%}}
      `}</style>
      <section className="hero-story" id="home">
        <div className="soft-bg" />
        <HeroAnimations />
        <div className="hero-grid">
          <div>
            <div className="kicker">🌿 Kerala Ayurveda · Natural Healing</div>
            <h1 className="story-title">Let your health <span>tell a story</span></h1>
            <p className="story-text">Authentic Ayurvedic care presented with a calm, modern and emotional website experience — soft visuals, gentle motion and clear treatment guidance.</p>
            <div className="hero-actions">
              <button className="primary-story" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>Book Consultation</button>
              <button className="secondary-story" onClick={() => document.getElementById("treatments")?.scrollIntoView({ behavior: "smooth" })}>Explore Treatments</button>
            </div>
          </div>
          <GlowingHerbVisual />
        </div>
        <div className="stats-strip">{[["25+","Years of Healing"],["5000+","Lives Transformed"],["40+","Ayurvedic Remedies"],["3","Specialised Divisions"]].map(([n,l])=><div className="stat-story" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
      </section>
    </>
  );
}
