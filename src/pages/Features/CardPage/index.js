import { Link } from "react-router-dom";

export default function CardPage() {
  return (
    <div className="example">
      <div className="card" style={{ width: "18rem" }}>
        <div
          src="..."
          className="card-img-top flex justify-content-center align-item-center"
          alt="..."
          style={{
            height: "180px",
            backgroundColor: "#868E96",
            color: "#fff",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>Image cap</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="example">
        <div className="card">
          <div className="card-body">This is some text within a card body.</div>
        </div>
      </div>
      <div className="example">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="card-link">
              Card Link
            </Link>
            <Link to="#" className="card-link">
              Another Link
            </Link>
          </div>
        </div>
      </div>
      <div className="example">
        <div className="card" style={{ width: "18rem" }}>
          <div
            src="..."
            className="card-img-top flex justify-content-center align-item-center"
            alt="..."
            style={{
              height: "180px",
              backgroundColor: "#868E96",
              color: "#fff",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>Image cap</span>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="example">
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="example">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      <div className="example">
        <div
          className="card text-white bg-color-primary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-color-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-color-success mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-color-danger mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-dark bg-color-warning mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-dark bg-color-info mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="example">
        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-primary">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card border-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-success">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-danger">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="example">
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent border-success">
            Header
          </div>
          <div className="card-body text-success">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-footer bg-transparent border-success">
            Footer
          </div>
        </div>
      </div>
    </div>
  );
}
