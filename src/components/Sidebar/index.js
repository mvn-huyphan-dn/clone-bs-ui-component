import { Link } from "react-router-dom";
import { logo2 } from "../../assets/images";
import { listItem } from "../../core/constants";

function Sidebar(props) {
  const { showSidebar } = props;
  return (
    <aside
      className={`page-sidebar${showSidebar ?'':' active'}`}
      id="page-sidebar"
    >
      <div className="container-fluid">
        <div className="sidebar-logo flex-center">
          <img src={logo2} alt="ML Logo" />
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-list flex-column">
            {listItem
              ? listItem.map((e, index) => {
                  return (
                    <li key={index} className="sidebar-item">
                      <Link
                        to={e.url}
                        className="sidebar-item__link flex align-item-center"
                      >
                        {e.icon}
                        {e.name}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
