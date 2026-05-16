export default function Contact() {
  const PRIMARY = "+919744499119";
  const SECONDARY = "+919645063222";
  return (
    <section id="contact" style={{padding:'64px 5vw',background:'#fffaf0',fontFamily:'Inter,system-ui,sans-serif',color:'#25321f'}}>
      <div style={{maxWidth:1180,margin:'auto',display:'flex',gap:40,alignItems:'flex-start',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 320px'}}>
          <h2 style={{fontSize:28,marginBottom:8}}>Contact & Book Consultation</h2>
          <p style={{color:'#6d735f',marginTop:0}}>Punarjani Ayurveda Hospital<br/>Kaushappara, Menonpara</p>
          <p style={{marginTop:18}}><strong>Phone (Primary): </strong><a href={`tel:${PRIMARY}`} style={{color:'#638a32',fontWeight:700,textDecoration:'none'}}>+91 9744 499 119</a></p>
          <p style={{marginTop:6}}><strong>Phone (Alternate): </strong><a href={`tel:${SECONDARY}`} style={{color:'#638a32',fontWeight:700,textDecoration:'none'}}>+91 9645 063 222</a></p>
          <div style={{marginTop:18}}>
            <button onClick={() => (window.location.href = `tel:${PRIMARY}`)} style={{border:0,background:'#638a32',color:'#fff',padding:'12px 18px',borderRadius:999,fontWeight:800,cursor:'pointer'}}>Call to Book Consultation</button>
          </div>
        </div>
        <div style={{flex:'1 1 280px',background:'#fff',border:'1px solid #edf0df',borderRadius:12,padding:18}}
        >
          <h3 style={{marginTop:0}}>Visit / Address</h3>
          <p style={{color:'#6d735f',marginTop:8}}>Punarjani Ayurveda Hospital<br/>Kaushappara, Menonpara</p>
        </div>
      </div>
    </section>
  );
}
