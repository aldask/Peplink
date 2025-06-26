import { useNavigate } from "react-router-dom";
import Button from "../Forms_Buttons/Button";
import type { NavbarProps } from "../../types/Navbar";
import UsersSorting from "../Users/UsersSorting";

const DesktopNav = ({
  sortOption = "default",
  onSortChange = () => {},
  onAddClick,
}: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex items-center gap-5">
      <Button onClick={onAddClick}>Add User</Button>
      <Button onClick={() => navigate("/chuck")}>Chuck's Wisdom</Button>
      <div className="min-w-[180px]">
        <UsersSorting sortOption={sortOption} onChange={onSortChange} />
      </div>
    </div>
  );
};

export default DesktopNav;
