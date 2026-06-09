import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Phone, Hop as Home, Building2, Maximize2, Shield, TreePine } from 'lucide-react';
import { company, mohanGardenPlots } from '../data/projects';

const availableCount = mohanGardenPlots.filter(p => p.status === 'Available').length;

const listings = [
  {
    id: 're-1', name: 'BK AMS — 3BHK Flat', type: 'Apartment',
    location: 'Sri Padmavathi Nagar, Tiruvallur',
    area: '990 sqft', uds: '400 sqft',
    status: 'Ongoing', facing: 'East',
    price: 'Contact for Price',
    features: ['Lift', 'Covered Parking', 'East Facing', 'Balcony'],
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    projectId: 'bk-ams',
  },
  {
    id: 're-2', name: 'BK Surya — 3BHK Flat', type: 'Apartment',
    location: 'Sri Padmavathi Nagar, Tiruvallur',
    area: '990 sqft', uds: '400 sqft',
    status: 'Ongoing', facing: 'East',
    price: 'Contact for Price',
    features: ['Lift', 'Covered Parking', 'Balcony', 'Utility'],
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    projectId: 'bk-surya',
  },
  {
    id: 're-3', name: 'BK Surya — 4BHK Duplex (1980 sqft)', type: 'Apartment',
    location: 'Sri Padmavathi Nagar, Tiruvallur',
    area: '1980 sqft', uds: '800 sqft',
    status: 'Ongoing', facing: 'East',
    price: 'Contact for Price',
    features: ['Ground Floor', 'Spacious Living', 'Balcony', 'Utility Room'],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    projectId: 'bk-surya',
  },
  {
    id: 're-4', name: 'BK Skandha South — Individual Villa', type: 'Villa',
    location: 'Poonthottam Nagar, Tiruvallur',
    area: '1145 sqft', plotSize: '25×50 ft',
    status: 'Ongoing', facing: 'South',
    price: 'Contact for Price',
    features: ['2 Bedrooms', 'Living + Dining', 'Portico', 'Private Compound'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    projectId: 'bk-skandha-south',
  },
  {
    id: 're-5', name: 'BK Chandra — 3BHK Apartment', type: 'Apartment',
    location: 'Vivekananda Salai, Tiruvallur',
    area: '990 sqft',
    status: 'Ongoing', facing: 'East',
    price: 'Contact for Price',
    features: ['High-Rise', 'Lift', 'Premium Location', 'Near Highway'],
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    projectId: 'bk-chandra',
  },
];

const typeFilters = ['All', 'Apartment', 'Villa', 'Plot'];

export default function RealEstatePage() {
  const [activeType, setActiveType] = useState('All');
  const filtered = listings.filter(l => activeType === 'All' || l.type === activeType);

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
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%',
          background: 'radial-gradient(ellipse at right center, rgba(68,49,153,0.15), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Real Estate Division</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '24px' }}>
            Find Your<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Perfect Property</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(248,246,240,0.55)', maxWidth: '560px', lineHeight: 1.8, marginBottom: '48px' }}>
            Apartments, individual villas, and premium residential plots — buy, sell, or invest with BK Homes' trusted real estate services. Full legal support included.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {[{ icon: <Building2 size={18} />, label: 'Apartments' }, { icon: <Home size={18} />, label: 'Individual Villas' }, { icon: <Maximize2 size={18} />, label: 'Residential Plots' }].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(248,246,240,0.6)', fontSize: '14px' }}>
                <span style={{ color: '#C9A84C' }}>{f.icon}</span>{f.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mohan Garden — Featured Gated Community */}
      <section style={{
        padding: '60px 80px',
        background: '#0d0b1e',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '10px', letterSpacing: '5px', color: '#C9A84C', textTransform: 'uppercase' }}>Featured</span>
          </div>

          <Link to="/real-estate/mohan-garden" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1.2fr 1fr',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(10,8,24,0.9))',
              overflow: 'hidden',
              transition: 'border-color 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'}
            >
              {/* Image side */}
              <div style={{ position: 'relative', minHeight: '360px' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80)',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, transparent 40%, rgba(10,8,24,0.9) 100%)',
                }} />
                <div style={{
                  position: 'absolute', top: '20px', left: '20px',
                  display: 'flex', gap: '8px',
                }}>
                  <span style={{
                    padding: '6px 14px',
                    background: 'rgba(201,168,76,0.2)',
                    border: '1px solid rgba(201,168,76,0.5)',
                    fontSize: '9px', letterSpacing: '2px',
                    color: '#C9A84C', textTransform: 'uppercase',
                  }}>Gated Community</span>
                </div>
              </div>

              {/* Content side */}
              <div style={{ padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Shield size={16} style={{ color: '#C9A84C' }} />
                  <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase' }}>
                    Premium Gated Community
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '40px', fontWeight: 300,
                  color: '#F8F6F0', marginBottom: '8px',
                }}>
                  Mohan <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Garden</em>
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <MapPin size={12} style={{ color: '#C9A84C' }} />
                  <span style={{ fontSize: '12px', color: 'rgba(248,246,240,0.5)' }}>Tiruvallur</span>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.55)', lineHeight: 1.8, marginBottom: '28px' }}>
                  {mohanGardenPlots.length} residential plots with clear titles and panchayat approval.
                  {availableCount} plots still available. View the interactive plot map to check availability.
                </p>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
                  {[
                    { icon: <Maximize2 size={14} />, label: `${mohanGardenPlots.length} Plots` },
                    { icon: <TreePine size={14} />, label: 'Gated Community' },
                    { icon: <Shield size={14} />, label: 'Clear Titles' },
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(248,246,240,0.6)', fontSize: '12px' }}>
                      <span style={{ color: '#C9A84C' }}>{f.icon}</span>{f.label}
                    </div>
                  ))}
                </div>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontSize: '11px', letterSpacing: '3px', color: '#C9A84C',
                  textTransform: 'uppercase',
                }}>
                  View Plot Map <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Filter bar */}
      <section style={{ padding: '24px 80px', background: '#0d0b1e', borderBottom: '1px solid rgba(248,246,240,0.05)', display: 'flex', alignItems: 'center', gap: '16px', position: 'sticky', top: '80px', zIndex: 50 }}>
        <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(248,246,240,0.35)', textTransform: 'uppercase', marginRight: '8px' }}>Filter:</span>
        {typeFilters.map(f => (
          <button key={f} onClick={() => setActiveType(f)} style={{ padding: '8px 20px', background: activeType === f ? '#443199' : 'none', border: `1px solid ${activeType === f ? '#443199' : 'rgba(248,246,240,0.1)'}`, color: activeType === f ? '#F8F6F0' : 'rgba(248,246,240,0.45)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'Outfit, sans-serif' }}>{f}</button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'rgba(248,246,240,0.3)' }}>{filtered.length} listings</span>
      </section>

      {/* Listings grid */}
      <section style={{ padding: '60px 80px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
          {filtered.map((listing, i) => <ListingCard key={listing.id} listing={listing} index={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: '0 80px 80px', padding: '60px', border: '1px solid rgba(201,168,76,0.15)', background: 'linear-gradient(135deg, rgba(68,49,153,0.15), rgba(10,8,24,0.8))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, marginBottom: '12px' }}>
            Don't see what you're <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>looking for?</em>
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(248,246,240,0.5)', lineHeight: 1.7 }}>We have more off-market listings. Call us or WhatsApp — we'll find you the right property.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:8870800708" className="btn-gold"><Phone size={14} /><span>Call: 88708 00708</span></a>
          <a href="https://wa.me/918870800708" target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: 'rgba(74,222,128,0.4)', color: '#4ade80' }}><span>WhatsApp Us</span><ArrowRight size={14} /></a>
        </div>
      </section>
    </main>
  );
}

function ListingCard({ listing, index }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: '#120f24', border: `1px solid ${hov ? 'rgba(201,168,76,0.25)' : 'rgba(248,246,240,0.07)'}`, overflow: 'hidden', transition: 'border-color 0.3s' }}
    >
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${listing.img})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,24,0.85) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px' }}>
          <span style={{ padding: '4px 12px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', fontSize: '9px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase' }}>{listing.status}</span>
          <span style={{ padding: '4px 12px', background: 'rgba(10,8,24,0.7)', border: '1px solid rgba(248,246,240,0.1)', fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.6)', textTransform: 'uppercase' }}>{listing.type}</span>
        </div>
      </div>
      <div style={{ padding: '28px' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#F8F6F0', marginBottom: '10px', lineHeight: 1.3 }}>{listing.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
          <MapPin size={11} style={{ color: '#C9A84C' }} />
          <span style={{ fontSize: '12px', color: 'rgba(248,246,240,0.45)' }}>{listing.location}</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {[{ label: 'Area', value: listing.area }, ...(listing.plotSize ? [{ label: 'Plot', value: listing.plotSize }] : []), ...(listing.uds ? [{ label: 'UDS', value: listing.uds }] : []), { label: 'Facing', value: listing.facing }].map((spec, i) => (
            <div key={i} style={{ padding: '7px 12px', background: 'rgba(68,49,153,0.08)', border: '1px solid rgba(68,49,153,0.15)' }}>
              <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.3)', textTransform: 'uppercase', marginBottom: '2px' }}>{spec.label}</div>
              <div style={{ fontSize: '12px', color: '#F8F6F0' }}>{spec.value}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {listing.features.map(f => <span key={f} style={{ padding: '4px 10px', fontSize: '11px', color: 'rgba(248,246,240,0.5)', border: '1px solid rgba(248,246,240,0.08)' }}>{f}</span>)}
        </div>
        <div style={{ height: '1px', background: 'rgba(248,246,240,0.06)', marginBottom: '20px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,246,240,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Price</div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: '#C9A84C' }}>{listing.price}</div>
          </div>
          <a href="tel:8870800708" className="btn-outline" style={{ padding: '10px 20px', fontSize: '10px' }}><Phone size={12} /><span>Enquire</span></a>
        </div>
      </div>
    </motion.div>
  );
}
