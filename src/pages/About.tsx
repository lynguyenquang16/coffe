import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

function About() {
  return (
    <main>
      <Breadcrumb title="About" />

      {/* about-area */}
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="animations-02">
          <img src="/img/bg/an-img-02.png" alt="contact-bg-an-01" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src="/img/features/about_img_02.png" alt="img" />
                <div className="about-icon">
                  <img src="/img/features/about_img_03.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated pl-30"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5>
                    <span className="circle-left">
                      <img src="/img/bg/circle-left.png" alt="img" />
                    </span>{" "}
                    About Us
                  </h5>
                  <h2>Would You Like Delicious Coffee</h2>
                </div>
                <p>
                  Morbi tortor urna, placerat vel arcu quis, fringilla egestas
                  neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus
                  et gravida nibh, quis posuere felis. In commodo mi lectus,
                  Integer ligula lorem, finibus vitae lorem vitae tincidunt
                  dolor consequat quis.
                </p>
                <p>
                  Cras finibus laoreet felis et hendrerit. Integer ligula lorem,
                  finibus vitae lorem at, egestas consectetur urna. Integer id
                  ultricies elit. Maecenas sodales nibh, quis posuere felis. In
                  commodo mi lectus venenatis metus eget fringilla. Suspendisse
                  varius ante eget lorem tempus blandit. Aenean eu vulputate
                  lorem, quis auctor lectus.
                </p>
                <div className="about-content3 mt-30">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                      <div className="signature">
                        <img src="/img/features/signature.png" alt="img" />
                        <h3 className="mt-10">Vincent Smith</h3>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <div className="slider-btn">
                        <Link to="/about" className="btn ss-btn smoth-scroll">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-area-end */}
      {/* skill-area */}
      <section
        id="skill"
        className="skill-area p-relative fix"
        style={{ background: "#3f271e" }}
      >
        <div className="animations-01">
          <img src="/img/bg/an-img-05.png" alt="contact-bg-an-05" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="skills-content s-about-content">
                <div className="skills-title pb-20">
                  <h5>
                    <span className="circle-left">
                      <img src="/img/bg/circle-left-w.png" alt="img" />
                    </span>{" "}
                    Coffee We Use
                  </h5>
                  <h2>We Offer Wide Selection of Coffee</h2>
                </div>
                <p>
                  Vestibulum non ornare nunc. Maecenas a metus in est iaculis
                  pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum
                  consequat porttitor.
                </p>
                <div className="skills-content s-about-content mt-20">
                  <div className="skills">
                    <div className="skill mb-30">
                      <div className="skill-name">Qulity Production</div>
                      <div className="skill-bar">
                        <div
                          className="skill-per"
                          id="skill-80"
                          style={{ width: "80%" }}
                        />{" "}
                      </div>
                    </div>
                    <div className="skill mb-30">
                      <div className="skill-name">Maintenance Services</div>
                      <div className="skill-bar">
                        <div
                          className="skill-per"
                          id="skill-90"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                    <div className="skill mb-30">
                      <div className="skill-name">Product Managment</div>
                      <div className="skill-bar">
                        <div
                          className="skill-per"
                          id="skill-70"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
              <div className="skills-img">
                <img src="/img/bg/skills-img.png" alt="img" className="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skill-area-end */}
      {/* blog-area */}
      <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
        <div className="animations-02">
          <img src="/img/bg/an-img-06.png" alt="contact-bg-an-05" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <span className="circle-left">
                    <img src="/img/bg/circle-left.png" alt="img" />
                  </span>{" "}
                  Our Blog
                </h5>
                <h2>Latest Blog &amp; News</h2>
                <p>
                  Proin consectetur non dolor vitae pulvinar. Pellentesque
                  sollicitudin dolor eget neque viverra, sed interdum metus
                  interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper
                  dolor iaculis vel
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-detail">
                    <img src="/img/blog/inner_b1.jpg" alt="img" />
                  </Link>
                </div>
                <div className="blog-content2">
                  <div className="date-home">24th March 2022</div>
                  <h4>
                    <Link to="/blog-detail">
                      Cras accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <Link to="/blog-detail">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-detail">
                    <img src="/img/blog/inner_b2.jpg" alt="img" />
                  </Link>
                </div>
                <div className="blog-content2">
                  <div className="date-home">24th March 2022</div>
                  <h4>
                    <Link to="/blog-detail">
                      Dras accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <Link to="/blog-detail">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-detail">
                    <img src="/img/blog/inner_b3.jpg" alt="img" />
                  </Link>
                </div>
                <div className="blog-content2">
                  <div className="date-home">24th March 2022</div>
                  <h4>
                    <Link to="/blog-detail">
                      Seas accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <Link to="/blog-detail">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-area-end */}

      <Newsletter />
    </main>
  );
}
export default About;
