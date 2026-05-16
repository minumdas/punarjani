const eventsData = Object.values(import.meta.globEager('../data/events/*.json')).map(module => module.default || module).sort((a, b) => new Date(a.date) - new Date(b.date));

export default function Events() {
  return (
    <section id="events" style={{padding:'64px 5vw',background:'#fffaf0',fontFamily:'Inter,system-ui,sans-serif',color:'#25321f'}}>
      <div style={{maxWidth:1180,margin:'auto'}}>
        <div style={{textAlign:'center',marginBottom:40}}>
          <span style={{display:'inline-block',color:'#68863a',fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',fontSize:12}}>Events</span>
          <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',margin:'18px 0 0'}}>Upcoming programs and workshops</h2>
          <p style={{color:'#6d735f',maxWidth:680,margin:'16px auto 0'}}>Add event details in the CMS and this section will show the latest schedule directly on the website.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
          {eventsData.length ? eventsData.map(event => (
            <article key={event.title} style={{background:'#fff',borderRadius:20,border:'1px solid #e6e2d6',padding:24,boxShadow:'0 18px 35px rgba(91,73,27,.08)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12,flexWrap:'wrap'}}>
                <div>
                  <h3 style={{margin:'0 0 10px',fontSize:'1.25rem',color:'#24311f'}}>{event.title}</h3>
                  <div style={{color:'#6d735f',fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',fontSize:'0.85rem'}}>{event.location}</div>
                </div>
                <div style={{textAlign:'right',color:'#65843b',fontWeight:700}}>{new Date(event.date).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })}</div>
              </div>
              <p style={{margin:'18px 0 0',color:'#65614f',lineHeight:1.75}}>{event.description}</p>
            </article>
          )) : <p style={{color:'#6d735f'}}>No events yet. Add events in the CMS under "Events."</p>}
        </div>
      </div>
    </section>
  );
}
