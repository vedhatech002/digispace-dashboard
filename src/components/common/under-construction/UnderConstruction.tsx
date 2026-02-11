import { Link } from "react-router-dom";
import ConstructionIcon from "../../../assets/construction.svg?react";

interface Props {
  title?: string;
  description?: string;
  showBackButton?: boolean;
}

const UnderConstruction = ({
  title = "Page Under Construction",
  description = "We're working hard to bring this feature to you.",
  showBackButton = true,
}: Props) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <ConstructionIcon className="w-32 h-32 text-[#2EF2C5]" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>

        {/* Description */}
        <p className="text-[var(--text-muted)] text-sm mb-6">{description}</p>

        {/* Back Button */}
        {showBackButton && (
          <Link
            to="/dashboard"
            className="
              inline-flex items-center
              px-6 py-3
              rounded-full
              bg-[rgba(46,242,197,0.15)]
              text-[#2EF2C5]
              hover:bg-[rgba(46,242,197,0.25)]
              transition-all
            "
          >
            Back to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default UnderConstruction;
