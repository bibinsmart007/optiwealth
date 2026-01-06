import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'marketing', label: 'Marketing', icon: '📢' },
    { id: 'discounts', label: 'Discounts', icon: '🎟️' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'markets', label: 'Markets', icon: '🌍' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'apps', label: 'Apps', icon: '🧩' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Dashboard Home</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>2,543</div>
                <div style={styles.statLabel}>Total Users</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>$45,231</div>
                <div style={styles.statLabel}>Revenue</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>1,234</div>
                <div style={styles.statLabel}>Active Sessions</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>98.5%</div>
                <div style={styles.statLabel}>Success Rate</div>
              </div>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Customer Management</h2>
            <p style={styles.description}>View and manage all your customers</p>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Join Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={styles.tr}>
                    <td style={styles.td}>John Doe</td>
                    <td style={styles.td}>john@example.com</td>
                    <td style={styles.td}><span style={styles.badge}>Active</span></td>
                    <td style={styles.td}>2024-01-15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'marketing':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Marketing Campaigns</h2>
            <p style={styles.description}>Create and manage marketing campaigns</p>
            <button style={styles.primaryButton}>Create Campaign</button>
          </div>
        );
      case 'discounts':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Discount Management</h2>
            <p style={styles.description}>Create and manage discount codes</p>
            <button style={styles.primaryButton}>Create Discount</button>
          </div>
        );
      case 'content':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Content Management</h2>
            <p style={styles.description}>Manage your website content and pages</p>
          </div>
        );
      case 'markets':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Markets Overview</h2>
            <p style={styles.description}>Monitor market trends and performance</p>
          </div>
        );
      case 'analytics':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Analytics & Reports</h2>
            <p style={styles.description}>View detailed analytics and generate reports</p>
          </div>
        );
      case 'apps':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Apps & Integrations</h2>
            <p style={styles.description}>Manage third-party integrations</p>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Settings</h2>
            <p style={styles.description}>Configure your application settings</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Top Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.logo}>OptiWealth Admin</div>
          <input 
            type="text" 
            placeholder="Search..." 
            style={styles.searchBar}
          />
        </div>
        <div style={styles.headerRight}>
          <div style={styles.userInfo}>
            <span style={styles.userName}>{user.name}</span>
            <span style={styles.userRole}>{user.role}</span>
          </div>
          <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
        </div>
      </div>

      <div style={styles.mainWrapper}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <nav style={styles.nav}>
            {menuItems.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  ...styles.navItem,
                  ...(activeSection === item.id ? styles.navItemActive : {})
                }}
              >
                <span style={styles.navIcon}>{item.icon}</span>
                <span style={styles.navLabel}>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e1e1e1',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  logo: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#202223'
  },
  searchBar: {
    padding: '8px 12px',
    border: '1px solid #c9cccf',
    borderRadius: '8px',
    width: '300px',
    fontSize: '14px'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  userName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#202223'
  },
  userRole: {
    fontSize: '12px',
    color: '#6d7175'
  },
  logoutBtn: {
    padding: '8px 16px',
    backgroundColor: '#f6f6f7',
    border: '1px solid #c9cccf',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  },
  mainWrapper: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden'
  },
  sidebar: {
    width: '240px',
    backgroundColor: '#f6f6f7',
    borderRight: '1px solid #e1e1e1',
    padding: '16px 0',
    overflowY: 'auto'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    cursor: 'pointer',
    color: '#202223',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    gap: '12px'
  },
  navItemActive: {
    backgroundColor: '#f1f1f1',
    borderLeft: '3px solid #008060'
  },
  navIcon: {
    fontSize: '18px'
  },
  navLabel: {
    flex: 1
  },
  mainContent: {
    flex: 1,
    padding: '24px',
    overflowY: 'auto',
    backgroundColor: '#f1f1f1'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#202223',
    marginBottom: '8px'
  },
  description: {
    color: '#6d7175',
    marginBottom: '24px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginTop: '24px'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #e1e1e1'
  },
  statValue: {
    fontSize: '32px',
    fontWeight: '600',
    color: '#202223',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#6d7175'
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #e1e1e1',
    overflow: 'hidden'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    textAlign: 'left',
    padding: '16px',
    borderBottom: '1px solid #e1e1e1',
    backgroundColor: '#f6f6f7',
    fontSize: '14px',
    fontWeight: '600',
    color: '#202223'
  },
  tr: {
    borderBottom: '1px solid #e1e1e1'
  },
  td: {
    padding: '16px',
    fontSize: '14px',
    color: '#202223'
  },
  badge: {
    padding: '4px 12px',
    backgroundColor: '#d1f7e5',
    color: '#008060',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500'
  },
  primaryButton: {
    padding: '12px 24px',
    backgroundColor: '#008060',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  }
};

export default AdminDashboard;
