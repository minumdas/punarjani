const galleryData = Object.values(import.meta.globEager('../data/gallery/*.json')).map(module => module.default || module).sort((a, b) => a.order - b.order);

export default function Gallery() {
  return (
    <section id="gallery" style={{padding:'64px 5vw',background:'#f8f3ea',fontFamily:'Inter,system-ui,sans-serif',color:'#25321f'}}>
      <div style={{maxWidth:1180,margin:'auto'}}>
        <div style={{textAlign:'center',marginBottom:40}}>
          <span style={{display:'inline-block',color:'#68863a',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',fontSize:12}}>Gallery</span>
          <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',margin:'18px 0 0'}}>Healing moments captured</h2>
          <p style={{color:'#6d735f',maxWidth:680,margin:'16px auto 0'}}>Your client can add new photos in the CMS, and this gallery will update automatically after deployment.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
          {galleryData.length ? galleryData.map(item => (
            <article key={item.title} style={{background:'#fff',borderRadius:20,overflow:'hidden',boxShadow:'0 20px 40px rgba(0,0,0,0.08)'}}>
              <img src={item.image} alt={item.title} style={{width:'100%',display:'block',height:'240px',objectFit:'cover'}} />
              <div style={{padding:'20px'}}>
                <h3 style={{margin:'0 0 10px',fontSize:'1.2rem',color:'#24311f'}}>{item.title}</h3>
                <p style={{margin:0,color:'#62634e',lineHeight:1.7}}>{item.description}</p>
              </div>
            </article>
          )) : <p style={{color:'#6d735f'}}>No gallery items yet. Add photos in the CMS under "Gallery."</p>}
        </div>
      </div>
    </section>
  );
}
