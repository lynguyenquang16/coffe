import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-bg footer-p">
      <div
        className="footer-top pt-90 pb-40"
        style={{
          backgroundColor: "#3f271e",
          backgroundImage: "url(/img/bg/footer-bg.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title mb-30">
                  <img src="/img/logo/logo.png" alt="img" />
                </div>
                <div className="f-contact">
                  <ul>
                    <li>
                      <i className="icon fal fa-phone" />
                      <span>
                        1800-121-3637
                        <br />
                        +91-7052-101-786
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-envelope" />
                      <span>
                        <a href="mailto:info@example.com">info@example.com</a>
                        <br />
                        <a href="mailto:help@example.com">help@example.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check" />
                      <span>
                        1247/Plot No. 39, 15th Phase,
                        <br /> LHB Colony, Kanpur
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Links</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Shop Location</h2>
                </div>
                <div className="footer-link">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin"
                    width={600}
                    height={190}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              Copyright © Bruin 2022 . All rights reserved.
            </div>
            <div className="col-lg-6 text-right text-xl-right">
              <div className="footer-social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
