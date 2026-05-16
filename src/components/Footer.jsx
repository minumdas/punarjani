export default function Footer() {
  const PRIMARY = "+919744499119";
  const SECONDARY = "+919645063222";
  const INSTAGRAM1 = "https://www.instagram.com/punarjaniayurvedhahospital/";
  const INSTAGRAM2 = "https://www.instagram.com/punarjaniayur/";
  return (
    <footer id="contact" style={{background:'#24311f',padding:'40px 5vw',fontFamily:'Inter,system-ui,sans-serif',color:'#ffffff'}}>
      <div style={{maxWidth:1180,margin:'auto',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{textAlign:'center'}}>
          <strong style={{display:'block',fontSize:18}}>Punarjani Ayurveda Hospital</strong>
          <div style={{color:'#d6e6c9',marginTop:6}}>Kaushappara, Menonpara</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
          <a href={`tel:${PRIMARY}`} style={{color:'#b9e7a6',fontWeight:700,textDecoration:'none',fontSize:16}}>+91 9744 499 119</a>
          <a href={`tel:${SECONDARY}`} style={{color:'#b9e7a6',fontWeight:600,textDecoration:'none',fontSize:14}}>+91 9645 063 222</a>
          <button onClick={() => (window.location.href = `tel:${PRIMARY}`)} style={{border:0,background:'#7fb956',color:'#0b2309',padding:'10px 16px',borderRadius:999,fontWeight:800,cursor:'pointer',marginTop:8}}>Call to Book Consultation</button>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,marginTop:10}}>
          <a href={INSTAGRAM1} target="_blank" rel="noopener noreferrer" style={{color:'#f7c6d1',fontWeight:700,textDecoration:'none',border:'1px solid rgba(247,198,209,0.5)',padding:'10px 16px',borderRadius:999,background:'rgba(247,198,209,0.1)'}}>Instagram: punarjaniayurvedhahospital</a>
          <a href={INSTAGRAM2} target="_blank" rel="noopener noreferrer" style={{color:'#f7c6d1',fontWeight:700,textDecoration:'none',border:'1px solid rgba(247,198,209,0.5)',padding:'10px 16px',borderRadius:999,background:'rgba(247,198,209,0.1)'}}>Instagram: punarjaniayur</a>
        </div>
      </div>
    </footer>
  );
}
