// React and realted imports
import { NavLink } from "react-router-dom";
// assets
import Logo from "../../assets/ds-logo.svg?react";
import ProfileImg from "../../assets/user-profile.jpg";

const Header = () => {
  return (
    <header
      className="
        h-16 flex items-center justify-between px-6
"
    >
      <NavLink to={"/dashboard"}>
        <Logo className="cursor-pointer" />
      </NavLink>

      <img
        src={ProfileImg}
        className="w-9 h-9 rounded-full border border-white/10"
        alt="profile"
      />
    </header>
  );
};

export default Header;
