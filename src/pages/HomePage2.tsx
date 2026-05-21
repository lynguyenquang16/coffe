import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

function HomePage2() {
  const { addToCart } = useCart();

  useEffect(() => {
    const $ = (window as any).$;
    if ($) {
      if ($(".slider-active").length > 0) {
        $(".slider-active").slick({
          autoplay: true,
          autoplaySpeed: 10000,
          dots: false,
          fade: true,
          arrows: true,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
        });
      }
      if ($(".testimonial-active").length > 0) {
        $(".testimonial-active").slick({
          dots: true,
          infinite: true,
          arrows: false,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 2,
        });
      }
    }
    return () => {
      if ($ && $(".slider-active").hasClass("slick-initialized"))
        $(".slider-active").slick("unslick");
      if ($ && $(".testimonial-active").hasClass("slick-initialized"))
        $(".testimonial-active").slick("unslick");
    };
  }, []);

  const handleAddToCart = (
    id: number,
    name: string,
    price: number,
    img: string,
  ) => {
    addToCart({
      id,
      name,
      price,
      oldPrice: price + 5,
      image: img,
      category: "Coffee",
    });
    toast.success(`Đã thêm ${name} vào giỏ hàng!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <main>
      {/* slider-area */}
      <section id="home" className="slider-area fix p-relative">
        <div className="slider-active" style={{ background: "#101010" }}>
          <div
            className="single-slider slider-bg d-flex align-items-center"
            style={{
              backgroundImage: "url(/img/slider/slider_bg_01.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-7">
                  <div className="slider-content s-slider-content mt-100">
                    <h5 data-animation="fadeInUp" data-delay=".4s">
                      Welcome To Bruin Cafe
                    </h5>
                    <h2 data-animation="fadeInUp" data-delay=".4s">
                      Enjoy Your Morning Coffee Shot
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Donec vitae libero non enim placerat eleifend aliquam erat
                      volutpat. Curabitur diam ex, dapibus purus sapien, cursus
                      sed nisl tristique, commodo gravida lectus non.
                    </p>
                    <div className="slider-btn mt-30 mb-105">
                      <Link
                        to="/contact"
                        className="btn ss-btn mr-15"
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                      >
                        Book A Table
                      </Link>
                      <Link
                        to="/shop"
                        className="btn ss-btn active"
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                      >
                        Visit Our Shop
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 p-relative"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* slider-area-end */}
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
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center">
                <h5>
                  <span className="circle-left">
                    <img src="img/bg/circle-left.png" alt="img" />
                  </span>{" "}
                  Our Features
                </h5>
                <h2>What We Provide You</h2>
                <p>
                  Proin consectetur non dolor vitae pulvinar. Pellentesque
                  sollicitudin dolor eget neque viverra, sed interdum metus
                  interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper
                  dolor iaculis vel
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="services-08-item">
                <div className="services-08-thumb">
                  <img src="img/icon/fe-icon01.png" alt="img" />
                </div>
                <div className="services-08-content">
                  <h3>
                    <Link to="/service-detail"> High Quality Coffee</Link>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <Link to="/service-detail">
                    Read More <i className="fal fa-long-arrow-right" />
                  </Link>
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
                    <Link to="/service-detail">Barista Coffee Shops</Link>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <Link to="/service-detail">
                    Read More <i className="fal fa-long-arrow-right" />
                  </Link>
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
                    <Link to="/service-detail">Shop Coffee Online</Link>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <Link to="/service-detail">
                    Read More <i className="fal fa-long-arrow-right" />
                  </Link>
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
                    <Link to="/service-detail">Best Coffe Machine</Link>
                  </h3>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <Link to="/service-detail">
                    Read More <i className="fal fa-long-arrow-right" />
                  </Link>
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
      {/* Meal-area-start */}
      <section className="meal-select-section pt-120 pb-120 p-relative">
        <div className="animations-02">
          <img src="img/bg/an-img-04.png" alt="contact-bg-an-01" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center">
                <h5>
                  <span className="circle-left">
                    <img src="img/bg/circle-left.png" alt="img" />
                  </span>{" "}
                  Our Menu
                </h5>
                <h2>What We Have In Here</h2>
                <p>
                  Proin consectetur non dolor vitae pulvinar. Pellentesque
                  sollicitudin dolor eget neque viverra, sed interdum metus
                  interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper
                  dolor iaculis vel
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="populer-meal">
                <ul>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img1.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Coffe Latte</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$12.90</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img2.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Coffe Americano</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img3.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Macchiato</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img4.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Coffe Mocha</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img5.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Cappuccino</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img6.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Iced Coffe</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img7.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Chocolate Mocha</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meal-container">
                      <div className="meal-img">
                        <img src="img/shop/img8.jpg" alt="img" />
                      </div>
                      <div className="meal-content">
                        <h5>Vanilla Latte</h5>
                        <p>Espresso and Light Layer of Crema</p>
                      </div>
                      <div className="line">
                        <hr />
                      </div>
                      <div className="meal-price">
                        <strong>$13.00</strong>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="slider-btn">
                <Link to="/about" className="btn ss-btn smoth-scroll mt-30">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meal-area-end */}
      {/* product-slider */}
      <section
        className="product-slider pt-120 pb-90 p-relative fix"
        style={{ backgroundColor: "#f7f5f1" }}
      >
        <div className="animations-01">
          <img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" />
        </div>
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
                <h2>Buy Our Featured Products</h2>
                <p>
                  Proin consectetur non dolor vitae pulvinar. Pellentesque
                  sollicitudin dolor eget neque viverra, sed interdum metus
                  interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper
                  dolor iaculis vel
                </p>
              </div>
            </div>
          </div>
          <div className="row home-blog-active">
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-detail">
                    <img src="/img/shop/img1.jpg" alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <button
                      onClick={() =>
                        handleAddToCart(
                          1,
                          "Caramel Macchiato",
                          15,
                          "/img/shop/img1.jpg",
                        )
                      }
                      style={{
                        background: "#3f271e",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <Link to="/shop-detail">Caramel Macchiato</Link>
                  </h4>
                  <div className="price">
                    <span className="old-price">$20</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-detail/2">
                    <img src="img/shop/img2.jpg" alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-detail/2">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <Link to="/shop-detail/2">Mocha</Link>
                  </h4>
                  <div className="price">
                    <span className="old-price">$20</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-detail/3">
                    <img src="img/shop/img3.jpg" alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-detail/3">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <Link to="/shop-detail/3">French Vanilla</Link>
                  </h4>
                  <div className="price">
                    <span className="old-price">$20</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-detail/4">
                    <img src="img/shop/img4.jpg" alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-detail/4">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <Link to="/shop-detail/4">Latte</Link>
                  </h4>
                  <div className="price">
                    <span className="old-price">$20</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-detail/5">
                    <img src="img/shop/img5.jpg" alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-detail/5">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <Link to="/shop-detail/5">French Vanilla</Link>
                  </h4>
                  <div className="price">
                    <span className="old-price">$20</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-detail/6">
                    <img src="img/shop/img6.jpg" alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-detail/6">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <Link to="/shop-detail/6">Latte</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product-slider-end */}
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
      {/* skill-area */}
      <section
        id="skill"
        className="skill-area p-relative fix"
        style={{ background: "#3f271e" }}
      >
        <div className="animations-01">
          <img src="img/bg/an-img-05.png" alt="contact-bg-an-05" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="skills-content s-about-content">
                <div className="skills-title pb-20">
                  <h5>
                    <span className="circle-left">
                      <img src="img/bg/circle-left-w.png" alt="img" />
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
                <img src="img/bg/skills-img.png" alt="img" className="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skill-area-end */}
      {/* blog-area */}
      <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
        <div className="animations-02">
          <img src="img/bg/an-img-06.png" alt="contact-bg-an-05" />
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
                    <img src="img/bg/circle-left.png" alt="img" />
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
                  <a href="blog-details.html">
                    <img src="img/blog/inner_b1.jpg" alt="img" />
                  </a>
                </div>
                <div className="blog-content2">
                  <div className="date-home">24th March 2022</div>
                  <h4>
                    <a href="blog-details.html">
                      Cras accumsan nulla nec lacus ultricies placerat.
                    </a>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <a href="blog-details.html">Read More</a>
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
                  <a href="blog-details.html">
                    <img src="img/blog/inner_b2.jpg" alt="img" />
                  </a>
                </div>
                <div className="blog-content2">
                  <div className="date-home">24th March 2022</div>
                  <h4>
                    <a href="blog-details.html">
                      Dras accumsan nulla nec lacus ultricies placerat.
                    </a>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <a href="blog-details.html">Read More</a>
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
                  <a href="blog-details.html">
                    <img src="img/blog/inner_b3.jpg" alt="img" />
                  </a>
                </div>
                <div className="blog-content2">
                  <div className="date-home">24th March 2022</div>
                  <h4>
                    <a href="blog-details.html">
                      Seas accumsan nulla nec lacus ultricies placerat.
                    </a>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <a href="blog-details.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-area-end */}
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
      {/* gallery-area */}
      <section className="profile fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="masonry-gallery-huge">
                <div className="grid col2">
                  <div className="grid-item financial">
                    <a
                      className="popup-image"
                      href="img/gallery/protfolio-img01.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="img/gallery/protfolio-img01.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="grid-item banking">
                    <a
                      className="popup-image"
                      href="img/gallery/protfolio-img02.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="img/gallery/protfolio-img02.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="grid-item insurance">
                    <a
                      className="popup-image"
                      href="img/gallery/protfolio-img03.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="img/gallery/protfolio-img03.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="grid-item family">
                    <a
                      className="popup-image"
                      href="img/gallery/protfolio-img04.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="img/gallery/protfolio-img04.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="grid-item business">
                    <a
                      className="popup-image"
                      href="img/gallery/protfolio-img05.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="img/gallery/protfolio-img05.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gallery-area-end */}
    </main>
  );
}
export default HomePage2;
