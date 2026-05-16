export default function Footer() {
  const PRIMARY = "+919744499119";
  const SECONDARY = "+919645063222";
  return (
    <footer style={{background:'#fffaf0',borderTop:'1px solid #edf0df',padding:'28px 5vw',fontFamily:'Inter,system-ui,sans-serif',color:'#25321f'}}>
      <div style={{maxWidth:1180,margin:'auto',display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap',alignItems:'center'}}>
        <div style={{flex:'1 1 320px'}}>
          <strong style={{display:'block',fontSize:16}}>Punarjani Ayurveda Hospital</strong>
          <div style={{color:'#6d735f',marginTop:6}}>Kaushappara, Menonpara</div>
        </div>
        <div style={{flex:'0 0 260px',textAlign:'right'}}>
          <div style={{marginBottom:6}}><a href={`tel:${PRIMARY}`} style={{color:'#638a32',fontWeight:700,textDecoration:'none'}}>+91 9744 499 119</a></div>
          <div style={{marginBottom:10,color:'#6d735f'}}>Alternate: <a href={`tel:${SECONDARY}`} style={{color:'#638a32',fontWeight:700,textDecoration:'none'}}>+91 9645 063 222</a></div>
          <button onClick={() => (window.location.href = `tel:${PRIMARY}`)} style={{border:0,background:'#638a32',color:'#fff',padding:'10px 14px',borderRadius:999,fontWeight:800,cursor:'pointer'}}>Call to Book Consultation</button>
        </div>
      </div>
    </footer>
  );
}
