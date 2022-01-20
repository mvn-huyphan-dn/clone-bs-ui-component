import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function DropdownPage() {
  useEffect(() => {
    let toggler = null;
    toggler = document.querySelectorAll(".dropdown-toggle");
    toggler.forEach((child) => child.addEventListener("click", toggleShow));
    return () => {
      toggler.forEach((child) =>
        child.removeEventListener("click", toggleShow)
      );
    };
  }, []);

  function toggleShow(e) {
    let menu = e.target.parentNode.querySelector(".dropdown-menu");
    menu.classList.toggle("show");
  }

  return (
    <>
      <div className="example example-dropdown">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button">
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="example example-dropdown">
        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button
            type="button"
            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button
            type="button"
            className="btn btn-success dropdown-toggle dropdown-toggle-split"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button
            type="button"
            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button
            type="button"
            className="btn btn-warning dropdown-toggle dropdown-toggle-split"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Warning{" "}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button
            type="button"
            className="btn btn-info dropdown-toggle dropdown-toggle-split"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="example example-dropdown">
        <div className="btn-group">
          <button className="btn btn-secondary btn-lg" type="button">
            Large Button
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-secondary btn-lg">
            Large Split Button
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle btn-lg dropdown-toggle"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action to
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="example example-dropdown">
        <div className="btn-group position-relative">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
          >
            Small Button
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-group position-relative" role="group">
          <button type="button" className="btn btn-secondary btn-sm">
            Small Split Button
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle btn-sm dropdown-toggle"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="example example-dropdown">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button">
            Dropdown button
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Separate Link
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
