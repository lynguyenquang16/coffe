function ShopDetail() {
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
                  <h2>Shop Details</h2>
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
                          Shop Details{" "}
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
      {/* shop-banner-area start */}
      <section
        className="shop-banner-area pt-120 pb-90 "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src="img/shop/details/thumb1.jpg" alt="" />{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/shop/details/thumb2.jpg" alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab2"
                      data-bs-toggle="tab"
                      href="#profile1"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/shop/details/thumb3.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-details-img mb-30">
                <div className="tab-content" id="myTabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="product-large-img">
                      <img src="img/shop/details/large1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/shop/details/large2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile1" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/shop/details/large3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="product-details mb-30">
                <div className="product-details-title">
                  <p>Workstead</p>
                  <h1>Helios Piranho Lamp</h1>
                  <div className="price details-price pb-30 mb-20">
                    <span>$700.00</span>
                    <span className="old-price">$820.00</span>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="product-cat mt-30 mb-30">
                  <span>Category: </span>
                  <a href="#">furniture,</a>
                  <a href="#">decor</a>
                </div>
                <div className="product-details-action">
                  <form action="#">
                    <div className="plus-minus">
                      <div className="cart-plus-minus">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                    <button className="btn btn-black" type="submit">
                      add to cart
                    </button>
                  </form>
                </div>
                <div className="product-social mt-45">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop-banner-area end */}
      {/* product-desc-area start */}
      <section className="product-desc-area pb-55">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bakix-details-tab">
                <ul
                  className="nav text-center justify-content-center pb-30 mb-50"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="desc-tab"
                      data-bs-toggle="tab"
                      href="#id-desc"
                      role="tab"
                      aria-bs-controls="home"
                      aria-selected="true"
                    >
                      Description{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="id-add-in"
                      data-bs-toggle="tab"
                      href="#id-add"
                      role="tab"
                      aria-bs-controls="profile"
                      aria-selected="false"
                    >
                      Additional Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="id-r"
                      data-bs-toggle="tab"
                      href="#id-rev"
                      role="tab"
                      aria-bs-controls="profile"
                      aria-selected="false"
                    >
                      Reviews(10)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="id-desc"
                  role="tabpanel"
                  aria-labelledby="desc-tab"
                >
                  <div className="event-text mb-40">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="id-add"
                  role="tabpanel"
                  aria-labelledby="id-add-in"
                >
                  <div className="additional-info">
                    <div className="table-responsive">
                      <h4>Additional information</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Weight</th>
                            <td className="product_weight">1.4 oz</td>
                          </tr>
                          <tr>
                            <th>Dimensions</th>
                            <td className="product_dimensions">
                              62 × 56 × 12 in
                            </td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td className="product_dimensions">
                              XL, XXL, LG, SM, MD
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="id-rev"
                  role="tabpanel"
                  aria-labelledby="id-r"
                >
                  <div className="additional-info">
                    <div className="event-text mb-40">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut
                        labore et dolore magnam aliquam quaerat voluptatem.
                      </p>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product-desc-area end */}
    </main>
  );
}
export default ShopDetail;
