import { Link } from "react-router-dom";

export default function ButtongroupPage() {
  return (
    <div className="example">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-primary">
          Middle
        </button>
        <button type="button" className="btn btn-primary">
          Right
        </button>
      </div>
      <div className="btn-group">
        <Link to="#" className="btn btn-primary active">
          Active Link
        </Link>
        <Link to="#" className="btn btn-primary">
          Link
        </Link>
        <Link to="#" className="btn btn-primary">
          Link
        </Link>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-danger">
          Left
        </button>
        <button type="button" className="btn btn-warning">
          Middle
        </button>
        <button type="button" className="btn btn-success">
          Right
        </button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-outline-primary">
          Left
        </button>
        <button type="button" className="btn btn-outline-primary">
          Middle
        </button>
        <button type="button" className="btn btn-outline-primary">
          Right
        </button>
      </div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-primary">
            1
          </button>
          <button type="button" className="btn btn-primary">
            2
          </button>
          <button type="button" className="btn btn-primary">
            3
          </button>
          <button type="button" className="btn btn-primary">
            4
          </button>
        </div>
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" className="btn btn-secondary">
            5
          </button>
          <button type="button" className="btn btn-secondary">
            6
          </button>
          <button type="button" className="btn btn-secondary">
            7
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
          <button type="button" className="btn btn-info">
            8
          </button>
        </div>
      </div>
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-primary">
          Middle
        </button>
        <button type="button" className="btn btn-primary">
          Right
        </button>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-primary">
          Middle
        </button>
        <button type="button" className="btn btn-primary">
          Right
        </button>
      </div>
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-primary">
          Middle
        </button>
        <button type="button" className="btn btn-primary">
          Right
        </button>
      </div>
    </div>
  );
}
