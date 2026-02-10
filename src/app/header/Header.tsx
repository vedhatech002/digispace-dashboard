import Logo from "../../assets/ds-logo.svg?react";
import ProfileImg from "../../assets/user-profile.jpg";

const Header = () => {
  return (
    <header
      className="
        h-16 flex items-center justify-between px-6
      "
    >
      <Logo className="cursor-pointer" />

      <img
        src={ProfileImg}
        className="w-9 h-9 rounded-full border border-white/10"
        alt="profile"
      />
    </header>
  );
};

export default Header;
