import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import Breadcrumb from "../components/Breadcrumb";

const products = [
  {
    id: 1,
    name: "Bakari Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img4.jpg",
    category: "Chair",
  },
  {
    id: 2,
    name: "Romada Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img5.jpg",
    category: "Cloths",
  },
  {
    id: 3,
    name: "Sikkar Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img6.jpg",
    category: "Light",
  },
  {
    id: 4,
    name: "Minners Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img7.jpg",
    category: "Headphone",
  },
  {
    id: 5,
    name: "Dolando Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img8.jpg",
    category: "Table",
  },
  {
    id: 6,
    name: "Romada Product 2",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img9.jpg",
    category: "Cloths",
  },
  {
    id: 7,
    name: "Medidove Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img1.jpg",
    category: "Cloths",
  },
  {
    id: 8,
    name: "Legend Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img2.jpg",
    category: "Cloths",
  },
  {
    id: 9,
    name: "Akari Product",
    price: 95,
    oldPrice: 120,
    image: "img/shop/img3.jpg",
    category: "Table",
  },
];

function Shop() {
  const { addToCart, totalItems } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

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
      <Breadcrumb title="Shop" />

      {/* shop-area */}
      <section className="shop-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row mb-20">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-30">Showing 1–9 of 9 results</h6>
            </div>
            <div className="col-lg-6 col-sm-6 text-right">
              {/* Cart Icon */}
              <Link
                to="/cart"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  background: "#3f271e",
                  color: "#fff",
                  borderRadius: 6,
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
                      background: "#c8a96e",
                      color: "#fff",
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

          <div className="row align-items-center">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="product mb-40">
                  <div className="product__img">
                    <Link to="/shop-detail">
                      <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="product-action text-center">
                      <button
                        onClick={() => handleAddToCart(product)}
                        style={{
                          background:
                            addedId === product.id ? "#28a745" : "#3f271e",
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
                      <Link to="/shop-detail">{product.name}</Link>
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
