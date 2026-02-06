import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Loader2, MessageSquare, FileText, TrendingUp } from 'lucide-react';

const QueryAnalyzerSection = () => {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    explanation: string;
    evidence: string[];
    confidence: number;
  }>(null);

  const exampleQueries = [
    "Why do customers escalate after long hold times?",
    "What patterns lead to refund requests?",
    "How does agent tone affect resolution rates?",
  ];

  const handleAnalyze = () => {
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate analysis
    setTimeout(() => {
      setResult({
        explanation: "Analysis reveals that extended hold times (>5 minutes) correlate with a 3.2x increase in escalation probability. Key contributing factors include: initial frustration expression, repeated status inquiries, and declining sentiment scores throughout the conversation.",
        evidence: [
          "Call ID #4521: Customer expressed frustration at 5:32 mark after 6-minute hold",
          "Call ID #7834: Escalation triggered following 3rd status inquiry",
          "Pattern: 78% of escalations show sentiment decline >40% from baseline",
        ],
        confidence: 94.2,
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section id="query-analyzer" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Query Analyzer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask natural language questions about your conversational data and receive 
            causally grounded explanations with supporting evidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 glow-box"
        >
          {/* Query Input */}
          <div className="relative mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question about your conversational data..."
              className="w-full bg-muted/50 border border-border rounded-xl px-5 py-4 pr-32 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <Button
              variant="hero"
              size="lg"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={handleAnalyze}
              disabled={isAnalyzing || !query.trim()}
            >
              {isAnalyzing ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Search size={20} />
              )}
              <span className="hidden sm:inline">Analyze</span>
            </Button>
          </div>

          {/* Example Queries */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-muted-foreground">Try:</span>
            {exampleQueries.map((eq) => (
              <button
                key={eq}
                onClick={() => setQuery(eq)}
                className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {eq}
              </button>
            ))}
          </div>

          {/* Results */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  <TrendingUp size={14} />
                  {result.confidence}% Confidence
                </div>
              </div>

              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <div className="flex items-start gap-3">
                  <MessageSquare className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Causal Explanation</h4>
                    <p className="text-muted-foreground leading-relaxed">{result.explanation}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <div className="flex items-start gap-3">
                  <FileText className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Supporting Evidence</h4>
                    <ul className="space-y-2">
                      {result.evidence.map((e, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="font-mono text-xs">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QueryAnalyzerSection;
