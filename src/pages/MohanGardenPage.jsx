import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MapPin, Info, Grid3x2 as Grid3X3 } from 'lucide-react';
import { mohanGardenPlots, company } from '../data/projects';

const availableCount = mohanGardenPlots.filter(p => p.status === 'Available').length;
const bookedCount = mohanGardenPlots.filter(p => p.status === 'Booked').length;
const totalArea = mohanGardenPlots.reduce((sum, p) => sum + p.area, 0);

function PlotCell({ plot, selected, onSelect }) {
  const isBooked = plot.status === 'Booked';
  return (
    <button
      onClick={() => onSelect(plot)}
      style={{
        position: 'relative',
        aspectRatio: '1',
        border: `1.5px solid ${isBooked ? 'rgba(239,68,68,0.4)' : selected ? '#C9A84C' : 'rgba(201,168,76,0.2)'}`,
        background: isBooked
          ? 'rgba(239,68,68,0.12)'
          : selected
            ? 'rgba(201,168,76,0.15)'
            : 'rgba(201,168,76,0.04)',
        cursor: isBooked ? 'not-allowed' : 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s',
        padding: '4px',
        minWidth: 0,
      }}
      onMouseEnter={e => {
        if (!isBooked) e.currentTarget.style.background = 'rgba(201,168,76,0.12)';
      }}
      onMouseLeave={e => {
        if (!isBooked && !selected) e.currentTarget.style.background = 'rgba(201,168,76,0.04)';
      }}
    >
      <span style={{
        fontSize: '11px',
        fontWeight: 600,
        color: isBooked ? 'rgba(239,68,68,0.7)' : '#C9A84C',
        lineHeight: 1.2,
      }}>
        {plot.no}
      </span>
      <span style={{
        fontSize: '8px',
        color: isBooked ? 'rgba(239,68,68,0.5)' : 'rgba(248,246,240,0.35)',
        lineHeight: 1.2,
        textAlign: 'center',
      }}>
        {plot.area} sqft
      </span>
      {isBooked && (
        <span style={{
          position: 'absolute',
          top: '2px', right: '2px',
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: '#ef4444',
        }} />
      )}
    </button>
  );
}

export default function MohanGardenPage() {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredPlots = filter === 'all'
    ? mohanGardenPlots
    : mohanGardenPlots.filter(p => p.status === (filter === 'available' ? 'Available' : 'Booked'));

  return (
    <main style={{ minHeight: '100vh', background: '#0a0818', paddingTop: '100px' }}>

      {/* Hero */}
      <section style={{
        padding: '80px 80px 60px',
        background: 'linear-gradient(135deg, #120f24, #0a0818)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <Link
            to="/real-estate"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '11px', letterSpacing: '2px', color: '#C9A84C',
              textDecoration: 'none', marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            <ArrowLeft size={14} /> Back to Real Estate
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>
              Gated Community
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(44px, 6vw, 80px)',
            fontWeight: 300, lineHeight: 1.1, marginBottom: '20px',
          }}>
            Mohan <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Garden</em>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <MapPin size={14} style={{ color: '#C9A84C' }} />
            <span style={{ fontSize: '14px', color: 'rgba(248,246,240,0.5)' }}>
              Gated Community — {company.offices.corporate.city}
            </span>
          </div>

          <p style={{ fontSize: '15px', color: 'rgba(248,246,240,0.55)', maxWidth: '600px', lineHeight: 1.8 }}>
            A premium gated community of {mohanGardenPlots.length} residential plots with clear titles,
            panchayat approval, and well-planned layout. Choose your plot and build your dream home.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            display: 'flex', gap: '32px', marginTop: '40px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Total Plots', value: mohanGardenPlots.length, accent: '#F8F6F0' },
            { label: 'Available', value: availableCount, accent: '#4ade80' },
            { label: 'Booked', value: bookedCount, accent: '#ef4444' },
            { label: 'Total Area', value: `${totalArea.toLocaleString()} sqft`, accent: '#C9A84C' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '16px 24px',
              border: '1px solid rgba(248,246,240,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '6px' }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 400, color: s.accent }}>
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Interactive Plot Map */}
      <section style={{ padding: '60px 80px', background: '#0d0b1e' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Filter + Legend */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '32px', flexWrap: 'wrap', gap: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Grid3X3 size={16} style={{ color: '#C9A84C' }} />
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px', fontWeight: 400,
              }}>
                Plot Layout
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Filter buttons */}
              {['all', 'available', 'booked'].map(f => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setSelectedPlot(null); }}
                  style={{
                    padding: '8px 18px',
                    background: filter === f ? 'rgba(201,168,76,0.15)' : 'transparent',
                    border: `1px solid ${filter === f ? 'rgba(201,168,76,0.4)' : 'rgba(248,246,240,0.1)'}`,
                    color: filter === f ? '#C9A84C' : 'rgba(248,246,240,0.45)',
                    fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
                    cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {f === 'all' ? `All (${mohanGardenPlots.length})` : f === 'available' ? `Available (${availableCount})` : `Booked (${bookedCount})`}
                </button>
              ))}

              {/* Legend */}
              <div style={{ display: 'flex', gap: '16px', marginLeft: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }} />
                  <span style={{ fontSize: '10px', color: 'rgba(248,246,240,0.45)', letterSpacing: '1px' }}>Available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)' }} />
                  <span style={{ fontSize: '10px', color: 'rgba(248,246,240,0.45)', letterSpacing: '1px' }}>Booked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plot grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '6px',
            marginBottom: '40px',
          }}>
            {filteredPlots.map(plot => (
              <PlotCell
                key={plot.no}
                plot={plot}
                selected={selectedPlot?.no === plot.no}
                onSelect={setSelectedPlot}
              />
            ))}
          </div>

          {/* Selected plot detail */}
          {selectedPlot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '32px 40px',
                border: '1px solid rgba(201,168,76,0.25)',
                background: 'rgba(201,168,76,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '32px', flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Info size={16} style={{ color: '#C9A84C' }} />
                  <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>
                    Plot Details
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '32px', fontWeight: 400, color: '#F8F6F0', marginBottom: '8px',
                }}>
                  Plot No. {selectedPlot.no}
                </h3>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '4px' }}>Area</div>
                    <div style={{ fontSize: '16px', color: '#F8F6F0' }}>{selectedPlot.area} sqft</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '4px' }}>Status</div>
                    <div style={{
                      fontSize: '13px',
                      color: selectedPlot.status === 'Available' ? '#4ade80' : '#ef4444',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      <span style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: selectedPlot.status === 'Available' ? '#4ade80' : '#ef4444',
                      }} />
                      {selectedPlot.status}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginBottom: '4px' }}>Price</div>
                    <div style={{ fontSize: '16px', color: '#C9A84C' }}>Contact for Price</div>
                  </div>
                </div>
              </div>

              {selectedPlot.status === 'Available' && (
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="tel:8870800708" className="btn-gold" style={{ padding: '12px 24px', fontSize: '10px' }}>
                    <Phone size={13} />
                    <span>Enquire Now</span>
                  </a>
                  <a
                    href={`https://wa.me/918870800708?text=Hello%20BK%20Homes%2C%20I%20am%20interested%20in%20Plot%20No.%20${selectedPlot.no}%20(${selectedPlot.area}%20sqft)%20at%20Mohan%20Garden.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ borderColor: 'rgba(74,222,128,0.4)', color: '#4ade80', padding: '12px 24px', fontSize: '10px' }}
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* All plots table */}
      <section style={{ padding: '60px 80px 80px', background: '#0a0818' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '28px', fontWeight: 400, marginBottom: '32px',
          }}>
            Complete <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Plot List</em>
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                  {['Plot No.', 'Area (sqft)', 'Status', 'Action'].map(h => (
                    <th key={h} style={{
                      padding: '14px 20px', textAlign: 'left',
                      fontSize: '10px', letterSpacing: '3px',
                      color: '#C9A84C', textTransform: 'uppercase',
                      fontWeight: 400,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mohanGardenPlots.map((plot, i) => (
                  <tr
                    key={plot.no}
                    onClick={() => setSelectedPlot(plot)}
                    style={{
                      borderBottom: '1px solid rgba(248,246,240,0.04)',
                      cursor: 'pointer',
                      background: selectedPlot?.no === plot.no ? 'rgba(201,168,76,0.06)' : 'transparent',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = selectedPlot?.no === plot.no ? 'rgba(201,168,76,0.06)' : 'transparent'}
                  >
                    <td style={{ padding: '14px 20px', color: '#F8F6F0', fontWeight: 500 }}>
                      {plot.no}
                    </td>
                    <td style={{ padding: '14px 20px', color: 'rgba(248,246,240,0.7)' }}>
                      {plot.area.toLocaleString()}
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{
                        padding: '4px 12px',
                        fontSize: '10px', letterSpacing: '1px',
                        border: `1px solid ${plot.status === 'Available' ? 'rgba(74,222,128,0.3)' : 'rgba(239,68,68,0.3)'}`,
                        color: plot.status === 'Available' ? '#4ade80' : '#ef4444',
                        textTransform: 'uppercase',
                      }}>
                        {plot.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      {plot.status === 'Available' ? (
                        <a
                          href={`https://wa.me/918870800708?text=Hello%20BK%20Homes%2C%20I%20am%20interested%20in%20Plot%20No.%20${plot.no}%20(${plot.area}%20sqft)%20at%20Mohan%20Garden.`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ fontSize: '11px', color: '#4ade80', textDecoration: 'none', letterSpacing: '1px' }}
                        >
                          Enquire →
                        </a>
                      ) : (
                        <span style={{ fontSize: '11px', color: 'rgba(248,246,240,0.25)', letterSpacing: '1px' }}>&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        margin: '0 80px 80px', padding: '60px',
        border: '1px solid rgba(201,168,76,0.15)',
        background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(10,8,24,0.8))',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '40px', flexWrap: 'wrap',
      }}>
        <div>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, marginBottom: '12px' }}>
            Interested in <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Mohan Garden?</em>
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.5)', lineHeight: 1.7 }}>
            Book a site visit or call us for plot availability and pricing. Limited plots available.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:8870800708" className="btn-gold"><Phone size={14} /><span>Call: 88708 00708</span></a>
          <a
            href="https://wa.me/918870800708?text=Hello%20BK%20Homes%2C%20I%20am%20interested%20in%20Mohan%20Garden%20plots."
            target="_blank" rel="noreferrer"
            className="btn-outline"
            style={{ borderColor: 'rgba(74,222,128,0.4)', color: '#4ade80' }}
          >
            <span>WhatsApp Us</span>
          </a>
        </div>
      </section>
    </main>
  );
}
