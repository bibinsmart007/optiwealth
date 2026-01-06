import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: '📊',
      title: 'AI-Powered Autopilot Investing',
      description: 'Let artificial intelligence optimize your portfolio automatically based on your risk tolerance and financial goals.'
    },
    {
      icon: '💰',
      title: 'Bill Optimization',
      description: 'Automatically identify savings opportunities and switch to better deals on insurance, subscriptions, and utilities.'
    },
    {
      icon: '⚡',
      title: 'Smart Rule Engine',
      description: 'Set custom automation rules for savings, spending alerts, and automatic investment rebalancing.'
    },
    {
      icon: '📈',
      title: 'Real-Time Analytics',
      description: 'Track your entire financial portfolio in one place with beautiful, actionable insights.'
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your data is protected with 256-bit encryption and multi-factor authentication.'
    },
    {
      icon: '🎯',
      title: 'Goal Tracking',
      description: 'Set and monitor financial goals with AI-powered recommendations to stay on track.'
    }
  ];

  return (
    <div style={styles.pageContainer}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>📊</span>
            <span style={styles.logoText}>OptiWealth</span>
          </div>
          <div style={styles.navButtons}>
            <button onClick={() => navigate('/login')} style={styles.btnSecondary}>
              Sign In
            </button>
            <button onClick={() => navigate('/signup')} style={styles.btnPrimary}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            AI-Powered Wealth Management
            <span style={styles.heroTitleAccent}> for Everyone</span>
          </h1>
          <p style={styles.heroDescription}>
            Automate your finances, optimize investments, and achieve your financial goals 
            with intelligent AI assistance. Start managing your wealth on autopilot today.
          </p>
          <div style={styles.heroCTA}>
            <button onClick={() => navigate('/signup')} style={styles.btnHero}>
              Start Free Trial
            </button>
            <button onClick={() => navigate('/login')} style={styles.btnOutline}>
              Watch Demo →
            </button>
          </div>
          <p style={styles.trustText}>
            ✓ No credit card required  ✓ 14-day free trial  ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Powerful Features to Transform Your Finances</h2>
            <p style={styles.sectionDescription}>
              Everything you need to take control of your financial future
            </p>
          </div>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Financial Future?</h2>
          <p style={styles.ctaDescription}>
            Join thousands of users already optimizing their wealth with OptiWealth.
          </p>
          <button onClick={() => navigate('/signup')} style={styles.btnCtaLarge}>
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2026 OptiWealth. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <span style={styles.footerLink}>Privacy Policy</span>
            <span style={styles.footerLink}>Terms of Service</span>
            <span style={styles.footerLink}>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  },
  nav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    fontSize: '1.75rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
  },
  navButtons: {
    display: 'flex',
    gap: '1rem',
  },
  btnSecondary: {
    padding: '0.625rem 1.5rem',
    backgroundColor: 'transparent',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    color: '#374151',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  btnPrimary: {
    padding: '0.625rem 1.5rem',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '0.5rem',
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  hero: {
    backgroundColor: '#f9fafb',
    padding: '5rem 2rem',
  },
  heroContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#111827',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
  },
  heroTitleAccent: {
    color: '#2563eb',
  },
  heroDescription: {
    fontSize: '1.25rem',
    color: '#6b7280',
    lineHeight: '1.75',
    marginBottom: '2rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
  },
  heroCTA: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnHero: {
    padding: '1rem 2.5rem',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '0.5rem',
    color: '#ffffff',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  btnOutline: {
    padding: '1rem 2.5rem',
    backgroundColor: 'transparent',
    border: '2px solid #2563eb',
    borderRadius: '0.5rem',
    color: '#2563eb',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  trustText: {
    marginTop: '2rem',
    color: '#6b7280',
    fontSize: '0.875rem',
  },
  featuresSection: {
    padding: '5rem 2rem',
    backgroundColor: '#ffffff',
  },
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '1rem',
  },
  sectionDescription: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    padding: '2rem',
    backgroundColor: '#f9fafb',
    borderRadius: '1rem',
    transition: 'all 0.3s',
    border: '1px solid #e5e7eb',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.75rem',
  },
  featureDescription: {
    color: '#6b7280',
    lineHeight: '1.6',
  },
  ctaSection: {
    backgroundColor: '#2563eb',
    padding: '5rem 2rem',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  ctaDescription: {
    fontSize: '1.125rem',
    color: '#e0e7ff',
    marginBottom: '2rem',
  },
  btnCtaLarge: {
    padding: '1rem 3rem',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '0.5rem',
    color: '#2563eb',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  footer: {
    backgroundColor: '#f9fafb',
    padding: '2rem',
    borderTop: '1px solid #e5e7eb',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  footerText: {
    color: '#6b7280',
    fontSize: '0.875rem',
  },
  footerLinks: {
    display: 'flex',
    gap: '2rem',
  },
  footerLink: {
    color: '#6b7280',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
};

export default Home;
