import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold gradient-text">EchoTrace</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Transforming conversational data into actionable insights through 
              advanced causal analysis and AI-powered reasoning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#query-analyzer" className="text-muted-foreground hover:text-primary transition-colors">
                  Query Analyzer
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© 2026 EchoTrace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span>Privacy Policy</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
