import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Phone, Layers, Eye, ChevronRight, CircleCheck as CheckCircle, Circle as XCircle } from 'lucide-react';
import { ongoingApartments, ongoingVillas } from '../data/projects';
import bkAranImg from '../assets/projects/BKAran_Elevation copy.jpeg';
import bkChandraElevationImg from '../assets/projects/BK_Chandra_Elevation.png';
import bkAmsSuryaImg from '../assets/projects/BK_AMS_&_Surya.png';
import bkSkandhaImg from '../assets/projects/BK_Skandha.png';
import stiltsFloorPlanImg from '../assets/projects/Stilts_Floor_Plan_Chandra.png';
import typicalFloorPlanImg from '../assets/projects/Typical_Floor_planChandra.png';
import skandhaFloorPlanImg from '../assets/projects/Skandha_FloorPlan.png';
import amsGroundFloorPlanImg from '../assets/projects/AMS_Ground_FloorPlan.png';
import amsTypicalFloorPlanImg from '../assets/projects/AMS_TypicalPlan.png';
import suryaGroundFloorPlanImg from '../assets/projects/BK_Surya_Ground_FloorPlan.png';
import suryaFirstFloorPlanImg from '../assets/projects/BK_Surya_FirstFloorPlan.png';
import suryaTypicalFloorPlanImg from '../assets/projects/BK_Surya_2nd&3rd_FloorPlan.png';

const projectImages = {
  'bk-chandra': bkChandraElevationImg,
  'bk-aran': bkAranImg,
  'bk-ams': bkAmsSuryaImg,
  'bk-surya': bkAmsSuryaImg,
  'bk-skandha-south': bkSkandhaImg,
};

const projectFloorPlanImages = {
  'bk-chandra': [
    { key: 'stilts', label: 'Stilts Floor Plan', img: stiltsFloorPlanImg },
    { key: 'typical', label: 'Typical Floor Plan', img: typicalFloorPlanImg },
  ],
  'bk-skandha-south': [
    { key: 'ground', label: 'Floor Plan', img: skandhaFloorPlanImg },
  ],
  'bk-ams': [
    { key: 'ground', label: 'Ground Floor (Parking)', img: amsGroundFloorPlanImg },
    { key: 'typical', label: 'Typical Floor (1st–3rd)', img: amsTypicalFloorPlanImg },
  ],
  'bk-surya': [
    { key: 'ground', label: 'Ground Floor (Parking)', img: suryaGroundFloorPlanImg },
    { key: 'first', label: 'First Floor (4BHK)', img: suryaFirstFloorPlanImg },
    { key: 'typical', label: 'Typical Floor (2nd & 3rd)', img: suryaTypicalFloorPlanImg },
  ],
};

const allProjects = [...ongoingApartments, ...ongoingVillas];

// ── Floor Availability Matrix ────────────────────────
function AvailabilityMatrix({ project }) {
  if (!project.floorAvailability) return null;
  const freeCount = project.flatTypes?.filter(f => f.status === 'Available').length || 0;
  const totalCount = project.flatTypes?.length || 0;

  return (
    <div style={{ background: '#0a0818', border: '1px solid rgba(201,168,76,0.15)', padding: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <h3 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase' }}>
          Unit Availability
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80' }} />
            <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.5)' }}>Available ({freeCount})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
            <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.5)' }}>Booked ({totalCount - freeCount})</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {project.floorAvailability.map((floor, fi) => (
          <div key={fi} style={{ display: 'flex', alignItems: 'stretch', gap: '12px' }}>
            {/* Floor label */}
            <div style={{
              width: '100px', flexShrink: 0,
              background: 'rgba(68,49,153,0.1)',
              border: '1px solid rgba(68,49,153,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '8px',
            }}>
              <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#a48fec', textTransform: 'uppercase', textAlign: 'center' }}>{floor.floor}</span>
            </div>

            {/* Units */}
            <div style={{ flex: 1, display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {floor.units.map((unit, ui) => (
                <div
                  key={ui}
                  style={{
                    flex: '1 1 180px', padding: '12px 16px',
                    background: unit.status === 'Available' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.06)',
                    border: `1px solid ${unit.status === 'Available' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.25)'}`,
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}
                >
                  {unit.status === 'Available'
                    ? <CheckCircle size={14} style={{ color: '#4ade80', flexShrink: 0 }} />
                    : <XCircle size={14} style={{ color: '#f87171', flexShrink: 0 }} />
                  }
                  <div>
                    <div style={{ fontSize: '13px', color: '#F8F6F0', fontWeight: 400 }}>Flat {unit.id}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(248,246,240,0.45)', marginTop: '2px' }}>{unit.area} sqft · {unit.facing}</div>
                  </div>
                  <div style={{
                    marginLeft: 'auto',
                    padding: '2px 8px',
                    background: unit.status === 'Available' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.12)',
                    fontSize: '9px', letterSpacing: '1px',
                    color: unit.status === 'Available' ? '#4ade80' : '#f87171',
                    textTransform: 'uppercase', borderRadius: '2px',
                    flexShrink: 0,
                  }}>{unit.status}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Floor Plan Details ───────────────────────────────
function FloorPlanDetails({ project }) {
  const rooms = project.floorPlan?.rooms || [];
  const roomColors = ['#443199', '#5a44c4', '#C9A84C', '#2e2070', '#3d3080', '#6b5cd4', '#a88f3a', '#332466'];

  return (
    <div style={{ background: '#0a0818', border: '1px solid rgba(201,168,76,0.15)', padding: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <Layers size={15} style={{ color: '#C9A84C' }} />
        <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>
          Floor Plan — {project.type === 'Individual Villa' ? 'Ground Floor Layout' : 'Typical Floor Layout'}
        </span>
      </div>

      {/* Dimensions */}
      {project.floorPlan?.width && (
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {[
            project.floorPlan.totalArea
              ? { label: 'Total Area', value: `${project.floorPlan.totalArea} sqft` }
              : { label: 'Plot Width', value: `${project.floorPlan.width}'` },
            project.floorPlan.totalArea
              ? { label: 'Ground Floor', value: `${project.floorPlan.groundArea} sqft` }
              : { label: 'Plot Depth', value: `${project.floorPlan.depth}'` },
            project.floorPlan.headRoom && { label: 'Head Room', value: `${project.floorPlan.headRoom} sqft` },
          ].filter(Boolean).map((dim, i) => (
            <div key={i} style={{ padding: '10px 18px', background: 'rgba(68,49,153,0.08)', border: '1px solid rgba(68,49,153,0.15)' }}>
              <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '4px' }}>{dim.label}</div>
              <div style={{ fontSize: '16px', fontFamily: 'Cormorant Garamond, serif', color: '#C9A84C' }}>{dim.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Room list */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '8px' }}>
        {rooms.map((room, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '10px 14px',
            background: 'rgba(68,49,153,0.06)', border: '1px solid rgba(68,49,153,0.12)',
          }}>
            <div style={{ width: '8px', height: '8px', flexShrink: 0, background: roomColors[i % roomColors.length], opacity: 0.8 }} />
            <span style={{ fontSize: '12px', color: 'rgba(248,246,240,0.7)' }}>{room}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Floor Plan Images ─────────────────────────────────
function FloorPlanImages({ plans, projectName }) {
  const [activePlan, setActivePlan] = useState(plans[0]?.key);

  const current = plans.find(p => p.key === activePlan);

  return (
    <div style={{ background: '#0a0818', border: '1px solid rgba(201,168,76,0.15)', padding: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <Layers size={15} style={{ color: '#C9A84C' }} />
        <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>
          Floor Plans — {projectName}
        </span>
      </div>

      {/* Plan selector tabs */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
        {plans.map(plan => (
          <button
            key={plan.key}
            onClick={() => setActivePlan(plan.key)}
            style={{
              padding: '8px 20px', cursor: 'pointer', border: 'none',
              background: activePlan === plan.key ? 'rgba(201,168,76,0.12)' : 'transparent',
              borderBottom: activePlan === plan.key ? '2px solid #C9A84C' : '2px solid transparent',
              color: activePlan === plan.key ? '#C9A84C' : 'rgba(248,246,240,0.45)',
              fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
              transition: 'all 0.3s', fontFamily: 'Outfit, sans-serif',
            }}
          >
            {plan.label}
          </button>
        ))}
      </div>

      {/* Plan image */}
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.1)', background: '#fff' }}>
              <img
                src={current.img}
                alt={`${current.label} — ${projectName}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ marginTop: '12px', fontSize: '12px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px', textAlign: 'center' }}>
              {current.label} — {projectName}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────
export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === id) || allProjects[0];
  const [activeTab, setActiveTab] = useState('elevation');

  const isVilla = project.type === 'Individual Villa';
  const projectImg = projectImages[project.id] || project.image;

  const tabs = [
    { key: 'elevation', label: 'Elevation', icon: <Eye size={13} /> },
    ...(project.hasFloorPlan ? [{ key: 'floorplan', label: 'Floor Plan', icon: <Layers size={13} /> }] : []),
    ...(!isVilla && project.floorAvailability ? [{ key: 'availability', label: 'Unit Status', icon: <CheckCircle size={13} /> }] : []),
  ];

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', background: '#0a0818' }}>

      {/* Back nav */}
      <div style={{ padding: '0 80px 32px' }} className="detail-padding">
        <Link to="/projects" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: 'rgba(248,246,240,0.5)', textDecoration: 'none',
          fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
          transition: 'color 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,246,240,0.5)'}
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
      </div>

      <div style={{ padding: '0 80px 120px', maxWidth: '1600px', margin: '0 auto' }} className="detail-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'start' }} className="detail-grid">

          {/* Left */}
          <div>
            {/* Title */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ padding: '4px 14px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.4)', fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s ease infinite' }} />
                  {project.status}
                </span>
                <span style={{ padding: '4px 14px', background: 'rgba(68,49,153,0.12)', border: '1px solid rgba(68,49,153,0.3)', fontSize: '9px', letterSpacing: '3px', color: '#a48fec', textTransform: 'uppercase' }}>{project.type}</span>
              </div>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '12px' }}>
                {project.name}
              </h1>
              {project.subtitle && (
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontStyle: 'italic', color: '#C9A84C', marginBottom: '12px' }}>
                  — {project.subtitle}
                </p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(248,246,240,0.5)' }}>
                <MapPin size={13} style={{ color: '#C9A84C' }} />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '2px', marginBottom: '24px', borderBottom: '1px solid rgba(248,246,240,0.08)', overflowX: 'auto' }}>
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '12px 24px', background: 'none', cursor: 'pointer', border: 'none',
                    borderBottom: activeTab === tab.key ? '2px solid #C9A84C' : '2px solid transparent',
                    color: activeTab === tab.key ? '#C9A84C' : 'rgba(248,246,240,0.45)',
                    fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                    marginBottom: '-1px', transition: 'all 0.3s',
                    fontFamily: 'Outfit, sans-serif', whiteSpace: 'nowrap',
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === 'elevation' && (
                <motion.div key="elevation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)', height: '520px' }}>
                    <img
                      src={projectImg}
                      alt={`${project.name} Elevation`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,24,0.5), transparent 50%)' }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px', color: 'rgba(248,246,240,0.7)', fontStyle: 'italic' }}>
                        Elevation — {project.name}
                      </span>
                    </div>
                  </div>
                  <p style={{ marginTop: '12px', fontSize: '12px', color: 'rgba(248,246,240,0.3)', letterSpacing: '1px', textAlign: 'center' }}>
                    Actual elevation render of {project.name}
                  </p>
                </motion.div>
              )}

              {activeTab === 'floorplan' && project.hasFloorPlan && (
                <motion.div key="floorplan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  {projectFloorPlanImages[project.id] ? (
                    <FloorPlanImages plans={projectFloorPlanImages[project.id]} projectName={project.name} />
                  ) : (
                    <FloorPlanDetails project={project} />
                  )}
                </motion.div>
              )}

              {activeTab === 'availability' && project.floorAvailability && (
                <motion.div key="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <AvailabilityMatrix project={project} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Property Details */}
            <div style={{ background: '#120f24', border: '1px solid rgba(201,168,76,0.12)', padding: '28px' }}>
              <h3 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '24px' }}>Property Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                {[
                  { label: 'Plot Size', value: project.plotSize || 'Contact Us' },
                  { label: 'Floors', value: project.floors ? `${project.floors} Floors` : 'Contact Us' },
                  project.totalFlats ? { label: 'Total Units', value: project.totalFlats } : null,
                  project.builtArea ? { label: 'Built Area', value: project.builtArea } : null,
                  { label: 'Status', value: project.status },
                  { label: 'Type', value: project.type },
                ].filter(Boolean).slice(0, 6).map((spec, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '6px' }}>{spec.label}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 400, color: '#F8F6F0' }}>{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              {project.features && (
                <>
                  <div style={{ height: '1px', background: 'rgba(201,168,76,0.1)', marginBottom: '16px' }} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {project.features.map(feat => (
                      <span key={feat} style={{ padding: '4px 10px', background: 'rgba(68,49,153,0.1)', border: '1px solid rgba(68,49,153,0.25)', fontSize: '11px', color: '#a48fec' }}>{feat}</span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Flat Types Table (apartments) */}
            {project.flatTypes && (
              <div style={{ background: '#120f24', border: '1px solid rgba(201,168,76,0.12)', padding: '24px' }}>
                <h3 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Unit Configuration</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
                      {['Flat', 'Area', 'UDS', 'Facing', 'Status'].map(h => (
                        <th key={h} style={{ padding: '6px 4px', textAlign: 'left', fontSize: '8px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.flatTypes.map((flat, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(248,246,240,0.04)' }}>
                        <td style={{ padding: '8px 4px', fontSize: '13px', color: '#C9A84C', fontWeight: 500 }}>{flat.flat}</td>
                        <td style={{ padding: '8px 4px', fontSize: '13px', color: '#F8F6F0' }}>{flat.area}</td>
                        <td style={{ padding: '8px 4px', fontSize: '13px', color: 'rgba(248,246,240,0.5)' }}>{flat.uds || '—'}</td>
                        <td style={{ padding: '8px 4px', fontSize: '11px', color: 'rgba(248,246,240,0.5)' }}>{flat.facing}</td>
                        <td style={{ padding: '8px 4px' }}>
                          <span style={{
                            padding: '2px 7px', fontSize: '9px', letterSpacing: '1px',
                            background: flat.status === 'Available' ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.1)',
                            border: `1px solid ${flat.status === 'Available' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.25)'}`,
                            color: flat.status === 'Available' ? '#4ade80' : '#f87171',
                          }}>{flat.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Amenities */}
            {project.amenities && (
              <div style={{ background: '#120f24', border: '1px solid rgba(201,168,76,0.12)', padding: '24px' }}>
                <h3 style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>Amenities</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.amenities.map((a, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckCircle size={12} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: 'rgba(248,246,240,0.6)', lineHeight: 1.5 }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div style={{ background: '#120f24', border: '1px solid rgba(201,168,76,0.12)', padding: '24px' }}>
              <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(248,246,240,0.65)' }}>{project.description}</p>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:8870800708" className="btn-gold" style={{ justifyContent: 'center' }}>
                <Phone size={14} />
                <span>Enquire: 88708 00708</span>
              </a>
              <Link to="/contact" className="btn-outline" style={{ justifyContent: 'center' }}>
                <span>Schedule Site Visit</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Address */}
            {project.plotNo && (
              <div style={{ padding: '18px 20px', border: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.04)' }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px' }}>Site Address</div>
                <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.6)', lineHeight: 1.7 }}>
                  {project.plotNo},<br />{project.location}
                </p>
                <div style={{ marginTop: '8px', fontSize: '13px', color: '#C9A84C' }}>{project.contact}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }
      `}</style>
    </main>
  );
}
