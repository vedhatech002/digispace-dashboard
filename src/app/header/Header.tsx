// Redux related import
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slices/auth/authSlice";

// assets
import Logo from "../../assets/ds-logo.svg?react";
import DefaultProfileImg from "../../assets/user-profile.jpg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  console.log(user?.photoURL);

  return (
    <header className="h-16 flex items-center justify-between px-6 relative">
      <NavLink to={"/dashboard"}>
        <Logo className="cursor-pointer" />
      </NavLink>

      <div className="relative group">
        <img
          src={user?.photoURL || DefaultProfileImg}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = DefaultProfileImg;
          }}
          className="w-9 h-9 rounded-full border border-white/10 object-cover"
          alt="profile"
        />

        <div
          className="
      absolute right-0 top-12 w-48
      bg-[#11191a]
      border border-white/10
      rounded-xl
      shadow-xl
      py-3
      z-50
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-200
    "
        >
          <div className="px-4 pb-2 border-b border-white/5">
            <p className="text-sm text-white font-medium truncate">
              {user?.displayName || "Guest User"}
            </p>
            {user?.email && (
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="
        w-full text-left px-4 py-2
        text-sm text-red-400
        hover:bg-white/5
        transition
      "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
