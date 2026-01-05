import React, { useState } from 'react';
import { TrendingUp, DollarSign, PieChart, CreditCard, Target, Settings } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <TrendingUp size={32} />
          <h1>OptiWealth</h1>
        </div>
        <nav className="nav">
          <button onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
            Dashboard
          </button>
          <button onClick={() => setActiveTab('investments')} className={activeTab === 'investments' ? 'active' : ''}>
            Investments
          </button>
          <button onClick={() => setActiveTab('bills')} className={activeTab === 'bills' ? 'active' : ''}>
            Bills
          </button>
          <button onClick={() => setActiveTab('goals')} className={activeTab === 'goals' ? 'active' : ''}>
            Goals
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'investments' && <Investments />}
        {activeTab === 'bills' && <Bills />}
        {activeTab === 'goals' && <Goals />}
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Financial Overview</h2>
      <div className="card-grid">
        <Card icon={<DollarSign />} title="Total Balance" value="$125,430" change="+5.2%" />
        <Card icon={<PieChart />} title="Investments" value="$89,250" change="+12.8%" />
        <Card icon={<CreditCard />} title="Monthly Expenses" value="$3,420" change="-8.5%" />
        <Card icon={<Target />} title="Savings Goals" value="75%" change="+3.2%" />
      </div>
      <div className="features">
        <Feature 
          title="AI-Powered Autopilot Investing"
          description="Let AI optimize your investment portfolio automatically based on your risk tolerance and goals."
        />
        <Feature 
          title="Bill Optimization"
          description="Automatically find and switch to better deals on recurring expenses like insurance and subscriptions."
        />
        <Feature 
          title="Smart Rule Engine"
          description="Set custom rules for automated savings, spending alerts, and investment rebalancing."
        />
      </div>
    </div>
  );
}

function Investments() {
  return (
    <div className="section">
      <h2>Investment Portfolio</h2>
      <p>Your AI-optimized portfolio is performing exceptionally well.</p>
      <div className="placeholder">Investment charts and analysis coming soon...</div>
    </div>
  );
}

function Bills() {
  return (
    <div className="section">
      <h2>Bill Management</h2>
      <p>Track and optimize all your recurring expenses.</p>
      <div className="placeholder">Bill tracking and optimization tools coming soon...</div>
    </div>
  );
}

function Goals() {
  return (
    <div className="section">
      <h2>Financial Goals</h2>
      <p>Set and track your savings goals with AI recommendations.</p>
      <div className="placeholder">Goal setting and tracking coming soon...</div>
    </div>
  );
}

function Card({ icon, title, value, change }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-value">{value}</p>
        <span className={`card-change ${change.startsWith('+') ? 'positive' : 'negative'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
