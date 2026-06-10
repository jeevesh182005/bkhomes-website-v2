import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import officeImg from '../assets/Office.jpg';
import { ArrowRight, Award, Users, Building2, MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { company, completedProjects } from '../data/projects';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const timeline = [
  { year: '2011', event: 'BK Homes founded in Tiruvallur', detail: 'Started with a vision to deliver quality homes at honest prices, rooted in the values of our agriculture-based parent company.' },
  { year: '2013', event: 'First apartment complex delivered', detail: 'Saraswathi Manor, Medavakkam — our first multi-unit residential project, setting the quality benchmark.' },
  { year: '2016', event: 'Expanded to Chennai markets', detail: 'Projects launched in Medavakkam, Perambur, Villivakkam, and Korattur. Growing reputation for quality and trust.' },
  { year: '2019', event: 'Crossed 30+ completed projects', detail: 'Delivered over 30 individual homes and apartments. Reputation for on-time delivery and premium finishes grows.' },
  { year: '2022', event: 'Launched Real Estate division', detail: 'Expanded into real estate services — plots, ready-to-move properties, and investment advisory.' },
  { year: '2026', event: 'BK AMS, BK Surya, BK Chandra ongoing', detail: 'Four premium apartment projects and two individual villas under construction. Mohan Garden gated community launched.' },
];

export default function AboutPage() {
  const missionRef = useReveal();
  const timelineRef = useReveal();
  const teamRef = useReveal();

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '100px' }}>

      {/* ── Hero ── */}
      <section style={{
        padding: '80px 80px 100px',
        background: 'linear-gradient(135deg, #120f24, #0a0818)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-100px', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '300px', fontWeight: 700,
          color: 'rgba(68,49,153,0.05)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>BK</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
              Our Story
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(44px, 6vw, 80px)',
            fontWeight: 300, lineHeight: 1.1, marginBottom: '28px',
          }}>
            About <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>BK Homes</em>
          </h1>
          <p style={{
            fontSize: '17px', lineHeight: 1.9,
            color: 'rgba(248,246,240,0.6)',
            maxWidth: '640px',
          }}>
            {company.about}
          </p>
        </motion.div>

        {/* Tamil quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            marginTop: '60px',
            padding: '36px 48px',
            borderLeft: '3px solid #C9A84C',
            background: 'rgba(201,168,76,0.04)',
            maxWidth: '600px',
          }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '26px', fontStyle: 'italic',
            color: '#C9A84C', marginBottom: '12px', lineHeight: 1.5,
          }}>
            "{company.tamilQuote}"
          </p>
          <p style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(248,246,240,0.4)', textTransform: 'uppercase' }}>
            {company.tamilQuoteEng} — Our founding principle
          </p>
        </motion.div>
      </section>

      {/* ── Mission / Vision / Quality ── */}
      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px', background: '#05040e',
      }} className="mvq-grid">
        {[
          { icon: <Award size={28} />, label: 'Our Mission', text: company.mission },
          { icon: <Building2 size={28} />, label: 'Our Vision', text: company.vision },
          { icon: <Users size={28} />, label: 'Quality Policy', text: company.quality },
        ].map((item, i) => (
          <div
            key={i}
            ref={i === 0 ? missionRef : undefined}
            className={i === 0 ? 'reveal' : ''}
            style={{
              padding: '60px 48px',
              background: '#0a0818',
              borderTop: '2px solid transparent',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.4s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderTopColor = '#C9A84C'}
            onMouseLeave={e => e.currentTarget.style.borderTopColor = 'transparent'}
          >
            <div style={{ color: '#C9A84C', marginBottom: '24px' }}>{item.icon}</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '28px', fontWeight: 400,
              marginBottom: '20px', color: '#F8F6F0',
            }}>{item.label}</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(248,246,240,0.6)' }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* ── MD Profile ── */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: '#120f24',
      }} className="md-section">
        {/* Photo side */}
        <div style={{
          position: 'relative', overflow: 'hidden', minHeight: '550px',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${officeImg})`,
            backgroundSize: 'cover', backgroundPosition: 'center top',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(10,8,24,0.6), rgba(68,49,153,0.3))',
          }} />

          {/* Office label */}
          <div style={{
            position: 'absolute', bottom: '32px', left: '32px',
            background: 'rgba(10,8,24,0.9)',
            border: '1px solid rgba(201,168,76,0.2)',
            padding: '16px 20px',
          }}>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', marginBottom: '4px', textTransform: 'uppercase' }}>
              Corporate Office
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(248,246,240,0.7)' }}>
              Tiruvallur — Est. 2011
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '80px 70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="md-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
              Leadership
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 300, lineHeight: 1.2, marginBottom: '12px',
          }}>
            <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{company.md}</em>
          </h2>
          <p style={{
            fontSize: '12px', letterSpacing: '3px',
            color: 'rgba(248,246,240,0.4)', textTransform: 'uppercase',
            marginBottom: '32px',
          }}>
            Managing Director, BK Homes
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(248,246,240,0.65)', marginBottom: '24px' }}>
            Under the visionary leadership of <strong style={{ color: '#F8F6F0', fontWeight: 400 }}>K. Mohan Kumar</strong>, 
            BK Homes has grown from a single project in 2011 to one of Tiruvallur's most trusted construction brands. 
            His philosophy of <em style={{ color: 'rgba(201,168,76,0.8)' }}>"delivering what we promise"</em> has 
            shaped every aspect of the company.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(248,246,240,0.65)', marginBottom: '40px' }}>
            With a team of experienced professional engineers and architects, BK Homes continues to 
            set benchmarks in quality construction, timely delivery, and client satisfaction across Tamil Nadu.
          </p>

          {/* Promises */}
          {company.promise.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '12px 0',
              borderBottom: '1px solid rgba(248,246,240,0.06)',
            }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontSize: '12px', color: '#C9A84C' }}>✓</span>
              </div>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '17px', fontStyle: 'italic',
                color: 'rgba(248,246,240,0.8)',
              }}>"{p}"</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: '120px 80px', background: '#0a0818', position: 'relative', overflow: 'hidden' }} className="timeline-section">
        {/* Decorative background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', position: 'relative' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
            Our Journey
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 60px)',
          fontWeight: 300, marginBottom: '70px', position: 'relative',
        }}>
          14 Years of <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Excellence</em>
        </h2>

        <div ref={timelineRef} className="reveal timeline-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Center vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.08))',
            transform: 'translateX(-50%)',
          }} />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            const isCurrent = item.year === '2026';
            return (
              <div key={i} className="timeline-item" style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: '48px',
                position: 'relative',
                paddingLeft: isLeft ? '0' : '52%',
                paddingRight: isLeft ? '52%' : '0',
              }}>
                {/* Center dot */}
                <div style={{
                  position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                  width: isCurrent ? '22px' : '16px',
                  height: isCurrent ? '22px' : '16px',
                  borderRadius: '50%',
                  background: isCurrent ? '#C9A84C' : '#0a0818',
                  border: `2px solid #C9A84C`,
                  zIndex: 2,
                  boxShadow: isCurrent
                    ? '0 0 0 4px rgba(201,168,76,0.2), 0 0 30px rgba(201,168,76,0.6)'
                    : '0 0 20px rgba(201,168,76,0.3)',
                  top: '8px',
                  animation: isCurrent ? 'dotPulse 2s ease-in-out infinite' : undefined,
                }} />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{
                    padding: '28px 32px',
                    border: `1px solid ${isCurrent ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.12)'}`,
                    background: isCurrent ? 'rgba(201,168,76,0.05)' : 'rgba(10,8,24,0.6)',
                    position: 'relative',
                    maxWidth: '420px',
                    width: '100%',
                    animation: isCurrent ? 'cardGlow 2.5s ease-in-out infinite' : undefined,
                    overflow: 'hidden',
                  }}
                >
                  {isCurrent && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                      background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                    }} />
                  )}
                  {/* Year badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '4px 16px',
                    background: isCurrent ? 'rgba(201,168,76,0.18)' : 'rgba(201,168,76,0.1)',
                    border: `1px solid ${isCurrent ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.3)'}`,
                    fontSize: '12px', letterSpacing: '3px',
                    color: '#C9A84C',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}>
                    {isCurrent && (
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: '#C9A84C',
                        animation: 'pulse 1.5s ease-in-out infinite',
                        flexShrink: 0,
                      }} />
                    )}
                    {item.year}
                    {isCurrent && (
                      <span style={{ fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', opacity: 0.8 }}>NOW</span>
                    )}
                  </div>
                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px', fontWeight: 400,
                    color: isCurrent ? '#F8F6F0' : '#F8F6F0', marginBottom: '8px',
                  }}>{item.event}</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.5)', lineHeight: 1.7 }}>
                    {item.detail}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Offices ── */}
      <section style={{
        padding: '100px 80px',
        background: '#120f24',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }} className="offices-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
            Our Presence
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 300, marginBottom: '60px',
        }}>
          Our <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Office</em>
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {Object.values(company.offices).map((office, i) => (
            <div key={i} style={{
              padding: '48px 44px',
              border: '1px solid rgba(201,168,76,0.12)',
              background: 'rgba(10,8,24,0.6)',
              position: 'relative', overflow: 'hidden',
              maxWidth: '560px', width: '100%',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: '#C9A84C',
              }} />
              <div style={{
                fontSize: '10px', letterSpacing: '4px', color: '#C9A84C',
                textTransform: 'uppercase', marginBottom: '20px',
              }}>{office.label}</div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px', fontWeight: 400,
                color: '#F8F6F0', marginBottom: '20px',
              }}>{office.city}</h3>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '20px' }}>
                <MapPin size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.6)', lineHeight: 1.7 }}>
                  {office.address}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <a href="tel:8870800708" style={{
                  display: 'flex', gap: '10px', alignItems: 'center',
                  fontSize: '14px', color: 'rgba(248,246,240,0.7)', textDecoration: 'none',
                }}>
                  <Phone size={13} style={{ color: '#C9A84C' }} />
                  88708 00708
                </a>
                <a href="mailto:bkhomes2011@gmail.com" style={{
                  display: 'flex', gap: '10px', alignItems: 'center',
                  fontSize: '14px', color: 'rgba(248,246,240,0.7)', textDecoration: 'none',
                }}>
                  <Mail size={13} style={{ color: '#C9A84C' }} />
                  bkhomes2011@gmail.com
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/BK+Homes+Tiruvallur/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: '#C9A84C',
                  fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  background: 'transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = '#C9A84C'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; }}
              >
                <Navigation size={13} />
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(201,168,76,0.2), 0 0 30px rgba(201,168,76,0.6); }
          50% { box-shadow: 0 0 0 8px rgba(201,168,76,0.1), 0 0 50px rgba(201,168,76,0.9); }
        }
        @keyframes cardGlow {
          0%, 100% { box-shadow: none; border-color: rgba(201,168,76,0.4); }
          50% { box-shadow: 0 0 30px rgba(201,168,76,0.15), inset 0 0 60px rgba(201,168,76,0.04); border-color: rgba(201,168,76,0.7); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>

      {/* ── CTA ── */}
      <section style={{
        padding: '80px',
        background: 'linear-gradient(135deg, rgba(201,168,76,0.12), #0d0b1e)',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 4vw, 60px)',
            fontWeight: 300, marginBottom: '20px',
          }}>
            Ready to Start Your <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Project?</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(248,246,240,0.6)', marginBottom: '40px' }}>
            Talk to our team. We'll guide you from plot to possession.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/projects" className="btn-outline" style={{ borderColor: 'rgba(248,246,240,0.3)', color: '#F8F6F0' }}>
              <span>View Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
