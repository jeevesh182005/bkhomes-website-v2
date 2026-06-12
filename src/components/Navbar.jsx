import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Real Estate', to: '/real-estate' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled || open ? 'rgba(10,8,24,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(16px, 5vw, 80px)',
          height: '72px',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '40px', height: '40px',
              border: '1px solid rgba(201,168,76,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 500,
              color: '#C9A84C',
            }}>B</div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 500, color: '#F8F6F0', letterSpacing: '1px', lineHeight: 1.1 }}>BK HOMES</div>
              <div style={{ fontSize: '8px', letterSpacing: '3px', color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase', lineHeight: 1 }}>Since 2011</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="nav-links">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} style={{
                padding: '8px 16px',
                fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
                color: isActive(to) ? '#C9A84C' : 'rgba(248,246,240,0.65)',
                borderBottom: isActive(to) ? '2px solid #C9A84C' : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
                fontFamily: 'Outfit, sans-serif',
              }}
                onMouseEnter={e => { if (!isActive(to)) e.currentTarget.style.color = '#F8F6F0'; }}
                onMouseLeave={e => { if (!isActive(to)) e.currentTarget.style.color = 'rgba(248,246,240,0.65)'; }}
              >{label}</Link>
            ))}
            <a href="tel:+918870800708" style={{
              marginLeft: '12px', padding: '8px 20px',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.4)',
              fontSize: '10px', letterSpacing: '2px',
              color: '#C9A84C', display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
            >
              <Phone size={11} /> 88708 00708
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: '1px solid rgba(201,168,76,0.3)',
              color: '#C9A84C', padding: '8px',
              display: 'none', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0,
              background: 'rgba(10,8,24,0.98)', backdropFilter: 'blur(20px)',
              zIndex: 999, overflowY: 'auto',
              display: 'flex', flexDirection: 'column',
              padding: '32px clamp(16px, 5vw, 40px)',
              gap: '4px',
            }}
          >
            {NAV_LINKS.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={to} style={{
                  display: 'block', padding: '18px 0',
                  borderBottom: '1px solid rgba(248,246,240,0.06)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(28px, 7vw, 40px)', fontWeight: 300,
                  color: isActive(to) ? '#C9A84C' : '#F8F6F0',
                }}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ marginTop: '32px' }}>
              <a href="tel:+918870800708" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 28px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.4)',
                fontSize: '13px', letterSpacing: '2px', color: '#C9A84C',
              }}>
                <Phone size={14} /> 88708 00708
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
