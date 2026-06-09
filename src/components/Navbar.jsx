import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Projects', path: '/projects' },
  { label: 'Real Estate', path: '/real-estate' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '10px 48px' : '20px 48px',
          background: scrolled
            ? 'rgba(10,8,24,0.97)'
            : 'linear-gradient(to bottom, rgba(10,8,24,0.9), transparent)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
        >
          <img src="/logo.png" alt="BK Homes" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px', fontWeight: 600,
              color: '#F8F6F0', letterSpacing: '3px'
            }}>BK HOMES</span>
            <span style={{
              fontSize: '9px', letterSpacing: '4px',
              color: '#C9A84C', textTransform: 'uppercase', marginTop: '2px'
            }}>Premium · Construction · Real Estate</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '12px', letterSpacing: '2.5px',
                    textTransform: 'uppercase', fontWeight: 400,
                    color: location.pathname === link.path ? '#C9A84C' : 'rgba(248,246,240,0.65)',
                    transition: 'color 0.3s',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  onMouseEnter={e => e.target.style.color = '#C9A84C'}
                  onMouseLeave={e => e.target.style.color = location.pathname === link.path ? '#C9A84C' : 'rgba(248,246,240,0.65)'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:8870800708"
            className="btn-gold"
            style={{ padding: '11px 24px', fontSize: '10px' }}
          >
            <Phone size={13} />
            <span>88708 00708</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none',
            color: '#C9A84C', cursor: 'pointer',
            display: 'none',
            padding: '8px',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(10,8,24,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '32px',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'none', border: 'none', color: '#C9A84C', cursor: 'pointer',
              }}
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={link.path}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '36px', fontWeight: 300,
                    color: location.pathname === link.path ? '#C9A84C' : '#F8F6F0',
                    textDecoration: 'none',
                    letterSpacing: '4px',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:8870800708"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-gold"
              style={{ marginTop: '20px' }}
            >
              <Phone size={14} />
              <span>Call Us Now</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
