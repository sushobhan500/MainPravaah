import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

const analyticsData = [
  {
    icon: BarChart3,
    title: 'Conversation Metrics',
    value: '2.4M',
    change: '+12.3%',
    description: 'Total conversations analyzed this month',
  },
  {
    icon: TrendingUp,
    title: 'Pattern Detection',
    value: '847',
    change: '+28.5%',
    description: 'Unique causal patterns identified',
  },
  {
    icon: PieChart,
    title: 'Event Correlation',
    value: '94.2%',
    change: '+3.1%',
    description: 'Average accuracy in event prediction',
  },
  {
    icon: Activity,
    title: 'Real-time Insights',
    value: '156ms',
    change: '-18.2%',
    description: 'Average query response time',
  },
];

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track performance metrics, monitor patterns, and gain deep insights 
            into your conversational data ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <span className={`text-sm font-medium ${
                  item.change.startsWith('+') ? 'text-green-400' : 'text-primary'
                }`}>
                  {item.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{item.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-card p-8"
        >
          <h3 className="text-xl font-semibold mb-6">Pattern Detection Over Time</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                className="w-full max-w-12 bg-gradient-to-t from-primary to-secondary rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-foreground bg-card px-2 py-1 rounded">
                  {height}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-around mt-4 text-xs text-muted-foreground">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
