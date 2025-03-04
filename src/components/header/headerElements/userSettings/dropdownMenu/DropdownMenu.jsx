import "./DropdownMenu.css";

function DropdownMenu({ isDropdownOpen }) {
  return (
    <div className={`dropdown-menu ${isDropdownOpen ? "open" : "close"}`}>
      <ul>
        <li>
          <button>Account</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
