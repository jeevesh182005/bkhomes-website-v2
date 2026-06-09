import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CircleCheck as CheckCircle, Clock } from 'lucide-react';
import { ongoingApartments, ongoingVillas, completedProjects, contractWork } from '../data/projects';
import bkAranImg from '../assets/projects/BKAran_Elevation copy.jpeg';
import rajkamalImg from '../assets/projects/Rajkamal_Contract_Work copy.jpeg';

// ── Ongoing Project Card (clickable) ─────────────────
function OngoingCard({ project, index }) {
  const [hov, setHov] = useState(false);
  const freeCount = project.flatTypes ? project.flatTypes.filter(f => f.status === 'Available').length : null;
  const totalCount = project.flatTypes ? project.flatTypes.length : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        to={`/projects/${project.id}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ display: 'block', textDecoration: 'none', background: '#120f24', border: `1px solid ${hov ? 'rgba(201,168,76,0.3)' : 'rgba(248,246,240,0.07)'}`, overflow: 'hidden', transition: 'all 0.3s', position: 'relative' }}
      >
        {/* Image */}
        <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${project.id === 'bk-aran' ? bkAranImg : project.image})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transform: hov ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,14,0.9) 0%, transparent 60%)' }} />

          {/* Status badge */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            padding: '4px 12px',
            background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.5)',
            fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s ease infinite' }} />
            Ongoing
          </div>

          {/* Availability badge */}
          {freeCount !== null && (
            <div style={{
              position: 'absolute', top: '14px', right: '14px',
              padding: '4px 12px',
              background: freeCount > 0 ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
              border: `1px solid ${freeCount > 0 ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.4)'}`,
              fontSize: '9px', letterSpacing: '2px',
              color: freeCount > 0 ? '#4ade80' : '#f87171',
              textTransform: 'uppercase',
            }}>
              {freeCount}/{totalCount} Free
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '24px 28px' }}>
          <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px' }}>{project.type}</div>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 400, color: '#F8F6F0', marginBottom: '6px' }}>{project.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(248,246,240,0.45)', marginBottom: '16px' }}>
            <MapPin size={11} style={{ color: '#C9A84C' }} />
            <span>{(project.location || 'Tiruvallur').split(',')[0].trim()}</span>
          </div>

          {project.plotSize && (
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 10px', background: 'rgba(68,49,153,0.1)', border: '1px solid rgba(68,49,153,0.2)', fontSize: '11px', color: '#a48fec' }}>{project.plotSize}</span>
              {project.floors && <span style={{ padding: '4px 10px', background: 'rgba(68,49,153,0.1)', border: '1px solid rgba(68,49,153,0.2)', fontSize: '11px', color: '#a48fec' }}>{project.floors} Floors</span>}
              {project.totalFlats && <span style={{ padding: '4px 10px', background: 'rgba(68,49,153,0.1)', border: '1px solid rgba(68,49,153,0.2)', fontSize: '11px', color: '#a48fec' }}>{project.totalFlats} Units</span>}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#C9A84C', letterSpacing: '1px', opacity: hov ? 1 : 0.5, transition: 'opacity 0.3s' }}>
            <span>View Details</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Contract Work Card (not clickable) ───────────────
function ContractCard({ project, index }) {
  const img = project.name === 'Rajkamal' ? rajkamalImg : project.image;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ background: '#120f24', border: '1px solid rgba(248,246,240,0.07)', overflow: 'hidden' }}
    >
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,14,0.8) 0%, transparent 60%)' }} />
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          padding: '4px 10px',
          background: project.status === 'Completed' ? 'rgba(68,49,153,0.2)' : 'rgba(201,168,76,0.12)',
          border: `1px solid ${project.status === 'Completed' ? 'rgba(68,49,153,0.5)' : 'rgba(201,168,76,0.4)'}`,
          fontSize: '9px', letterSpacing: '2px',
          color: project.status === 'Completed' ? '#a48fec' : '#C9A84C',
          textTransform: 'uppercase',
        }}>
          {project.status || 'Ongoing'}
        </div>
      </div>
      <div style={{ padding: '20px 24px' }}>
        <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#F8F6F0', marginBottom: '6px' }}>{project.name}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(248,246,240,0.4)' }}>
          <MapPin size={10} style={{ color: '#C9A84C' }} />
          <span>{project.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Completed Row Item ────────────────────────────────
function CompletedItem({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '14px 20px',
        border: '1px solid rgba(248,246,240,0.05)',
        background: 'rgba(18,15,36,0.4)',
        transition: 'border-color 0.2s, background 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.style.background = 'rgba(68,49,153,0.06)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,246,240,0.05)'; e.currentTarget.style.background = 'rgba(18,15,36,0.4)'; }}
    >
      <CheckCircle size={14} style={{ color: '#C9A84C', flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: '#F8F6F0' }}>{project.name}</span>
        <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.4)', marginLeft: '12px' }}>{project.location}</span>
      </div>
      <span style={{
        padding: '3px 10px',
        background: project.type === 'Villa' ? 'rgba(68,49,153,0.12)' : 'rgba(201,168,76,0.08)',
        border: `1px solid ${project.type === 'Villa' ? 'rgba(68,49,153,0.25)' : 'rgba(201,168,76,0.15)'}`,
        fontSize: '9px', letterSpacing: '2px',
        color: project.type === 'Villa' ? '#a48fec' : '#C9A84C', textTransform: 'uppercase',
      }}>{project.type}</span>
    </motion.div>
  );
}

// ── Section Header ────────────────────────────────────
function SectionHeader({ badge, title, accent }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
        <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>{badge}</span>
      </div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1 }}>
        {title} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{accent}</em>
      </h2>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────
export default function ProjectsPage() {
  const totalOngoing = ongoingApartments.length + ongoingVillas.length;
  const totalCompleted = completedProjects.length;

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '100px' }}>

      {/* Hero strip */}
      <section style={{ padding: '60px 80px 80px', background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)', borderBottom: '1px solid rgba(201,168,76,0.1)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', background: 'radial-gradient(ellipse at right center, rgba(68,49,153,0.15), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Portfolio</span>
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '20px' }}>
          All <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Projects</em>
        </h1>
        <p style={{ fontSize: '16px', color: 'rgba(248,246,240,0.55)', maxWidth: '560px', lineHeight: 1.8 }}>
          Premium apartments, individual villas, and contract work — delivered with quality and care since 2011.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '48px', marginTop: '48px', flexWrap: 'wrap' }}>
          {[
            { n: String(ongoingApartments.length), l: 'Ongoing Apartments' },
            { n: String(ongoingVillas.length), l: 'Ongoing Villas' },
            { n: String(totalOngoing), l: 'Total Ongoing' },
            { n: String(totalCompleted) + '+', l: 'Completed Projects' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, color: '#C9A84C' }}>{s.n}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(248,246,240,0.4)', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ONGOING APARTMENTS ── */}
      <section style={{ padding: '80px 80px 60px', background: '#0a0818' }}>
        <SectionHeader badge="Ongoing · Apartments" title="Premium Apartment" accent="Projects" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {ongoingApartments.map((p, i) => <OngoingCard key={p.id} project={p} index={i} />)}
        </div>
      </section>

      {/* ── ONGOING VILLAS ── */}
      <section style={{ padding: '60px 80px', background: '#0a0818', borderTop: '1px solid rgba(248,246,240,0.04)' }}>
        <SectionHeader badge="Ongoing · Individual Villas" title="Individual Villa" accent="Projects" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {ongoingVillas.map((p, i) => <OngoingCard key={p.id} project={p} index={i} />)}
        </div>
      </section>

      {/* ── CONTRACT WORK ── */}
      <section style={{ padding: '80px 80px 60px', background: '#120f24', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
        <SectionHeader badge="Contract Work" title="Our Contract" accent="Projects" />

        {/* Ongoing Contract */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <Clock size={14} style={{ color: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>Ongoing Contract Projects</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {contractWork.ongoing.map((p, i) => (
              <ContractCard key={p.name} project={{ ...p, status: 'Ongoing' }} index={i} />
            ))}
          </div>
        </div>

        {/* Completed Contract */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <CheckCircle size={14} style={{ color: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>Completed Contract Projects</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {contractWork.completed.map((p, i) => (
              <ContractCard key={p.name} project={{ ...p, status: 'Completed' }} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETED PROJECTS ── */}
      <section style={{ padding: '80px 80px 100px', background: '#0a0818', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
        <SectionHeader badge="Completed Projects" title="Delivered with" accent="Excellence" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '8px' }}>
          {completedProjects.map((p, i) => <CompletedItem key={p.name} project={p} index={i} />)}
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
      `}</style>
    </main>
  );
}
