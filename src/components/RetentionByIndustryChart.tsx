import { useEffect, useRef } from 'react';

interface RetentionByIndustryChartProps {
  className?: string;
}

export const RetentionByIndustryChart = ({ className = '' }: RetentionByIndustryChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const loadChart = async () => {
      // Dynamic import for Chart.js
      const { Chart, registerables } = await import('chart.js');
      Chart.register(...registerables);

      const ctx = canvasRef.current!.getContext('2d')!;

      // Industry retention data based on the dataset
      const data = {
        labels: ['Corporate', 'Startup', 'Remote Work', 'Government', 'Freelance'],
        datasets: [{
          label: 'Retention Rate (%)',
          data: [68, 45, 72, 82, 38],
          backgroundColor: [
            'hsl(220, 70%, 55%)',   // Blue
            'hsl(142, 69%, 58%)',   // Green  
            'hsl(45, 93%, 58%)',    // Yellow
            'hsl(348, 83%, 65%)',   // Pink/Red
            'hsl(262, 83%, 58%)'    // Purple
          ],
          borderColor: [
            'hsl(220, 70%, 45%)',
            'hsl(142, 69%, 48%)',
            'hsl(45, 93%, 48%)',
            'hsl(348, 83%, 55%)',
            'hsl(262, 83%, 48%)'
          ],
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        }]
      };

      const config = {
        type: 'bar' as const,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              titleColor: '#1a1a1a',
              bodyColor: '#1a1a1a',
              borderColor: 'hsl(220, 70%, 55%)',
              borderWidth: 1,
              cornerRadius: 12,
              displayColors: false,
              titleFont: { size: 14, weight: 'bold' as const },
              bodyFont: { size: 13 },
              padding: 12,
              callbacks: {
                title: function(context: any) {
                  return context[0].label + ' Sector';
                },
                label: function(context: any) {
                  return `Retention Rate: ${context.parsed.y}%`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
                drawBorder: false,
              },
              ticks: {
                color: '#000000',
                font: { size: 12 },
                callback: function(value: any) {
                  return value + '%';
                }
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#000000',
                font: { size: 12, weight: 'normal' as const },
                maxRotation: 0,
              }
            }
          },
          animation: {
            duration: 1500,
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
    <div className={`relative h-80 ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};