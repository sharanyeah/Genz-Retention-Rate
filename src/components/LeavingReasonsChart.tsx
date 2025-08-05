import { useEffect, useRef } from 'react';

interface LeavingReasonsChartProps {
  className?: string;
}

export const LeavingReasonsChart = ({ className = '' }: LeavingReasonsChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const loadChart = async () => {
      const { Chart, registerables } = await import('chart.js');
      Chart.register(...registerables);

      const ctx = canvasRef.current!.getContext('2d')!;

      // Top 5 reasons from the dataset analysis
      const data = {
        labels: [
          'Lack of Growth',
          'Poor Management',
          'Work-Life Balance',
          'Low Compensation',
          'Toxic Culture'
        ],
        datasets: [{
          data: [28, 22, 18, 16, 16],
          backgroundColor: [
            'hsl(220, 70%, 55%)',   // Blue
            'hsl(142, 69%, 58%)',   // Green
            'hsl(45, 93%, 58%)',    // Yellow
            'hsl(348, 83%, 65%)',   // Pink/Red
            'hsl(262, 83%, 58%)'    // Purple
          ],
          borderColor: '#ffffff',
          borderWidth: 3,
          hoverOffset: 12
        }]
      };

      const config = {
        type: 'doughnut' as const,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              position: 'bottom' as const,
              labels: {
                color: '#000000',
                font: { size: 13, weight: 'normal' as const },
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle',
              }
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              titleColor: '#1a1a1a',
              bodyColor: '#1a1a1a',
              borderColor: 'hsl(220, 70%, 55%)',
              borderWidth: 1,
              cornerRadius: 12,
              displayColors: true,
              titleFont: { size: 14, weight: 'bold' as const },
              bodyFont: { size: 13 },
              padding: 12,
              callbacks: {
                label: function(context: any) {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  return `${label}: ${value}%`;
                }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 2000,
            easing: 'easeOutQuart' as const,
          }
        }
      };

      chartRef.current = new Chart(ctx, config);
    };

    loadChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={`relative h-96 ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};