import { useNavigate } from "react-router-dom";
import UsersSorting from "../Users/UsersSorting";
import Button from "../Forms_Buttons/Button";
import type { NavbarProps } from "../../types/Navbar";

const MobileNav = ({
  sortOption = "default",
  onSortChange = () => {},
  closeMenu,
  onAddClick,
}: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden mt-4 px-4 flex flex-col gap-4 max-w-6xl mx-auto animate-fade-in">
      <Button
        onClick={() => {
          onAddClick?.();
          closeMenu?.();
        }}
      >
        Add User
      </Button>
      <Button
        onClick={() => {
          navigate("/chuck");
          closeMenu?.();
        }}
      >
        Chuck's Wisdom
      </Button>
      <div className="px-1">
        <UsersSorting sortOption={sortOption} onChange={onSortChange} />
      </div>
    </div>
  );
};

export default MobileNav;
