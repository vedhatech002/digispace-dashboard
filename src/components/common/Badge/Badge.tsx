interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <span
      className="
      px-4 py-2
      rounded-full
      text-xs
      bg-white/10
      text-[var(--text-primary)]
    "
    >
      {label}
    </span>
  );
};

export default Badge;
