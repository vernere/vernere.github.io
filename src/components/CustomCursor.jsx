import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
    const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setDotPosition({ x: event.clientX, y: event.clientY });
        };

        const updateRingPosition = () => {
            setRingPosition((prevPosition) => {
                const dx = dotPosition.x - prevPosition.x;
                const dy = dotPosition.y - prevPosition.y;
                return {
                    x: prevPosition.x + dx * 0.5, // Increase the speed
                    y: prevPosition.y + dy * 0.5, // Increase the speed
                };
            });
            requestAnimationFrame(updateRingPosition);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('.hover-target').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });
        requestAnimationFrame(updateRingPosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('.hover-target').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [dotPosition]);

    return (
        <div>
            <div className="custom-cursor-dot" style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}></div>
            <div className={`custom-cursor-ring ${isHovering ? 'hover' : ''}`} style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}></div>
        </div>
    );
};

export default CustomCursor;