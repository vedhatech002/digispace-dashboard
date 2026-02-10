// React and related imports
import { Outlet } from "react-router-dom";
// components
import Sidebar from "../app/sidebar/SideBar";
import Header from "../app/header/Header";

const PostLoginLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
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
