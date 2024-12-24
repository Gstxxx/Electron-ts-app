import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthInput from './AuthInput';
import RememberMeCheckbox from './RememberMeCheckbox';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      login('asdasd');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-96">
      <div className="space-y-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
        <AuthInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />

        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <div className="flex items-center justify-between">
          <RememberMeCheckbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Link to="/forgot-password" className="text-magenta hover:text-pink">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-magenta/80 hover:bg-pink/80 backdrop-blur-sm text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;