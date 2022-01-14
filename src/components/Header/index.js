import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export default function Header(props) {
  const { showSidebar, toggleSidebar } = props;
  return (
    <header className="page-header flex justify-between text-center">
      <div
        className="sidebar-toggle flex-center"
        onClick={() => toggleSidebar()}
      >
        {showSidebar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </div>
      <div className="header-logo flex-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="header-action"></div>
      </div>
    </header>
  );
}
