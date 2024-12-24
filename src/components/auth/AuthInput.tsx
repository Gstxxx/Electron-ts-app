interface AuthInputProps {
  type: 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const AuthInput = ({ type, value, onChange, placeholder }: AuthInputProps) => (
  <div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm text-white placeholder-purple-light/70 border border-white/20 focus:outline-none focus:border-magenta/80 focus:bg-white/10 shadow-lg transition-all"
    />
  </div>
);

export default AuthInput;