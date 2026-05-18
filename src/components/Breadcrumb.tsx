import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
}

function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <section
      className="breadcrumb-area d-flex align-items-center"
      style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12">
            <div className="breadcrumb-wrap text-center">
              <div className="breadcrumb-title">
                <h2>{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
