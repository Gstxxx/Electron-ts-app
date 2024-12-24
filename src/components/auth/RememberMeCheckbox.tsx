interface RememberMeCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RememberMeCheckbox = ({ checked, onChange }: RememberMeCheckboxProps) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 border-purple-light rounded focus:ring-magenta text-magenta"
    />
    <span className="ml-2 text-purple-light">Remember me</span>
  </label>
);

export default RememberMeCheckbox; 