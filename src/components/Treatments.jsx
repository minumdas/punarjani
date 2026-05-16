import { motion } from "framer-motion";

const PanchakarmaJourney = () => {
  const steps = [
    { name: "Detox", icon: "🌿" },
    { name: "Massage", icon: "💆‍♀️" },
    { name: "Steam", icon: "♨️" },
    { name: "Herbs", icon: "🌱" },
    { name: "Rejuvenation", icon: "✨" },
  ];

  return (
    <div style={{ marginTop: '60px', padding: '40px 0', borderTop: '1px solid rgba(120, 157, 67, 0.2)' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#26321f', margin: 0 }}>The Panchakarma Journey</h3>
        <p style={{ color: '#707661', fontSize: '15px' }}>Five steps to complete purification and renewal</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Connecting Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          style={{ position: 'absolute', top: '30px', left: '5%', right: '5%', height: '2px', background: '#dbe6c7', transformOrigin: 'left' }}
        />
        
        {steps.map((step, i) => (
          <div key={step.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 200, damping: 12 }}
              viewport={{ once: false, amount: 0.5 }}
              style={{
                width: '60px', height: '60px', borderRadius: '50%', background: '#fff', border: '2px solid #789d43',
                display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', boxShadow: '0 10px 20px rgba(120, 157, 67, 0.15)', marginBottom: '12px'
              }}
            >
              {step.icon}
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              style={{ fontSize: '13px', fontWeight: 'bold', color: '#52623f', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              {step.name}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Treatments() {
  const treatments = [
    ["Abhyanga", "Body Therapy", "Warm medicated oil massage to nourish tissues and calm the nervous system.", "60–90 min"],
    ["Panchakarma", "Detox Programme", "Five-action cleansing protocol for rejuvenation and balance.", "7–21 days"],
    ["Njavarakizhi", "Bolus Therapy", "Warm Njavara rice boluses to improve strength and tissue health.", "60–75 min"],
    ["Pizhichil", "Oil Bath Therapy", "Continuous warm medicated oil stream for joints and nervous system.", "45–60 min"],
    ["Nasyam", "Nasal Therapy", "Medicated oils through nasal passages for head and respiratory issues.", "30–45 min"],
    ["Kati Vasti", "Spinal Therapy", "Warm medicated oil retained on lower back for spinal concerns.", "45 min"],
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 },
    }),
    hover: (i) => ({
      scale: 1.05,
      y: -15,
      rotate: i % 2 === 0 ? 2 : -2, // slight alternate rotation like leaves fanning
      transition: { type: "spring", stiffness: 400, damping: 10 },
    }),
  };
  
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-6, 6, -6],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <>
      <style>{`
        .treat-story{background:#fffaf0;padding:100px 5vw;font-family:Inter,system-ui,sans-serif;color:#26321f}.head{text-align:center;margin-bottom:48px}.head span{color:#789d43;font-weight:900;text-transform:uppercase;letter-spacing:.18em;font-size:12px}.head h2{font-family:Georgia,serif;font-size:clamp(34px,5vw,58px);margin:12px 0}.head em{color:#779d42;font-weight:400}.treat-grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.treat-card{background:#fff;border:1px solid #edf0df;border-radius:30px;padding:28px;min-height:250px;box-shadow:0 20px 70px rgba(92,72,38,.06);transition:.3s;position:relative;overflow:hidden}.treat-card:before{content:attr(data-num);position:absolute;right:20px;top:16px;font-size:60px;font-family:Georgia,serif;color:#eef3df}.treat-card:hover{transform:translateY(-8px);box-shadow:0 28px 90px rgba(92,72,38,.12)}.treat-card small{color:#789d43;font-weight:900;text-transform:uppercase;letter-spacing:.16em}.treat-card h3{font-family:Georgia,serif;font-size:32px;margin:18px 0 12px}.treat-card p{color:#707661;line-height:1.75}.time{display:inline-block;margin-top:14px;background:#f5efd9;border-radius:999px;padding:8px 13px;color:#52623f;font-weight:800;font-size:13px}
        .posters-grid { max-width: 1180px; margin: 80px auto 0; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .poster-card { border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(92, 72, 38, 0.15); transition: transform 0.4s ease, box-shadow 0.4s ease; cursor: pointer; }
        .poster-card:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 40px 80px rgba(92, 72, 38, 0.25); }
        .poster-card img { width: 100%; display: block; object-fit: cover; }
        @media(max-width:900px){.treat-grid{grid-template-columns:1fr 1fr}.posters-grid{grid-template-columns:1fr; gap: 20px}}@media(max-width:560px){.treat-grid{grid-template-columns:1fr}}
      `}</style>
      <section className="treat-story" id="treatments">
        <div className="head">
          <span>Classical Therapies</span>
          <h2>Sacred <em>healing arts</em></h2>
        </div>
        <div className="treat-grid">
          {treatments.map((t, i) => (
            <motion.div
              className="treat-card"
              data-num={String(i + 1).padStart(2, "0")}
              key={t[0]}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={i}
              variants={cardVariants}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div variants={floatVariants} initial="initial" animate="animate">
                <small>{t[1]}</small>
                <h3>{t[0]}</h3>
                <p>{t[2]}</p>
                <span className="time">{t[3]}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <PanchakarmaJourney />

        <div className="head" style={{ marginTop: '80px', marginBottom: '20px' }}>
          <span>Specialised Care</span>
          <h2>Targeted <em>relief</em></h2>
        </div>
        
        <div className="posters-grid">
          <motion.div 
            className="poster-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src="/arthritis-poster.png" alt="Rheumatoid Arthritis Treatment" />
          </motion.div>
          
          <motion.div 
            className="poster-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src="/joint-pain-poster.png" alt="Relief for Joint Pain" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
