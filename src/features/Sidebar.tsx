import { Link } from "react-router";
import { navItems } from "../constants";
import LazyImage from "@/components/LazyImage";

const Sidebar = () => {
  return (
    <nav className="sm:fixed left-0 top-0 sm:h-full sm:w-20 bg-black/90 backdrop-blur-lg border-r border-gray-800 z-50 flex flex-col items-center sm:py-8">
      <div className="my-2 sm:my-8 w-10 h-10">
        <LazyImage src="/images/logo.webp" alt="" className="w-full rounded-lg" />
      </div>

      <ul className="flex sm:flex-col flex-wrap justify-center gap-6 my-4 sm:my-0">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <Link
                to={item.to}
                title={item.label}
                className="relative cursor-pointer text-white hover:text-purple-500 transition-all group"
              >
                <Icon className="w-6 h-6" />
                <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
