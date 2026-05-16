import { motion } from "framer-motion";

export default function Team() {
  return (
    <>
      <style>
        {`
        @media (max-width: 900px) {
  .team-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-details {
    text-align: center;
  }

  .team-details h3 {
    font-size: 2rem;
    line-height: 1.2;
  }
}
        .team-section {
          background: linear-gradient(135deg, #050505 0%, #0a0a0a 100%);
          color: white;
          padding: 8rem 2rem;
          font-family: Inter, system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }
        .team-section:before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 122, 47, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.5;
        }
        .team-wrap {
          max-width: 1180px;
          margin: auto;
          position: relative;
          z-index: 2;
        }
        .team-head {
          text-align: center;
          margin-bottom: 4rem;
        }
        .team-tag {
          color: #ff7a2f;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
        .team-title {
          font-size: clamp(2.4rem, 5vw, 4.4rem);
          letter-spacing: -0.06em;
          line-height: 1;
          margin: 0.8rem 0;
        }
        .team-title b {
          color: #ff7a2f;
        }
        .team-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .team-photo-container {
          position: relative;
          border-radius: 24px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 122, 47, 0.2);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .team-photo-container img {
          width: 100%;
          border-radius: 12px;
          display: block;
          filter: contrast(1.05);
        }
        .team-photo-container::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 25px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(255,122,47,0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
                  .team-details h3 {
            font-size: clamp(2rem, 4vw, 2.5rem);
            line-height: 1.15;
            margin: 0 0 1rem;
            color: white;
            word-break: normal;
          }
        .team-role {
          color: #ff8a3d;
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }
        .team-bio {
          color: #b9b9b9;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .team-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ff7a2f, #ff4b1f);
          color: white;
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.85rem;
          box-shadow: 0 10px 20px rgba(255, 75, 31, 0.3);
        }
        @media (max-width: 900px) {
          .team-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .team-details {
            text-align: center;
          }
        }
      `}</style>

      <section className="team-section" id="team">
        <div className="team-wrap">
          <div className="team-head">
            <span className="team-tag">Meet Our Experts</span>
            <h2 className="team-title">
             <b> Dedicated healing professionals</b>
            </h2>
          </div>

          <div className="team-layout">
            <motion.div 
              className="team-photo-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src="/team-photo.png" alt="Punarjani Ayurveda Team with Dr. Swapna Venugopalan" />
            </motion.div>

            <motion.div 
              className="team-details"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Dr. Swapna Venugopalan (BAMS, MD)</h3>
              <div className="team-role">Chief Physician & The Punarjani Team</div>
              <p className="team-bio">
                Under the expert guidance of Dr. Swapna Venugopalan, our dedicated team of therapists and Ayurvedic professionals work together to provide authentic, classical Kerala Ayurveda. We believe in personalized care, taking the time to understand your unique constitution and creating a nurturing environment for your healing journey.
              </p>
              <div style={{color:'#b9b9b9',fontSize:'1rem',lineHeight:1.8,marginBottom:'1.5rem'}}>
                <strong style={{color:'#ffffff',fontWeight:700}}>Managing Director:</strong> Ajith Palayil<br/>
                <strong style={{color:'#ffffff',fontWeight:700}}>Therapist:</strong> Sarath
              </div>
              <span className="team-badge">Authentic Kerala Tradition</span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
