import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StatData {
  label: string;
  value: string;
  accent?: boolean;
}

interface PieSlice {
  label: string;
  percentage: number;
  color: string;
}

export const OrgDetailStatsSection: React.FC = () => {
  const pieData: PieSlice[] = [
    { label: 'Direct Program Costs', percentage: 50, color: '#2D5339' },
    { label: 'Outreach & Operations', percentage: 30, color: '#8FAB92' },
    { label: 'Salaries', percentage: 15, color: '#FF7A5A' },
    { label: 'Admin/Other', percentage: 5, color: '#E0E0E0' }
  ];

  const stats: StatData[] = [
    { label: '₹1.2 Cr raised in FY24', value: 'raised', accent: true },
    { label: 'Impact: 12,400 families supported', value: 'impact' },
    { label: 'Last verified: June 2025', value: 'verified' }
  ];

  const trustScore = 94;

  // Calculate pie chart paths
  const createPieSlices = (data: PieSlice[]) => {
    const size = 120;
    const center = size / 2;
    const radius = 45;
    let cumulativePercentage = 0;

    return data.map((slice) => {
      const startAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2;
      const endAngle = ((cumulativePercentage + slice.percentage) / 100) * 2 * Math.PI - Math.PI / 2;
      
      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);
      
      const largeArc = slice.percentage > 50 ? 1 : 0;
      
      const pathData = [
        `M ${center} ${center}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');

      cumulativePercentage += slice.percentage;
      
      return {
        ...slice,
        path: pathData
      };
    });
  };

  const pieSlices = createPieSlices(pieData);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Organization Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            Lotus Welfare Foundation
          </h1>
          <Badge variant="secondary" className="flex items-center gap-1 bg-green-50 text-green-700 border-green-200">
            <ShieldCheck className="w-4 h-4" />
            Verified
          </Badge>
        </div>
        
        {/* Alert Badge */}
        <Badge variant="outline" className="flex items-center gap-1 text-orange-700 border-orange-200 bg-orange-50 w-fit">
          <AlertTriangle className="w-4 h-4" />
          Spending spike last quarter
        </Badge>
      </div>

      {/* Main Stats Card */}
      <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Pie Chart Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-primary">Donation Breakdown</h2>
              
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* SVG Pie Chart */}
                <div className="flex-shrink-0">
                  <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
                    {pieSlices.map((slice, index) => (
                      <path
                        key={index}
                        d={slice.path}
                        fill={slice.color}
                        stroke="white"
                        strokeWidth="1.5"
                        className="transition-opacity hover:opacity-80"
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Legend */}
                <div className="flex-1 space-y-3">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{item.percentage}%</span> – {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Stats Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-primary">Key Statistics</h2>
              
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <p className={`font-semibold ${
                      stat.accent 
                        ? 'text-2xl text-accent' 
                        : 'text-lg text-foreground'
                    }`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Score */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">Trust Score</span>
                  <span className="text-2xl font-bold text-primary">{trustScore}%</span>
                </div>
                
                <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${trustScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};