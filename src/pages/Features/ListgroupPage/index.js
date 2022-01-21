import { Link } from "react-router-dom";

export default function ListgroupPage() {
  return (
    <>
      <div className="example">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="example">
        <ul className="list-group">
          <li className="list-group-item active">An active item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="example">
        <ul className="list-group">
          <li className="list-group-item disabled">A disabled item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="example">
        <div className="list-group">
          <Link
            to="#"
            className="list-group-item list-group-item-action active"
          >
            The current link item
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            A second link item
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            A third link item
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            A fourth link item
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action disabled"
          >
            A disabled link item
          </Link>
        </div>
      </div>
      <div className="example">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="example">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">A list item</li>
          <li className="list-group-item">A list item</li>
          <li className="list-group-item">A list item</li>
        </ol>
      </div>
      <div className="example">
        <ol
          className="list-group list-group-numbered"
          style={{ lineHeight: "1.5" }}
        >
          <li className="list-group-item flex justify-content-between align-items-start">
            <div className="ml-5 mr-auto">
              <div className="fw-bold">
                <p>Subheading</p>
              </div>
              Content for list item
            </div>
            <span className="badge bg-color-primary br-pill">14</span>
          </li>
          <li className="list-group-item flex justify-content-between align-items-start">
            <div className="ml-5 mr-auto">
              <div className="fw-bold">
                <p>Subheading</p>
              </div>
              Content for list item
            </div>
            <span className="badge bg-color-primary br-pill">14</span>
          </li>
          <li className="list-group-item flex justify-content-between align-items-start">
            <div className="ml-5 mr-auto">
              <div className="fw-bold">
                <p>Subheading</p>
              </div>
              Content for list item
            </div>
            <span className="badge bg-color-primary br-pill">14</span>
          </li>
        </ol>
      </div>
      <div className="example">
        <ul className="list-group">
          <li className="list-group-item">A simple default list group item</li>

          <li className="list-group-item list-group-item-primary">
            A simple primary list group item
          </li>
          <li className="list-group-item list-group-item-secondary">
            A simple secondary list group item
          </li>
          <li className="list-group-item list-group-item-success">
            A simple success list group item
          </li>
          <li className="list-group-item list-group-item-danger">
            A simple danger list group item
          </li>
          <li className="list-group-item list-group-item-warning">
            A simple warning list group item
          </li>
          <li className="list-group-item list-group-item-info">
            A simple info list group item
          </li>
        </ul>
      </div>
      <div className="example">
        <div className="list-group">
          <Link to="#" className="list-group-item list-group-item-action">
            A simple default list group item
          </Link>

          <Link
            to="#"
            className="list-group-item list-group-item-action list-group-item-primary"
          >
            A simple primary list group item
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action list-group-item-secondary"
          >
            A simple secondary list group item
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action list-group-item-success"
          >
            A simple success list group item
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action list-group-item-danger"
          >
            A simple danger list group item
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action list-group-item-warning"
          >
            A simple warning list group item
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action list-group-item-info"
          >
            A simple info list group item
          </Link>
        </div>
      </div>
      <div className="example">
        <ul className="list-group">
          <li className="list-group-item flex justify-content-between align-items-center">
            A list item
            <span className="badge bg-color-primary br-pill">14</span>
          </li>
          <li className="list-group-item flex justify-content-between align-items-center">
            A second list item
            <span className="badge bg-color-primary br-pill">2</span>
          </li>
          <li className="list-group-item flex justify-content-between align-items-center">
            A third list item
            <span className="badge bg-color-primary br-pill">1</span>
          </li>
        </ul>
      </div>
      <div className="example">
        <div className="list-group">
          <Link
            to="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="flex w-100 justify-content-between">
              <h5 className="mb-5">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-5">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="flex w-100 justify-content-between">
              <h5 className="mb-5">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-5">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="flex w-100 justify-content-between">
              <h5 className="mb-5">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-5">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </Link>
        </div>
      </div>
    </>
  );
}
