import { motion } from "framer-motion";

const DoshaAnimation = () => {
  return (
    <div style={{ position: 'relative', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px 0' }}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: -85, opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(135, 206, 235, 0.6)', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111', fontWeight: 'bold' }}
      >
        Vata
      </motion.div>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255, 99, 71, 0.6)', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111', fontWeight: 'bold', zIndex: 2 }}
      >
        Pitta
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 85, opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(144, 238, 144, 0.6)', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111', fontWeight: 'bold' }}
      >
        Kapha
      </motion.div>
    </div>
  );
};

export default function About() {
  const pillars = [
    ["☀", "Dinacharya", "Daily routines aligned with nature's rhythm."],
    ["🌙", "Ritucharya", "Seasonal regimens for changing body needs."],
    ["🌿", "Panchakarma", "Classical detox therapies for deep cleansing."],
    ["⚖", "Tridosha", "Balancing Vata, Pitta and Kapha."],
  ];
  return (
    <>
      <style>{`
        .about-story{background:#fffaf0;padding:100px 5vw;font-family:Inter,system-ui,sans-serif;color:#26321f;position:relative;overflow:hidden}.about-story:before{content:'✿';position:absolute;right:5vw;top:30px;font-size:180px;color:rgba(200,215,167,.28)}
        .about-grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;align-items:start;position:relative;z-index:2}
        .label{color:#789d43;font-weight:900;text-transform:uppercase;letter-spacing:.18em;font-size:12px}
        .about-title{font-family:Georgia,serif;font-size:clamp(34px,5vw,58px);line-height:1.02;letter-spacing:-.05em;margin:16px 0;color:#26321f}
        .about-title em{color:#779d42;font-weight:400}
        .about-copy{color:#6f735f;line-height:1.85;font-size:16px}
        .quote-box{background:white;border:1px solid #edf0df;border-radius:28px;padding:26px;margin:24px 0;box-shadow:0 20px 70px rgba(92,72,38,.08)}.quote-box p{font-family:Georgia,serif;font-size:22px;line-height:1.5;margin:0;color:#3d4a31}.quote-box small{display:block;margin-top:12px;color:#8a8f76;font-weight:800}
        .pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
        .pillar{background:rgba(255,255,255,.72);border:1px solid #edf0df;border-radius:28px;padding:26px;box-shadow:0 18px 60px rgba(92,72,38,.06);transition:.3s}.pillar:hover{transform:translateY(-6px)}.pillar .ico{font-size:34px}.pillar h3{margin:14px 0 8px;font-family:Georgia,serif;font-size:25px}.pillar p{margin:0;color:#737764;line-height:1.7}
        @media(max-width:850px){.about-grid{grid-template-columns:1fr}.pillars{grid-template-columns:1fr}}
      `}</style>
      <section className="about-story" id="about">
        <motion.div 
           initial={{ scale: 0, opacity: 0, rotate: -45 }}
           whileInView={{ scale: 1, opacity: 0.15, rotate: 0 }}
           transition={{ duration: 3, ease: "easeOut" }}
           viewport={{ once: true }}
           style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '300px', zIndex: 1, pointerEvents: 'none', color: '#c8d7a7' }}
        >
          🪷
        </motion.div>
        <div className="about-grid">
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ background: 'rgba(255, 253, 247, 0.8)', padding: '30px', borderRadius: '24px', borderLeft: '4px solid #d4af37' }}
          >
            <span className="label">Our Philosophy</span>
            <h2 className="about-title">Ancient tradition meets <em>modern wellness</em></h2>
            <p className="about-copy">Palazhi Ayurveda Chikitsalayam follows authentic Kerala Ayurveda while presenting care in a simple, warm and approachable way.</p>
            <div className="quote-box">
              <p>“To protect the health of the healthy and alleviate disorders of the diseased.”</p>
              <small>— Charaka Samhita</small>
            </div>
            <p className="about-copy">Every treatment plan is tailored to your constitution, lifestyle and root cause of imbalance.</p>
            <DoshaAnimation />
          </motion.div>
          <div className="pillars">
            {pillars.map(([i, t, d], idx) => (
              <motion.div 
                className="pillar" 
                key={t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="ico">{i}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
