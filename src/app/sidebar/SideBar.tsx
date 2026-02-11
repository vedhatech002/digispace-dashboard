import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/nav-icons/home.svg?react";
import PieIcon from "../../assets/nav-icons/pie.svg?react";
import TilesIcon from "../../assets/nav-icons/tiles.svg?react";

const navItems = [
  { path: "/dashboard", label: "Home", Icon: HomeIcon },
  { path: "/analyse", label: "Analyse", Icon: PieIcon },
  { path: "/control", label: "Control", Icon: TilesIcon },
];

const SideBar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="
          hidden md:flex
          mx-4 my-2
          w-20
          flex-col items-center justify-center
          py-6
          rounded-2xl
          bg-[linear-gradient(to_bottom,#153231,#13292f,#162028,#16181e,#120f13,#120f13,#120f13,#120f13,#16181e,#162028,#13292f,#153231)] sm:h-[85vh]
        "
      >
        <div className="flex flex-col gap-2 mt-2">
          {navItems.map(({ path, label, Icon }) => (
            <NavLink key={path} to={path}>
              {({ isActive }) => (
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`
                      p-3 rounded-xl transition-all
                      ${
                        isActive
                          ? "bg-[var(--bg-card)] shadow-[0_0_12px_rgba(46,242,197,0.25)]"
                          : "opacity-60"
                      }
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-[var(--color-accent)]" : "text-white"
                      }`}
                    />
                  </div>

                  <span
                    className={`text-[11px] ${
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav
        className="
          fixed bottom-0 left-0 right-0
          flex md:hidden
          justify-around items-center
          h-16
          bg-[#11191a]
          border-t border-white/5
          backdrop-blur-md
          z-50
        "
      >
        {navItems.map(({ path, label, Icon }) => (
          <NavLink key={path} to={path}>
            {({ isActive }) => (
              <div className="flex flex-col items-center text-xs">
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-[var(--color-accent)]" : "text-gray-400"
                  }`}
                />
                <span
                  className={`mt-1 ${
                    isActive ? "text-[var(--color-accent)]" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default SideBar;
