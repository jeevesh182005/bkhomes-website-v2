import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => { cursor.style.transform += ' scale(2)'; follower.style.opacity = '0.5'; };
    const onLeave = () => { follower.style.opacity = '1'; };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div ref={cursorRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: '8px', height: '8px', borderRadius: '50%',
        background: '#C9A84C', pointerEvents: 'none',
        transition: 'transform 0.1s ease',
        willChange: 'transform',
      }} />
      <div ref={followerRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998,
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.5)', pointerEvents: 'none',
        willChange: 'transform',
      }} />
    </>
  );
}
