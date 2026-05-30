import { useState } from "react";
const base = import.meta.env.BASE_URL;
import { motion, AnimatePresence } from "framer-motion";

const BreathingCircle = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    style={{
      position: "absolute",
      right: "40px",
      top: "40px",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(135,206,235,0.8) 0%, rgba(135,206,235,0) 70%)",
      pointerEvents: "none",
    }}
  />
);

const PanchakarmaJourney = () => {
  const icons = [
    { icon: "🌿", label: "Herbs" },
    { icon: "♨", label: "Steam" },
    { icon: "💆", label: "Massage" },
    { icon: "💧", label: "Detox" },
    { icon: "✨", label: "Rejuvenation" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginTop: "20px",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 2,
      }}
    >
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.4 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#f5efd9",
            padding: "10px",
            borderRadius: "12px",
            minWidth: "80px",
          }}
        >
          <span style={{ fontSize: "24px" }}>{item.icon}</span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "bold",
              marginTop: "4px",
              color: "#52623f",
            }}
          >
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const services = [
  [
    "🧓",
    "Senior Wellness",
    "Holistic Elder Care",
    "Comprehensive rehabilitation for senior patients at our centre or home with personalised Ayurvedic protocols and doctor support.",
    [
      "Doctor home visits",
      "Mobility rehabilitation",
      "Personalised care plans",
      "Continuous monitoring",
    ],
  ],

  [
    "🫁",
    "Respiratory Rehabilitation",
    "Breath & Vital Force",
    "Holistic care for cough, cold, fever and chronic respiratory concerns with breathwork and herbal support.",
    [
      "Acute episode management",
      "Chronic condition support",
      "Breathwork therapy",
      "Herbal formulations",
    ],
  ],

  [
    "🦴",
    "Orthopedic Services",
    "Joints, Spine & Mobility",
    "Specialised Ayurvedic care for frozen shoulder, back pain, inflammation and mobility restoration.",
    [
      "Frozen Shoulder treatment",
      "Back Pain relief",
      "Joint mobility restoration",
      "Bone & muscle strengthening",
    ],
  ],

  [
    "🌿",
    "Panchakarma Detox",
    "Deep Cleansing Protocol",
    "Classical five-action detox program for deep tissue cleansing and complete body rejuvenation.",
    [
      "Toxin elimination",
      "Dosha balancing",
      "Cellular renewal",
      "Immunity boosting",
    ],
  ],
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <>
      <style>{`
        .services-story{
          background:#f5efd9;
          padding:100px 5vw;
          font-family:Inter,system-ui,sans-serif;
          color:#26321f;
        }

        .section-head{
          text-align:center;
          max-width:720px;
          margin:0 auto 50px;
        }

        .section-head span{
          color:#789d43;
          font-weight:900;
          letter-spacing:.18em;
          text-transform:uppercase;
          font-size:12px;
        }

        .section-head h2{
          font-family:Georgia,serif;
          font-size:clamp(34px,5vw,58px);
          line-height:1;
          margin:14px 0;
          color:#26321f;
        }

        .section-head em{
          color:#779d42;
          font-weight:400;
        }

        .services-layout{
          max-width:1180px;
          margin:auto;
          display:grid;
          grid-template-columns:330px 1fr;
          gap:22px;
          position:relative;
          z-index:2;
        }

        .tabs{
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .tab{
          border:1px solid #e5e8d0;
          background:rgba(255,255,255,.58);
          border-radius:24px;
          padding:20px;
          text-align:left;
          cursor:pointer;
          transition:.3s;
        }

        .tab.active,
        .tab:hover{
          background:white;
          box-shadow:0 20px 60px rgba(92,72,38,.08);
          transform:translateX(5px);
        }

        .tab b{
          display:block;
          font-family:Georgia,serif;
          font-size:22px;
          color:#26321f;
          margin-top:6px;
        }

        .tab small{
          color:#7d836d;
          font-weight:800;
        }

        .panel{
          background:white;
          border:1px solid #edf0df;
          border-radius:34px;
          padding:50px;
          box-shadow:0 30px 90px rgba(92,72,38,.1);
          min-height:450px;
          position:relative;
          overflow:hidden;
        }

        .panel:after{
          content:'✿';
          position:absolute;
          right:-40px;
          bottom:-80px;
          font-size:220px;
          color:rgba(222,232,191,.35);
          z-index:0;
          pointer-events:none;
        }

        .panel .big{
          width:72px;
          height:72px;
          margin:0 auto 22px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          background:#f5efd9;
          font-size:42px;
          position:relative;
          z-index:2;
        }

        .panel h3{
          font-family:Georgia,serif;
          font-size:42px;
          margin:0 0 10px;
          position:relative;
          z-index:2;
          text-align:center;
          line-height:1.1;
        }

        .panel .sub{
          color:#789d43;
          text-transform:uppercase;
          letter-spacing:.16em;
          font-size:12px;
          font-weight:900;
          position:relative;
          z-index:2;
          margin-bottom:20px;
          text-align:center;
        }

        .panel p{
          max-width:720px;
          color:#6f735f;
          line-height:1.8;
          font-size:16px;
          position:relative;
          z-index:2;
          text-align:center;
          margin:auto;
        }

        .feature-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:12px;
          margin-top:26px;
          position:relative;
          z-index:2;
        }

        .feature{
          background:#fbf7ea;
          border:1px solid #edf0df;
          border-radius:18px;
          padding:14px 16px;
          color:#4e5b42;
          font-weight:750;
        }

        .cta{
          margin-top:26px;
          border:0;
          border-radius:999px;
          background:#638a32;
          color:white;
          padding:14px 22px;
          font-weight:900;
          position:relative;
          z-index:2;
          cursor:pointer;
          display:block;
          margin-left:auto;
          margin-right:auto;
        }

        @media(max-width:850px){
          .services-layout{
            grid-template-columns:1fr;
          }

          .tabs{
            flex-direction:row;
            overflow:auto;
          }

          .tab{
            min-width:230px;
          }

          .feature-grid{
            grid-template-columns:1fr;
          }

          .panel h3{
            font-size:34px;
          }
        }
      `}</style>

      <section className="services-story" id="services">
        <div className="section-head">
          <span>Our Specialisations</span>
          <h2>
            Treatments that <em>feel personal</em>
          </h2>
        </div>

        <div className="services-layout">
          <div className="tabs">
            {services.map((x, i) => (
              <button
                className={`tab ${active === i ? "active" : ""}`}
                key={x[1]}
                onClick={() => setActive(i)}
              >
                <span>{x[0]}</span>
                <b>{x[1]}</b>
                <small>{x[2]}</small>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="panel"
            >
              {active === 1 && <BreathingCircle />}

              <div className="big">{s[0]}</div>

              <h3>{s[1]}</h3>

              <div className="sub">{s[2]}</div>

              <p>{s[3]}</p>

              {active === 3 ? (
                <PanchakarmaJourney />
              ) : (
                <div className="feature-grid">
                  {s[4].map((f) => (
                    <div className="feature" key={f}>
                      ✓ {f}
                    </div>
                  ))}
                </div>
              )}

              <a
                className="cta"
                href={base + 'Broucher%20Punarjani.pdf'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ marginRight: 10 }}>📄</span>
                View Brochure
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}