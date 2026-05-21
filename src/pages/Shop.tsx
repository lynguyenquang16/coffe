import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import Breadcrumb from "../components/Breadcrumb";
import { products } from "./products";

function Shop() {
  const { addToCart, totalItems } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Lấy danh sách các danh mục duy nhất từ dữ liệu sản phẩm
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  // Lọc sản phẩm dựa trên danh mục đang chọn
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product);
    setAddedId(product.id);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <main>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-product {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0; /* Đảm bảo bắt đầu từ ẩn */
        }
      `}</style>
      <Breadcrumb title="Shop" />

      {/* shop-area */}
      <section className="shop-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row mb-20">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-30">Showing 1–9 of 9 results</h6>
            </div>
            <div className="col-lg-6 col-sm-6 text-md-right text-center">
              {/* Cart Icon */}
              <Link
                to="/cart"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  background: "#fe4a49",
                  color: "#fff",
                  borderRadius: "30px",
                  boxShadow: "0 4px 15px rgba(254, 74, 73, 0.3)",
                  textDecoration: "none",
                  fontWeight: 600,
                  marginTop: 16,
                }}
              >
                <i className="fas fa-shopping-cart" />
                Giỏ hàng
                {totalItems > 0 && (
                  <span
                    style={{
                      background: "#fff",
                      color: "#fe4a49",
                      borderRadius: "50%",
                      width: 22,
                      height: 22,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="shop-filter-buttons text-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background:
                        activeCategory === cat ? "#fe4a49" : "transparent",
                      color: activeCategory === cat ? "#fff" : "#3f271e",
                      border: `1px solid ${activeCategory === cat ? "#fe4a49" : "#ddd"}`,
                      padding: "8px 25px",
                      margin: "5px",
                      borderRadius: "30px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textTransform: "capitalize",
                    }}
                    className={activeCategory === cat ? "active" : ""}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row align-items-center" key={activeCategory}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 animate-product"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="product mb-40"
                  style={{
                    border: "1px solid #f0f0f0",
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="product__img">
                    <Link to={`/shop-detail/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="product-action text-center">
                      <button
                        onClick={() => handleAddToCart(product)}
                        style={{
                          background:
                            addedId === product.id ? "#28a745" : "#fe4a49",
                          color: "#fff",
                          border: "none",
                          padding: "10px 20px",
                          cursor: "pointer",
                          fontWeight: 600,
                          width: "100%",
                          transition: "background 0.3s",
                          fontSize: 14,
                        }}
                      >
                        {addedId === product.id ? (
                          <>
                            <i
                              className="fas fa-check"
                              style={{ marginRight: 6 }}
                            />
                            Đã thêm!
                          </>
                        ) : (
                          <>
                            <i
                              className="fas fa-cart-plus"
                              style={{ marginRight: 6 }}
                            />
                            Thêm vào giỏ
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="product__content text-center pt-30">
                    <span className="pro-cat">
                      <a href="#">{product.category}</a>
                    </span>
                    <h4 className="pro-title">
                      <Link to={`/shop-detail/${product.id}`}>
                        {product.name}
                      </Link>
                    </h4>
                    <div className="price">
                      <span>${product.price}.00</span>
                      <span className="old-price">${product.oldPrice}.00</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;
