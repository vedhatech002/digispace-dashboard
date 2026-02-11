import { Outlet } from "react-router-dom";
import Sidebar from "../app/sidebar/SideBar";
import Header from "../app/header/Header";

const PostLoginLayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <div className="shrink-0">
        <Header />
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <div className="shrink-0">
          <Sidebar />
        </div>

        {/* Scrollable Main */}
        <main className="flex-1 overflow-y-auto p-3 pb-20 md:pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PostLoginLayout;
