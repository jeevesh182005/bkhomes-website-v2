import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, CircleCheck as CheckCircle, Clock, Building2, Hop as Home, Hammer, Award, Store } from 'lucide-react';
import { ongoingApartments, ongoingVillas, completedProjects, contractWork, commercialWork } from '../data/projects';
import bkAranImg from '../assets/projects/BKAran_Elevation copy.jpeg';
import bkChandraElevationImg from '../assets/projects/BK_Chandra_Elevation.png';
import bkAmsSuryaImg from '../assets/projects/BK_AMS_&_Surya.png';
import bkSkandhaImg from '../assets/projects/BK_Skandha.png';
import rajkamalImg from '../assets/projects/Rajkamal_Contract_Work copy.jpeg';
import mrHitech5aElevImg from '../assets/projects/M.R._HI-TECH_CITY_Plot-5A_Elevation.jpeg';
import mrHitech5bElevImg from '../assets/projects/M.R._HI-TECH_CITY_Plot-5B_Elevation.jpeg';
import udhayakumarElevImg from '../assets/projects/Udhayakumar_Contract_Elevation.jpeg';
import sivagurunathanElevImg from '../assets/projects/Sivagurunathan_Contract_Elevation.jpeg';
import sureshElevImg from '../assets/projects/Suresh_Contract_Elevation.jpeg';
import jayagandhiElevImg from '../assets/projects/JayaGandhi_Contract_Elevation.jpeg';
import sathishElevImg from '../assets/projects/Sathish_Contract_Elevation.jpeg';
import bhaskarElevImg from '../assets/projects/Bhaskar_Contract_Elevation.jpeg';
import bkRatanElevImg from '../assets/projects/BK_Ratan_Commercial_Elevation.jpeg';
import bkSurajElevImg from '../assets/projects/BK_Suraj_Commercial_Elevation.jpeg';

const projectImages = {
  'bk-chandra': bkChandraElevationImg,
  'bk-aran': bkAranImg,
  'bk-ams': bkAmsSuryaImg,
  'bk-surya': bkAmsSuryaImg,
  'bk-skandha-south': bkSkandhaImg,
  'mr-hitech-5a': mrHitech5aElevImg,
  'mr-hitech-5b': mrHitech5bElevImg,
};

const contractImages = {
  'MR. Rajkamal': rajkamalImg,
  'MR. Udhayakumar': udhayakumarElevImg,
  'MR. Sivagurunathan': sivagurunathanElevImg,
  'MR. Jaya Gandhi': jayagandhiElevImg,
  'MR. Sathish': sathishElevImg,
  'MR. Suresh': sureshElevImg,
  'MR. Bhaskar': bhaskarElevImg,
};

const commercialImages = {
  'BK Ratan': bkRatanElevImg,
  'Suraj Spare Parts': bkSurajElevImg,
};

const FILTERS = [
  { id: 'all', label: 'All', icon: Award },
  { id: 'apartments', label: 'Apartments', icon: Building2 },
  { id: 'villas', label: 'Villas', icon: Home },
  { id: 'contract', label: 'Contract', icon: Hammer },
  { id: 'commercial', label: 'Commercial', icon: Store },
  { id: 'completed', label: 'Completed', icon: CheckCircle },
];

// ── Ongoing Project Card ──────────────────────────────
function OngoingCard({ project, index }) {
  const [hov, setHov] = useState(false);
  const img = projectImages[project.id] || project.image;
  const freeCount = project.flatTypes ? project.flatTypes.filter(f => f.status === 'Available').length : null;
  const totalCount = project.flatTypes ? project.flatTypes.length : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        to={`/projects/${project.id}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: 'block', textDecoration: 'none',
          background: '#120f24',
          border: `1px solid ${hov ? 'rgba(201,168,76,0.35)' : 'rgba(248,246,240,0.07)'}`,
          overflow: 'hidden', transition: 'all 0.35s',
          boxShadow: hov ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ height: 'clamp(200px, 30vw, 280px)', overflow: 'hidden', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transform: hov ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,14,0.92) 0%, transparent 55%)' }} />
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            padding: '4px 10px',
            background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.5)',
            fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s ease infinite' }} />
            Ongoing
          </div>
          {freeCount !== null && (
            <div style={{
              position: 'absolute', top: '14px', right: '14px',
              padding: '4px 10px',
              background: freeCount > 0 ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
              border: `1px solid ${freeCount > 0 ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.4)'}`,
              fontSize: '9px', letterSpacing: '2px',
              color: freeCount > 0 ? '#4ade80' : '#f87171', textTransform: 'uppercase',
            }}>
              {freeCount}/{totalCount} Free
            </div>
          )}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', marginBottom: '4px', textTransform: 'uppercase' }}>{project.type}</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: '#F8F6F0', marginBottom: '4px' }}>{project.name}</h3>
            <div style={{ fontSize: '11px', color: 'rgba(248,246,240,0.5)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={10} /><span>{(project.location || 'Tiruvallur').split(',')[0].trim()}</span>
            </div>
          </div>
        </div>
        <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(248,246,240,0.05)', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {project.floors && <span style={{ padding: '3px 10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', fontSize: '10px', color: '#C9A84C' }}>{project.floors} Floors</span>}
            {project.totalFlats && <span style={{ padding: '3px 10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', fontSize: '10px', color: '#C9A84C' }}>{project.totalFlats} Units</span>}
            {project.builtArea && <span style={{ padding: '3px 10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', fontSize: '10px', color: '#C9A84C' }}>{project.builtArea}</span>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#C9A84C', letterSpacing: '1px', opacity: hov ? 1 : 0.4, transition: 'opacity 0.3s' }}>
            <span>View Details</span><ArrowRight size={11} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Contract Work Card ────────────────────────────────
function ContractCard({ project, index }) {
  const img = contractImages[project.name];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ background: '#120f24', border: '1px solid rgba(248,246,240,0.07)', overflow: 'hidden' }}
    >
      <div style={{ height: 'clamp(160px, 25vw, 200px)', overflow: 'hidden', position: 'relative' }}>
        {img ? (
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #120f24, #0a0818)' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,14,0.85) 0%, transparent 60%)' }} />
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          padding: '4px 10px',
          background: project.status === 'Completed' ? 'rgba(74,222,128,0.12)' : 'rgba(201,168,76,0.12)',
          border: `1px solid ${project.status === 'Completed' ? 'rgba(74,222,128,0.4)' : 'rgba(201,168,76,0.4)'}`,
          fontSize: '9px', letterSpacing: '2px',
          color: project.status === 'Completed' ? '#4ade80' : '#C9A84C',
          textTransform: 'uppercase',
        }}>
          {project.status || 'Ongoing'}
        </div>
      </div>
      <div style={{ padding: '16px 20px' }}>
        <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: '#F8F6F0', marginBottom: '6px' }}>{project.name}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(248,246,240,0.4)' }}>
          <MapPin size={10} style={{ color: '#C9A84C' }} /><span>{project.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Commercial Card ───────────────────────────────────
function CommercialCard({ project, index }) {
  const img = commercialImages[project.name];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ background: '#120f24', border: '1px solid rgba(248,246,240,0.07)', overflow: 'hidden' }}
    >
      <div style={{ height: 'clamp(180px, 28vw, 220px)', overflow: 'hidden', position: 'relative' }}>
        {img ? (
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #120f24, #0a0818)' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,14,0.85) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 10px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.4)', fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase' }}>
          {project.type || 'Commercial'}
        </div>
        <div style={{
          position: 'absolute', top: '12px', right: '12px', padding: '4px 10px',
          background: project.status === 'Completed' ? 'rgba(74,222,128,0.12)' : 'rgba(201,168,76,0.12)',
          border: `1px solid ${project.status === 'Completed' ? 'rgba(74,222,128,0.4)' : 'rgba(201,168,76,0.4)'}`,
          fontSize: '9px', letterSpacing: '2px', color: project.status === 'Completed' ? '#4ade80' : '#C9A84C', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          {project.status === 'Ongoing' && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s ease infinite' }} />}
          {project.status}
        </div>
      </div>
      <div style={{ padding: '16px 20px' }}>
        <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: '#F8F6F0', marginBottom: '6px' }}>{project.name}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(248,246,240,0.4)' }}>
          <MapPin size={10} style={{ color: '#C9A84C' }} /><span>{project.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Completed Project Row ─────────────────────────────
function CompletedItem({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
        border: '1px solid rgba(248,246,240,0.05)',
        background: 'rgba(18,15,36,0.4)',
        transition: 'border-color 0.2s, background 0.2s', cursor: 'default',
        flexWrap: 'wrap',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.style.background = 'rgba(201,168,76,0.04)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,246,240,0.05)'; e.currentTarget.style.background = 'rgba(18,15,36,0.4)'; }}
    >
      <CheckCircle size={14} style={{ color: '#C9A84C', flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: '160px' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(16px, 2vw, 18px)', color: '#F8F6F0' }}>{project.name}</span>
        <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.4)', marginLeft: '12px' }}>{project.location}</span>
      </div>
      <span style={{ padding: '3px 10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase' }}>{project.type}</span>
    </motion.div>
  );
}

// ── Overview card ─────────────────────────────────────
function CategoryOverviewCard({ icon: Icon, label, count, description, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        padding: 'clamp(24px, 4vw, 40px) clamp(20px, 3vw, 36px)',
        border: `1px solid ${hov ? 'rgba(201,168,76,0.3)' : 'rgba(248,246,240,0.06)'}`,
        background: hov ? 'rgba(201,168,76,0.05)' : 'rgba(18,15,36,0.6)',
        cursor: 'pointer', transition: 'all 0.35s',
        position: 'relative', overflow: 'hidden',
        height: '100%', display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: '#C9A84C', transform: hov ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />
      <div style={{ marginBottom: '16px', color: '#C9A84C' }}><Icon size={24} /></div>
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 300, color: '#C9A84C', lineHeight: 1, marginBottom: '10px' }}>{count}</div>
      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: '#F8F6F0', marginBottom: '8px' }}>{label}</h3>
      <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.45)', lineHeight: 1.7, marginBottom: '16px' }}>{description}</p>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase', opacity: hov ? 1 : 0.5, transition: 'opacity 0.3s' }}>
        <span>View</span><ArrowRight size={11} />
      </div>
    </motion.div>
  );
}

function SectionHeader({ badge, title, accent }) {
  return (
    <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
        <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
        <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>{badge}</span>
      </div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1 }}>
        {title} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{accent}</em>
      </h2>
    </div>
  );
}

function SubHeader({ icon: Icon, label, color = '#C9A84C' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
      <Icon size={13} style={{ color }} />
      <span style={{ fontSize: '10px', letterSpacing: '3px', color, textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const totalOngoing = ongoingApartments.length + ongoingVillas.length;
  const totalCompleted = completedProjects.length;
  const totalContract = contractWork.ongoing.length + contractWork.completed.length;
  const totalCommercial = commercialWork.ongoing.length + commercialWork.completed.length;

  const overviewCards = [
    { id: 'apartments', icon: Building2, label: 'Ongoing Apartments', count: String(ongoingApartments.length), description: 'Premium 3 & 4 BHK apartment complexes in prime Tiruvallur locations.' },
    { id: 'villas', icon: Home, label: 'Individual Villas', count: String(ongoingVillas.length), description: 'Bespoke villas crafted to match your vision — foundation to finishing.' },
    { id: 'contract', icon: Hammer, label: 'Contract Work', count: String(totalContract), description: 'End-to-end civil contract work for residential clients.' },
    { id: 'commercial', icon: Store, label: 'Commercial', count: String(totalCommercial), description: 'Modern commercial spaces — showrooms, offices, and retail developments.' },
    { id: 'completed', icon: Award, label: 'Completed', count: `${totalCompleted}+`, description: 'Over a decade of delivered homes and apartments across Tamil Nadu.' },
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '72px' }}>
      {/* Hero */}
      <section className="projects-hero" style={{ background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)', borderBottom: '1px solid rgba(201,168,76,0.1)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', background: 'radial-gradient(ellipse at right, rgba(201,168,76,0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Our Portfolio</span>
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
          All <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Projects</em>
        </h1>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'rgba(248,246,240,0.55)', maxWidth: '540px', lineHeight: 1.8 }}>
          Premium apartments, individual villas, contract work, and commercial projects — delivered with quality since 2011.
        </p>
        <div className="projects-stats" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '40px' }}>
          {[
            { n: String(ongoingApartments.length), l: 'Ongoing Apartments' },
            { n: String(ongoingVillas.length), l: 'Ongoing Villas' },
            { n: String(totalOngoing), l: 'Total Ongoing' },
            { n: `${totalCompleted}+`, l: 'Completed' },
          ].map((s, i) => (
            <div key={i} style={{ paddingRight: 'clamp(24px, 4vw, 48px)', paddingBottom: '16px' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 300, color: '#C9A84C' }}>{s.n}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(248,246,240,0.4)', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter bar */}
      <div className="filter-bar" style={{ position: 'sticky', top: '72px', zIndex: 50, background: 'rgba(10,8,24,0.97)', borderBottom: '1px solid rgba(201,168,76,0.1)', backdropFilter: 'blur(16px)', display: 'flex', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        {FILTERS.map(f => {
          const Icon = f.icon;
          const active = activeFilter === f.id;
          return (
            <button key={f.id} onClick={() => setActiveFilter(f.id)} style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: 'clamp(14px, 2vw, 18px) clamp(14px, 2vw, 22px)',
              background: 'transparent', border: 'none',
              borderBottom: `2px solid ${active ? '#C9A84C' : 'transparent'}`,
              color: active ? '#C9A84C' : 'rgba(248,246,240,0.4)',
              fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.3s',
              fontFamily: 'Outfit, sans-serif', whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <Icon size={12} />{f.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="projects-content">
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>

            {/* ALL */}
            {activeFilter === 'all' && (
              <div>
                <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '10px' }}>Portfolio Overview</div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300 }}>
                    Browse by <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Category</em>
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '16px', marginBottom: '60px', alignItems: 'stretch' }}>
                  {overviewCards.map((c, i) => (
                    <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={{ height: '100%' }}>
                      <CategoryOverviewCard icon={c.icon} label={c.label} count={c.count} description={c.description} onClick={() => setActiveFilter(c.id)} />
                    </motion.div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '48px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '28px' }}>All Ongoing Projects</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
                    {[...ongoingApartments, ...ongoingVillas].map((p, i) => <OngoingCard key={p.id} project={p} index={i} />)}
                  </div>
                </div>
              </div>
            )}

            {/* APARTMENTS */}
            {activeFilter === 'apartments' && (
              <div>
                <SectionHeader badge="Ongoing · Apartments" title="Premium Apartment" accent="Projects" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
                  {ongoingApartments.map((p, i) => <OngoingCard key={p.id} project={p} index={i} />)}
                </div>
              </div>
            )}

            {/* VILLAS */}
            {activeFilter === 'villas' && (
              <div>
                <SectionHeader badge="Ongoing · Individual Villas" title="Individual Villa" accent="Projects" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '20px' }}>
                  {ongoingVillas.map((p, i) => <OngoingCard key={p.id} project={p} index={i} />)}
                </div>
              </div>
            )}

            {/* CONTRACT */}
            {activeFilter === 'contract' && (
              <div>
                <SectionHeader badge="Contract Work" title="Our Contract" accent="Projects" />
                <div style={{ marginBottom: '40px' }}>
                  <SubHeader icon={Clock} label="Ongoing" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
                    {contractWork.ongoing.map((p, i) => <ContractCard key={p.name} project={{ ...p, status: 'Ongoing' }} index={i} />)}
                  </div>
                </div>
                {contractWork.completed.length > 0 && (
                  <div>
                    <SubHeader icon={CheckCircle} label="Completed" color="#4ade80" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
                      {contractWork.completed.map((p, i) => <ContractCard key={p.name} project={{ ...p, status: 'Completed' }} index={i} />)}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* COMMERCIAL */}
            {activeFilter === 'commercial' && (
              <div>
                <SectionHeader badge="Commercial" title="Commercial" accent="Projects" />
                <div style={{ marginBottom: '40px' }}>
                  <SubHeader icon={Clock} label="Ongoing" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                    {commercialWork.ongoing.map((p, i) => <CommercialCard key={p.name} project={{ ...p, status: 'Ongoing' }} index={i} />)}
                  </div>
                </div>
                {commercialWork.completed.length > 0 && (
                  <div>
                    <SubHeader icon={CheckCircle} label="Completed" color="#4ade80" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                      {commercialWork.completed.map((p, i) => <CommercialCard key={p.name} project={{ ...p, status: 'Completed' }} index={i} />)}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* COMPLETED */}
            {activeFilter === 'completed' && (
              <div>
                <SectionHeader badge="Delivered with Excellence" title="Completed" accent="Projects" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '8px' }}>
                  {completedProjects.map((p, i) => <CompletedItem key={p.name} project={p} index={i} />)}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        .projects-hero { padding: clamp(48px, 7vh, 80px) clamp(16px, 5vw, 80px) clamp(40px, 6vh, 64px); }
        .projects-content { padding: clamp(40px, 6vw, 60px) clamp(16px, 5vw, 80px) 100px; }
        .filter-bar { padding: 0 clamp(16px, 5vw, 80px); }
      `}</style>
    </main>
  );
}
