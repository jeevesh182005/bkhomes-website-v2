import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Box, Search } from 'lucide-react';
import { featuredProjects, completedProjects } from '../data/projects';

const filters = ['All', 'Apartment', 'Individual Villa', 'Commercial'];

const allImages = [
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
];

// Merge featured + completed into one list for gallery
const allProjects = [
  ...featuredProjects.map((p, i) => ({ ...p, img: allImages[i % allImages.length], featured: true })),
  ...completedProjects.map((p, i) => ({
    ...p, id: `completed-${i}`, img: allImages[(i + 4) % allImages.length],
    featured: false, status: 'Completed',
  })),
];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = allProjects.filter(p => {
    const matchType = active === 'All' || p.type === active || (active === 'Commercial' && p.type === 'Commercial');
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.location || '').toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '100px' }}>

      {/* Hero strip */}
      <section style={{
        padding: '60px 80px 80px',
        background: 'linear-gradient(135deg, #120f24 0%, #0a0818 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%',
          background: 'radial-gradient(ellipse at right center, rgba(68,49,153,0.15), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
            Our Portfolio
          </span>
        </div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(40px, 5vw, 72px)',
          fontWeight: 300, lineHeight: 1.1, marginBottom: '20px',
        }}>
          All <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Projects</em>
        </h1>
        <p style={{
          fontSize: '16px', color: 'rgba(248,246,240,0.55)', maxWidth: '560px', lineHeight: 1.8,
        }}>
          26 apartments, 42 individual homes, and 3 commercial buildings — delivered across Tiruvallur, Chennai, and Madurai since 2011.
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '48px', marginTop: '48px' }}>
          {[
            { n: '26+', l: 'Apartments' },
            { n: '42+', l: 'Individual Homes' },
            { n: '3', l: 'Commercial' },
            { n: '70+', l: 'Total Projects' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, color: '#C9A84C' }}>
                {s.n}
              </div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(248,246,240,0.4)', marginTop: '4px' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Search bar */}
      <section style={{
        padding: '32px 80px',
        background: '#0d0b1e',
        borderBottom: '1px solid rgba(248,246,240,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px',
        flexWrap: 'wrap',
        position: 'sticky', top: '80px', zIndex: 50,
      }}>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '9px 22px',
                background: active === f ? '#443199' : 'none',
                border: `1px solid ${active === f ? '#443199' : 'rgba(248,246,240,0.1)'}`,
                color: active === f ? '#F8F6F0' : 'rgba(248,246,240,0.45)',
                fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.3s',
                fontFamily: 'Outfit, sans-serif',
              }}
            >{f}</button>
          ))}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '10px 18px',
          border: '1px solid rgba(248,246,240,0.1)',
          background: 'rgba(255,255,255,0.02)',
          minWidth: '260px',
        }}>
          <Search size={14} style={{ color: 'rgba(248,246,240,0.3)' }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search projects or location..."
            style={{
              background: 'none', border: 'none', outline: 'none',
              color: '#F8F6F0', fontSize: '13px', width: '100%',
              fontFamily: 'Outfit, sans-serif',
            }}
          />
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '60px 80px 120px' }}>
        <p style={{ fontSize: '12px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px', marginBottom: '36px' }}>
          Showing {filtered.length} projects
        </p>
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: 'rgba(248,246,240,0.3)' }}>
              No projects found
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: 'relative', overflow: 'hidden', background: '#120f24', cursor: 'pointer' }}
    >
      {project.featured ? (
        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', display: 'block' }}>
          <CardInner project={project} hov={hov} />
        </Link>
      ) : (
        <CardInner project={project} hov={hov} />
      )}
    </div>
  );
}

function CardInner({ project, hov }) {
  return (
    <>
      {/* Image */}
      <div style={{
        height: '240px', overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${project.img})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: hov ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,8,24,0.9) 0%, transparent 60%)',
        }} />

        {/* Status */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          padding: '4px 12px',
          background: project.status === 'Ongoing' ? 'rgba(201,168,76,0.15)' : 'rgba(68,49,153,0.2)',
          border: `1px solid ${project.status === 'Ongoing' ? 'rgba(201,168,76,0.5)' : 'rgba(68,49,153,0.5)'}`,
          fontSize: '9px', letterSpacing: '2px',
          color: project.status === 'Ongoing' ? '#C9A84C' : '#a48fec',
          textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          {project.status === 'Ongoing' && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s ease infinite' }} />}
          {project.status || 'Completed'}
        </div>

        {/* 3D badge */}
        {project.has3D && (
          <div style={{
            position: 'absolute', top: '14px', right: '14px',
            padding: '4px 10px',
            background: 'rgba(68,49,153,0.3)',
            border: '1px solid rgba(90,68,196,0.5)',
            fontSize: '9px', color: '#a48fec', letterSpacing: '2px',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}>
            <Box size={10} /> 3D
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '24px' }}>
        <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px' }}>
          {project.type}
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '24px', fontWeight: 400, color: '#F8F6F0',
          marginBottom: '8px',
        }}>{project.name}</h3>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '12px', color: 'rgba(248,246,240,0.45)', marginBottom: '16px',
        }}>
          <MapPin size={11} style={{ color: '#C9A84C' }} />
          <span>{(project.location || 'Tiruvallur').split(',').slice(-1)[0].trim()}</span>
        </div>

        {project.featured && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '11px', color: '#C9A84C', letterSpacing: '1px',
            opacity: hov ? 1 : 0.5,
            transition: 'opacity 0.3s',
          }}>
            <span>View Details</span>
            <ArrowRight size={12} />
          </div>
        )}
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }`}</style>
    </>
  );
}
