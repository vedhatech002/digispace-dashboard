import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[var( --bg-main)]">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#2EF2C5] mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-6 text-sm">
          The page you're looking for doesn’t exist.
        </p>

        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-full bg-[rgba(46,242,197,0.15)] text-[#2EF2C5] hover:bg-[rgba(46,242,197,0.25)] transition-all"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
