import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import officeImg from '../assets/Office.jpg';

const TIMELINE = [
  { year: '2011', title: 'Founded', desc: 'BK Homes established in Tiruvallur, Tamil Nadu with a vision of delivering quality homes.' },
  { year: '2013', title: 'First Apartment', desc: 'Completed BK Magizhagam, our first apartment complex at Sakthi Kovil Cross Street.' },
  { year: '2016', title: 'Expanding Portfolio', desc: 'Delivered multiple individual villas and began taking contract construction projects.' },
  { year: '2019', title: 'Growth Phase', desc: 'Expanded into premium 3 & 4 BHK apartments. BK Chandra project launched.' },
  { year: '2022', title: 'Commercial Projects', desc: 'Entered commercial construction space with high-end showroom and office developments.' },
  { year: '2024', title: 'Real Estate', desc: 'Launched Mohan Garden plotted development, offering premium residential plots.' },
  { year: '2026', title: 'Present', desc: 'Multiple ongoing premium projects across Tiruvallur with 500+ happy families served.' },
];

const VALUES = [
  { title: 'Quality', desc: 'We use only premium-grade materials and employ skilled craftsmen who take pride in their work.' },
  { title: 'Transparency', desc: 'Clear communication, honest timelines, and no hidden costs — always.' },
  { title: 'Timely Delivery', desc: 'We respect your time. Our track record of on-time delivery speaks for itself.' },
  { title: 'After-Sales', desc: 'Our relationship with clients continues long after handover with ongoing support.' },
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 5vw, 80px)', background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)', borderBottom: '1px solid rgba(201,168,76,0.1)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', background: 'radial-gradient(ellipse at right, rgba(201,168,76,0.05), transparent 70%)', pointerEvents: 'none' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Story</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
            About <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>BK Homes</em>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', color: 'rgba(248,246,240,0.6)', maxWidth: '600px', lineHeight: 1.9 }}>
            Building premium homes and commercial spaces across Tiruvallur since 2011. More than construction — we build communities and create lasting value for families.
          </p>
        </motion.div>
      </section>

      {/* Mission + Image */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Our Mission</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '20px' }}>
              Delivering Quality<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Without Compromise</em>
            </h2>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(248,246,240,0.65)', lineHeight: 1.9, marginBottom: '20px' }}>
              At BK Homes, we believe that a home is the most significant investment a family makes. That's why we approach every project with uncompromising dedication to quality, from foundation to final finish.
            </p>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(248,246,240,0.65)', lineHeight: 1.9, marginBottom: '32px' }}>
              Our team of experienced engineers, architects, and craftsmen work together to deliver spaces that exceed expectations — on time and within budget.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Our Projects <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={officeImg} alt="BK Homes Office" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', background: '#C9A84C', padding: 'clamp(16px, 3vw, 28px) clamp(20px, 3.5vw, 36px)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 300, color: '#0a0818', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(10,8,24,0.7)', textTransform: 'uppercase', marginTop: '4px' }}>Years</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)', background: '#120f24', borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '12px' }}>What Drives Us</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 300 }}>
            Our Core <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Values</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px' }}>
          {VALUES.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3.5vw, 32px)', background: 'rgba(10,8,24,0.6)', border: '1px solid rgba(201,168,76,0.1)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'; }}
            >
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '8px' }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#F8F6F0', marginBottom: '12px' }}>{v.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.55)', lineHeight: 1.8 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)' }}>
        <div style={{ marginBottom: 'clamp(40px, 6vw, 56px)', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '12px' }}>Our Presence</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 300 }}>
            Journey Through <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Time</em>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'clamp(32px, 5vw, 60px)', top: 0, bottom: 0, width: '1px', background: 'rgba(201,168,76,0.15)' }} />
          {TIMELINE.map((item, i) => {
            const isCurrent = item.year === '2026';
            return (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 'clamp(28px, 4vw, 40px)', position: 'relative' }}
              >
                <div style={{ flexShrink: 0, width: 'clamp(60px, 10vw, 120px)', textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    fontWeight: 300,
                    color: isCurrent ? '#C9A84C' : 'rgba(201,168,76,0.5)',
                    lineHeight: 1,
                    ...(isCurrent && { textShadow: '0 0 20px rgba(201,168,76,0.5)', animation: 'glow 2s ease infinite' }),
                  }}>{item.year}</div>
                </div>
                <div style={{ position: 'relative', paddingLeft: 'clamp(20px, 3vw, 32px)' }}>
                  <div style={{
                    position: 'absolute', left: '-5px', top: '6px',
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: isCurrent ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                    border: `2px solid ${isCurrent ? '#C9A84C' : 'transparent'}`,
                    ...(isCurrent && { boxShadow: '0 0 12px rgba(201,168,76,0.6)', animation: 'pulse 2s ease infinite' }),
                  }} />
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#F8F6F0', marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'rgba(248,246,240,0.55)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)', background: '#120f24', borderTop: '1px solid rgba(201,168,76,0.1)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 300, marginBottom: '16px' }}>
          Let's Build <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Together</em>
        </h2>
        <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '440px', margin: '0 auto 32px', lineHeight: 1.8 }}>
          Reach out to discuss your project or visit our office in Tiruvallur.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)', background: '#C9A84C', color: '#0a0818', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500 }}>
            Contact Us <ArrowRight size={13} />
          </Link>
          <a href="tel:+918870800708" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            <Phone size={12} /> 88708 00708
          </a>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        @keyframes glow { 0%,100%{text-shadow:0 0 10px rgba(201,168,76,0.3)} 50%{text-shadow:0 0 25px rgba(201,168,76,0.8)} }
      `}</style>
    </main>
  );
}
