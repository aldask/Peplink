import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import type { NavbarProps } from "../../types/Navbar";
import Button from "../Forms_Buttons/Button";

const Navbar = ({ onAddClick, sortOption, onSortChange }: NavbarProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isOtherPage = location.pathname === "/chuck";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm px-4 sm:px-12 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src={logo}
            alt="Logo"
            className="sm:h-12 h-8 w-auto cursor-pointer"
          />
        </button>
        {isOtherPage ? (
          <div>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        ) : (
          <div className="flex items-center">
            <DesktopNav
              onAddClick={onAddClick}
              sortOption={sortOption}
              onSortChange={onSortChange}
            />

            <button
              className="lg:hidden text-2xl text-amber-500 hover:text-amber-600 transition"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90 scale-110" : ""
                }`}
              >
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        )}
      </div>

      {!isOtherPage && (
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <MobileNav
            onAddClick={onAddClick}
            sortOption={sortOption}
            onSortChange={onSortChange}
            closeMenu={() => setIsOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
