import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Award, Users, Building2 } from 'lucide-react';
import { ongoingApartments, ongoingVillas } from '../data/projects';
import heroImg from '../assets/hero.png';
import bkChandraElevationImg from '../assets/projects/BK_Chandra_Elevation.png';
import bkAranImg from '../assets/projects/BKAran_Elevation copy.jpeg';
import bkAmsSuryaImg from '../assets/projects/BK_AMS_&_Surya.png';

const featuredImages = {
  'bk-chandra': bkChandraElevationImg,
  'bk-aran': bkAranImg,
  'bk-ams': bkAmsSuryaImg,
  'bk-surya': bkAmsSuryaImg,
};

const STATS = [
  { val: '15+', label: 'Years Experience' },
  { val: '50+', label: 'Projects Delivered' },
  { val: '500+', label: 'Happy Families' },
  { val: '100%', label: 'Quality Assured' },
];

export default function HomePage() {
  return (
    <main style={{ background: '#0a0818', color: '#F8F6F0', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,8,24,0.95) 0%, rgba(10,8,24,0.7) 50%, rgba(10,8,24,0.85) 100%)' }} />

        <div className="hero-content">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'clamp(20px, 3vh, 32px)' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Premium Construction</span>
            </div>

            <motion.h1
              className="t-hero"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, lineHeight: 1.05, marginBottom: 'clamp(16px, 3vh, 28px)', maxWidth: '800px' }}
            >
              Building Dreams<br />
              <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Since 2011</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', color: 'rgba(248,246,240,0.65)', lineHeight: 1.8, maxWidth: '520px', marginBottom: 'clamp(28px, 5vh, 48px)' }}
            >
              BK Homes delivers premium apartments, individual villas, and commercial projects across Tiruvallur with meticulous craftsmanship and on-time delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              <Link to="/projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)',
                background: '#C9A84C', color: '#0a0818',
                fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: 'Outfit, sans-serif', fontWeight: 500,
                transition: 'opacity 0.2s',
              }}>
                View Projects <ArrowRight size={14} />
              </Link>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)',
                background: 'transparent', color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.5)',
                fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: 'Outfit, sans-serif',
                transition: 'background 0.2s',
              }}>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'rgba(10,8,24,0.85)', backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0 clamp(16px, 5vw, 80px)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                flex: '1 1 120px', padding: 'clamp(16px, 2.5vh, 24px) clamp(16px, 2.5vw, 32px)',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 300, color: '#C9A84C' }}>{s.val}</div>
                <div style={{ fontSize: 'clamp(9px, 1vw, 11px)', letterSpacing: '2px', color: 'rgba(248,246,240,0.4)', marginTop: '4px', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Work</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 300, lineHeight: 1.1 }}>
              Featured <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Projects</em>
            </h2>
          </div>
          <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>
            All Projects <ArrowRight size={13} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
          {[...ongoingApartments.slice(0, 2), ...ongoingVillas.slice(0, 2)].map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/projects/${project.id}`} style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', background: '#120f24', border: '1px solid rgba(248,246,240,0.07)', transition: 'border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,246,240,0.07)'; }}
              >
                <div style={{ height: 'clamp(200px, 30vw, 280px)', overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${featuredImages[project.id] || project.image})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.7s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,14,0.9) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: '14px', left: '14px', padding: '4px 10px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.5)', fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C' }} /> Ongoing
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', marginBottom: '4px', textTransform: 'uppercase' }}>{project.type}</div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 400, color: '#F8F6F0', marginBottom: '4px' }}>{project.name}</h3>
                    <div style={{ fontSize: '11px', color: 'rgba(248,246,240,0.5)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={10} style={{ color: '#C9A84C' }} />{project.location?.split(',')[0]}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(248,246,240,0.05)' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.floors && <span style={{ fontSize: '10px', color: '#C9A84C', padding: '3px 10px', border: '1px solid rgba(201,168,76,0.2)' }}>{project.floors} Floors</span>}
                    {project.totalFlats && <span style={{ fontSize: '10px', color: '#C9A84C', padding: '3px 10px', border: '1px solid rgba(201,168,76,0.2)' }}>{project.totalFlats} Units</span>}
                    {project.builtArea && <span style={{ fontSize: '10px', color: '#C9A84C', padding: '3px 10px', border: '1px solid rgba(201,168,76,0.2)' }}>{project.builtArea}</span>}
                  </div>
                  <ArrowRight size={14} style={{ color: '#C9A84C' }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)', background: '#120f24', borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>About BK Homes</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
              Crafting Premium<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Living Spaces</em>
            </h2>
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'rgba(248,246,240,0.6)', lineHeight: 1.9, marginBottom: '28px', maxWidth: '480px' }}>
              Since 2011, BK Homes has been building premium residential and commercial properties across Tiruvallur, Tamil Nadu. Our commitment to quality craftsmanship, timely delivery, and transparent dealings has made us a trusted name in the region.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Our Story <ArrowRight size={12} />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#C9A84C', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Phone size={12} /> Get in Touch
              </Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: Award, title: 'Quality First', desc: 'Premium materials and skilled craftsmanship in every project.' },
              { icon: Users, title: 'Client Focused', desc: 'Transparent process, regular updates, and post-handover support.' },
              { icon: Building2, title: 'Modern Design', desc: 'Contemporary architecture tailored to your lifestyle and vision.' },
              { icon: MapPin, title: 'Prime Locations', desc: 'Strategically located projects in Tiruvallur and surrounding areas.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ padding: 'clamp(18px, 3vw, 28px) clamp(16px, 2.5vw, 24px)', background: 'rgba(10,8,24,0.6)', border: '1px solid rgba(201,168,76,0.1)', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'; }}
              >
                <Icon size={20} style={{ color: '#C9A84C', marginBottom: '12px' }} />
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(16px, 2vw, 20px)', color: '#F8F6F0', marginBottom: '8px' }}>{title}</div>
                <p style={{ fontSize: '12px', color: 'rgba(248,246,240,0.5)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
            Ready to Build Your <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Dream Home?</em>
          </div>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Let's discuss your vision. Our team is ready to help you find the perfect property or build your ideal home.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)', background: '#C9A84C', color: '#0a0818', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}>
              Contact Us <ArrowRight size={14} />
            </Link>
            <a href="tel:+918870800708" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)', background: 'transparent', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif' }}>
              <Phone size={13} /> 88708 00708
            </a>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        .hero-content { padding: clamp(100px, 18vh, 200px) clamp(16px, 5vw, 80px) clamp(100px, 18vh, 160px); position: relative; z-index: 2; }
      `}</style>
    </main>
  );
}
