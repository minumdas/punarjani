import { motion } from "framer-motion";
const base = import.meta.env.BASE_URL;

export default function Facility() {
  return (
    <>
      <style>{`
        .facility-section {
          background: #fffaf0;
          padding: 100px 5vw;
          font-family: Inter, system-ui, sans-serif;
          color: #26321f;
          position: relative;
        }
        .facility-wrap {
          max-width: 1180px;
          margin: auto;
        }
        .facility-head {
          text-align: center;
          margin-bottom: 3rem;
        }
        .facility-tag {
          color: #789d43;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
        }
        .facility-title {
          font-family: Georgia, serif;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          margin: 16px 0;
          color: #26321f;
        }
        .facility-title em {
          color: #779d42;
          font-weight: 400;
        }
        .facility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        .facility-img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(92, 72, 38, 0.15);
          transition: transform 0.4s ease;
          object-fit: cover;
          height: 100%;
        }
        .facility-img:hover {
          transform: translateY(-10px);
        }
        .img-large {
          height: 500px;
        }
        .img-small {
          height: 400px;
          margin-top: 4rem; /* Staggered effect */
        }
        @media (max-width: 850px) {
          .facility-grid {
            grid-template-columns: 1fr;
          }
          .img-small {
            margin-top: 0;
            height: auto;
          }
          .img-large {
            height: auto;
          }
        }
      `}</style>

      <section className="facility-section" id="facility">
        <div className="facility-wrap">
          <div className="facility-head">
            <span className="facility-tag">Our Healing Sanctuary</span>
            <h2 className="facility-title">Experience the <em>authentic tradition</em></h2>
            <p style={{ color: "#6f735f", fontSize: "18px", maxWidth: "680px", margin: "0 auto", lineHeight: "1.8" }}>
              Nestled in the serene surroundings of Kerala, our hospital is designed with traditional architecture to provide a calm, deeply healing environment. 
              We offer <strong style={{color: "#26321f"}}>A/C Super Speciality Rooms</strong>, pure <strong style={{color: "#26321f"}}>homely Ayurvedic food</strong>, and expansive, fresh-air walking spaces surrounded by nature to complete your recovery.
            </p>
          </div>

          <div className="facility-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img src={base + 'hospital-front.jpg'} alt="Punarjani Ayurveda Hospital Front" className="facility-img img-large" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <img src={base + 'hospital-side.jpg'} alt="Punarjani Ayurveda Hospital Side View" className="facility-img img-small" />
              
              <div style={{ background: "rgba(255, 255, 255, 0.6)", padding: "20px", borderRadius: "16px", border: "1px solid #edf0df", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                <span style={{ background: "#dbe6c7", color: "#3d4a31", padding: "6px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "bold" }}>❄️ A/C Speciality Rooms</span>
                <span style={{ background: "#dbe6c7", color: "#3d4a31", padding: "6px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "bold" }}>🍲 Homely Diet</span>
                <span style={{ background: "#dbe6c7", color: "#3d4a31", padding: "6px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "bold" }}>🌳 Fresh Air Walking Space</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
