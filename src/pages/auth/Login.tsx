import LoginHeader from '../../components/auth/LoginHeader';
import LoginForm from '../../components/auth/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-dark bg-[url('https://w.wallhaven.cc/full/l8/wallhaven-l8x1pr.jpg')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <LoginHeader />
        <LoginForm />
        <p className="mt-6 text-center text-purple-light">
          Don't have an account?{' '}
          <Link to="/signup" className="text-magenta hover:text-pink">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
