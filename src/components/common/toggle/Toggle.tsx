interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`
        w-11 h-6 rounded-full p-1 cursor-pointer
        transition-colors duration-300
        ${checked ? "bg-[var(--color-accent)]" : "bg-white/20"}
      `}
    >
      <div
        className={`
          w-4 h-4 rounded-full bg-white
          transition-transform duration-300
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export default Toggle;
