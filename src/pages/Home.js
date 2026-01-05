import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Shield, Zap, Brain, DollarSign, BarChart3 } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-logo">
          <TrendingUp size={32} />
          <h1>OptiWealth</h1>
        </div>
        <nav className="home-nav">
          <button onClick={() => navigate('/login')} className="btn-secondary">Sign In</button>
          <button onClick={() => navigate('/signup')} className="btn-primary">Get Started</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AI-Powered Wealth Management for Everyone</h1>
          <p className="hero-subtitle">
            Automate your finances, optimize investments, and achieve your financial goals with intelligent AI assistance.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/signup')} className="btn-hero-primary">
              Start Free Trial
            </button>
            <button onClick={() => navigate('/login')} className="btn-hero-secondary">
              Sign In
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Powerful Features to Transform Your Finances</h2>
        <div className="features-grid">
          <FeatureCard 
            icon={<Brain />}
            title="AI-Powered Autopilot Investing"
            description="Let artificial intelligence optimize your portfolio automatically based on your risk tolerance and financial goals."
          />
          <FeatureCard 
            icon={<DollarSign />}
            title="Bill Optimization"
            description="Automatically identify savings opportunities and switch to better deals on insurance, subscriptions, and utilities."
          />
          <FeatureCard 
            icon={<Zap />}
            title="Smart Rule Engine"
            description="Set custom automation rules for savings, spending alerts, and automatic investment rebalancing."
          />
          <FeatureCard 
            icon={<BarChart3 />}
            title="Real-Time Analytics"
            description="Track your entire financial portfolio in one place with beautiful, actionable insights."
          />
          <FeatureCard 
            icon={<Shield />}
            title="Bank-Level Security"
            description="Your data is protected with 256-bit encryption and multi-factor authentication."
          />
          <FeatureCard 
            icon={<TrendingUp />}
            title="Goal Tracking"
            description="Set and monitor financial goals with AI-powered recommendations to stay on track."
          />
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Financial Future?</h2>
        <p>Join thousands of users already optimizing their wealth with OptiWealth.</p>
        <button onClick={() => navigate('/signup')} className="btn-cta">
          Get Started Free
        </button>
      </section>

      <footer className="home-footer">
        <p>© 2026 OptiWealth. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Home;
