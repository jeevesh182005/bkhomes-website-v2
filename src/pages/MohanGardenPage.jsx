import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CircleCheck as CheckCircle, Circle as XCircle } from 'lucide-react';
import { mohanGardenPlots } from '../data/projects';

export default function MohanGardenPage() {
  const available = mohanGardenPlots.filter(p => p.status === 'Available').length;
  const sold = mohanGardenPlots.filter(p => p.status === 'Sold').length;
  const avgArea = Math.round(mohanGardenPlots.reduce((s, p) => s + p.area, 0) / mohanGardenPlots.length);

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 5vw, 80px)', background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Real Estate · Plots</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
            Mohan <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Garden</em>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '520px', lineHeight: 1.8, marginBottom: '32px' }}>
            Premium residential plots in a well-planned layout with excellent connectivity and all essential amenities nearby.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(248,246,240,0.6)' }}>
              <MapPin size={13} style={{ color: '#C9A84C' }} /> Tiruvallur, Tamil Nadu
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(40px, 6vh, 60px) clamp(16px, 5vw, 80px)', background: '#120f24', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
          {[
            { val: String(mohanGardenPlots.length), label: 'Total Plots' },
            { val: String(available), label: 'Available', color: '#4ade80' },
            { val: String(sold), label: 'Sold' },
            { val: `~${avgArea}`, label: 'Avg sqft' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1 1 120px', padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 28px)', borderRight: '1px solid rgba(201,168,76,0.1)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 300, color: s.color || '#C9A84C', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.4)', marginTop: '6px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Plot Grid */}
      <section style={{ padding: 'clamp(48px, 7vh, 80px) clamp(16px, 5vw, 80px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: 'clamp(28px, 4vw, 40px)', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 300 }}>
            Plot <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Availability</em>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(248,246,240,0.6)' }}>
              <span style={{ width: '10px', height: '10px', background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.5)', display: 'inline-block' }} />
              Available
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(248,246,240,0.6)' }}>
              <span style={{ width: '10px', height: '10px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', display: 'inline-block' }} />
              Sold
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 160px), 1fr))', gap: '10px', marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          {mohanGardenPlots.map((plot, i) => {
            const avail = plot.status === 'Available';
            return (
              <motion.div key={plot.no} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                style={{
                  padding: 'clamp(14px, 2.5vw, 20px)',
                  background: avail ? 'rgba(74,222,128,0.06)' : 'rgba(239,68,68,0.05)',
                  border: `1px solid ${avail ? 'rgba(74,222,128,0.25)' : 'rgba(239,68,68,0.2)'}`,
                  textAlign: 'center', cursor: avail ? 'pointer' : 'default',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => { if (avail) e.currentTarget.style.borderColor = 'rgba(74,222,128,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = avail ? 'rgba(74,222,128,0.25)' : 'rgba(239,68,68,0.2)'; }}
              >
                <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.4)', textTransform: 'uppercase', marginBottom: '4px' }}>Plot</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 3vw, 28px)', color: avail ? '#4ade80' : 'rgba(248,246,240,0.3)', fontWeight: 300 }}>{plot.no}</div>
                <div style={{ fontSize: 'clamp(11px, 1.3vw, 13px)', color: avail ? 'rgba(248,246,240,0.7)' : 'rgba(248,246,240,0.3)', marginTop: '4px' }}>{plot.area} sqft</div>
                <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  {avail ? <CheckCircle size={11} style={{ color: '#4ade80' }} /> : <XCircle size={11} style={{ color: '#f87171' }} />}
                  <span style={{ fontSize: '9px', letterSpacing: '1px', color: avail ? '#4ade80' : '#f87171', textTransform: 'uppercase' }}>{plot.status}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Amenities */}
        <div style={{ background: '#120f24', border: '1px solid rgba(201,168,76,0.1)', padding: 'clamp(28px, 4vw, 44px)', marginBottom: 'clamp(40px, 6vw, 56px)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px' }}>Layout Amenities</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))', gap: '12px' }}>
            {['Tar Road Access', 'Street Lighting', 'Underground Drainage', 'Water Supply Connection', 'Electricity Connection', 'Green Zone', 'Vastu Compliant Layout', 'Clear Title Documents', 'RERA Compliant', 'Compound Wall'].map(a => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'clamp(12px, 1.3vw, 14px)', color: 'rgba(248,246,240,0.7)' }}>
                <CheckCircle size={12} style={{ color: '#C9A84C', flexShrink: 0 }} />{a}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', padding: 'clamp(20px, 3.5vw, 32px)', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 3vw, 28px)', color: '#F8F6F0', marginBottom: '4px' }}>{available} Plots Available</div>
            <div style={{ fontSize: '13px', color: 'rgba(248,246,240,0.5)' }}>Contact us for current pricing and booking</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <a href="tel:+918870800708" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3.5vw, 32px)', background: '#C9A84C', color: '#0a0818', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
              <Phone size={13} /> Call Now
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3.5vw, 32px)', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Enquire <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
