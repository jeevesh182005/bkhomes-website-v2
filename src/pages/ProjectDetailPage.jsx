import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Home, Calendar, Layers, Phone, Download, RotateCcw, ZoomIn, Eye, ChevronRight, Box } from 'lucide-react';
import { featuredProjects } from '../data/projects';

// ─── 3D Building Model — BK AMS / BK Surya style (3-floor apartment) ────
function ApartmentBuilding({ type = 'apartment' }) {
  const group = useRef();
  const [hovered, setHovered] = useState(null);

  useFrame((state) => {
    // Gentle auto-rotate when not being manually controlled
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  const floors = type === 'apartment' ? 3 : 2;
  const floorHeight = 1.6;
  const buildingW = 3.2, buildingD = 2.0;

  // Colors matching BK AMS/Surya style
  const wallColor = '#f5f0e8';
  const accentColor = '#d97706'; // orange-amber like BK Surya
  const windowColor = '#5a8fa8';
  const roofColor = '#374151';
  const gateColor = '#1f2937';

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Ground / Plot */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>

      {/* Driveway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 2.5]}>
        <planeGeometry args={[2.2, 3]} />
        <meshStandardMaterial color="#2a2a3e" roughness={0.7} />
      </mesh>

      {/* Compound wall */}
      {[[-2.2, 0.2, 0], [2.2, 0.2, 0]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.15, 0.4, 5.5]} />
          <meshStandardMaterial color="#e5e0d8" roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, 0.2, 2.7]}>
        <boxGeometry args={[4.4, 0.4, 0.15]} />
        <meshStandardMaterial color="#e5e0d8" roughness={0.8} />
      </mesh>

      {/* Gate pillars */}
      {[[-0.7, 0.5, 2.7], [0.7, 0.5, 2.7]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color="#c9a84c" metalness={0.3} roughness={0.6} />
        </mesh>
      ))}

      {/* FLOORS */}
      {Array.from({ length: floors }).map((_, fi) => (
        <group key={fi} position={[0, fi * floorHeight, 0]}>
          {/* Main wall body */}
          <mesh position={[0, floorHeight / 2 - 0.05, 0]}>
            <boxGeometry args={[buildingW, floorHeight - 0.1, buildingD]} />
            <meshStandardMaterial
              color={fi === floors - 1 ? '#f8f4ec' : wallColor}
              roughness={0.6} metalness={0.05}
            />
          </mesh>

          {/* Accent panel — right side (orange like BK Surya/AMS) */}
          <mesh position={[buildingW / 2 - 0.5, floorHeight / 2, -buildingD / 2 + 0.06]}>
            <boxGeometry args={[0.9, floorHeight - 0.2, 0.05]} />
            <meshStandardMaterial color={accentColor} roughness={0.5} />
          </mesh>

          {/* Windows — front face */}
          {[-0.8, 0.3].map((wx, wi) => (
            <group key={wi} position={[wx, floorHeight / 2, buildingD / 2 + 0.01]}>
              {/* Window frame */}
              <mesh>
                <boxGeometry args={[0.65, 0.7, 0.04]} />
                <meshStandardMaterial color="#e8e0d0" />
              </mesh>
              {/* Window glass */}
              <mesh position={[0, 0, 0.03]}>
                <boxGeometry args={[0.55, 0.58, 0.02]} />
                <meshStandardMaterial
                  color={windowColor}
                  transparent opacity={0.7}
                  roughness={0.1} metalness={0.2}
                  emissive="#3a6a80" emissiveIntensity={fi === 0 ? 0.5 : 0.3}
                />
              </mesh>
            </group>
          ))}

          {/* Balcony — first floor and above */}
          {fi > 0 && (
            <group position={[-0.5, floorHeight / 2 - 0.4, buildingD / 2 + 0.2]}>
              <mesh>
                <boxGeometry args={[0.9, 0.05, 0.4]} />
                <meshStandardMaterial color="#d4cfc5" roughness={0.7} />
              </mesh>
              {/* Railing */}
              <mesh position={[0, 0.2, -0.18]}>
                <boxGeometry args={[0.9, 0.35, 0.02]} />
                <meshStandardMaterial color={windowColor} transparent opacity={0.5} roughness={0.1} />
              </mesh>
            </group>
          )}

          {/* Circular arch window (BK AMS signature) */}
          {fi > 0 && (
            <mesh position={[0.9, floorHeight * 0.55, buildingD / 2 + 0.01]}>
              <cylinderGeometry args={[0.22, 0.22, 0.04, 32, 1, false, 0, Math.PI]} />
              <meshStandardMaterial color={windowColor} transparent opacity={0.7} roughness={0.1} emissive="#3a6a80" emissiveIntensity={0.4} />
            </mesh>
          )}

          {/* Floor slab line */}
          <mesh position={[0, -0.05, 0]}>
            <boxGeometry args={[buildingW + 0.2, 0.1, buildingD + 0.1]} />
            <meshStandardMaterial color={roofColor} roughness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Roof / Parapet */}
      <group position={[0, floors * floorHeight, 0]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[buildingW + 0.3, 0.3, buildingD + 0.3]} />
          <meshStandardMaterial color={roofColor} roughness={0.8} />
        </mesh>
        {/* Overhead water tank */}
        <mesh position={[0.5, 0.55, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.5, 16]} />
          <meshStandardMaterial color="#374151" roughness={0.7} />
        </mesh>
      </group>

      {/* Ground floor parking / Portico */}
      <mesh position={[0, 0.15, buildingD / 2 + 0.5]}>
        <boxGeometry args={[buildingW - 0.4, 0.3, 1.0]} />
        <meshStandardMaterial color={roofColor} roughness={0.9} />
      </mesh>

      {/* BK HOMES sign on building */}
      <group position={[0, 1.8, buildingD / 2 + 0.12]}>
        <mesh>
          <boxGeometry args={[1.4, 0.28, 0.04]} />
          <meshStandardMaterial color="#0a0818" roughness={0.5} />
        </mesh>
      </group>

      {/* Trees */}
      {[[-2.8, 0, -1.5], [2.8, 0, -1.5], [-2.8, 0, 1.0]].map((pos, i) => (
        <group key={i} position={pos}>
          <mesh position={[0, 0.6, 0]}>
            <coneGeometry args={[0.4, 1.4, 8]} />
            <meshStandardMaterial color="#2d5a27" roughness={0.9} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.5, 8]} />
            <meshStandardMaterial color="#5c3d2e" roughness={1} />
          </mesh>
        </group>
      ))}

      {/* Ambient lights within scene */}
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#ffd4a0" />
      <pointLight position={[-2, 1, 0]} intensity={0.3} color="#a0c4ff" />
    </group>
  );
}

// ─── Villa Building (for BK Skandha South) ──────────
function VillaBuilding() {
  const group = useRef();
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.002;
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>

      {/* Ground floor */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[3.5, 1.6, 2.5]} />
        <meshStandardMaterial color="#f0ece0" roughness={0.6} />
      </mesh>

      {/* First floor — set back slightly */}
      <mesh position={[0.2, 2.6, -0.1]}>
        <boxGeometry args={[2.8, 1.5, 2.2]} />
        <meshStandardMaterial color="#f5f1e8" roughness={0.6} />
      </mesh>

      {/* Wood slat vertical accent */}
      <mesh position={[-1.0, 2.6, 1.12]}>
        <boxGeometry args={[0.5, 1.5, 0.05]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
      {[-0.85, -0.7, -0.55, -0.4].map((x, i) => (
        <mesh key={i} position={[x, 2.6, 1.12]}>
          <boxGeometry args={[0.06, 1.4, 0.04]} />
          <meshStandardMaterial color="#a07c28" roughness={0.8} />
        </mesh>
      ))}

      {/* Stone cladding strip */}
      <mesh position={[0, 0.3, 1.26]}>
        <boxGeometry args={[3.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#9ca3af" roughness={0.9} />
      </mesh>

      {/* Portico / Canopy */}
      <mesh position={[0, 1.55, 1.6]}>
        <boxGeometry args={[2.2, 0.1, 0.9]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>

      {/* Portico pillars */}
      {[-0.8, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 1.6]}>
          <cylinderGeometry args={[0.08, 0.08, 1.5, 8]} />
          <meshStandardMaterial color="#c9a84c" roughness={0.5} metalness={0.2} />
        </mesh>
      ))}

      {/* Gate */}
      {[-0.4, 0.4].map((x, i) => (
        <mesh key={i} position={[x, 0.3, 2.5]}>
          <boxGeometry args={[0.5, 0.6, 0.06]} />
          <meshStandardMaterial color="#1f2937" metalness={0.4} roughness={0.6} />
        </mesh>
      ))}
      {/* Gate pillars */}
      {[-0.7, 0.7].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 2.5]}>
          <boxGeometry args={[0.18, 1.0, 0.18]} />
          <meshStandardMaterial color="#c9a84c" roughness={0.5} metalness={0.2} />
        </mesh>
      ))}

      {/* Windows GF */}
      {[-0.7, 0.7].map((x, i) => (
        <mesh key={i} position={[x, 0.9, 1.27]}>
          <boxGeometry args={[0.6, 0.55, 0.04]} />
          <meshStandardMaterial color="#5a8fa8" transparent opacity={0.75} roughness={0.1} emissive="#3a6a80" emissiveIntensity={0.3} />
        </mesh>
      ))}

      {/* Balcony first floor */}
      <mesh position={[0, 2.0, 1.22]}>
        <boxGeometry args={[1.4, 0.08, 0.4]} />
        <meshStandardMaterial color="#d4cfc5" roughness={0.7} />
      </mesh>

      {/* Roof */}
      <mesh position={[0.2, 3.45, -0.1]}>
        <boxGeometry args={[3.2, 0.15, 2.5]} />
        <meshStandardMaterial color="#374151" roughness={0.9} />
      </mesh>

      {/* Plants near gate */}
      {[[-1.2, 0, 2.2], [1.2, 0, 2.2]].map((p, i) => (
        <group key={i} position={p}>
          <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.22, 8, 8]} />
            <meshStandardMaterial color="#2d5a27" roughness={1} />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.09, 0.11, 0.3, 8]} />
            <meshStandardMaterial color="#6b4c2a" roughness={1} />
          </mesh>
        </group>
      ))}

      <pointLight position={[0, 2, 3]} intensity={0.5} color="#ffd4a0" />
    </group>
  );
}

// ─── Floor Plan Viewer ───────────────────────────────
function FloorPlanViewer({ project }) {
  const rooms = project.floorPlan?.rooms || [];
  const roomColors = ['#443199', '#5a44c4', '#C9A84C', '#2e2070', '#3d3080', '#6b5cd4', '#a88f3a', '#332466'];

  return (
    <div style={{
      background: '#0a0818', border: '1px solid rgba(201,168,76,0.15)',
      padding: '32px', position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <Layers size={16} style={{ color: '#C9A84C' }} />
        <span style={{ fontSize: '11px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>
          Floor Plan — {project.type === 'Individual Villa' ? 'Ground Floor' : 'Typical Floor'}
        </span>
      </div>

      {/* Schematic floor plan */}
      <div style={{
        background: '#0f0c1e',
        border: '2px solid rgba(201,168,76,0.2)',
        position: 'relative',
        aspectRatio: project.type === 'Individual Villa' ? '1/2' : '32/52',
        maxWidth: '280px', margin: '0 auto 24px',
        overflow: 'hidden',
      }}>
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(68,49,153,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(68,49,153,0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />

        {/* North indicator */}
        <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '10px', color: '#C9A84C', letterSpacing: '1px' }}>
          N ↑
        </div>

        {/* Room blocks — approximate layout */}
        {project.type === 'Individual Villa' ? (
          <>
            {/* Ground floor schematic */}
            <div style={{ position: 'absolute', inset: '15px', display: 'grid', gridTemplateRows: '1fr 0.6fr 0.8fr 1fr', gap: '2px' }}>
              <div style={{ background: 'rgba(68,49,153,0.3)', border: '1px solid rgba(90,68,196,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '8px', color: '#a48fec', letterSpacing: '1px' }}>BEDROOMS</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                <div style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '7px', color: '#C9A84C' }}>DINING</span>
                </div>
                <div style={{ background: 'rgba(68,49,153,0.2)', border: '1px solid rgba(68,49,153,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '7px', color: '#a48fec' }}>KITCHEN</span>
                </div>
              </div>
              <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '9px', color: '#C9A84C', letterSpacing: '1px' }}>LIVING HALL</span>
              </div>
              <div style={{ background: 'rgba(55,65,81,0.5)', border: '1px solid rgba(55,65,81,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '8px', color: 'rgba(248,246,240,0.5)' }}>PORTICO</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Apartment typical floor schematic */}
            <div style={{ position: 'absolute', inset: '12px', display: 'grid', gridTemplateRows: '1fr 1fr 0.7fr 0.5fr 1fr 1fr', gap: '2px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2px' }}>
                <div style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '7px', color: '#C9A84C' }}>KITCHEN</span>
                </div>
                <div style={{ background: 'rgba(68,49,153,0.2)', border: '1px solid rgba(68,49,153,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '7px', color: '#a48fec' }}>BED</span>
                </div>
              </div>
              <div style={{ background: 'rgba(68,49,153,0.15)', border: '1px solid rgba(68,49,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '8px', color: '#a48fec' }}>BEDROOM</span>
              </div>
              <div style={{ background: 'rgba(68,49,153,0.15)', border: '1px solid rgba(68,49,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '8px', color: '#a48fec' }}>BEDROOM</span>
              </div>
              <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '7px', color: '#C9A84C' }}>BALCONY</span>
              </div>
              <div style={{ background: 'rgba(201,168,76,0.18)', border: '1px solid rgba(201,168,76,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '9px', color: '#C9A84C', letterSpacing: '1px' }}>LIVING / DINING</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                <div style={{ background: 'rgba(55,65,81,0.4)', border: '1px solid rgba(55,65,81,0.7)' }} />
                <div style={{ background: 'rgba(68,49,153,0.1)', border: '1px solid rgba(68,49,153,0.2)' }} />
              </div>
            </div>
          </>
        )}

        {/* Dimensions */}
        <div style={{
          position: 'absolute', bottom: '4px', left: 0, right: 0,
          textAlign: 'center', fontSize: '9px', color: 'rgba(201,168,76,0.6)',
        }}>
          {project.floorPlan?.width}' × {project.floorPlan?.depth}'
        </div>
      </div>

      {/* Room list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {rooms.slice(0, 6).map((room, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '8px 12px',
            background: 'rgba(68,49,153,0.06)',
            border: '1px solid rgba(68,49,153,0.12)',
          }}>
            <div style={{
              width: '8px', height: '8px', flexShrink: 0,
              background: roomColors[i % roomColors.length],
              opacity: 0.7,
            }} />
            <span style={{ fontSize: '12px', color: 'rgba(248,246,240,0.65)' }}>{room}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Project Detail Page ────────────────────────
export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = featuredProjects.find(p => p.id === id) || featuredProjects[0];
  const [activeTab, setActiveTab] = useState('3d');
  const [autoRotate, setAutoRotate] = useState(true);

  const isVilla = project.type === 'Individual Villa';

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', background: '#0a0818' }}>

      {/* Back navigation */}
      <div style={{ padding: '0 80px 40px' }}>
        <Link to="/projects" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: 'rgba(248,246,240,0.5)', textDecoration: 'none',
          fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
          transition: 'color 0.3s',
        }}>
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
      </div>

      <div style={{ padding: '0 80px 120px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'start' }}>

          {/* Left — 3D/Gallery/Floorplan tabs */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px',
              }}>
                <span style={{
                  padding: '5px 14px',
                  background: project.status === 'Ongoing' ? 'rgba(201,168,76,0.12)' : 'rgba(68,49,153,0.15)',
                  border: `1px solid ${project.status === 'Ongoing' ? 'rgba(201,168,76,0.4)' : 'rgba(68,49,153,0.5)'}`,
                  fontSize: '9px', letterSpacing: '3px',
                  color: project.status === 'Ongoing' ? '#C9A84C' : '#a48fec',
                  textTransform: 'uppercase',
                }}>
                  {project.status}
                </span>
                <span style={{
                  padding: '5px 14px',
                  background: 'rgba(68,49,153,0.12)',
                  border: '1px solid rgba(68,49,153,0.3)',
                  fontSize: '9px', letterSpacing: '3px', color: '#a48fec',
                  textTransform: 'uppercase',
                }}>
                  {project.type}
                </span>
                {project.has3D && (
                  <span style={{
                    padding: '5px 14px',
                    background: 'rgba(68,49,153,0.2)',
                    border: '1px solid rgba(90,68,196,0.5)',
                    fontSize: '9px', letterSpacing: '3px', color: '#a48fec',
                    textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <Box size={11} /> 3D Model Live
                  </span>
                )}
              </div>

              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(42px, 5vw, 68px)',
                fontWeight: 300, lineHeight: 1.1,
                marginBottom: '12px',
              }}>{project.name}</h1>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', color: 'rgba(248,246,240,0.5)',
              }}>
                <MapPin size={13} style={{ color: '#C9A84C' }} />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Tabs */}
            <div style={{
              display: 'flex', gap: '2px', marginBottom: '24px',
              borderBottom: '1px solid rgba(248,246,240,0.08)',
            }}>
              {[
                { key: '3d', label: '3D Model', icon: <Box size={13} /> },
                { key: 'gallery', label: 'Elevation', icon: <Eye size={13} /> },
                { key: 'floorplan', label: 'Floor Plan', icon: <Layers size={13} /> },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '12px 24px', background: 'none', cursor: 'pointer',
                    border: 'none',
                    borderBottom: activeTab === tab.key ? '2px solid #C9A84C' : '2px solid transparent',
                    color: activeTab === tab.key ? '#C9A84C' : 'rgba(248,246,240,0.45)',
                    fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                    marginBottom: '-1px',
                    transition: 'all 0.3s',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === '3d' && (
                <motion.div
                  key="3d"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* 3D Canvas */}
                  <div style={{
                    background: '#05040d',
                    border: '1px solid rgba(201,168,76,0.15)',
                    position: 'relative',
                    height: '520px',
                    overflow: 'hidden',
                  }}>
                    {/* Grid overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'linear-gradient(rgba(68,49,153,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(68,49,153,0.05) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                      pointerEvents: 'none', zIndex: 1,
                    }} />

                    {/* 3D Status */}
                    <div style={{
                      position: 'absolute', top: '16px', left: '16px', zIndex: 10,
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '10px', letterSpacing: '2px', color: '#C9A84C',
                      textTransform: 'uppercase',
                    }}>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: '#C9A84C', animation: 'pulse 2s ease infinite',
                      }} />
                      Live 3D Model
                    </div>

                    {/* Controls hint */}
                    <div style={{
                      position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                      fontSize: '10px', color: 'rgba(201,168,76,0.5)',
                      letterSpacing: '1px',
                    }}>
                      Drag to rotate · Scroll to zoom · Right-click to pan
                    </div>

                    {/* Auto-rotate toggle */}
                    <button
                      onClick={() => setAutoRotate(!autoRotate)}
                      style={{
                        position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                        background: 'rgba(10,8,24,0.8)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        color: '#C9A84C', padding: '8px 14px',
                        fontSize: '9px', letterSpacing: '2px',
                        textTransform: 'uppercase', cursor: 'pointer',
                        fontFamily: 'Outfit, sans-serif',
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}
                    >
                      <RotateCcw size={11} />
                      {autoRotate ? 'Stop' : 'Auto Rotate'}
                    </button>

                    <Canvas shadows style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                      <PerspectiveCamera makeDefault position={[6, 4, 8]} fov={45} />
                      <ambientLight intensity={0.4} />
                      <directionalLight
                        position={[8, 10, 6]}
                        intensity={1.2}
                        castShadow
                        shadow-mapSize={[2048, 2048]}
                        color="#fff8f0"
                      />
                      <directionalLight position={[-5, 4, -5]} intensity={0.3} color="#a0c4ff" />
                      <pointLight position={[0, 6, 0]} intensity={0.3} color="#C9A84C" />

                      <Suspense fallback={null}>
                        {isVilla ? <VillaBuilding /> : <ApartmentBuilding type="apartment" />}
                        <Environment preset="city" />
                      </Suspense>

                      <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        minDistance={4}
                        maxDistance={16}
                        autoRotate={autoRotate}
                        autoRotateSpeed={0.8}
                        maxPolarAngle={Math.PI / 2.1}
                        target={[0, 1.5, 0]}
                      />

                      {/* Ground plane */}
                      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.52, 0]} receiveShadow>
                        <planeGeometry args={[30, 30]} />
                        <meshStandardMaterial color="#0a0818" roughness={1} />
                      </mesh>
                    </Canvas>
                  </div>

                  <p style={{
                    marginTop: '16px', fontSize: '12px',
                    color: 'rgba(248,246,240,0.35)', letterSpacing: '1px',
                    textAlign: 'center',
                  }}>
                    Interactive 3D model built from the BK Homes architectural elevation · Final 3D from actual .gltf model after approval
                  </p>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div style={{
                    height: '520px', position: 'relative', overflow: 'hidden',
                    border: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,8,24,0.6), transparent 50%)',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: '24px', left: '24px',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '13px', color: 'rgba(248,246,240,0.6)', fontStyle: 'italic',
                    }}>
                      Elevation render — {project.name}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'floorplan' && project.hasFloorPlan && (
                <motion.div
                  key="floorplan"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FloorPlanViewer project={project} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — Info Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Key specs */}
            <div style={{
              background: '#120f24',
              border: '1px solid rgba(201,168,76,0.12)',
              padding: '32px',
            }}>
              <h3 style={{
                fontSize: '10px', letterSpacing: '4px', color: '#C9A84C',
                textTransform: 'uppercase', marginBottom: '24px',
              }}>Property Details</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                {[
                  { label: 'Plot Size', value: project.plotSize || '25×50' },
                  { label: 'Floors', value: `${project.floors} Floors` },
                  ...(project.totalFlats ? [{ label: 'Total Flats', value: project.totalFlats }] : []),
                  ...(project.builtArea ? [{ label: 'Built Area', value: project.builtArea }] : []),
                  { label: 'Status', value: project.status },
                  { label: 'Location', value: 'Tiruvallur' },
                ].slice(0, 6).map((spec, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      {spec.label}
                    </div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '20px', fontWeight: 400, color: '#F8F6F0',
                    }}>{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <div style={{ height: '1px', background: 'rgba(201,168,76,0.1)', marginBottom: '20px' }} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.features.map(feat => (
                      <span key={feat} style={{
                        padding: '5px 12px',
                        background: 'rgba(68,49,153,0.1)',
                        border: '1px solid rgba(68,49,153,0.25)',
                        fontSize: '11px', color: '#a48fec', letterSpacing: '1px',
                      }}>{feat}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Flat types table */}
            {project.flatTypes && (
              <div style={{
                background: '#120f24',
                border: '1px solid rgba(201,168,76,0.12)',
                padding: '28px',
              }}>
                <h3 style={{
                  fontSize: '10px', letterSpacing: '4px', color: '#C9A84C',
                  textTransform: 'uppercase', marginBottom: '20px',
                }}>Unit Configuration</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
                      {['Flat', 'Area (sqft)', 'UDS', 'Facing'].map(h => (
                        <th key={h} style={{
                          padding: '8px 4px', textAlign: 'left',
                          fontSize: '9px', letterSpacing: '2px',
                          color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase',
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.flatTypes.map((flat, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(248,246,240,0.04)' }}>
                        <td style={{ padding: '10px 4px', fontSize: '13px', color: '#C9A84C', fontWeight: 500 }}>{flat.flat}</td>
                        <td style={{ padding: '10px 4px', fontSize: '13px', color: '#F8F6F0' }}>{flat.area}</td>
                        <td style={{ padding: '10px 4px', fontSize: '13px', color: 'rgba(248,246,240,0.6)' }}>{flat.uds}</td>
                        <td style={{ padding: '10px 4px', fontSize: '13px', color: 'rgba(248,246,240,0.6)' }}>{flat.facing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Description */}
            <div style={{
              background: '#120f24',
              border: '1px solid rgba(201,168,76,0.12)',
              padding: '28px',
            }}>
              <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(248,246,240,0.65)' }}>
                {project.description}
              </p>
            </div>

            {/* CTA */}
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
              <div style={{
                padding: '20px',
                border: '1px solid rgba(201,168,76,0.1)',
                background: 'rgba(201,168,76,0.04)',
              }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Site Address
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(248,246,240,0.6)', lineHeight: 1.7 }}>
                  {project.plotNo},<br />
                  {project.location}
                </p>
                {project.contact && (
                  <div style={{ marginTop: '8px', fontSize: '13px', color: '#C9A84C' }}>
                    {project.contact}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </main>
  );
}
