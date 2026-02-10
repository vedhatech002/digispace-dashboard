interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <span
      className="
      px-3 py-1
      rounded-full
      text-xs
      bg-white/10
      text-[var(--text-muted)]
    "
    >
      {label}
    </span>
  );
};

export default Badge;
