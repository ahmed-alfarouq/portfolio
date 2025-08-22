import { useRef, useCallback } from "react";
import { Link, useLocation } from "react-router";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LazyImage from "@/components/LazyImage";

import { navItems } from "../constants";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const timelineRef = useRef<null | gsap.core.Timeline>(null);
  const location = useLocation();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      timelineRef.current = tl;

      const isMobile = window.innerWidth < 640;

      if (isMobile) {
        tl.fromTo(
          ".sidebar",
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out",
          }
        );
      } else {
        tl.fromTo(
          ".sidebar",
          {
            x: -100,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out",
          }
        );
      }

      tl.fromTo(
        ".logo",
        {
          opacity: 0,
          scale: 0.3,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out",
        },
        "-=0.3"
      );

      tl.fromTo(
        ".nav-item",
        {
          opacity: 0,
          scale: 0.3,
          y: isMobile ? -20 : 20,
          rotation: 180,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.4,
          ease: "back.out",
          stagger: 0.08,
        }
      );

      return () => {
        timelineRef.current?.kill();
      };
    },
    { scope: sidebarRef }
  );

  const isActiveRoute = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <nav
      ref={sidebarRef}
      className="sidebar fixed 
        sm:left-0 sm:top-0 sm:h-full sm:w-20 sm:flex-col sm:py-8
        left-0 bottom-0 right-0 h-20 w-full flex-row px-4 py-2
        bg-gradient-to-r sm:bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl 
        border-t sm:border-r sm:border-t-0 border-gray-700/50 z-50 flex items-center justify-between sm:justify-start shadow-2xl shadow-black/20"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="logo relative group sm:mb-8 mb-0">
        <LazyImage
          src="/images/logo.webp"
          alt="Website Logo"
          className="w-11 h-11 hidden sm:block sm:w-12 sm:h-12 rounded-xl object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110 blur-sm -z-10"></div>
      </div>

      <ul className="flex sm:flex-col flex-row gap-3 sm:gap-4 sm:flex-1 flex-1 justify-center sm:justify-start">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.to);

          return (
            <li key={item.id} className="nav-item">
              <Link
                to={item.to}
                className={`nav-link relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110"
                }`}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                  aria-hidden="true"
                />

                {isActive && (
                  <>
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-r-full animate-pulse hidden sm:block"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-t-full animate-pulse block sm:hidden"></div>
                  </>
                )}

                <div
                  className="absolute left-16 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gray-700/50 shadow-xl z-50 hidden sm:block"
                  role="tooltip"
                >
                  {item.label}
                  <div className="absolute left-0 sm:left-0 top-1/2 sm:top-1/2 bottom-0 sm:bottom-auto transform -translate-x-1 w-2 h-2 bg-gray-900 border-l border-b border-gray-700/50 rotate-45 hidden sm:block"></div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150 origin-center"></div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto hidden sm:block">
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 mx-auto mt-2 animate-pulse"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
