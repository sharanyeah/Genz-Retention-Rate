import { useEffect, useRef, useState } from 'react';

interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ChartContainer = ({ children, className = '', delay = 0 }: ChartContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-700 ease-smooth ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {isVisible && children}
    </div>
  );
};