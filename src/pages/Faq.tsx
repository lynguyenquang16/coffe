import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

function Faq() {
  return (
    <main>
      <Breadcrumb title="Faq" />

      {/* faq-area */}
      <section id="faq" className="faq-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="faq-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-bs-expanded="true"
                          aria-bs-controls="collapseOne"
                        >
                          Breaking The Rules Using SQLite To Demo Web?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                      style={{}}
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-bs-expanded="true"
                          aria-bs-controls="collapseTwo"
                        >
                          Monthly Web Development Update Pragmatic Releasing?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                      style={{}}
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-bs-expanded="false"
                          aria-bs-controls="collapseThree"
                        >
                          How To Use Underlined Text To Improve User Experience
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                      style={{}}
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-bs-expanded="false"
                          aria-bs-controls="collapseFour"
                        >
                          Understanding CSS Layout And The Block Formatting
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="faq-wrap">
                <div className="accordion" id="accordionExample1">
                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefive"
                          aria-bs-expanded="false"
                          aria-bs-controls="collapsefive"
                        >
                          Breaking The Rules Using SQLite To Demo Web?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapsefive"
                      className="collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionExample1"
                      style={{}}
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSix">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-bs-expanded="true"
                          aria-bs-controls="collapseSix"
                        >
                          Monthly Web Development Update Pragmatic Releasing?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse show"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                      style={{}}
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSeveen">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeveen"
                          aria-bs-expanded="false"
                          aria-bs-controls="collapseSeveen"
                        >
                          How To Use Underlined Text To Improve User Experience
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSeveen"
                      className="collapse"
                      aria-labelledby="headingSeveen"
                      data-bs-parent="#accordionExample"
                      style={{}}
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingEighte">
                      <h2 className="mb-0">
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEighte"
                          aria-bs-expanded="false"
                          aria-bs-controls="collapseEighte"
                        >
                          Understanding CSS Layout And The Block Formatting
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseEighte"
                      className="collapse"
                      aria-labelledby="headingEighte"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq-area-end */}

      <Newsletter />

      {/* team-area */}
      <section className="team-area2 fix p-relative pt-105 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative">
              <div
                className="section-title center-align mb-40 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <span className="circle-left">
                    <img src="img/bg/circle-left.png" alt="img" />
                  </span>{" "}
                  Our Team
                </h5>
                <h2>Best Expert Coffee</h2>
                <p>
                  Proin consectetur non dolor vitae pulvinar. Pellentesque
                  sollicitudin dolor eget neque viverra, sed interdum metus
                  interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper
                  dolor iaculis vel{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row team-active">
            <div className="col-xl-4">
              <div className="single-team mb-40">
                <div className="team-thumb">
                  <div className="brd">
                    <img src="img/team/team01.jpg" alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>Howard Holmes</h4>
                  <p>Designer</p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-40">
                <div className="team-thumb">
                  <div className="brd">
                    <img src="img/team/team02.jpg" alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>Ella Thompson</h4>
                  <p>Designer</p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-40">
                <div className="team-thumb">
                  <div className="brd">
                    <img src="img/team/team03.jpg" alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>Vincent Cooper</h4>
                  <p>Designer</p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-40">
                <div className="team-thumb">
                  <div className="brd">
                    <img src="img/team/team04.jpg" alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>Danielle Bryant</h4>
                  <p>Designer</p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-40">
                <div className="team-thumb">
                  <div className="brd">
                    <img src="img/team/team05.jpg" alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>Vincent Cooper</h4>
                  <p>Designer</p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team-area-end */}
    </main>
  );
}
export default Faq;
