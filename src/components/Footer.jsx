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
        <div style={{display:'flex',gap:12,marginTop:14}}>
          <a href={INSTAGRAM1} target="_blank" rel="noopener noreferrer" aria-label="Instagram punarjaniayurvedhahospital" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:44,height:44,borderRadius:999,background:'rgba(247,198,209,0.12)',color:'#f7c6d1',textDecoration:'none'}}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5-1.5a1 1 0 110 2 1 1 0 010-2z"/></svg>
          </a>
          <a href={INSTAGRAM2} target="_blank" rel="noopener noreferrer" aria-label="Instagram punarjaniayur" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:44,height:44,borderRadius:999,background:'rgba(247,198,209,0.12)',color:'#f7c6d1',textDecoration:'none'}}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5-1.5a1 1 0 110 2 1 1 0 010-2z"/></svg>
          </a>
        </div>
        <a href="/admin" style={{marginTop:16,color:'#d6e6c9',fontWeight:700,textDecoration:'underline',fontSize:14}}>Open CMS admin</a>
      </div>
    </footer>
  );
}
