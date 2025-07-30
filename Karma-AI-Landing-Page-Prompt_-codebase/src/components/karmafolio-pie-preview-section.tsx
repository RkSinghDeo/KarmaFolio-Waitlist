import { Badge } from "@/components/ui/badge";

export const KarmafolioPiePreviewSection = () => {
  // Sample data for the pie chart
  const pieData = [
    { label: "Health", value: 40, color: "var(--color-accent)" },
    { label: "Education", value: 30, color: "var(--color-primary)" },
    { label: "Environment", value: 30, color: "var(--color-sage)" }
  ];

  // Calculate cumulative percentages for pie slices
  let cumulative = 0;
  const pieSlices = pieData.map(item => {
    const startAngle = cumulative;
    cumulative += item.value;
    return {
      ...item,
      startAngle,
      endAngle: cumulative
    };
  });

  // Create SVG path for pie slice
  const createPieSlice = (startAngle: number, endAngle: number, radius = 80) => {
    const startAngleRad = (startAngle / 100) * 2 * Math.PI - Math.PI / 2;
    const endAngleRad = (endAngle / 100) * 2 * Math.PI - Math.PI / 2;
    
    const x1 = 100 + radius * Math.cos(startAngleRad);
    const y1 = 100 + radius * Math.sin(startAngleRad);
    const x2 = 100 + radius * Math.cos(endAngleRad);
    const y2 = 100 + radius * Math.sin(endAngleRad);
    
    const largeArc = endAngle - startAngle > 50 ? 1 : 0;
    
    return `M 100 100 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  // Sample organizations
  const sampleOrgs = [
    {
      name: "GreenRoots",
      trustScore: 94,
      tier: "Grassroots"
    },
    {
      name: "WaterForAll",
      trustScore: 87,
      tier: "Mid-Cap"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-[var(--color-sage)]/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-display)]">
            Here's What Your Karmafolio Might Look Like
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            See how your impact is distributed across causes and discover organizations 
            making real change in the areas you care about most.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Pie Chart Section */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-64 h-64 mb-8">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {pieSlices.map((slice, index) => (
                  <path
                    key={index}
                    d={createPieSlice(slice.startAngle, slice.endAngle)}
                    fill={slice.color}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                ))}
              </svg>
            </div>
            
            {/* Legend */}
            <div className="space-y-3">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-[var(--color-foreground)] min-w-0">
                    {item.label}
                  </span>
                  <span className="text-sm text-[var(--color-muted-foreground)] font-medium">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Organization Cards Section */}
          <div className="flex-1 w-full">
            <div className="space-y-4">
              {sampleOrgs.map((org, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                      {org.name}
                    </h3>
                    <Badge variant="secondary" className="ml-2">
                      {org.tier}
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-[var(--color-muted-foreground)]">
                      Trust Score:
                    </span>
                    <span className="ml-2 text-sm font-semibold text-[var(--color-accent)]">
                      {org.trustScore}%
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Add third card for better visual balance */}
              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                    EcoAction
                  </h3>
                  <Badge variant="secondary" className="ml-2">
                    Enterprise
                  </Badge>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[var(--color-muted-foreground)]">
                    Trust Score:
                  </span>
                  <span className="ml-2 text-sm font-semibold text-[var(--color-accent)]">
                    92%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-12">
          <p className="italic text-[var(--color-sage)] text-base">
            Your personalized Karmafolio, track impact, auto-pause risky orgs, and stay in control.
          </p>
        </div>
      </div>
    </section>
  );
};