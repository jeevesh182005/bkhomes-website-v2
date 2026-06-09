import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Premium door-reveal transition: two panels slide apart like opening doors
export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        {/* Left door panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          exit={{ x: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed', top: 0, left: 0,
            width: '50%', height: '100vh',
            background: 'linear-gradient(135deg, #0a0818, #1a1535)',
            zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
            paddingRight: '20px',
            borderRight: '1px solid rgba(201,168,76,0.2)',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
            transition={{ duration: 0.7, times: [0, 0.2, 0.8, 1] }}
            style={{ textAlign: 'right' }}
          >
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px', fontWeight: 300,
              color: '#C9A84C', letterSpacing: '4px', lineHeight: 1,
            }}>BK</div>
          </motion.div>
        </motion.div>

        {/* Right door panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          exit={{ x: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed', top: 0, right: 0,
            width: '50%', height: '100vh',
            background: 'linear-gradient(225deg, #0a0818, #1a1535)',
            zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            paddingLeft: '20px',
            borderLeft: '1px solid rgba(201,168,76,0.2)',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
            transition={{ duration: 0.7, times: [0, 0.2, 0.8, 1] }}
          >
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px', fontWeight: 300,
              color: '#C9A84C', letterSpacing: '4px', lineHeight: 1,
            }}>HOMES</div>
          </motion.div>
        </motion.div>

        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
