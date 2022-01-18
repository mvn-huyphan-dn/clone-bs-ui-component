import Alert from "../../../components/Alert";
import { Link } from "react-router-dom";

export default function AlertsPage() {
  return (
    <>
      <div>
        <div
          style={{ marginTop: "30px", marginBottom: "10px" }}
        >{`Class "alert-\${name}"`}</div>
        <Alert className="alert-primary">This is primary alert!</Alert>
        <Alert className="alert-secondary">This is secondary alert!</Alert>
        <Alert className="alert-success">This is success alert!</Alert>
        <Alert className="alert-danger">This is danger alert!</Alert>
        <Alert className="alert-warning">This is warning alert!</Alert>
        <Alert className="alert-info">This is info alert!</Alert>
      </div>
      <div>
        <div
          style={{ marginTop: "30px", marginBottom: "10px" }}
        >{`Class "alert-link"`}</div>
        <Alert className="alert-primary">
          This is primary alert!{" "}
          <Link to="#" className="alert-link">
            This is the link!
          </Link>
        </Alert>
        <Alert className="alert-secondary">
          This is secondary alert!
          <Link to="#" className="alert-link">
            This is the link!
          </Link>
        </Alert>
        <Alert className="alert-success">
          This is success alert!
          <Link to="#" className="alert-link">
            This is the link!
          </Link>
        </Alert>
        <Alert className="alert-danger">
          This is danger alert!
          <Link to="#" className="alert-link">
            This is the link!
          </Link>
        </Alert>
        <Alert className="alert-warning">
          This is warning alert!
          <Link to="#" className="alert-link">
            This is the link!
          </Link>
        </Alert>
        <Alert className="alert-info">
          This is info alert!
          <Link to="#" className="alert-link">
            This is the link!
          </Link>
        </Alert>
      </div>
      <div>
        <div
          style={{ marginTop: "30px", marginBottom: "10px" }}
        >{`close props`}</div>
        <Alert className="alert-danger" closeButton>
          This is danger alert with close button!
        </Alert>
        <Alert className="alert-warning" closeButton>
          This is warning alert with close button!
        </Alert>
      </div>
    </>
  );
}
