import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Phone, Home, Building2, ChevronRight, CheckCircle, ZoomIn } from 'lucide-react';
import { ongoingApartments, ongoingVillas } from '../data/projects';

import bkChandraElevationImg from '../assets/projects/BK_Chandra_Elevation.png';
import bkChandraImg from '../assets/projects/BK_Chandra.png';
import bkAranImg from '../assets/projects/BKAran_Elevation copy.jpeg';
import bkAmsSuryaImg from '../assets/projects/BK_AMS_&_Surya.png';
import bkSkandhaImg from '../assets/projects/BK_Skandha.png';
import mrHitech5aElevImg from '../assets/projects/M.R._HI-TECH_CITY_Plot-5A_Elevation.jpeg';
import mrHitech5bElevImg from '../assets/projects/M.R._HI-TECH_CITY_Plot-5B_Elevation.jpeg';

import chandraStiltsImg from '../assets/projects/Stilts_Floor_Plan_Chandra.png';
import chandraTypicalImg from '../assets/projects/Typical_Floor_planChandra.png';
import amsGroundImg from '../assets/projects/AMS_Ground_FloorPlan.png';
import amsTypicalImg from '../assets/projects/AMS_TypicalPlan.png';
import suryaGroundFloorPlanImg from '../assets/projects/BK_Surya_Ground_FloorPlan.png';
import suryaFirstFloorPlanImg from '../assets/projects/BK_Surya_FirstFloorPlan.png';
import suryaTypicalFloorPlanImg from '../assets/projects/BK_Surya_2nd&3rd_FloorPlan.png';
import skandhaFloorImg from '../assets/projects/Skandha_FloorPlan.png';
import mrHitech5aFloorImg from '../assets/projects/M.R._HI-TECH_CITY_Plot-5A_FloorPlan.png';
import mrHitech5bFloorImg from '../assets/projects/M.R._HI-TECH_CITY_Plot-5B_FloorPlan.png';

const projectImages = {
  'bk-chandra': bkChandraElevationImg,
  'bk-aran': bkAranImg,
  'bk-ams': bkAmsSuryaImg,
  'bk-surya': bkAmsSuryaImg,
  'bk-skandha-south': bkSkandhaImg,
  'mr-hitech-5a': mrHitech5aElevImg,
  'mr-hitech-5b': mrHitech5bElevImg,
};

const projectFloorPlans = {
  'bk-chandra': [
    { key: 'stilts', label: 'Stilts (Parking)', img: chandraStiltsImg },
    { key: 'typical', label: 'Typical Floor', img: chandraTypicalImg },
  ],
  'bk-ams': [
    { key: 'ground', label: 'Ground Floor', img: amsGroundImg },
    { key: 'typical', label: 'Typical Floor', img: amsTypicalImg },
  ],
  'bk-surya': [
    { key: 'ground', label: 'Ground Floor (Parking)', img: suryaGroundFloorPlanImg },
    { key: 'first', label: 'First Floor (4BHK)', img: suryaFirstFloorPlanImg },
    { key: 'typical', label: '2nd & 3rd Floor', img: suryaTypicalFloorPlanImg },
  ],
  'bk-skandha-south': [
    { key: 'ground', label: 'Ground Floor Plan', img: skandhaFloorImg },
  ],
  'mr-hitech-5a': [
    { key: 'ground', label: 'Ground Floor Plan', img: mrHitech5aFloorImg },
  ],
  'mr-hitech-5b': [
    { key: 'ground', label: 'Ground Floor Plan', img: mrHitech5bFloorImg },
  ],
};

const allProjects = [...ongoingApartments, ...ongoingVillas];

const statusColor = { Available: '#4ade80', Booked: '#f87171', 'Sold Out': '#94a3b8' };

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeFloorPlan, setActiveFloorPlan] = useState(0);
  const [imgZoomed, setImgZoomed] = useState(false);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a0818', gap: '20px', padding: '20px' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', color: '#F8F6F0' }}>Project Not Found</h2>
        <Link to="/projects" style={{ color: '#C9A84C', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', letterSpacing: '2px' }}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>
    );
  }

  const heroImg = projectImages[project.id] || project.image;
  const floorPlans = projectFloorPlans[project.id] || [];
  const isApartment = project.type === 'Apartment';
  const fp = project.floorPlan;

  const TABS = [
    { id: 'overview', label: 'Overview' },
    ...(project.hasFloorPlan ? [{ id: 'floorplan', label: 'Floor Plan' }] : []),
    ...(isApartment && project.flatTypes ? [{ id: 'units', label: 'Units & Pricing' }] : []),
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '72px' }}>
      {/* Hero image */}
      <div style={{ height: 'clamp(260px, 45vh, 520px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,24,1) 0%, rgba(10,8,24,0.6) 50%, rgba(10,8,24,0.2) 100%)' }} />

        <div style={{ position: 'absolute', top: 'clamp(12px, 3vw, 24px)', left: 'clamp(16px, 5vw, 80px)' }}>
          <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.3)', color: '#C9A84C', padding: '8px 16px', fontSize: '10px', letterSpacing: '2px', cursor: 'pointer' }}>
            <ArrowLeft size={12} /> Back
          </button>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px, 4vw, 48px) clamp(16px, 5vw, 80px)' }}>
          <div style={{ fontSize: '9px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s ease infinite' }} />
            {project.status} · {project.type}
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 300, color: '#F8F6F0', lineHeight: 1.1, marginBottom: '8px' }}>{project.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(248,246,240,0.6)' }}>
            <MapPin size={12} style={{ color: '#C9A84C' }} />{project.location}
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', background: 'rgba(10,8,24,0.97)', backdropFilter: 'blur(16px)', position: 'sticky', top: '72px', zIndex: 40, display: 'flex', overflowX: 'auto', WebkitOverflowScrolling: 'touch', padding: '0 clamp(16px, 5vw, 80px)' }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: 'clamp(14px, 2vw, 18px) clamp(16px, 2.5vw, 28px)',
            background: 'transparent', border: 'none', cursor: 'pointer',
            borderBottom: `2px solid ${activeTab === tab.id ? '#C9A84C' : 'transparent'}`,
            color: activeTab === tab.id ? '#C9A84C' : 'rgba(248,246,240,0.5)',
            fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
            fontFamily: 'Outfit, sans-serif', transition: 'all 0.25s', whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: 'clamp(28px, 5vw, 60px) clamp(16px, 5vw, 80px) clamp(60px, 8vh, 100px)' }}>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="detail-layout">
            {/* Left: description + features */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'rgba(248,246,240,0.7)', lineHeight: 1.9, marginBottom: 'clamp(28px, 4vw, 40px)', maxWidth: '640px' }}>{project.description}</p>

                {/* Quick specs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: 'clamp(28px, 4vw, 40px)' }}>
                  {[
                    { label: 'Status', val: project.status },
                    { label: 'Type', val: project.type },
                    { label: 'Floors', val: project.floors ? `${project.floors} Floors` : null },
                    { label: 'Area', val: project.builtArea || (fp ? `${fp.totalArea} sqft` : null) },
                    { label: 'Plot Size', val: project.plotSize },
                    { label: 'Location', val: project.location?.split(',')[0] },
                  ].filter(s => s.val).map(s => (
                    <div key={s.label} style={{ padding: 'clamp(12px, 2vw, 16px) clamp(14px, 2.5vw, 20px)', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', minWidth: '120px' }}>
                      <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</div>
                      <div style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#F8F6F0', fontWeight: 500 }}>{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                {project.features?.length > 0 && (
                  <div style={{ marginBottom: 'clamp(28px, 4vw, 40px)' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Key Features</div>
                    <div className="room-list">
                      {project.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 14px', background: 'rgba(18,15,36,0.6)', border: '1px solid rgba(248,246,240,0.06)' }}>
                          <CheckCircle size={13} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '1px' }} />
                          <span style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', color: 'rgba(248,246,240,0.75)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Floor plan area stats (if available) */}
                {fp && (
                  <div style={{ marginBottom: 'clamp(28px, 4vw, 40px)' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Area Breakdown</div>
                    <div className="area-strip" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
                      {[
                        fp.stiltsArea && { label: 'Stilts', val: fp.stiltsArea },
                        fp.groundArea && { label: 'Ground Floor', val: `${fp.groundArea} sqft` },
                        fp.typicalArea && { label: 'Typical Floor', val: `${fp.typicalArea} sqft` },
                        fp.headRoom && { label: 'Head Room', val: `${fp.headRoom} sqft` },
                        { label: 'Total Area', val: `${fp.totalArea} sqft` },
                        fp.width && fp.depth && { label: 'Plot Size', val: `${fp.width}' × ${fp.depth}'` },
                      ].filter(Boolean).map((s, i) => (
                        <div key={i} className="area-strip-item" style={{ background: i % 2 === 0 ? 'rgba(201,168,76,0.04)' : 'transparent', borderRight: '1px solid rgba(201,168,76,0.1)' }}>
                          <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</div>
                          <div style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontFamily: 'Cormorant Garamond, serif', color: '#F8F6F0', fontWeight: 400 }}>{s.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Room list */}
                {fp?.rooms?.length > 0 && (
                  <div>
                    <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Room Sizes</div>
                    <div className="room-list">
                      {fp.rooms.map(r => (
                        <div key={r} style={{ padding: 'clamp(10px, 1.5vw, 14px)', background: 'rgba(18,15,36,0.6)', border: '1px solid rgba(248,246,240,0.06)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Home size={11} style={{ color: '#C9A84C', flexShrink: 0 }} />
                          <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', color: 'rgba(248,246,240,0.7)', lineHeight: 1.4 }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right: contact card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div style={{ background: '#120f24', border: '1px solid rgba(201,168,76,0.15)', padding: 'clamp(24px, 4vw, 36px)', position: 'sticky', top: '130px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px' }}>Enquire Now</div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3.5vw, 32px)', color: '#F8F6F0', marginBottom: '4px' }}>{project.name}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(248,246,240,0.5)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={11} style={{ color: '#C9A84C' }} />{project.location}
                  </div>
                </div>
                <a href={`tel:${project.contact || '+918870800708'}`} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  width: '100%', padding: '16px',
                  background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)',
                  color: '#C9A84C', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                  fontFamily: 'Outfit, sans-serif', transition: 'background 0.2s', marginBottom: '12px',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
                >
                  <Phone size={13} /> {project.contact || '88708 00708'}
                </a>
                <a href={`https://wa.me/918870800708?text=I'm interested in ${encodeURIComponent(project.name)}`}
                  target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    width: '100%', padding: '14px',
                    background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.3)',
                    color: '#25d366', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                    fontFamily: 'Outfit, sans-serif', transition: 'background 0.2s',
                  }}
                >
                  WhatsApp Us
                </a>

                {project.hasFloorPlan && (
                  <button onClick={() => setActiveTab('floorplan')} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    width: '100%', padding: '12px', marginTop: '12px',
                    background: 'transparent', border: '1px solid rgba(248,246,240,0.1)',
                    color: 'rgba(248,246,240,0.5)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
                    cursor: 'pointer', fontFamily: 'Outfit, sans-serif',
                  }}>
                    View Floor Plan <ChevronRight size={12} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* FLOOR PLAN TAB */}
        {activeTab === 'floorplan' && project.hasFloorPlan && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Floor selector tabs */}
            {floorPlans.length > 1 && (
              <div className="floor-plan-tabs" style={{ marginBottom: '24px' }}>
                {floorPlans.map((fp, i) => (
                  <button key={fp.key} onClick={() => setActiveFloorPlan(i)} style={{
                    padding: 'clamp(8px, 1.5vw, 12px) clamp(14px, 2.5vw, 24px)',
                    background: activeFloorPlan === i ? 'rgba(201,168,76,0.15)' : 'rgba(18,15,36,0.6)',
                    border: `1px solid ${activeFloorPlan === i ? 'rgba(201,168,76,0.5)' : 'rgba(248,246,240,0.08)'}`,
                    color: activeFloorPlan === i ? '#C9A84C' : 'rgba(248,246,240,0.5)',
                    fontSize: 'clamp(10px, 1.3vw, 12px)', letterSpacing: '1.5px', textTransform: 'uppercase',
                    cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'all 0.2s',
                  }}>
                    {fp.label}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile pinch hint */}
            <div className="zoom-hint" style={{ marginBottom: '8px' }}>
              <ZoomIn size={12} style={{ display: 'inline', marginRight: '4px', color: '#C9A84C' }} />
              Pinch to zoom · Scroll to pan
            </div>

            {/* Floor plan image */}
            <div style={{
              background: '#0d0b1e',
              border: '1px solid rgba(201,168,76,0.1)',
              padding: 'clamp(12px, 2vw, 24px)',
              marginBottom: 'clamp(28px, 4vw, 40px)',
            }}>
              {floorPlans.length > 0 ? (
                <div
                  className="floor-plan-img-wrap"
                  style={{ touchAction: 'pan-x pan-y pinch-zoom' }}
                  onClick={() => setImgZoomed(z => !z)}
                >
                  <img
                    src={floorPlans[activeFloorPlan]?.img}
                    alt={floorPlans[activeFloorPlan]?.label}
                    style={{
                      width: imgZoomed ? 'auto' : '100%',
                      maxWidth: imgZoomed ? 'none' : '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'width 0.3s',
                    }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(248,246,240,0.3)', fontSize: '14px' }}>
                  Floor plan coming soon
                </div>
              )}
              {floorPlans.length > 0 && (
                <div style={{ marginTop: '12px', fontSize: '12px', color: 'rgba(248,246,240,0.4)', textAlign: 'center', letterSpacing: '1px' }}>
                  {floorPlans[activeFloorPlan]?.label}
                </div>
              )}
            </div>

            {/* Area stats */}
            {fp && (
              <>
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Area Details</div>
                <div className="area-strip" style={{ border: '1px solid rgba(201,168,76,0.15)', marginBottom: 'clamp(28px, 4vw, 40px)' }}>
                  {[
                    fp.stiltsArea && { label: 'Stilts', val: fp.stiltsArea },
                    fp.groundArea && { label: 'Ground Floor', val: `${fp.groundArea} sqft` },
                    fp.typicalArea && { label: 'Typical Floor', val: `${fp.typicalArea} sqft` },
                    fp.headRoom && { label: 'Head Room', val: `${fp.headRoom} sqft` },
                    { label: 'Total Area', val: `${fp.totalArea} sqft` },
                    fp.width && fp.depth && { label: 'Plot / Site', val: `${fp.width}' × ${fp.depth}'` },
                  ].filter(Boolean).map((s, i) => (
                    <div key={i} className="area-strip-item" style={{ background: i % 2 === 0 ? 'rgba(201,168,76,0.04)' : 'transparent', borderRight: '1px solid rgba(201,168,76,0.1)' }}>
                      <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase', marginBottom: '8px' }}>{s.label}</div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(16px, 2.5vw, 22px)', color: '#F8F6F0' }}>{s.val}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Room list */}
            {fp?.rooms?.length > 0 && (
              <>
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Room Dimensions</div>
                <div className="room-list" style={{ marginBottom: '40px' }}>
                  {fp.rooms.map(r => (
                    <div key={r} style={{
                      padding: 'clamp(12px, 2vw, 16px) clamp(14px, 2.5vw, 20px)',
                      background: 'rgba(18,15,36,0.6)', border: '1px solid rgba(248,246,240,0.06)',
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                    }}>
                      <Home size={12} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', color: '#F8F6F0', fontWeight: 400, lineHeight: 1.5 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* UNITS TAB */}
        {activeTab === 'units' && project.flatTypes && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ marginBottom: 'clamp(24px, 4vw, 36px)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '10px' }}>Unit Configuration</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 300 }}>
                Available <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Units</em>
              </h2>
            </div>

            {/* Summary stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: 'clamp(28px, 4vw, 40px)' }}>
              {[
                { label: 'Total Units', val: project.flatTypes.reduce((s, f) => s + (f.count || 1), 0) },
                { label: 'Available', val: project.flatTypes.filter(f => f.status === 'Available').reduce((s, f) => s + (f.count || 1), 0), color: '#4ade80' },
                { label: 'Booked', val: project.flatTypes.filter(f => f.status === 'Booked').reduce((s, f) => s + (f.count || 1), 0), color: '#f87171' },
              ].map(s => (
                <div key={s.label} style={{ padding: 'clamp(16px, 2.5vw, 24px) clamp(20px, 3vw, 32px)', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', textAlign: 'center', flex: '1 1 100px' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300, color: s.color || '#C9A84C' }}>{s.val}</div>
                  <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.5)', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Units table — scrollable on mobile */}
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Unit Details</div>
            <div className="unit-table" style={{ marginBottom: 'clamp(40px, 6vw, 60px)' }}>
              <table>
                <thead>
                  <tr>
                    {['Unit Type', 'Area', 'Count', 'Status', 'Price'].map(h => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.flatTypes.map((ft, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(18,15,36,0.4)' : 'transparent' }}>
                      <td style={{ color: '#F8F6F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 400 }}>{ft.type}</td>
                      <td style={{ color: 'rgba(248,246,240,0.8)' }}>{ft.area}</td>
                      <td style={{ color: 'rgba(248,246,240,0.6)', textAlign: 'center' }}>{ft.count || 1}</td>
                      <td>
                        <span style={{ padding: '3px 10px', background: ft.status === 'Available' ? 'rgba(74,222,128,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${ft.status === 'Available' ? 'rgba(74,222,128,0.3)' : 'rgba(239,68,68,0.3)'}`, color: statusColor[ft.status] || '#C9A84C', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                          {ft.status}
                        </span>
                      </td>
                      <td style={{ color: '#C9A84C', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(13px, 1.5vw, 15px)' }}>{ft.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding: 'clamp(20px, 3vw, 28px)', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', color: '#F8F6F0', marginBottom: '4px' }}>Interested in a unit?</div>
                <div style={{ fontSize: '12px', color: 'rgba(248,246,240,0.5)' }}>Call us for current pricing and availability</div>
              </div>
              <a href="tel:+918870800708" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Phone size={12} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Related projects */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.08)', padding: 'clamp(40px, 6vw, 60px) clamp(16px, 5vw, 80px)', background: '#07050f' }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '28px' }}>Other Projects</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {allProjects.filter(p => p.id !== id).slice(0, 4).map(p => (
            <Link key={p.id} to={`/projects/${p.id}`} style={{
              padding: '12px 20px', background: 'rgba(18,15,36,0.6)',
              border: '1px solid rgba(248,246,240,0.07)',
              color: 'rgba(248,246,240,0.7)', fontSize: '13px',
              display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = '#C9A84C'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,246,240,0.07)'; e.currentTarget.style.color = 'rgba(248,246,240,0.7)'; }}
            >
              {p.name} <ArrowLeft size={12} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        .detail-layout { display: grid; grid-template-columns: 1fr; gap: clamp(32px, 5vw, 48px); }
        @media (min-width: 900px) { .detail-layout { grid-template-columns: 1fr 360px; } }
        .room-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr)); gap: 8px; }
        .area-strip { display: flex; flex-wrap: wrap; }
        .area-strip-item { flex: 1 1 clamp(100px, 20%, 200px); padding: clamp(16px, 2.5vw, 28px) clamp(14px, 2.5vw, 28px); }
        .floor-plan-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .floor-plan-img-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: 4px; }
        .floor-plan-img-wrap img { min-width: 280px; width: 100%; height: auto; display: block; }
        .unit-table { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .unit-table table { min-width: 500px; width: 100%; border-collapse: collapse; }
        .unit-table th, .unit-table td { padding: clamp(10px, 1.5vw, 14px) clamp(12px, 2vw, 20px); text-align: left; border-bottom: 1px solid rgba(248,246,240,0.06); font-size: clamp(12px, 1.3vw, 14px); white-space: nowrap; }
        .unit-table th { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #C9A84C; background: rgba(201,168,76,0.05); }
        .zoom-hint { display: none; font-size: 11px; color: rgba(248,246,240,0.4); text-align: center; padding: 6px 0; }
        @media (max-width: 768px) { .zoom-hint { display: block; } }
      `}</style>
    </main>
  );
}
