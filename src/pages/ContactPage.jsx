import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE = 'service_bkhomes';
const EMAILJS_TEMPLATE = 'template_bkhomes';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function ContactPage() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const whatsappLink = `https://wa.me/918870800708?text=Hi BK Homes, I'd like to enquire about your projects.`;

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 5vw, 80px)', background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Get in Touch</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
            Contact <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Us</em>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '480px', lineHeight: 1.8 }}>
            Reach out to discuss your project, enquire about properties, or simply say hello. We respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact info + form */}
      <section style={{ padding: 'clamp(48px, 7vh, 80px) clamp(16px, 5vw, 80px)' }}>
        <div className="contact-grid">
          {/* Info */}
          <div>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Our Details</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: Phone, label: 'Phone', val: '88708 00708', href: 'tel:+918870800708' },
                  { icon: Mail, label: 'Email', val: 'bkhomes2011@gmail.com', href: 'mailto:bkhomes2011@gmail.com' },
                  { icon: MapPin, label: 'Address', val: 'Tiruvallur, Tamil Nadu — 602 001', href: null },
                ].map(({ icon: Icon, label, val, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: 'clamp(16px, 2.5vw, 20px)', background: '#120f24', border: '1px solid rgba(248,246,240,0.06)' }}>
                    <div style={{ width: '40px', height: '40px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#C9A84C' }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                      {href ? (
                        <a href={href} style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#F8F6F0', transition: 'color 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = '#F8F6F0'; }}
                        >{val}</a>
                      ) : (
                        <span style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#F8F6F0' }}>{val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              padding: 'clamp(16px, 2.5vw, 20px)',
              background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)',
              color: '#25d366', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
              fontFamily: 'Outfit, sans-serif', transition: 'background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; }}
            >
              <MessageCircle size={16} /> WhatsApp Us Now
            </a>

            {/* Hours */}
            <div style={{ marginTop: 'clamp(24px, 4vw, 32px)', padding: 'clamp(16px, 2.5vw, 24px)', background: '#120f24', border: '1px solid rgba(248,246,240,0.06)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '12px' }}>Business Hours</div>
              {[
                { d: 'Monday – Saturday', t: '9:00 AM – 7:00 PM' },
                { d: 'Sunday', t: '10:00 AM – 5:00 PM' },
              ].map(h => (
                <div key={h.d} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'rgba(248,246,240,0.6)', padding: '8px 0', borderBottom: '1px solid rgba(248,246,240,0.04)', flexWrap: 'wrap', gap: '8px' }}>
                  <span>{h.d}</span><span style={{ color: '#F8F6F0' }}>{h.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Send a Message</div>
            <form ref={formRef} onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { name: 'name', label: 'Full Name', type: 'text', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                { name: 'email', label: 'Email Address', type: 'email', required: false },
                { name: 'subject', label: 'Subject', type: 'text', required: true },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ display: 'block', fontSize: '9px', letterSpacing: '2px', color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {f.label}{f.required && ' *'}
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    value={form[f.name]}
                    onChange={onChange}
                    required={f.required}
                    style={{
                      width: '100%', padding: 'clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 18px)',
                      background: '#120f24', border: '1px solid rgba(248,246,240,0.1)',
                      color: '#F8F6F0', fontSize: 'clamp(13px, 1.4vw, 15px)',
                      fontFamily: 'Outfit, sans-serif', outline: 'none', transition: 'border-color 0.2s',
                      WebkitAppearance: 'none',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(201,168,76,0.5)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(248,246,240,0.1)'; }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: 'block', fontSize: '9px', letterSpacing: '2px', color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={5}
                  style={{
                    width: '100%', padding: 'clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 18px)',
                    background: '#120f24', border: '1px solid rgba(248,246,240,0.1)',
                    color: '#F8F6F0', fontSize: 'clamp(13px, 1.4vw, 15px)',
                    fontFamily: 'Outfit, sans-serif', outline: 'none', resize: 'vertical',
                    minHeight: '120px', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(201,168,76,0.5)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(248,246,240,0.1)'; }}
                />
              </div>

              {status === 'success' && (
                <div style={{ padding: '14px 18px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', fontSize: '13px' }}>
                  Message sent successfully! We'll respond within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{ padding: '14px 18px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', fontSize: '13px' }}>
                  Something went wrong. Please call us directly at 88708 00708.
                </div>
              )}

              <button type="submit" disabled={sending} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: 'clamp(14px, 2.5vw, 18px)',
                background: sending ? 'rgba(201,168,76,0.5)' : '#C9A84C',
                color: '#0a0818', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: 'Outfit, sans-serif', fontWeight: 500, border: 'none',
                cursor: sending ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s',
              }}>
                {sending ? 'Sending...' : <><Send size={13} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: clamp(40px, 6vw, 64px); }
        @media (min-width: 860px) { .contact-grid { grid-template-columns: 1fr 1fr; } }
        input::placeholder, textarea::placeholder { color: rgba(248,246,240,0.25); }
      `}</style>
    </main>
  );
}
