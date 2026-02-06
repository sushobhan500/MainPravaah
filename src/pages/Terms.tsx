import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using EchoTrace services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
    },
    {
      title: '2. Description of Service',
      content: 'EchoTrace provides AI-powered conversational data analysis tools, including query-driven causal explanation, multi-turn context-aware handling, and evidence-based insights extraction.',
    },
    {
      title: '3. User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account credentials, ensuring the accuracy of provided data, and complying with all applicable laws and regulations when using our services.',
    },
    {
      title: '4. Data Privacy',
      content: 'We are committed to protecting your data privacy. All conversational data processed through EchoTrace is encrypted and handled in accordance with industry-standard security practices. We do not share your data with third parties without explicit consent.',
    },
    {
      title: '5. Intellectual Property',
      content: 'All content, features, and functionality of EchoTrace are owned by us and are protected by international copyright, trademark, and other intellectual property laws.',
    },
    {
      title: '6. Limitation of Liability',
      content: 'EchoTrace provides analytical insights based on the data provided. While we strive for accuracy, we cannot guarantee that all causal relationships identified are definitive. Users should exercise judgment when acting on insights provided.',
    },
    {
      title: '7. Modifications',
      content: 'We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or through the platform. Continued use after modifications constitutes acceptance of updated terms.',
    },
    {
      title: '8. Termination',
      content: 'We may terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.',
    },
    {
      title: '9. Contact',
      content: 'For questions about these Terms and Conditions, please contact us at legal@echotrace.ai or through our Contact page.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={18} />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Have questions about our terms?
            </p>
            <Link to="/contact">
              <Button variant="hero">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
