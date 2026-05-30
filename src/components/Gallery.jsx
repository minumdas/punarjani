import { useEffect, useRef } from 'react';

const healingImages = [
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.17 PM (1).jpeg', title: 'Calm care entry', description: 'A gentle introduction to the healing space.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.17 PM.jpeg', title: 'Patient comfort', description: 'A quiet moment of patient-centred support.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.18 PM (1).jpeg', title: 'Therapy preparation', description: 'Preparing treatments with care and attention.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.18 PM.jpeg', title: 'Healing environment', description: 'Warm, soothing spaces designed for recovery.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.19 PM (1).jpeg', title: 'Nurturing support', description: 'Hands-on wellness moments that soothe and restore.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.19 PM (2).jpeg', title: 'Mindful guidance', description: 'A patient experience centred on emotional care.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.19 PM.jpeg', title: 'Therapeutic touch', description: 'Gentle treatment to rebalance body and mind.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.20 PM (1).jpeg', title: 'Wellness rituals', description: 'Ceremonial care woven into every treatment.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.20 PM.jpeg', title: 'Restorative therapy', description: 'A calming space for recovery and renewal.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.21 PM (1).jpeg', title: 'Patient attention', description: 'Careful attention to every wellness detail.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.21 PM.jpeg', title: 'Healing flow', description: 'The gentle rhythm of supportive treatment.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.22 PM.jpeg', title: 'Reassuring presence', description: 'A supportive environment that fosters trust.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.23 PM (1).jpeg', title: 'Therapeutic care', description: 'A visual story of healing and compassion.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.23 PM.jpeg', title: 'Gentle recovery', description: 'Slow, intentional moments that soothe the body.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.24 PM (1).jpeg', title: 'Quiet reflection', description: 'A peaceful scene that supports recovery.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.24 PM (2).jpeg', title: 'Healed through presence', description: 'Care that centres the patient’s experience.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.24 PM.jpeg', title: 'Comfort and compassion', description: 'A warm treatment moment in our healing space.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.25 PM (1).jpeg', title: 'Recovery support', description: 'Focused, compassionate care during treatment.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.25 PM.jpeg', title: 'Wellbeing journey', description: 'A steady path toward restored balance.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.26 PM.jpeg', title: 'Healing light', description: 'A bright, calm environment for recovery.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.14.51 PM.jpeg', title: 'Holistic space', description: 'A space designed to nurture both body and mind.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.15.49 PM.jpeg', title: 'Care in focus', description: 'Close attention to patient comfort and wellbeing.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.15.50 PM.jpeg', title: 'Quiet healing', description: 'A serene treatment setting for patient care.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.15.51 PM (1).jpeg', title: 'Professional support', description: 'Thoughtful care in every treatment moment.' },
  { src: '/uploads/WhatsApp Image 2026-05-16 at 8.15.51 PM.jpeg', title: 'Balanced healing', description: 'A visual story of wellness and restoration.' }
];

export default function Gallery() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const nextScroll = slider.scrollLeft + slider.clientWidth * 0.92;
      if (slider.scrollLeft >= maxScrollLeft - 8) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollTo({ left: Math.min(nextScroll, maxScrollLeft), behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const scrollBy = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const step = slider.clientWidth * 0.92 * direction;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const target = Math.max(0, Math.min(slider.scrollLeft + step, maxScrollLeft));
    slider.scrollTo({ left: target, behavior: 'smooth' });
  };

  return (
    <section id="gallery" style={{ padding: '64px 5vw', background: '#f8f3ea', fontFamily: 'Inter,system-ui,sans-serif', color: '#25321f' }}>
      <div style={{ maxWidth: 1180, margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ display: 'inline-block', color: '#68863a', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: 12 }}>Gallery</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', margin: '18px 0 0' }}>Healing moments captured</h2>
          <p style={{ color: '#6d735f', maxWidth: 680, margin: '16px auto 0' }}>A premium, wellness-focused visual carousel using all healing images from the uploads folder.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translate(-50%, -50%)',
              border: '0',
              background: 'rgba(255,255,255,.95)',
              borderRadius: '50%',
              width: 44,
              height: 44,
              boxShadow: '0 14px 30px rgba(0,0,0,.12)',
              cursor: 'pointer',
              zIndex: 2
            }}
            aria-label="Previous images"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            style={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translate(50%, -50%)',
              border: '0',
              background: 'rgba(255,255,255,.95)',
              borderRadius: '50%',
              width: 44,
              height: 44,
              boxShadow: '0 14px 30px rgba(0,0,0,.12)',
              cursor: 'pointer',
              zIndex: 2
            }}
            aria-label="Next images"
          >
            ›
          </button>
          <div
            ref={sliderRef}
            style={{
              display: 'flex',
              gap: 18,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: 14,
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            {healingImages.map((item) => (
              <article
                key={item.src}
                style={{
                  flex: '0 0 min(280px,90vw)',
                  scrollSnapAlign: 'center',
                  background: '#fff',
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: '0 24px 50px rgba(0,0,0,.08)'
                }}
              >
                <div style={{ width: '100%', aspectRatio: '4 / 3', position: 'relative', background: '#eae7df' }}>
                  <img src={item.src} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 10px', fontSize: '1.1rem', color: '#24311f' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#63624f', lineHeight: 1.75 }}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
