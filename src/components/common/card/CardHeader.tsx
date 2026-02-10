import React from "react";

interface CardHeaderProps {
  title: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const CardHeader = ({ title, icon, action }: CardHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        {icon && <div className="text-[var(--text-muted)]">{icon}</div>}
        <h3 className="text-sm font-medium text-[var(--text-primary)]">
          {title}
        </h3>
      </div>

      {action && <div>{action}</div>}
    </div>
  );
};

export default CardHeader;
