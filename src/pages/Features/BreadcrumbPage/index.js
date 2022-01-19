import { Link } from "react-router-dom";

export default function BreadcrumbPage() {
  return (
    <>
      <nav className="mb-10">
        <ol className="breadcrumb flex flex-wrap">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
        </ol>
      </nav>
      <nav className="mb-10">
        <ol className="breadcrumb flex">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="#">Library</Link>
          </li>
        </ol>
      </nav>
      <nav className="mb-10">
        <ol className="breadcrumb flex flex-wrap">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Library</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="#">Data</Link>
          </li>
        </ol>
      </nav>

      <nav className="mb-20">
        <ol className="breadcrumb breadcrumb-divider flex flex-wrap">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Library</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="#">Data</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
