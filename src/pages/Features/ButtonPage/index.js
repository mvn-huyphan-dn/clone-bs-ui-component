import { Link } from "react-router-dom";

export default function ButtonPage() {
  return (
    <>
      <div className="flex example">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-danger">Danger</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-info">Info</button>
        <Link to="#" className="btn btn-link" role="button">
          Link
        </Link>
      </div>
      <div className="flex example">
        <Link to="#" className="btn btn-primary" role="button">
          Link
        </Link>
        <button className="btn btn-primary" type="submit">
          Button
        </button>
        <input className="btn btn-primary" type="button" value="Input" />
        <input className="btn btn-primary" type="submit" value="Submit" />
        <input className="btn btn-primary" type="reset" value="Reset" />
      </div>
      <div className="flex example">
        <button className="btn btn-outline-primary">Primary</button>
        <button className="btn btn-outline-secondary">Secondary</button>
        <button className="btn btn-outline-success">Success</button>
        <button className="btn btn-outline-danger">Danger</button>
        <button className="btn btn-outline-warning">Warning</button>
        <button className="btn btn-outline-info">Info</button>
      </div>
      <div className="flex example">
        <button className="btn btn-primary btn-lg">Primary</button>
        <button className="btn btn-secondary btn-lg">Secondary</button>
      </div>
      <div className="flex example">
        <button className="btn btn-primary btn-sm">Primary</button>
        <button className="btn btn-secondary btn-sm">Secondary</button>
      </div>
      <div className="flex example">
        <button className="btn btn-primary disabled">Primary</button>
        <button className="btn btn-secondary disabled">Secondary</button>
      </div>
      <div className="flex-column example">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <div className="flex example">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-primary active">Active Primary</button>
        <button className="btn btn-primary disabled">Disabled</button>
      </div>
    </>
  );
}
