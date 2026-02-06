import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquareText, 
  Shield, 
  Zap, 
  Database, 
  GitBranch 
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Causal AI Engine',
    description: 'Advanced machine learning models that go beyond correlation to identify true causal relationships in conversational data.',
  },
  {
    icon: MessageSquareText,
    title: 'Multi-Turn Context',
    description: 'Maintains contextual consistency across multiple interaction turns for coherent, evolving analysis sessions.',
  },
  {
    icon: Shield,
    title: 'Evidence-Based',
    description: 'Every insight is backed by traceable evidence from your conversation transcripts, ensuring transparency.',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Analyze thousands of conversations in seconds with our optimized parallel processing architecture.',
  },
  {
    icon: Database,
    title: 'Scalable Infrastructure',
    description: 'Built to handle enterprise-scale data volumes with distributed computing and efficient storage.',
  },
  {
    icon: GitBranch,
    title: 'Pattern Discovery',
    description: 'Automatically identifies recurring conversational structures and their associations with outcomes.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for scale, designed for insight. EchoTrace provides the tools 
            you need to transform conversational data into actionable intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:glow-box transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <feature.icon className="text-primary group-hover:scale-110 transition-transform" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
