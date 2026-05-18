import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

const menuItems = [
  {
    id: 1,
    name: "Coffe Latte",
    price: "12.90",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img1.jpg",
  },
  {
    id: 2,
    name: "Coffe Americano",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img2.jpg",
  },
  {
    id: 3,
    name: "Macchiato",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img3.jpg",
  },
  {
    id: 4,
    name: "Coffe Mocha",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img4.jpg",
  },
  {
    id: 5,
    name: "Cappuccino",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img5.jpg",
  },
  {
    id: 6,
    name: "Iced Coffe",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img6.jpg",
  },
  {
    id: 7,
    name: "Chocolate Mocha",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img7.jpg",
  },
  {
    id: 8,
    name: "Vanilla Latte",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img8.jpg",
  },
  {
    id: 9,
    name: "Iced Latte",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img1.jpg",
  },
  {
    id: 10,
    name: "Espresso",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img3.jpg",
  },
  {
    id: 11,
    name: "Caramel Latte",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img5.jpg",
  },
  {
    id: 12,
    name: "Cortado",
    price: "13.00",
    desc: "Espresso and Light Layer of Crema",
    img: "/img/shop/img7.jpg",
  },
];

function Menu() {
  return (
    <main>
      <Breadcrumb title="Our Menu" />

      {/* Meal-area-start */}
      <section className="meal-select-section pt-120 pb-90 p-relative">
        <div className="animations-02">
          <img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="populer-meal">
                <ul>
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <div className="meal-container">
                        <div className="meal-img">
                          <img src={item.img} alt={item.name} />
                        </div>
                        <div className="meal-content">
                          <h5>{item.name}</h5>
                          <p>{item.desc}</p>
                        </div>
                        <div className="line">
                          <hr />
                        </div>
                        <div className="meal-price">
                          <strong>${item.price}</strong>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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
                    <img src="/img/bg/circle-left.png" alt="img" />
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
                    <Link to="/shop-detail">Add Cart</Link>
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
                  <a href="shop-details.html">
                    <img src="img/shop/img2.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="shop-details.html">Add Cart</a>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <a href="shop-details.html">Mocha</a>
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
                  <a href="shop-details.html">
                    <img src="img/shop/img3.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="shop-details.html">Add Cart</a>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <a href="shop-details.html">French Vanilla</a>
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
                  <a href="shop-details.html">
                    <img src="img/shop/img4.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="shop-details.html">Add Cart</a>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <a href="shop-details.html">Latte</a>
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
                  <a href="shop-details.html">
                    <img src="img/shop/img5.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="shop-details.html">Add Cart</a>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <a href="shop-details.html">French Vanilla</a>
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
                  <a href="shop-details.html">
                    <img src="img/shop/img6.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="shop-details.html">Add Cart</a>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <h4 className="pro-title">
                    <a href="shop-details.html">Latte</a>
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
export default Menu;
