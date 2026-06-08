import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

// Social icon SVGs (lucide doesn't include brand icons)
const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YtIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);
import { company } from '../data/projects';

export default function Footer() {
  return (
    <footer style={{
      background: '#05040e',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '80px 60px 40px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
        gap: '60px',
        marginBottom: '60px',
        maxWidth: '1400px', margin: '0 auto 60px',
      }}>
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
            <img src="/logo.png" alt="BK Homes" style={{ height: '50px' }} />
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#F8F6F0', letterSpacing: '3px' }}>BK HOMES</div>
              <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C' }}>TIRUVALLUR</div>
            </div>
          </Link>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '16px', fontStyle: 'italic',
            color: '#C9A84C', marginBottom: '12px',
          }}>
            "{company.tamilQuote}"
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(248,246,240,0.4)', letterSpacing: '1px', marginBottom: '24px' }}>
            {company.tamilQuoteEng}
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(248,246,240,0.5)', maxWidth: '300px' }}>
            Building dreams into reality since 2011. Premium homes, apartments & real estate across Tiruvallur and Chennai.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            {[
              { icon: <IgIcon />, href: '#' },
              { icon: <FbIcon />, href: '#' },
              { icon: <YtIcon />, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{
                width: '38px', height: '38px',
                border: '1px solid rgba(248,246,240,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(248,246,240,0.4)', textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,246,240,0.1)'; e.currentTarget.style.color = 'rgba(248,246,240,0.4)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '24px' }}>
            Quick Links
          </h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {['Projects', 'Real Estate', 'About Us', 'Contact'].map(l => (
              <li key={l}>
                <Link
                  to={`/${l.toLowerCase().replace(' ', '-')}`}
                  style={{ fontSize: '14px', color: 'rgba(248,246,240,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = '#F8F6F0'}
                  onMouseLeave={e => e.target.style.color = 'rgba(248,246,240,0.5)'}
                >{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '24px' }}>
            Our Services
          </h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {['Apartment Buildings', 'Individual Villas', 'Custom Homes', 'Real Estate', 'Contract Work', 'Joint Venture'].map(s => (
              <li key={s}>
                <span style={{ fontSize: '14px', color: 'rgba(248,246,240,0.5)' }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '24px' }}>
            Contact Us
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <a href="tel:8870800708" style={{ display: 'flex', gap: '12px', textDecoration: 'none' }}>
              <Phone size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(248,246,240,0.7)' }}>88708 00708</div>
                <div style={{ fontSize: '13px', color: 'rgba(248,246,240,0.4)' }}>75100 20044</div>
              </div>
            </a>
            <a href="mailto:bkhomes2011@gmail.com" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', textDecoration: 'none' }}>
              <Mail size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'rgba(248,246,240,0.7)' }}>bkhomes2011@gmail.com</span>
            </a>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <MapPin size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#C9A84C', marginBottom: '4px' }}>CORPORATE</div>
                <div style={{ fontSize: '13px', color: 'rgba(248,246,240,0.6)', lineHeight: 1.7 }}>
                  Plot No. 8C, Vivekananda Salai,<br />Rajajipuram, Tiruvallur – 602 001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(248,246,240,0.06)',
        paddingTop: '32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        <p style={{ fontSize: '12px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px' }}>
          © 2025 BK Homes. All rights reserved. | Think Home, Think BK Homes
        </p>
        <p style={{ fontSize: '12px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px' }}>
          MD: K. Mohan Kumar | Est. 2011
        </p>
      </div>
    </footer>
  );
}
