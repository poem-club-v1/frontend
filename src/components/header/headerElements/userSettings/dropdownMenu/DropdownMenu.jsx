import { useNavigate } from "react-router-dom";
import "./DropdownMenu.css";

function DropdownMenu({ isDropdownOpen }) {
  const navigate = useNavigate();

  const handleOpenAccountSettings = () => {
    navigate("/account");
  };

  return (
    <div className={`dropdown-menu ${isDropdownOpen ? "open" : "close"}`}>
      <ul>
        <li>
          <button onClick={handleOpenAccountSettings}>Account</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
