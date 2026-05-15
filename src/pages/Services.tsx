function Services() {
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
                  <h2>Service</h2>
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
                          Service
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
      {/* service-details2-area */}
      <section
        id="service-details2"
        className="pt-120 pb-380 p-relative"
        style={{ backgroundColor: "#f7f5f1" }}
      >
        <div className="animations-01">
          <img src="img/bg/an-img-01.png" alt="an-img-01" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <div className="services-08-item">
                <div className="services-08-thumb">
                  <img src="img/icon/fe-icon01.png" alt="img" />
                </div>
                <div className="services-08-content">
                  <h3>
                    <a href="single-service.html"> High Quality Coffee</a>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <a href="single-service.html">
                    Read More <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="services-08-item">
                <div className="services-08-thumb">
                  <img src="img/icon/fe-icon04.png" alt="img" />
                </div>
                <div className="services-08-content">
                  <h3>
                    <a href="single-service.html">Barista Coffee Shops</a>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <a href="single-service.html">
                    Read More <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="services-08-item">
                <div className="services-08-thumb">
                  <img src="img/icon/fe-icon05.png" alt="img" />
                </div>
                <div className="services-08-content">
                  <h3>
                    <a href="single-service.html">Shop Coffee Online</a>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <a href="single-service.html">
                    Read More <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="services-08-item">
                <div className="services-08-thumb">
                  <img src="img/icon/fe-icon06.png" alt="img" />
                </div>
                <div className="services-08-content">
                  <h3>
                    <a href="single-service.html">Best Coffe Machine</a>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <a href="single-service.html">
                    Read More <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-details2-area-end */}
      {/* booking-area */}
      <section className="booking pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-bg02">
                <div className="section-title center-align">
                  <h5>
                    <span className="circle-left">
                      <img src="img/bg/circle-left-w.png" alt="img" />
                    </span>{" "}
                    Contact Us
                  </h5>
                  <h2>Book Your Table Now !</h2>
                </div>
                <form
                  action="https://htmldemo.zcubethemes.com/bruin/mail.php"
                  method="post"
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-12">
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
                      <div className="contact-field p-relative c-option mb-20">
                        <input type="date" id="date" name="date" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-option mb-20">
                        <select name="services" id="sr">
                          <option value="sports-massage">Time</option>
                          <option value="hot-stone-message">9:30 PM</option>
                          <option value="hot-stone-message">10:30 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="slider-btn mt-15">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
                          <span>Book Table Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="booking-img">
                <img src="img/bg/booking-img.png" alt="img" />
              </div>
            </div>
            <div className="booking-img2">
              <img src="img/bg/booking-img-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* booking-area-end */}
      {/* testimonial-area */}
      <section className="testimonial-area pt-120 pb-90 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center">
                <h5>
                  <span className="circle-left">
                    <img src="img/bg/circle-left.png" alt="img" />
                  </span>{" "}
                  Our Online Shop
                </h5>
                <h2>What Our Clients Says</h2>
                <p>
                  Proin consectetur non dolor vitae pulvinar. Pellentesque
                  sollicitudin dolor eget neque viverra, sed interdum metus
                  interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper
                  dolor iaculis vel
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testimonial-active">
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div className="ta-info">
                      <h6>Jina Nilson</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <div className="review-icon">
                    <img src="img/testimonial/review-icon.png" alt="img" />
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar_02.png" alt="img" />
                    <div className="ta-info">
                      <h6>Braitly Dcosta</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <div className="review-icon">
                    <img src="img/testimonial/review-icon.png" alt="img" />
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div className="ta-info">
                      <h6>Jina Nilson</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <div className="review-icon">
                    <img src="img/testimonial/review-icon.png" alt="img" />
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar_02.png" alt="img" />
                    <div className="ta-info">
                      <h6>Braitly Dcosta</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <div className="review-icon">
                    <img src="img/testimonial/review-icon.png" alt="img" />
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-area-end */}
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
export default Services;
