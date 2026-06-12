import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#07050f', borderTop: '1px solid rgba(201,168,76,0.1)', color: '#F8F6F0' }}>
      <div style={{ padding: 'clamp(48px, 8vh, 80px) clamp(16px, 5vw, 80px) clamp(32px, 4vh, 48px)' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(32px, 4vw, 60px)',
          marginBottom: 'clamp(40px, 6vh, 64px)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: '#C9A84C', marginBottom: '12px' }}>BK HOMES</div>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', marginBottom: '16px' }}>Building Dreams Since 2011</div>
            <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.5)', lineHeight: 1.8, maxWidth: '260px' }}>
              Premium residential and commercial construction in Tiruvallur. Quality craftsmanship, on-time delivery.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a href="#" aria-label="Social" style={{ width: '36px', height: '36px', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', transition: 'border-color 0.2s' }}>
                <Share2 size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px' }}>Quick Links</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'Projects', to: '/projects' },
                { label: 'About Us', to: '/about' },
                { label: 'Real Estate', to: '/real-estate' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <Link key={to} to={to} style={{
                  fontSize: '13px', color: 'rgba(248,246,240,0.5)',
                  transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,246,240,0.5)'; }}
                >
                  <span style={{ width: '16px', height: '1px', background: 'rgba(201,168,76,0.4)', flexShrink: 0 }} />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px' }}>Our Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Apartment Development', 'Individual Villas', 'Contract Work', 'Commercial Projects', 'Real Estate / Plots'].map(s => (
                <span key={s} style={{ fontSize: '13px', color: 'rgba(248,246,240,0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(201,168,76,0.5)', flexShrink: 0 }} />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="tel:+918870800708" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: 'rgba(248,246,240,0.6)', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,246,240,0.6)'; }}
              >
                <Phone size={13} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                88708 00708
              </a>
              <a href="mailto:bkhomes2011@gmail.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: 'rgba(248,246,240,0.6)', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,246,240,0.6)'; }}
              >
                <Mail size={13} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                bkhomes2011@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: 'rgba(248,246,240,0.6)' }}>
                <MapPin size={13} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                <span>Tiruvallur, Tamil Nadu — 602 001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(248,246,240,0.06)',
          paddingTop: '28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} BK Homes. All rights reserved.
          </span>
          <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px' }}>
            TNRERA Registered
          </span>
        </div>
      </div>
    </footer>
  );
}
