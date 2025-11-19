import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography } from '../atoms';

export const Header = () => {
  const [clickCount, setClickCount] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (newCount === 5) {
      if (location.pathname === '/analytics') {
        navigate('/');
      } else {
        navigate('/analytics');
      }
      setClickCount(0);
    } else {
      timeoutRef.current = setTimeout(() => {
        setClickCount(0);
      }, 2000);
    }
  };

  return (
    <header 
      className="w-full bg-white flex items-center justify-center py-4 shadow-[0_1px_0_0_#0ab463] md:shadow-[0_1px_0_0_#dadada] relative z-50"
    >
      <div onClick={handleClick} className="cursor-pointer select-none">
        <Typography type="title" variant="secondary">SWStarter</Typography>
      </div>
    </header>
  );
};
