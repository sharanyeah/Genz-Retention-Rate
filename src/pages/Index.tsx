import { ChartContainer } from '@/components/ChartContainer';
import { RetentionByIndustryChart } from '@/components/RetentionByIndustryChart';
import { LeavingReasonsChart } from '@/components/LeavingReasonsChart';
import { RetentionTrendChart } from '@/components/RetentionTrendChart';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 py-section relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero font-bold text-foreground mb-6 leading-tight">
              Gen Z Retention Trends Analysis
              <span className="block text-2xl font-medium text-muted-foreground mt-4">2025 Report</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive analysis of Generation Z workforce retention patterns, 
              departure reasons, and industry-specific trends based on extensive research data.
            </p>
          </div>
        </div>
      </header>

      {/* Key Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">54%</div>
              <div className="text-muted-foreground">Current Retention Rate</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">24%</div>
              <div className="text-muted-foreground">5-Year Decline</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">2.1</div>
              <div className="text-muted-foreground">Avg Years in Role</div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-section">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            
            {/* Retention by Industry */}
            <ChartContainer delay={200}>
              <div className="bg-card rounded-3xl p-card shadow-card">
                <div className="mb-8">
                  <h2 className="text-h2 font-semibold text-foreground mb-4">
                    Retention Rates by Industry
                  </h2>
                  <p className="text-muted-foreground">
                    Government positions show highest retention, while freelance work shows the lowest retention rates among Gen Z workers.
                  </p>
                </div>
                <RetentionByIndustryChart />
              </div>
            </ChartContainer>

            {/* Leaving Reasons */}
            <ChartContainer delay={400}>
              <div className="bg-card rounded-3xl p-card shadow-card">
                <div className="mb-8">
                  <h2 className="text-h2 font-semibold text-foreground mb-4">
                    Top 5 Reasons for Leaving
                  </h2>
                  <p className="text-muted-foreground">
                    Lack of career growth opportunities emerges as the primary driver of Gen Z job departures.
                  </p>
                </div>
                <LeavingReasonsChart />
              </div>
            </ChartContainer>

            {/* Retention Trend */}
            <ChartContainer delay={600}>
              <div className="bg-card rounded-3xl p-card shadow-card">
                <div className="mb-8">
                  <h2 className="text-h2 font-semibold text-foreground mb-4">
                    Retention Rate Trend (2020-2025)
                  </h2>
                  <p className="text-muted-foreground">
                    A consistent decline in Gen Z retention rates highlights the urgent need for workplace adaptation strategies.
                  </p>
                </div>
                <RetentionTrendChart />
              </div>
            </ChartContainer>

            {/* Key Insights */}
            <ChartContainer delay={800}>
              <div className="bg-gradient-soft rounded-3xl p-card">
                <h2 className="text-h2 font-semibold text-foreground mb-8 text-center">
                  Key Insights & Recommendations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-chart-1 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Clear Career Pathways</h3>
                        <p className="text-muted-foreground text-sm">Implement transparent promotion roadmaps and skill development programs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-chart-2 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Flexible Work Arrangements</h3>
                        <p className="text-muted-foreground text-sm">Remote and hybrid options show 72% retention vs 68% traditional office</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Mental Health Support</h3>
                        <p className="text-muted-foreground text-sm">Comprehensive wellness programs reduce burnout-related departures</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-chart-4 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Competitive Compensation</h3>
                        <p className="text-muted-foreground text-sm">Regular market-rate reviews and transparent salary bands</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-chart-5 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Leadership Training</h3>
                        <p className="text-muted-foreground text-sm">Invest in manager development to reduce toxic culture incidents</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-chart-6 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Purpose-Driven Work</h3>
                        <p className="text-muted-foreground text-sm">Connect daily tasks to meaningful company mission and values</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ChartContainer>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 mt-section">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Gen Z Retention Analysis. Data compiled from comprehensive workforce surveys and HR analytics.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with Chart.js • Designed for modern workforce insights
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
