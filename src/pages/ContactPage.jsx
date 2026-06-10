import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CircleCheck as CheckCircle, Navigation } from 'lucide-react';
import { company } from '../data/projects';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const enquiryTypes = ['Individual Villa', 'Apartment', 'Custom Home', 'Real Estate', 'Contract Work', 'Joint Venture', 'General Enquiry'];

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '100px' }}>

      {/* Hero */}
      <section style={{
        padding: '80px 80px 100px',
        background: 'linear-gradient(135deg, #120f24, #0a0818)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%',
          background: 'radial-gradient(ellipse at right center, rgba(68,49,153,0.12), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
              Reach Us
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(44px, 6vw, 80px)',
            fontWeight: 300, lineHeight: 1.1, marginBottom: '24px',
          }}>
            Let's Build<br />
            <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Together</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(248,246,240,0.55)', maxWidth: '500px', lineHeight: 1.8 }}>
            Whether you're planning a new home, looking to invest, or exploring our projects — our team is ready to guide you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section style={{ padding: '80px 80px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: '60px', maxWidth: '1400px', margin: '0 auto' }} className="contact-grid">

          {/* Left — Form */}
          <div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '36px', fontWeight: 300,
              marginBottom: '8px', color: '#F8F6F0',
            }}>Send an Enquiry</h2>
            <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.4)', marginBottom: '48px', letterSpacing: '1px' }}>
              We respond within 24 hours
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '60px 48px', textAlign: 'center',
                  border: '1px solid rgba(201,168,76,0.3)',
                  background: 'rgba(201,168,76,0.04)',
                }}
              >
                <CheckCircle size={48} style={{ color: '#C9A84C', marginBottom: '20px' }} />
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '32px', fontWeight: 300,
                  color: '#F8F6F0', marginBottom: '12px',
                }}>Enquiry Received!</h3>
                <p style={{ fontSize: '15px', color: 'rgba(248,246,240,0.6)', lineHeight: 1.8, marginBottom: '32px' }}>
                  Thank you, <strong style={{ color: '#F8F6F0', fontWeight: 400 }}>{form.name}</strong>. Our team will contact you at <strong style={{ color: '#C9A84C' }}>{form.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', type: '', message: '' }); }}
                  className="btn-outline"
                >
                  <span>Send Another Enquiry</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-fields-grid">
                  <FormField label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  <FormField label="Phone Number *" name="phone" value={form.phone} onChange={handleChange} placeholder="88708 XXXXX" type="tel" required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <FormField label="Email Address" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" />
                </div>

                {/* Enquiry type */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                    Enquiry Type
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {enquiryTypes.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, type: t }))}
                        style={{
                          padding: '8px 18px',
                          background: form.type === t ? '#443199' : 'none',
                          border: `1px solid ${form.type === t ? '#443199' : 'rgba(248,246,240,0.1)'}`,
                          color: form.type === t ? '#F8F6F0' : 'rgba(248,246,240,0.45)',
                          fontSize: '12px', letterSpacing: '1px', cursor: 'pointer',
                          transition: 'all 0.3s', fontFamily: 'Outfit, sans-serif',
                        }}
                      >{t}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '36px' }}>
                  <label style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements — plot size, budget, location preference..."
                    rows={5}
                    style={{
                      width: '100%', padding: '16px 20px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(248,246,240,0.1)',
                      color: '#F8F6F0', fontSize: '14px',
                      fontFamily: 'Outfit, sans-serif', lineHeight: 1.7,
                      outline: 'none', resize: 'vertical',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(248,246,240,0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  disabled={sending}
                  style={{ width: '100%', justifyContent: 'center', padding: '18px', fontSize: '12px' }}
                >
                  {sending ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        width: '14px', height: '14px', borderRadius: '50%',
                        border: '2px solid rgba(10,8,24,0.3)', borderTopColor: '#0a0818',
                        animation: 'spin 0.7s linear infinite',
                        display: 'inline-block',
                      }} />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Quick contact cards */}
            {[
              {
                icon: <Phone size={20} />,
                label: 'Call Us',
                primary: '88708 00708',
                secondary: 'Direct line — immediate response',
                href: 'tel:8870800708',
                cta: 'Call Now',
              },
              {
                icon: <MessageCircle size={20} />,
                label: 'WhatsApp',
                primary: '88708 00708',
                secondary: 'Quick response guaranteed',
                href: `https://wa.me/918870800708?text=Hello%20BK%20Homes%2C%20I%20am%20interested%20in%20your%20projects.`,
                cta: 'Chat on WhatsApp',
                green: true,
              },
              {
                icon: <Mail size={20} />,
                label: 'Email Us',
                primary: 'bkhomes2011@gmail.com',
                secondary: 'Response within 24 hours',
                href: 'mailto:bkhomes2011@gmail.com',
                cta: 'Send Email',
              },
            ].map((c, i) => (
              <div key={i} style={{
                padding: '28px 28px',
                border: '1px solid rgba(201,168,76,0.12)',
                background: '#120f24',
                display: 'flex', gap: '20px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  background: c.green ? 'rgba(22,163,74,0.12)' : 'rgba(201,168,76,0.1)',
                  border: `1px solid ${c.green ? 'rgba(22,163,74,0.3)' : 'rgba(201,168,76,0.25)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c.green ? '#4ade80' : '#C9A84C',
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: '16px', color: '#F8F6F0', marginBottom: '4px', fontFamily: 'Cormorant Garamond, serif' }}>
                    {c.primary}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(248,246,240,0.4)', marginBottom: '14px' }}>
                    {c.secondary}
                  </div>
                  <a href={c.href} target={c.green ? '_blank' : undefined} rel="noreferrer"
                    style={{
                      fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                      color: c.green ? '#4ade80' : '#C9A84C',
                      textDecoration: 'none',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}
                  >
                    {c.cta} →
                  </a>
                </div>
              </div>
            ))}

            {/* Office addresses */}
            {Object.values(company.offices).map((office, i) => (
              <div key={i} style={{
                padding: '28px',
                border: '1px solid rgba(201,168,76,0.12)',
                background: '#120f24',
              }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {office.label}
                    </div>
                    <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.65)', lineHeight: 1.75, marginBottom: '12px' }}>
                      {office.address}
                    </p>
                    <a
                      href="https://www.google.com/maps/search/BK+Homes/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '11px', letterSpacing: '2px', color: '#C9A84C',
                        textDecoration: 'none', textTransform: 'uppercase',
                        border: '1px solid rgba(201,168,76,0.3)',
                        padding: '8px 16px',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = '#C9A84C'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
                    >
                      <Navigation size={12} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div style={{
              padding: '24px 28px',
              border: '1px solid rgba(201,168,76,0.08)',
              background: 'rgba(201,168,76,0.03)',
              display: 'flex', gap: '14px', alignItems: 'flex-start',
            }}>
              <Clock size={16} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Office Hours
                </div>
                {[
                  { day: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
                  { day: 'Sunday', time: 'By appointment' },
                ].map((h, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', gap: '24px',
                    fontSize: '13px', marginBottom: '6px',
                  }}>
                    <span style={{ color: 'rgba(248,246,240,0.5)' }}>{h.day}</span>
                    <span style={{ color: '#F8F6F0' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: rgba(248,246,240,0.2); }
      `}</style>
    </main>
  );
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div>
      <label style={{
        fontSize: '10px', letterSpacing: '3px',
        color: '#C9A84C', textTransform: 'uppercase',
        display: 'block', marginBottom: '10px',
      }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%', padding: '14px 18px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(248,246,240,0.1)',
          color: '#F8F6F0', fontSize: '14px',
          fontFamily: 'Outfit, sans-serif',
          outline: 'none', transition: 'border-color 0.3s',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
        onBlur={e => e.target.style.borderColor = 'rgba(248,246,240,0.1)'}
      />
    </div>
  );
}
