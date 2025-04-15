import { useEffect, useRef, useState } from 'react';


const Cursor = () => {
    
  const dotMain = useRef();
  const dotLeft = useRef();
  const dotRight = useRef();
  const cursorRef = useRef();


  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);
  

  

  
  useEffect(() => {
    const { x, y } = coords;
    const scale = isHovering ? 1.5 : 1;
  
    if (dotMain.current) {
      dotMain.current.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    }
    if (dotLeft.current) {
      dotLeft.current.style.transform = `translate(${x - 10}px, ${y + 8}px)`;
    }
    if (dotRight.current) {
      dotRight.current.style.transform = `translate(${x + 10}px, ${y + 8}px)`;
    }
  }, [coords, isHovering]);
  
  

  useEffect(() => {
    const targets = document.querySelectorAll('a, button, .project-image-container, .menu-bar');
  
    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);
  
    targets.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
  
    return () => {
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);


  
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.toggle('cursor-hover', isHovering);
    }
  }, [isHovering]);

  return (
    <div id="cursor" ref={cursorRef}>
      <div ref={dotMain} className="dot dot-main"></div>
      <div ref={dotLeft} className="dot dot-left"></div>
      <div ref={dotRight} className="dot dot-right"></div>
    </div>
  );
};

export default Cursor;
