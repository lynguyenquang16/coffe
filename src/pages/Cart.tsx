import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Breadcrumb from "../components/Breadcrumb";

function OrderSuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "48px 40px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          animation: "popIn .3s ease",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#3f271e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <i className="fas fa-check" style={{ color: "#fff", fontSize: 32 }} />
        </div>
        <h2 style={{ color: "#3f271e", marginBottom: 12, fontSize: 26 }}>
          Đặt hàng thành công!
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 8,
          }}
        >
          🎉 Cảm ơn bạn đã mua hàng!
        </p>
        <p
          style={{
            color: "#3f271e",
            fontWeight: 600,
            fontSize: 17,
            marginBottom: 32,
            padding: "16px",
            background: "#f7f5f1",
            borderRadius: 8,
            lineHeight: 1.6,
          }}
        >
          Sản phẩm của quý khách sẽ được giao trong thời gian sớm nhất.
        </p>
        <Link
          to="/"
          onClick={onClose}
          className="btn"
          style={{ display: "inline-block" }}
        >
          Về trang chủ
        </Link>
      </div>
      <style>{`
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setShowModal(true);
  };

  return (
    <main>
      {showModal && <OrderSuccessModal onClose={() => setShowModal(false)} />}

      <Breadcrumb title="Giỏ Hàng" />

      {/* cart content */}
      <section className="shop-area pt-120 pb-120 p-relative">
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i
                className="fas fa-shopping-cart"
                style={{
                  fontSize: 64,
                  color: "#ccc",
                  marginBottom: 20,
                  display: "block",
                }}
              />
              <h3 style={{ color: "#3f271e", marginBottom: 16 }}>
                Giỏ hàng trống
              </h3>
              <p className="mb-4" style={{ color: "#888" }}>
                Bạn chưa thêm sản phẩm nào vào giỏ hàng.
              </p>
              <Link to="/shop" className="btn">
                Tiếp tục mua sắm
              </Link>
            </div>
          ) : (
            <div className="row">
              {/* Cart Items */}
              <div className="col-lg-8">
                <h4
                  style={{
                    color: "#3f271e",
                    marginBottom: 24,
                    borderBottom: "2px solid #3f271e",
                    paddingBottom: 12,
                  }}
                >
                  Sản phẩm trong giỏ ({cart.length})
                </h4>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      padding: "20px 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: 90,
                        height: 90,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#999",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.category}
                      </div>
                      <h5 style={{ color: "#3f271e", margin: "4px 0 8px" }}>
                        {item.name}
                      </h5>
                      <div style={{ color: "#c8a96e", fontWeight: 700 }}>
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                    {/* Quantity controls */}
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        style={{
                          width: 32,
                          height: 32,
                          border: "1px solid #ddd",
                          borderRadius: 4,
                          background: "#fff",
                          cursor: "pointer",
                          fontSize: 16,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        −
                      </button>
                      <span
                        style={{
                          minWidth: 24,
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        style={{
                          width: 32,
                          height: 32,
                          border: "1px solid #ddd",
                          borderRadius: 4,
                          background: "#fff",
                          cursor: "pointer",
                          fontSize: 16,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#3f271e",
                        minWidth: 70,
                        textAlign: "right",
                      }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#999",
                        fontSize: 18,
                        padding: 4,
                      }}
                      title="Xóa"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/shop"
                    style={{ color: "#3f271e", fontWeight: 600 }}
                  >
                    ← Tiếp tục mua sắm
                  </Link>
                  <button
                    onClick={clearCart}
                    style={{
                      background: "none",
                      border: "1px solid #ddd",
                      padding: "8px 20px",
                      borderRadius: 4,
                      cursor: "pointer",
                      color: "#666",
                    }}
                  >
                    Xóa giỏ hàng
                  </button>
                </div>
              </div>

              {/* Order Summary + Form */}
              <div className="col-lg-4">
                <div
                  style={{
                    background: "#f7f5f1",
                    borderRadius: 12,
                    padding: 28,
                    marginBottom: 24,
                  }}
                >
                  <h4
                    style={{
                      color: "#3f271e",
                      marginBottom: 20,
                      paddingBottom: 12,
                      borderBottom: "2px solid #3f271e",
                    }}
                  >
                    Tổng đơn hàng
                  </h4>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                        fontSize: 14,
                        color: "#555",
                      }}
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: "1px solid #ddd",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#3f271e",
                    }}
                  >
                    <span>Tổng cộng</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout form */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 28,
                  }}
                >
                  <h4 style={{ color: "#3f271e", marginBottom: 20 }}>
                    Thông tin giao hàng
                  </h4>
                  <form onSubmit={handleOrder}>
                    <div style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: 6,
                          fontSize: 14,
                          color: "#555",
                          fontWeight: 600,
                        }}
                      >
                        Họ tên *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Nguyễn Văn A"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: "1px solid #ddd",
                          borderRadius: 6,
                          fontSize: 14,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: 6,
                          fontSize: 14,
                          color: "#555",
                          fontWeight: 600,
                        }}
                      >
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="0912 345 678"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: "1px solid #ddd",
                          borderRadius: 6,
                          fontSize: 14,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: 6,
                          fontSize: 14,
                          color: "#555",
                          fontWeight: 600,
                        }}
                      >
                        Địa chỉ giao hàng *
                      </label>
                      <textarea
                        required
                        value={form.address}
                        onChange={(e) =>
                          setForm({ ...form, address: e.target.value })
                        }
                        placeholder="Số nhà, đường, phường/xã, tỉnh/thành phố..."
                        rows={3}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: "1px solid #ddd",
                          borderRadius: 6,
                          fontSize: 14,
                          outline: "none",
                          resize: "vertical",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      Đặt hàng ngay
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Cart;
