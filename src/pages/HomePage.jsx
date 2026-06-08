import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Phone, MapPin, Star, Building2, Home, Hammer, Award, Check, Box } from 'lucide-react';
import { company, featuredProjects, services } from '../data/projects';

// ─── Animated counter ───────────────────────────────
function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(target);
        const step = num / (duration / 16);
        let cur = 0;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= num) { setCount(num); clearInterval(timer); }
          else setCount(Math.floor(cur));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Scroll reveal hook ──────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Project Card ────────────────────────────────────
function ProjectCard({ project, index, large = false }) {
  const [hovered, setHovered] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
  ];
  return (
    <Link
      to={`/projects/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', position: 'relative',
        overflow: 'hidden', cursor: 'pointer',
        textDecoration: 'none',
        aspectRatio: large ? '3/4' : '16/9',
        gridRow: large ? 'span 2' : 'auto',
        background: '#120f24',
      }}
    >
      {/* Image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${images[index % 4]})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }} />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,8,24,0.97) 0%, rgba(10,8,24,0.3) 55%, transparent 100%)',
      }} />
      {/* Status badge */}
      <div style={{
        position: 'absolute', top: '20px', left: '20px',
        padding: '5px 14px',
        background: project.status === 'Ongoing' ? 'rgba(201,168,76,0.15)' : 'rgba(68,49,153,0.2)',
        border: `1px solid ${project.status === 'Ongoing' ? 'rgba(201,168,76,0.4)' : 'rgba(68,49,153,0.5)'}`,
        fontSize: '9px', letterSpacing: '3px',
        color: project.status === 'Ongoing' ? '#C9A84C' : '#a48fec',
        textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: '6px',
      }}>
        {project.status === 'Ongoing' && (
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: '#C9A84C',
            animation: 'pulse 2s ease infinite',
          }} />
        )}
        {project.status}
      </div>
      {/* 3D Badge */}
      {project.has3D && (
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          padding: '5px 12px',
          background: 'rgba(68,49,153,0.3)',
          border: '1px solid rgba(90,68,196,0.5)',
          fontSize: '9px', letterSpacing: '2px', color: '#a48fec',
          textTransform: 'uppercase',
        }}>
          3D View
        </div>
      )}
      {/* Info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '32px',
      }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', marginBottom: '10px', textTransform: 'uppercase' }}>
          {project.type}
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: large ? '38px' : '26px',
          fontWeight: 400, color: '#F8F6F0',
          marginBottom: '8px', lineHeight: 1.2,
        }}>{project.name}</h3>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '12px', color: 'rgba(248,246,240,0.5)',
          marginBottom: '20px',
        }}>
          <MapPin size={11} />
          <span>{project.location?.split(',')[0]}, Tiruvallur</span>
        </div>
        {/* CTA row — appears on hover */}
        <div style={{
          display: 'flex', gap: '12px', alignItems: 'center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            padding: '9px 20px',
            background: 'rgba(68,49,153,0.8)',
            border: '1px solid rgba(90,68,196,0.6)',
            fontSize: '10px', letterSpacing: '2px',
            color: '#F8F6F0', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            View Details <ArrowRight size={12} />
          </div>
          {project.has3D && (
            <div style={{
              padding: '9px 16px',
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.4)',
              fontSize: '10px', letterSpacing: '2px',
              color: '#C9A84C', textTransform: 'uppercase',
            }}>
              3D Model
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── Service Card ────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const iconMap = { Building2, Home, Hammer, Award, Check, Box };
  const icons = [Building2, Home, Hammer, MapPin, Hammer, Award];
  const Icon = icons[index] || Building2;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '44px 36px',
        border: '1px solid rgba(248,246,240,0.06)',
        background: hovered ? 'rgba(68,49,153,0.08)' : 'rgba(255,255,255,0.02)',
        position: 'relative', overflow: 'hidden',
        transition: 'all 0.4s',
        cursor: 'default',
      }}
    >
      {/* Bottom bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(to right, #443199, #C9A84C)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.5s ease',
      }} />
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '64px', fontWeight: 300,
        color: hovered ? 'rgba(68,49,153,0.5)' : 'rgba(68,49,153,0.25)',
        lineHeight: 1, marginBottom: '20px',
        transition: 'color 0.4s',
      }}>{service.number}</div>
      <div style={{ marginBottom: '18px', color: '#C9A84C' }}>
        <Icon size={26} />
      </div>
      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '24px', fontWeight: 400,
        marginBottom: '14px', color: '#F8F6F0',
      }}>{service.title}</h3>
      <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(248,246,240,0.5)' }}>
        {service.desc}
      </p>
      <div style={{
        position: 'absolute', bottom: '28px', right: '28px',
        width: '36px', height: '36px',
        border: '1px solid rgba(248,246,240,0.1)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? '#C9A84C' : 'rgba(248,246,240,0.2)',
        borderColor: hovered ? '#C9A84C' : 'rgba(248,246,240,0.1)',
        transform: hovered ? 'rotate(45deg)' : 'none',
        transition: 'all 0.4s',
      }}>
        <ArrowRight size={14} />
      </div>
    </div>
  );
}

// ─── MAIN HOMEPAGE ───────────────────────────────────
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const statsRef = useReveal();
  const aboutRef = useReveal();
  const servicesRef = useReveal();

  const marqueeItems = [
    'Individual Villas', 'Luxury Apartments', 'Custom Homes',
    'Real Estate', '3D Walkthroughs', 'Premium Finishes',
    'Contract Work', 'Joint Venture', 'Quality First',
  ];

  // Testimonials
  const testimonials = [
    { name: 'Ramesh Kumar', project: 'BK Krisha Owner', text: 'BK Homes delivered our apartment exactly as promised. The quality of construction and transparency throughout the process was exceptional.', rating: 5 },
    { name: 'Priya Anand', project: 'BK Brindhavanam, 3BHK', text: 'From the first meeting, the team understood our vision. The 3D preview they showed us matched perfectly with the final home.', rating: 5 },
    { name: 'Suresh & Family', project: 'Individual Villa, Tiruvallur', text: 'We built our dream home with BK Homes. End-to-end service, on-time delivery, and zero compromise on quality. Highly recommended.', rating: 5 },
  ];

  return (
    <main style={{ minHeight: '100vh' }}>

      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} style={{ height: '100vh', minHeight: '700px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Parallax BG */}
        <motion.div style={{ y: heroY, position: 'absolute', inset: '-20%', zIndex: 1 }}>
          <div style={{
            width: '100%', height: '100%',
            backgroundImage: `url(/office.jpg)`,
            backgroundSize: 'cover', backgroundPosition: 'center 30%',
          }} />
        </motion.div>

        {/* Overlays */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(135deg, rgba(10,8,24,0.92) 0%, rgba(68,49,153,0.4) 60%, rgba(10,8,24,0.7) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'linear-gradient(to right, rgba(10,8,24,0.95) 35%, rgba(10,8,24,0.2) 100%)',
        }} />

        {/* Diagonal accent */}
        <div style={{
          position: 'absolute', top: '-100px', right: '18%',
          width: '1px', height: '120vh',
          background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.35), transparent)',
          transform: 'rotate(12deg)', zIndex: 4,
        }} />
        <div style={{
          position: 'absolute', top: '-100px', right: '22%',
          width: '1px', height: '120vh',
          background: 'linear-gradient(to bottom, transparent, rgba(68,49,153,0.25), transparent)',
          transform: 'rotate(12deg)', zIndex: 4,
        }} />

        {/* Content */}
        <motion.div style={{ position: 'relative', zIndex: 5, padding: '0 80px', maxWidth: '900px', opacity: heroOpacity }}>
          {/* Tamil quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}
          >
            <div style={{ width: '50px', height: '1px', background: '#C9A84C' }} />
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '14px', fontStyle: 'italic',
              color: '#C9A84C', letterSpacing: '2px',
            }}>
              {company.tamilQuote}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px, 7vw, 94px)',
              fontWeight: 300, lineHeight: 1.05,
              marginBottom: '28px',
            }}
          >
            Building Dreams<br />
            Into <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Reality</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}
          >
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.4)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(248,246,240,0.5)', textTransform: 'uppercase' }}>
              Premium Homes · Construction · Real Estate · Tiruvallur
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              fontSize: '16px', lineHeight: 1.85,
              color: 'rgba(248,246,240,0.6)',
              maxWidth: '500px', marginBottom: '52px',
            }}
          >
            Villas, apartments, and custom homes crafted with architectural excellence since 2011. 
            Explore our projects — now with immersive <strong style={{ color: 'rgba(248,246,240,0.85)', fontWeight: 400 }}>3D walkthroughs</strong> before the first brick is laid.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/projects" className="btn-gold">
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/projects/bk-ams" className="btn-outline">
              <span>View 3D Demo</span>
              <Box size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats — right side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{
            position: 'absolute', right: '80px', bottom: '100px', zIndex: 5,
            display: 'flex', flexDirection: 'column', gap: '32px',
          }}
        >
          {company.stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '48px', fontWeight: 300,
                color: '#C9A84C', lineHeight: 1,
              }}>{s.number}</div>
              <div style={{
                fontSize: '10px', letterSpacing: '3px',
                color: 'rgba(248,246,240,0.45)', textTransform: 'uppercase', marginTop: '4px',
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: 'absolute', bottom: '36px', left: '50%',
            transform: 'translateX(-50%)', zIndex: 5,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <div style={{
            width: '1px', height: '60px',
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
            animation: 'pulse 2s ease infinite',
          }} />
        </motion.div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <div style={{ background: '#C9A84C', padding: '14px 0', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '24px', padding: '0 28px',
              fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
              color: '#0a0818', fontWeight: 500, whiteSpace: 'nowrap',
            }}>
              <span>{item}</span>
              <span style={{ width: '4px', height: '4px', background: '#0a0818', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ ABOUT ══════════ */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '0', background: '#120f24',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Giant watermark */}
        <div style={{
          position: 'absolute', right: '-60px', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '280px', fontWeight: 700,
          color: 'rgba(68,49,153,0.06)',
          lineHeight: 1, pointerEvents: 'none', zIndex: 0, userSelect: 'none',
        }}>BK</div>

        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', zIndex: 1 }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/office.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(68,49,153,0.4), transparent)',
          }} />
          {/* Gold badge */}
          <div style={{
            position: 'absolute', bottom: '-24px', right: '-24px',
            background: '#C9A84C', color: '#0a0818',
            padding: '24px 28px',
            fontFamily: 'Cormorant Garamond, serif',
          }}>
            <div style={{ fontSize: '48px', fontWeight: 600, lineHeight: 1 }}>14+</div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
              Years of Excellence
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={aboutRef} className="reveal" style={{ padding: '100px 80px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Story</span>
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 300, lineHeight: 1.15,
            marginBottom: '28px',
          }}>
            Where Vision Meets<br />
            <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Craftsmanship</em>
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(248,246,240,0.65)', marginBottom: '32px' }}>
            BK HOMES is an established construction company founded in 2011 by <strong style={{ color: '#F8F6F0', fontWeight: 400 }}>K. Mohan Kumar</strong>, 
            managed by a team of experienced professional engineers. With offices in Tiruvallur and Chennai, 
            we have delivered <strong style={{ color: '#F8F6F0', fontWeight: 400 }}>26 apartment complexes</strong>, 
            <strong style={{ color: '#F8F6F0', fontWeight: 400 }}> 42 individual homes</strong>, and 
            <strong style={{ color: '#F8F6F0', fontWeight: 400 }}> 3 commercial buildings</strong> across Tamil Nadu.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
            {['Premium Construction', 'Timely Delivery', 'Quality First', 'Transparent Process'].map(feat => (
              <div key={feat} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '14px 18px',
                border: '1px solid rgba(201,168,76,0.15)',
                background: 'rgba(68,49,153,0.06)',
              }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#C9A84C', flexShrink: 0,
                }} />
                <span style={{ fontSize: '13px', color: 'rgba(248,246,240,0.75)' }}>{feat}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-outline">
            <span>Our Full Story</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #443199 0%, #2e2070 100%)',
        padding: '60px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div ref={statsRef} className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px', maxWidth: '1200px', margin: '0 auto',
          position: 'relative', zIndex: 1,
        }}>
          {[
            { num: '26', suffix: '+', label: 'Apartments Built', sub: 'Across Tiruvallur & Chennai' },
            { num: '42', suffix: '+', label: 'Individual Homes', sub: 'Delivered across Tamil Nadu' },
            { num: '14', suffix: '+', label: 'Years of Excellence', sub: 'Est. 2011' },
            { num: '3', suffix: '', label: 'Commercial Buildings', sub: 'In Tiruvallur' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '64px', fontWeight: 300,
                color: '#C9A84C', lineHeight: 1,
              }}>
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: '14px', color: '#F8F6F0', marginTop: '8px', letterSpacing: '1px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: 'rgba(248,246,240,0.45)', marginTop: '4px', letterSpacing: '1px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ FEATURED PROJECTS ══════════ */}
      <section style={{ background: '#0a0818', padding: '120px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Portfolio</span>
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 300, lineHeight: 1.15,
            }}>
              Featured <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Properties</em>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.45)', marginBottom: '16px' }}>
              Click any project to explore in 3D
            </p>
            <Link to="/projects" className="btn-outline" style={{ padding: '10px 24px', fontSize: '10px' }}>
              <span>View All Projects</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* 2-col grid: first card spans 2 rows */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '16px',
        }}>
          {featuredProjects.slice(0, 3).map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} large={i === 0} />
          ))}
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #120f24, #0a0818)',
        padding: '120px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '45%', height: '100%',
          background: 'radial-gradient(ellipse at right center, rgba(68,49,153,0.12), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>What We Do</span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 60px)',
          fontWeight: 300, lineHeight: 1.15,
          marginBottom: '60px',
        }}>
          Built for Every <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Vision</em>
        </h2>
        <div ref={servicesRef} className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}>
          {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>
      </section>

      {/* ══════════ 3D FEATURE CALLOUT ══════════ */}
      <section style={{
        background: '#443199',
        padding: '100px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: '-50%',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12), transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <span style={{ fontSize: '10px', letterSpacing: '6px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
            Exclusive Feature
          </span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(38px, 5vw, 72px)',
            fontWeight: 300, lineHeight: 1.1, marginBottom: '28px',
          }}>
            See Your Home in <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>3D</em><br />
            Before It's Built
          </h2>
          <p style={{
            fontSize: '16px', color: 'rgba(248,246,240,0.7)',
            lineHeight: 1.85, marginBottom: '48px',
          }}>
            Click on any ongoing project — BK AMS, BK Surya, or BK Skandha — and explore an interactive 3D model 
            built from the actual elevation and floor plan. Walk through every floor, inspect room layouts, 
            and visualize your future home before a single brick is laid.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects/bk-ams" className="btn-gold">
              <span>Try 3D on BK AMS</span>
              <Box size={14} />
            </Link>
            <Link to="/projects" className="btn-outline" style={{ borderColor: 'rgba(248,246,240,0.3)', color: '#F8F6F0' }}>
              <span>All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section style={{ background: '#0a0818', padding: '120px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Client Stories</span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 60px)',
          fontWeight: 300, marginBottom: '60px',
        }}>
          Trusted by <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Homeowners</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              border: '1px solid rgba(248,246,240,0.07)',
              background: 'rgba(255,255,255,0.02)',
              position: 'relative',
              transition: 'border-color 0.3s',
            }}>
              <div style={{
                display: 'flex', gap: '3px', marginBottom: '20px', color: '#C9A84C',
              }}>
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} fill="#C9A84C" />)}
              </div>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '17px', fontStyle: 'italic',
                lineHeight: 1.8, color: 'rgba(248,246,240,0.75)',
                marginBottom: '28px',
              }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #443199, #5a44c4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '18px', color: '#C9A84C',
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: '#F8F6F0' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: '#C9A84C', marginTop: '2px', letterSpacing: '1px' }}>{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA / CONTACT STRIP ══════════ */}
      <section style={{
        background: '#120f24',
        padding: '80px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        gap: '40px', flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 3vw, 48px)',
            fontWeight: 300, marginBottom: '12px',
          }}>
            Ready to Build Your <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Dream Home?</em>
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.5)', letterSpacing: '1px' }}>
            Call us · Visit our office · WhatsApp us — We're ready to listen.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:8870800708" className="btn-gold">
            <Phone size={14} />
            <span>88708 00708</span>
          </a>
          <Link to="/contact" className="btn-outline">
            <span>Get in Touch</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
