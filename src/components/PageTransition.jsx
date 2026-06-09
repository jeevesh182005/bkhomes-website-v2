import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const INTRO_KEY = 'bk_intro_played';

export default function PageTransition({ children }) {
  const [show, setShow] = useState(() => !sessionStorage.getItem(INTRO_KEY));

  useEffect(() => {
    if (show) {
      sessionStorage.setItem(INTRO_KEY, '1');
    }
  }, [show]);

  if (!show) return <>{children}</>;

  return (
    <>
      {/* Left door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '50%', height: '100vh',
          background: 'linear-gradient(135deg, #0a0818, #1a1535)',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          paddingRight: '24px',
          borderRight: '1px solid rgba(201,168,76,0.2)',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.9] }}
          transition={{ duration: 1, times: [0, 0.25, 0.75, 1] }}
          style={{ textAlign: 'right' }}
        >
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '56px', fontWeight: 300,
            color: '#C9A84C', letterSpacing: '6px', lineHeight: 1,
          }}>BK</div>
        </motion.div>
      </motion.div>

      {/* Right door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        style={{
          position: 'fixed', top: 0, right: 0,
          width: '50%', height: '100vh',
          background: 'linear-gradient(225deg, #0a0818, #1a1535)',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          paddingLeft: '24px',
          borderLeft: '1px solid rgba(201,168,76,0.2)',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.9] }}
          transition={{ duration: 1, times: [0, 0.25, 0.75, 1] }}
        >
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '56px', fontWeight: 300,
            color: '#C9A84C', letterSpacing: '6px', lineHeight: 1,
          }}>HOMES</div>
        </motion.div>
      </motion.div>

      {/* Content fades in after doors open */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        onAnimationComplete={() => setShow(false)}
      >
        {children}
      </motion.div>
    </>
  );
}
