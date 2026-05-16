const videosData = Object.values(import.meta.globEager('../data/videos/*.json')).map(module => module.default || module);

export default function Videos() {
  return (
    <section id="videos" style={{padding:'64px 5vw',background:'#f4f5ef',fontFamily:'Inter,system-ui,sans-serif',color:'#25321f'}}>
      <div style={{maxWidth:1180,margin:'auto'}}>
        <div style={{textAlign:'center',marginBottom:40}}>
          <span style={{display:'inline-block',color:'#68863a',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',fontSize:12}}>Videos</span>
          <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',margin:'18px 0 0'}}>Video stories of care and healing</h2>
          <p style={{color:'#6d735f',maxWidth:680,margin:'16px auto 0'}}>Add videos in the CMS and they will appear here automatically.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:20}}>
          {videosData.length ? videosData.map(video => (
            <article key={video.title} style={{background:'#fff',borderRadius:20,overflow:'hidden',boxShadow:'0 18px 40px rgba(69,57,35,.12)'}}>
              <div style={{position:'relative',paddingTop:'56.25%'}}>
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:'0'}}
                />
              </div>
              <div style={{padding:'20px'}}>
                <h3 style={{margin:'0 0 10px',fontSize:'1.2rem',color:'#24311f'}}>{video.title}</h3>
                <p style={{margin:0,color:'#62634e',lineHeight:1.7}}>{video.description}</p>
              </div>
            </article>
          )) : <p style={{color:'#6d735f'}}>No videos yet. Add video entries in the CMS under "Videos."</p>}
        </div>
      </div>
    </section>
  );
}
