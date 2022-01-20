import Badge from "../../../components/Badge";

export default function BadgePage() {
  return (
    <div>
      <div>
        <h1 className="mt-10">
          Example heading <span className="badge bg-color-secondary">New</span>
        </h1>
        <h2 className="mt-10">
          Example heading <span className="badge bg-color-secondary">New</span>
        </h2>
        <h3 className="mt-10">
          Example heading <span className="badge bg-color-secondary">New</span>
        </h3>
        <h4 className="mt-10">
          Example heading <span className="badge bg-color-secondary">New</span>
        </h4>
        <h5 className="mt-10">
          Example heading <span className="badge bg-color-secondary">New</span>
        </h5>
        <h6 className="mt-10">
          Example heading <span className="badge bg-color-secondary">New</span>
        </h6>
      </div>
      <div>
        <button
          className="bg-color-primary position-relative br-1 mt-10"
          style={{
            display: "inline-block",
            padding: "10px 20px",
          }}
        >
          Notification
          <Badge className="badge bg-color-secondary">27</Badge>
        </button>
      </div>
      <div className="mt-10">
        <button
          className="bg-color-primary position-relative br-1"
          style={{
            display: "inline-block",
            padding: "10px 20px",
          }}
        >
          Mail
          <Badge className="badge bg-color-danger translate-50-50 position-absolute top-0 left-100 br-pill">
            99+
          </Badge>
        </button>
      </div>
      <div className="mt-10">
        <button
          className="bg-color-primary position-relative br-1"
          style={{
            display: "inline-block",
            padding: "10px 20px",
          }}
        >
          Mail
          <Badge className="badge bg-color-danger p-2 translate-50-50 position-absolute top-0 left-100 br-circle"></Badge>
        </button>
      </div>
      <div className="mt-20">
        <Badge className="badge bg-color-primary mr-5 ">Primary</Badge>
        <Badge className="badge bg-color-secondary mr-5 ">Secondary</Badge>
        <Badge className="badge bg-color-success mr-5 ">Success</Badge>
        <Badge className="badge bg-color-danger mr-5 ">Danger</Badge>
        <Badge className="badge bg-color-warning mr-5 ">Warning</Badge>
        <Badge className="badge bg-color-info">Info</Badge>
      </div>
      <div className="mt-20">
        <Badge className="badge bg-color-primary mr-5 br-pill">Primary</Badge>
        <Badge className="badge bg-color-secondary mr-5 br-pill">
          Secondary
        </Badge>
        <Badge className="badge bg-color-success mr-5 br-pill">Success</Badge>
        <Badge className="badge bg-color-danger mr-5 br-pill">Danger</Badge>
        <Badge className="badge bg-color-warning mr-5 br-pill">Warning</Badge>
        <Badge className="badge bg-color-info br-pill">Info</Badge>
      </div>
    </div>
  );
}
