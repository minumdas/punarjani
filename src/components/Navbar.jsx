import { useEffect, useState } from "react";
const base = import.meta.env.BASE_URL;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const PHONE_NUMBER = "+919744499119";
  const links = ["Home", "Services", "Gallery", "Videos", "About", "Treatments", "Testimonials", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-wrap{position:fixed;top:0;left:0;right:0;z-index:1000;padding:18px 5vw;transition:.35s ease;font-family:Inter,system-ui,sans-serif}
        .nav-wrap.scrolled{padding:10px 5vw;background:rgba(255,252,242,.86);backdrop-filter:blur(18px);box-shadow:0 12px 40px rgba(82,65,38,.08)}
        .nav-inner{max-width:1180px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#25321f;font-weight:800;letter-spacing:-.03em}
        .brand-mark{display:flex;align-items:center;justify-content:center}
        .brand-mark img{height:45px;width:auto;display:block}
        .brand small{display:block;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#8a8f76;font-size:10px;margin-top:2px}
        .nav-links{display:flex;align-items:center;gap:26px;list-style:none;margin:0;padding:0}
        .whatsapp-btn{border:0;background:transparent;color:#2b7a2b;font-weight:800;border-radius:999px;padding:8px 14px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px}
        .whatsapp-btn:hover{color:#155724}
        .nav-links a{font-size:13px;text-decoration:none;color:#59604f;font-weight:650;transition:.25s ease}
        .nav-links a:hover{color:#6b8f3d}
        .book-btn{border:0;background:#698d39;color:white;border-radius:999px;padding:11px 18px;font-weight:750;cursor:pointer;box-shadow:0 14px 30px rgba(105,141,57,.2)}
        .menu-btn{display:none;border:0;background:#eef3df;border-radius:999px;padding:10px 12px;color:#25321f}
        .mobile-panel{display:flex;position:fixed;inset:72px 16px auto 16px;background:#fffaf0;border:1px solid #edf0df;border-radius:24px;padding:18px;box-shadow:0 20px 70px rgba(71,61,38,.14);flex-direction:column;gap:14px;z-index:1100;opacity:0;transform:translateY(-12px);pointer-events:none;transition:opacity .28s ease,transform .28s ease}.mobile-panel.open{opacity:1;transform:translateY(0);pointer-events:auto}
        @media(max-width:820px){.nav-links,.book-btn{display:none}.whatsapp-btn{display:none}.menu-btn{display:block}.mobile-panel{display:flex}.mobile-panel a{text-decoration:none;color:#25321f;font-weight:700}.mobile-panel button{display:block;width:100%}}
      `}</style>
      <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#home"><span className="brand-mark"><img src={base + 'punarjani-logo.png'} alt="Punarjani Ayurveda" /></span></a>
          <ul className="nav-links">{links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
          <a className="whatsapp-btn" href="https://chat.whatsapp.com/your-invite-code" target="_blank" rel="noopener noreferrer">Join WhatsApp</a>
          <button className="book-btn" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>Book Consultation</button>
          <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </header>
      <div className={`mobile-panel${open ? " open" : ""}`} onClick={() => setOpen(false)}>{links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}<a className="whatsapp-btn" href="https://chat.whatsapp.com/your-invite-code" target="_blank" rel="noopener noreferrer">Join WhatsApp</a><button className="book-btn" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>Book Consultation</button></div>
    </>
  );
}
