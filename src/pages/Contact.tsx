function Contact() {
  return (
    <main>
      {/* breadcrumb-area */}
      <section
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-center">
                <div className="breadcrumb-title">
                  <h2>Contact Us</h2>
                  <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      {/* contact-area */}
      <section
        id="contact"
        className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 order-1">
              <div className="contact-info">
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-map" />
                  </div>
                  <h5>Office Address</h5>
                  <p>
                    380 St Kilda Road, Melbourne <br />
                    VIC 3004, Australia
                  </p>
                </div>
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-clock" />
                  </div>
                  <h5>Working Hours</h5>
                  <p>
                    Monday to Friday 09:00 to 18:30 <br />
                    Saturday 15:30
                  </p>
                </div>
                <div
                  className="single-cta wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <h5>Message Us</h5>
                  <p>
                    {" "}
                    <a href="#">support@example.com</a>
                    <br />
                    <a href="#">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-2">
              <div className="contact-bg02">
                <div
                  className="section-title center-align mb-40 text-center wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  <h2>Get In Touch</h2>
                </div>
                <form
                  action="https://htmldemo.zcubethemes.com/bruin/mail.php"
                  method="post"
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Eamil"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Write comments"
                          defaultValue={""}
                        />
                      </div>
                      <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact-area-end */}
      {/* newslater-area */}
      <section
        className="newslater-area p-relative pt-120 pb-120"
        style={{ backgroundColor: "#f7f5f1" }}
      >
        <div className="animations-01">
          <img src="img/bg/an-img-07.png" alt="contact-bg-an-05" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-xl-9 col-lg-9">
              <div
                className="section-title center-align mb-40 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <span className="circle-left">
                    <img src="img/bg/circle-left.png" alt="img" />
                  </span>{" "}
                  Newsletter
                </h5>
                <h2>Get Best Offers On The Coffee</h2>
                <p>
                  With the subscription, enjoy your favourite coffees without
                  having to think about it
                </p>
              </div>
              <form
                name="ajax-form"
                id="contact-form4"
                action="#"
                method="post"
                className="contact-form newslater"
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email2"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    defaultValue=""
                    required
                  />
                  <button type="submit" className="btn btn-custom" id="send2">
                    Subscribe Now
                  </button>
                </div>
                {/* /Form-email */}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* newslater-aread-end */}
    </main>
  );
}
export default Contact;
