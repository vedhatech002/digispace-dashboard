import { Outlet } from "react-router-dom";
import Sidebar from "../app/sidebar/SideBar";
import Header from "../app/header/Header";

const PostLoginLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body section (below header) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (NOT full height, only content height) */}

        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PostLoginLayout;
