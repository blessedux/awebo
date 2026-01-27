'use client';

import { useEffect, useState } from 'react';

interface HorizontalGridProps {
  items: number;
  className?: string;
}

export default function HorizontalGrid({ items, className = '' }: HorizontalGridProps) {
  const [gridCols, setGridCols] = useState('repeat(4, minmax(0, 1fr))');
  
  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth >= 1024) {
        setGridCols(`repeat(${items}, minmax(0, 1fr))`);
      } else if (window.innerWidth >= 768) {
        setGridCols('repeat(4, minmax(0, 1fr))');
      } else if (window.innerWidth >= 640) {
        setGridCols('repeat(3, minmax(0, 1fr))');
      } else {
        setGridCols('repeat(2, minmax(0, 1fr))');
      }
    };
    
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, [items]);
  
  return (
    <div 
      className={`grid gap-4 ${className}`}
      style={{ gridTemplateColumns: gridCols }}
    >
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg h-24 flex items-center justify-center"
        >
          <span className="text-gray-400 text-sm">{index + 1}</span>
        </div>
      ))}
    </div>
  );
}
