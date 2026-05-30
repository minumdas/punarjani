const featuredVideo = {
  title: 'Explore Our Ayurvedic Hospital Facilities',
  description: 'A guided vlog showcasing the healing spaces, treatment rooms, and warm environment of our hospital.',
  src: '/uploads/vlog.mp4',
  poster: '/uploads/WhatsApp Image 2026-05-16 at 8.14.26 PM.jpeg'
};

export default function Videos() {
  return (
    <section id="videos" style={{ padding: '64px 5vw', background: '#f4f5ef', fontFamily: 'Inter,system-ui,sans-serif', color: '#25321f' }}>
      <div style={{ maxWidth: 1180, margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ display: 'inline-block', color: '#68863a', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: 12 }}>Videos</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', margin: '18px 0 0' }}>Video stories of care and healing</h2>
          <p style={{ color: '#6d735f', maxWidth: 680, margin: '16px auto 0' }}>Highlighted facility storytelling plus supporting care moments from the uploads folder.</p>
        </div>

        <article style={{ marginBottom: 36, borderRadius: 32, overflow: 'hidden', background: '#fff', boxShadow: '0 28px 80px rgba(52,63,37,.12)' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', background: '#000' }}>
            <video
              controls
              poster={featuredVideo.poster}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={featuredVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 18px 40px rgba(0,0,0,.16)' }}>
                <span style={{ color: '#2c3a1e', fontSize: 28, fontWeight: 800, lineHeight: 1 }}>&#9658;</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '28px 30px' }}>
            <span style={{ display: 'inline-block', color: '#50743d', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: 11 }}>Featured Vlog</span>
            <h3 style={{ margin: '14px 0 10px', fontSize: 'clamp(1.75rem,2.5vw,2.6rem)', color: '#21311d' }}>{featuredVideo.title}</h3>
            <p style={{ margin: 0, color: '#5d6a54', lineHeight: 1.85 }}>{featuredVideo.description}</p>
          </div>
        </article>

        {/* Supporting media removed — featured vlog is primary focus per request */}
      </div>
    </section>
  );
}
