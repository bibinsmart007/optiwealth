import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
  const { user, isAdmin, isDeveloper, isCollaborator, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
        <>
    <div style={styles.container>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>OptiWealth Control Panel</h1>
          <div style={styles.userInfo}>
            <div style={styles.userDetails}>
              <span style={styles.userName}>{user.name}</span>
              <span style={styles.userRole}>{user.role.toUpperCase()}</span>
            </div>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.sidebar}>
          <button 
            style={{...styles.tabBtn, ...(activeTab === 'overview' && styles.activeTab)}}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          
          {isAdmin && (
            <button 
              style={{...styles.tabBtn, ...(activeTab === 'users' && styles.activeTab)}}
              onClick={() => setActiveTab('users')}
            >
              👥 User Management
            </button>
          )}
          
          {(isAdmin || isDeveloper) && (
            <button 
              style={{...styles.tabBtn, ...(activeTab === 'api' && styles.activeTab)}}
              onClick={() => setActiveTab('api')}
            >
              🔧 API & Development
            </button>
          )}
          
          {(isAdmin || isCollaborator) && (
            <button 
              style={{...styles.tabBtn, ...(activeTab === 'collaborate' && styles.activeTab)}}
              onClick={() => setActiveTab('collaborate')}
            >
              🤝 Collaboration
            </button>
          )}
          
          <button 
            style={{...styles.tabBtn, ...(activeTab === 'settings' && styles.activeTab)}}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
          
          <button 
            onClick={() => navigate('/dashboard')}
            style={styles.dashboardBtn}
          >
            ← Back to Dashboard
          </button>
        </div>

        <div style={styles.content}>
          {activeTab === 'overview' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Welcome, {user.name}!</h2>
              <p style={styles.description}>Role: {user.role}</p>
              
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statValue}>0</div>
                  <div style={styles.statLabel}>Active Users</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statValue}>0</div>
                  <div style={styles.statLabel}>API Calls</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statValue}>100%</div>
                  <div style={styles.statLabel}>Uptime</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statValue}>0</div>
                  <div style={styles.statLabel}>Total Transactions</div>
                </div>
              </div>

              <div style={styles.permissions}>
                <h3>Your Permissions:</h3>
                <ul>
                  {isAdmin && <li>✓ Full administrative access</li>}
                  {isAdmin && <li>✓ User management & role assignment</li>}
                  {isAdmin && <li>✓ System configuration</li>}
                  {isDeveloper && <li>✓ API access & documentation</li>}
                  {isDeveloper && <li>✓ Development tools</li>}
                  {isCollaborator && <li>✓ Team collaboration features</li>}
                  {isCollaborator && <li>✓ Shared workspace access</li>}
                  <li>✓ Dashboard access</li>
                  <li>✓ Personal settings</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'users' && isAdmin && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>User Management</h2>
              <p style={styles.description}>Manage users and assign roles</p>
              
              <div style={styles.card}>
                <h3>User List</h3>
                <p>Feature coming soon: View and manage all users, assign roles, and control permissions.</p>
                <ul>
                  <li>View all registered users</li>
                  <li>Assign/update user roles (Admin, Developer, Collaborator, User)</li>
                  <li>Enable/disable user accounts</li>
                  <li>Monitor user activity</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'api' && (isAdmin || isDeveloper) && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>API & Development</h2>
              <p style={styles.description}>Development tools and API access</p>
              
              <div style={styles.card}>
                <h3>API Endpoints</h3>
                <pre style={styles.code}>
GET  /api/users
POST /api/auth/login
POST /api/auth/signup
GET  /api/dashboard/data
POST /api/transactions
                </pre>
              </div>
              
              <div style={styles.card}>
                <h3>API Keys</h3>
                <p>Generate and manage API keys for external integrations</p>
                <button style={styles.primaryBtn}>Generate New API Key</button>
              </div>
            </div>
          )}

          {activeTab === 'collaborate' && (isAdmin || isCollaborator) && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Collaboration</h2>
              <p style={styles.description}>Work together with your team</p>
              
              <div style={styles.card}>
                <h3>Team Workspace</h3>
                <p>Collaborate with team members on shared resources</p>
                <ul>
                  <li>Share financial insights</li>
                  <li>Collaborative budgeting</li>
                  <li>Team notifications</li>
                  <li>Shared reports and analytics</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Settings</h2>
              <p style={styles.description}>Manage your account preferences</p>
              
              <div style={styles.card}>
                <h3>Account Information</h3>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
              
              <div style={styles.card}>
                <h3>Notifications</h3>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" defaultChecked />
                  Email notifications
                </label>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" defaultChecked />
                  Push notifications
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#667eea', color: 'white', padding: '20px 40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  headerContent: { maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { margin: 0, fontSize: '24px' },
  userInfo: { display: 'flex', alignItems: 'center', gap: '20px' },
  userDetails: { textAlign: 'right' },
  userName: { display: 'block', fontWeight: 'bold' },
  userRole: { display: 'block', fontSize: '12px', opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', marginTop: '4px' },
  logoutBtn: { padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' },
  mainContent: { display: 'flex', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 80px)' },
  sidebar: { width: '250px', backgroundColor: 'white', padding: '20px', borderRight: '1px solid #e0e0e0' },
  tabBtn: { width: '100%', padding: '12px 16px', marginBottom: '8px', textAlign: 'left', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s' },
  activeTab: { backgroundColor: '#667eea', color: 'white' },
  dashboardBtn: { width: '100%', padding: '12px 16px', marginTop: '20px', backgroundColor: '#f0f0f0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' },
  content: { flex: 1, padding: '40px' },
  section: {},
  sectionTitle: { fontSize: '28px', marginBottom: '8px' },
  description: { color: '#666', marginBottom: '30px' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' },
  statCard: { backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  statValue: { fontSize: '32px', fontWeight: 'bold', color: '#667eea', marginBottom: '8px' },
  statLabel: { color: '#666', fontSize: '14px' },
  permissions: { backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  card: { backgroundColor: 'white', padding: '24px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  code: { backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '13px' },
  primaryBtn: { padding: '10px 20px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' },
  checkboxLabel: { display: 'block', marginBottom: '12px', cursor: 'pointer' }
};

export default AdminPanel;
