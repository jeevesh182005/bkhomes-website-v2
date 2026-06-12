import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

export default function RealEstatePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 5vw, 80px)', background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Real Estate</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
            Real <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Estate</em>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '520px', lineHeight: 1.8 }}>
            Premium residential plots and land investment opportunities in Tiruvallur and surrounding areas.
          </p>
        </motion.div>
      </section>

      {/* Featured listing */}
      <section style={{ padding: 'clamp(48px, 7vh, 80px) clamp(16px, 5vw, 80px)' }}>
        <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '12px' }}>Featured Listings</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 300 }}>
            Available <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Properties</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '20px' }}>
          {/* Mohan Garden card */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: '#120f24', border: '1px solid rgba(248,246,240,0.07)', overflow: 'hidden', transition: 'border-color 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,246,240,0.07)'; }}
          >
            <div style={{ height: 'clamp(200px, 28vw, 260px)', background: 'linear-gradient(135deg, #1a1432, #0d0b1e)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08), transparent 70%)' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 300, color: 'rgba(201,168,76,0.3)', lineHeight: 1 }}>MG</div>
                <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginTop: '8px' }}>Mohan Garden</div>
              </div>
              <div style={{ position: 'absolute', top: '14px', left: '14px', padding: '4px 10px', background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)', fontSize: '9px', letterSpacing: '2px', color: '#4ade80', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s ease infinite' }} /> Available
              </div>
            </div>
            <div style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
              <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '6px' }}>Plotted Development</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px, 3vw, 30px)', color: '#F8F6F0', marginBottom: '8px' }}>Mohan Garden</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(248,246,240,0.5)', marginBottom: '16px' }}>
                <MapPin size={11} style={{ color: '#C9A84C' }} /> Tiruvallur, Tamil Nadu
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {['20 Plots', '960–1200 sqft', 'RERA Compliant', 'Clear Title'].map(t => (
                  <span key={t} style={{ padding: '3px 10px', background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.18)', fontSize: '10px', color: '#C9A84C' }}>{t}</span>
                ))}
              </div>
              <Link to="/mohan-garden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: '#C9A84C', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                View Plots <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why invest */}
      <section style={{ padding: 'clamp(48px, 7vh, 80px) clamp(16px, 5vw, 80px)', background: '#120f24', borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ marginBottom: 'clamp(36px, 5vw, 52px)', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '12px' }}>Investment</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4.5vw, 48px)', fontWeight: 300 }}>
            Why Invest in <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Tiruvallur?</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px' }}>
          {[
            { title: 'Strategic Location', desc: '35 km from Chennai with excellent highway and rail connectivity.' },
            { title: 'Infrastructure Growth', desc: 'Rapid development of roads, metro extension plans, and smart city initiatives.' },
            { title: 'Industrial Hub', desc: 'Major industries and IT parks driving demand for quality housing.' },
            { title: 'Appreciation Potential', desc: 'Land values in Tiruvallur have grown 40%+ over the past 5 years.' },
          ].map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ padding: 'clamp(24px, 4vw, 32px) clamp(20px, 3.5vw, 28px)', background: 'rgba(10,8,24,0.6)', border: '1px solid rgba(201,168,76,0.1)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'; }}
            >
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 6vw, 60px)', fontWeight: 300, color: 'rgba(201,168,76,0.12)', lineHeight: 1, marginBottom: '8px' }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#F8F6F0', marginBottom: '10px' }}>{r.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.55)', lineHeight: 1.8 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) clamp(16px, 5vw, 80px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 300, marginBottom: '16px' }}>
          Start Your <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Investment</em>
        </h2>
        <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '440px', margin: '0 auto 32px', lineHeight: 1.8 }}>
          Our real estate team will help you find the right plot or property at the best value.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/mohan-garden" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)', background: '#C9A84C', color: '#0a0818', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500 }}>
            View Plots <ArrowRight size={13} />
          </Link>
          <a href="tel:+918870800708" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            <Phone size={12} /> Call Us
          </a>
        </div>
      </section>

      <style>{`@keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }`}</style>
    </main>
  );
}
