import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../pages/CartContext";

function Header() {
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const $ = (window as any).$;
    if (!$) return;

    // Sử dụng timeout nhỏ để đảm bảo React đã render xong DOM trước khi jQuery can thiệp
    const timer = setTimeout(() => {
      const mobileMenu = $("#mobile-menu");
      // Kiểm tra nếu menu chưa được khởi tạo (tránh bị lặp menu)
      if (mobileMenu.length > 0 && $(".mean-nav").length === 0) {
        mobileMenu.meanmenu({
          meanMenuContainer: ".mobile-menu",
          meanScreenWidth: "992",
        });
      }
    }, 200);

    // Hiệu ứng Sticky Header khi cuộn
    const handleScroll = () => {
      const scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#header-sticky").removeClass("sticky-menu");
      } else {
        $("#header-sticky").addClass("sticky-menu");
      }
    };

    $(window).on("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      $(window).off("scroll", handleScroll);
      // Dọn dẹp các phần tử MeanMenu tạo ra để tránh lỗi khi quay lại trang
      $(".mean-bar, .mean-push").remove();
      // Hiển thị lại menu gốc nếu nó bị plugin ẩn đi
      $("#mobile-menu").show();
    };
  }, [location]); // Chạy lại khi chuyển trang để reset menu mobile

  return (
    <header className="header-area header-three">
      <div className="header-top second-header d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 d-none d-lg-block">
              <div className="header-cta">
                <ul>
                  <li>
                    <i className="fas fa-clock" />
                    <span>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-none d-lg-block text-right">
              <div className="header-social">
                <span></span>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 d-none d-lg-block mt-10 mb-10 text-right">
              <div className="header-social">
                <span>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" title="LinkedIn">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" title="Youtube">
                    <i className="fab fa-youtube" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img src="/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="main-menu text-right text-xl-right">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">Home Page 01</Link>
                          </li>
                          <li>
                            <Link to="/home2">Home Page 02</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu</Link>
                      </li>
                      <li className="has-sub">
                        <Link to="/services">Services</Link>
                        <ul>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/service-detail">Services Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="#" onClick={(e) => e.preventDefault()}>
                          Pages
                        </Link>
                        <ul>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="/shop">Shop</Link>
                          </li>
                          <li>
                            <Link to="/shop-detail">Shop Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <Link to="/blog">Blog</Link>
                        <ul>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-detail">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-15 mb-15">
                <div className="login">
                  <ul
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* Cart Icon in Header */}
                    <li>
                      <Link
                        to="/cart"
                        style={{
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#fe4a49",
                          fontSize: 22,
                        }}
                        title="Giỏ hàng"
                      >
                        <i className="fas fa-shopping-cart" />
                        {totalItems > 0 && (
                          <span
                            style={{
                              position: "absolute",
                              top: -8,
                              right: -10,
                              background: "#2d3436",
                              color: "#fff",
                              borderRadius: "50%",
                              width: 20,
                              height: 20,
                              fontSize: 11,
                              fontWeight: 700,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {totalItems}
                          </span>
                        )}
                      </Link>
                    </li>
                    <li>
                      <div className="second-header-btn">
                        <Link to="/contact" className="btn">
                          Book A Table
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
