import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error || 'Failed to log in');
      }
    } catch (err) {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>OptiWealth</h1>
          <h2>Sign In to Your Account</h2>
          <p>Welcome back! Manage your wealth on autopilot.</p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="form-footer">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="btn-social">
            <i className="fab fa-google"></i>
            Google
          </button>
          <button className="btn-social">
            <i className="fab fa-microsoft"></i>
            Microsoft
          </button>
        </div>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="link-primary">
              Sign up for free
            </Link>
          </p>
        </div>

        <div className="demo-credentials">
          <p className="demo-title">Demo Credentials:</p>
          <p>• Admin: admin@optiwealth.com</p>
          <p>• Developer: dev@optiwealth.com</p>
          <p>• User: user@optiwealth.com</p>
          <p>Password: any password</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
