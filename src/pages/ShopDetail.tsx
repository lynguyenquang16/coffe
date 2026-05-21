import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";
import { products } from "./products";

function ShopDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("desc"); // 'desc', 'info', 'rev'

  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [mainImage, setMainImage] = useState(product.image);
  const productName = product.name;

  // Tự động cuộn lên đầu trang khi vào trang chi tiết
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    toast.success("🛒 Đã thêm " + quantity + " sản phẩm vào giỏ hàng!", {
      theme: "colored",
      icon: "☕",
    });
  };

  return (
    <main>
      {/* breadcrumb-area */}
      <section
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: "url(/img/bg/bdrc-bg.jpg)" }}
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
                          <Link to="/">Home</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Shop Details
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      onClick={() =>
                        setMainImage(`/img/shop/details/large${num}.jpg`)
                      }
                      style={{
                        cursor: "pointer",
                        border:
                          mainImage === `/img/shop/details/large${num}.jpg`
                            ? "2px solid #fe4a49"
                            : "2px solid transparent",
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "0.3s",
                      }}
                    >
                      <img src={`/img/shop/details/thumb${num}.jpg`} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-details-img mb-30">
                <div
                  className="product-large-img"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={mainImage}
                    alt=""
                    style={{ transition: "0.5s ease" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="product-details mb-30">
                <div className="product-details-title">
                  <p>Workstead</p>
                  <h1>{productName}</h1>
                  <div className="price details-price pb-30 mb-20">
                    <span>${product.price}.00</span>
                    <span className="old-price">${product.oldPrice}.00</span>
                  </div>
                </div>
                <p>
                  {product.description ||
                    "Dòng cà phê thượng hạng được rang xay thủ công, mang lại hương vị nồng nàn và tỉnh táo cho ngày mới."}
                </p>
                <div className="product-cat mt-30 mb-30">
                  <span>Category: </span>
                  <a href="#">furniture,</a> <a href="#">decor</a>
                </div>
                <div className="product-details-action">
                  <form onSubmit={handleAddToCart}>
                    <div className="plus-minus">
                      <div className="cart-plus-minus">
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          min="1"
                          style={{
                            width: "60px",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                          }}
                        />
                      </div>
                    </div>
                    <button
                      className="btn"
                      type="submit"
                      style={{
                        background: "#fe4a49",
                        color: "#fff",
                        padding: "12px 30px",
                        borderRadius: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Thêm vào giỏ hàng
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
                <ul className="nav text-center justify-content-center pb-30 mb-50">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "desc" ? "active" : ""}`}
                      onClick={() => setActiveTab("desc")}
                      style={{
                        background: "none",
                        border: "none",
                        color: activeTab === "desc" ? "#fe4a49" : "#666",
                        fontWeight: "bold",
                        borderBottom:
                          activeTab === "desc" ? "2px solid #fe4a49" : "none",
                      }}
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "info" ? "active" : ""}`}
                      onClick={() => setActiveTab("info")}
                      style={{
                        background: "none",
                        border: "none",
                        color: activeTab === "info" ? "#fe4a49" : "#666",
                        fontWeight: "bold",
                        borderBottom:
                          activeTab === "info" ? "2px solid #fe4a49" : "none",
                      }}
                    >
                      Additional Information
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "rev" ? "active" : ""}`}
                      onClick={() => setActiveTab("rev")}
                      style={{
                        background: "none",
                        border: "none",
                        color: activeTab === "rev" ? "#fe4a49" : "#666",
                        fontWeight: "bold",
                        borderBottom:
                          activeTab === "rev" ? "2px solid #fe4a49" : "none",
                      }}
                    >
                      Reviews(10)
                    </button>
                  </li>
                </ul>
              </div>
              <div
                className="tab-content"
                style={{
                  padding: "20px",
                  background: "#fff",
                  borderRadius: "10px",
                }}
              >
                {activeTab === "desc" && (
                  <div className="animate-fade">
                    <p>{product.description || "Dòng cà phê thượng hạng..."}</p>
                  </div>
                )}
                {activeTab === "info" && (
                  <div className="animate-fade">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Weight</th>
                          <td>1.4 oz</td>
                        </tr>
                        <tr>
                          <th>Category</th>
                          <td>{product.category}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === "rev" && (
                  <div className="animate-fade">
                    <p>No reviews yet for this product.</p>
                  </div>
                )}
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
