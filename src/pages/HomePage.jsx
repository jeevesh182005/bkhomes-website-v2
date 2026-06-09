import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Star, Building2, Hop as Home, Hammer, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { company, ongoingApartments, ongoingVillas, services } from '../data/projects';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Premium Project Card ──────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  ];
  const img = project.image || images[index % 4];

  return (
    <Link
      to={`/projects/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', position: 'relative',
        overflow: 'hidden', textDecoration: 'none',
        borderRadius: '2px',
        background: '#120f24',
        aspectRatio: '4/5',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5,4,14,0.95) 0%, rgba(5,4,14,0.4) 50%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', top: '16px', left: '16px',
        padding: '4px 12px',
        background: 'rgba(201,168,76,0.15)',
        border: '1px solid rgba(201,168,76,0.4)',
        fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: '6px',
      }}>
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0, animation: 'pulse 2s ease infinite' }} />
        Ongoing
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px',
      }}>
        <div style={{ fontSize: '9px', letterSpacing: '4px', color: '#C9A84C', marginBottom: '8px', textTransform: 'uppercase' }}>
          {project.type}
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '24px', fontWeight: 400, color: '#F8F6F0',
          marginBottom: '6px', lineHeight: 1.2,
        }}>{project.name}</h3>
        <div style={{ fontSize: '11px', color: 'rgba(248,246,240,0.5)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <MapPin size={10} />
          <span>{project.location?.split(',')[0]}</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.3s ease',
        }}>
          <span style={{
            fontSize: '10px', letterSpacing: '2px', color: '#C9A84C',
            textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            View Details <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Service Card ─────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
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
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(to right, #443199, #C9A84C)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform 0.5s ease',
      }} />
      <div style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '64px', fontWeight: 300,
        color: hovered ? 'rgba(68,49,153,0.5)' : 'rgba(68,49,153,0.25)',
        lineHeight: 1, marginBottom: '20px', transition: 'color 0.4s',
      }}>{service.number}</div>
      <div style={{ marginBottom: '18px', color: '#C9A84C' }}><Icon size={26} /></div>
      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400,
        marginBottom: '14px', color: '#F8F6F0',
      }}>{service.title}</h3>
      <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(248,246,240,0.5)' }}>{service.desc}</p>
    </div>
  );
}

// ── Testimonial Carousel ─────────────────────────────
const testimonials = [
  { name: 'Ramesh Kumar', project: 'BK Krisha Owner', text: 'BK Homes delivered our apartment exactly as promised. The quality of construction and transparency throughout the process was exceptional.', rating: 5 },
  { name: 'Priya Anand', project: 'BK Brindhavanam, 3BHK', text: 'From the first meeting, the team understood our vision. The preview they showed us matched perfectly with the final home.', rating: 5 },
  { name: 'Suresh & Family', project: 'Individual Villa, Tiruvallur', text: 'We built our dream home with BK Homes. End-to-end service, on-time delivery, and zero compromise on quality. Highly recommended.', rating: 5 },
  { name: 'Annamalai', project: 'BK Magizhagam, Tiruvallur', text: 'The team was always reachable, the workmanship is top notch, and they delivered on time. Will recommend to everyone.', rating: 5 },
  { name: 'Kavitha Raj', project: 'BK AMS, Tiruvallur', text: 'Booking with BK Homes was the best decision. Professional team, beautiful finishing, and great value for money.', rating: 5 },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent(p => (p + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, []);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.3 } }),
  };

  const t = testimonials[current];
  return (
    <div style={{ position: 'relative' }}>
      {/* Main card */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '280px',
        border: '1px solid rgba(201,168,76,0.15)',
        background: 'rgba(18,15,36,0.8)',
      }}>
        {/* Gold accent top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ padding: '52px 56px 48px' }}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '120px', lineHeight: 0.7,
              color: 'rgba(201,168,76,0.1)',
              marginBottom: '24px', userSelect: 'none',
            }}>"</div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px', fontStyle: 'italic',
              lineHeight: 1.7, color: 'rgba(248,246,240,0.85)',
              marginBottom: '36px',
            }}>{t.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #443199, #5a44c4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px', color: '#C9A84C',
                  flexShrink: 0,
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontSize: '16px', color: '#F8F6F0', fontWeight: 400 }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: '#C9A84C', marginTop: '4px', letterSpacing: '1px' }}>{t.project}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              style={{
                width: i === current ? '24px' : '8px', height: '8px',
                borderRadius: '4px', border: 'none', cursor: 'pointer',
                background: i === current ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[{ icon: <ChevronLeft size={16} />, dir: -1 }, { icon: <ChevronRight size={16} />, dir: 1 }].map((btn, i) => (
            <button key={i} onClick={() => go(btn.dir)} style={{
              width: '40px', height: '40px',
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'none', color: '#C9A84C', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = '#C9A84C'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── HOMEPAGE ─────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const projectsRef = useReveal();

  const allOngoing = [...ongoingApartments, ...ongoingVillas];

  const marqueeItems = [
    'Individual Villas', 'Luxury Apartments', 'Custom Homes',
    'Real Estate', 'Premium Finishes', 'Contract Work',
    'Joint Venture', 'Quality First', 'Tiruvallur',
  ];

  return (
    <main style={{ minHeight: '100vh' }}>

      {/* ══ HERO ══ */}
      <section ref={heroRef} style={{ height: '100vh', minHeight: '700px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <motion.div style={{ y: heroY, position: 'absolute', inset: '-20%', zIndex: 1 }}>
          <div style={{
            width: '100%', height: '100%',
            backgroundImage: 'url(/office.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center 30%',
          }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(135deg, rgba(10,8,24,0.92) 0%, rgba(68,49,153,0.4) 60%, rgba(10,8,24,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, background: 'linear-gradient(to right, rgba(10,8,24,0.95) 35%, rgba(10,8,24,0.2) 100%)' }} />
        <div style={{ position: 'absolute', top: '-100px', right: '18%', width: '1px', height: '120vh', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.35), transparent)', transform: 'rotate(12deg)', zIndex: 4 }} />
        <div style={{ position: 'absolute', top: '-100px', right: '22%', width: '1px', height: '120vh', background: 'linear-gradient(to bottom, transparent, rgba(68,49,153,0.25), transparent)', transform: 'rotate(12deg)', zIndex: 4 }} />

        <motion.div style={{ position: 'relative', zIndex: 5, padding: '0 80px', maxWidth: '900px', opacity: heroOpacity }}
          className="hero-content"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}
          >
            <div style={{ width: '50px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', fontStyle: 'italic', color: '#C9A84C', letterSpacing: '2px' }}>
              {company.tamilQuote}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(52px, 7vw, 94px)', fontWeight: 300, lineHeight: 1.05, marginBottom: '28px' }}
          >
            Building Dreams<br />Into <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Reality</em>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}
          >
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.4)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(248,246,240,0.5)', textTransform: 'uppercase' }}>
              Premium Homes · Construction · Real Estate · Tiruvallur
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
            style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(248,246,240,0.6)', maxWidth: '500px', marginBottom: '52px' }}
          >
            Villas, apartments, and custom homes crafted with architectural excellence since 2011.
            Explore our premium ongoing projects in Tiruvallur.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/projects" className="btn-gold">
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-outline">
              <span>Book a Visit</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{ position: 'absolute', right: '80px', bottom: '100px', zIndex: 5, display: 'flex', flexDirection: 'column', gap: '32px' }}
          className="hero-stats"
        >
          {company.stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: 300, color: '#C9A84C', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(248,246,240,0.45)', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #C9A84C, transparent)', animation: 'pulse 2s ease infinite' }} />
        </motion.div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div style={{ background: '#C9A84C', padding: '14px 0', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ display: 'flex', width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '0 28px', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#0a0818', fontWeight: 500, whiteSpace: 'nowrap' }}>
              <span>{item}</span>
              <span style={{ width: '4px', height: '4px', background: '#0a0818', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#120f24', position: 'relative', overflow: 'hidden' }} className="about-section">
        <div style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Cormorant Garamond, serif', fontSize: '280px', fontWeight: 700, color: 'rgba(68,49,153,0.06)', lineHeight: 1, pointerEvents: 'none', zIndex: 0, userSelect: 'none' }}>BK</div>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', zIndex: 1 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/office.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(68,49,153,0.4), transparent)' }} />
          <div style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: '#C9A84C', color: '#0a0818', padding: '24px 28px', fontFamily: 'Cormorant Garamond, serif' }}>
            <div style={{ fontSize: '48px', fontWeight: 600, lineHeight: 1 }}>14+</div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Years of Excellence</div>
          </div>
        </div>
        <div ref={aboutRef} className="reveal" style={{ padding: '100px 80px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Story</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '28px' }}>
            Where Vision Meets<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Craftsmanship</em>
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(248,246,240,0.65)', marginBottom: '32px' }}>
            BK HOMES is an established construction company founded in 2011 by <strong style={{ color: '#F8F6F0', fontWeight: 400 }}>K. Mohan Kumar</strong>,
            managed by a team of experienced professional engineers. With our office in Tiruvallur,
            we have delivered landmark residential and commercial projects, built on the values of quality, trust, and on-time delivery.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
            {['Premium Construction', 'Timely Delivery', 'Quality First', 'Transparent Process'].map(feat => (
              <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(68,49,153,0.06)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
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

      {/* ══ STATS BAR ══ */}
      <section style={{ background: 'linear-gradient(135deg, #443199 0%, #2e2070 100%)', padding: '60px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="stats-grid">
          {company.stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '64px', fontWeight: 300, color: '#C9A84C', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '14px', color: '#F8F6F0', marginTop: '8px', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ONGOING PROJECTS ══ */}
      <section style={{ background: '#0a0818', padding: '120px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Current Work</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 300, lineHeight: 1.15 }}>
              Ongoing <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Projects</em>
            </h2>
          </div>
          <Link to="/projects" className="btn-outline" style={{ padding: '10px 24px', fontSize: '10px' }}>
            <span>View All</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Project names list */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '60px' }} className="project-names-grid">
          {[
            { label: 'Apartments', projects: ongoingApartments },
            { label: 'Individual Villas', projects: ongoingVillas },
          ].map((group, gi) => (
            <div key={gi} style={{ border: '1px solid rgba(201,168,76,0.12)', background: 'rgba(18,15,36,0.6)', padding: '28px 32px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px' }}>{group.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.projects.map((p, i) => (
                  <Link key={p.id} to={`/projects/${p.id}`} style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid rgba(248,246,240,0.05)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0, animation: 'pulse 2s ease infinite' }} />
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#F8F6F0', flex: 1 }}>{p.name}</span>
                    <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase' }}>{p.location?.split(',')[0]}</span>
                    <ArrowRight size={12} style={{ color: '#C9A84C' }} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured cards grid */}
        <div ref={projectsRef} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} >
          {allOngoing.slice(0, 3).map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} />
          ))}
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={{ background: 'linear-gradient(135deg, #120f24, #0a0818)', padding: '120px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: 'radial-gradient(ellipse at right center, rgba(68,49,153,0.12), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>What We Do</span>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '60px' }}>
          Built for Every <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Vision</em>
        </h2>
        <div ref={servicesRef} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} >
          {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ background: '#0a0818', padding: '120px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }} className="testimonials-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Client Stories</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, marginBottom: '24px', lineHeight: 1.1 }}>
              Trusted by <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Homeowners</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(248,246,240,0.5)', lineHeight: 1.8, marginBottom: '32px' }}>
              Hundreds of families have trusted BK Homes to build their dream homes. Here's what some of them have to say.
            </p>
            <Link to="/contact" className="btn-outline">
              <span>Share Your Story</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background: '#120f24', padding: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(201,168,76,0.1)', gap: '40px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 300, marginBottom: '12px' }}>
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
        @keyframes pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
      `}</style>
    </main>
  );
}
