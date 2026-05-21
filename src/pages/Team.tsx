import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

function Gallery() {
  useEffect(() => {
    // Trì hoãn một chút để React render xong HTML ra DOM
    const timer = setTimeout(() => {
      const $ = (window as any).$;

      if ($ && $(".grid").length > 0) {
        // Đợi ảnh tải xong hoàn toàn để lấy kích thước thật, tránh lỗi đè hàng (top: 0)
        $(".grid").imagesLoaded(function () {
          $(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".grid-sizer", // Định dạng kích thước cột dựa trên grid-sizer
            },
          });
        });

        // Ép làm mới bố cục ngay lập tức
        $(".grid").isotope("layout");
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      const $ = (window as any).$;
      if (!$ || typeof $.fn.isotope !== "function") return;
      if ($(".grid").data("isotope")) {
        $(".grid").isotope("destroy");
      }
    };
  }, []);

  return (
    <main>
      <style>{`
        /* KHU VỰC CSS SỬA ĐỂ GIỐNG TEMPLATE GỐC 100% */
        .grid.col2 .grid-sizer {
          width: 50%; /* Chia làm 2 cột chính (Mỗi cột 50%) */
        }
        
        .grid.col2 .grid-item {
          width: 50%; /* Các item bình thường chiếm 50% độ rộng (1 cột) */
          padding: 10px; /* Khoảng cách giữa các ô ảnh */
          box-sizing: border-box;
        }
        
        /* Ảnh đầu tiên (Barista) chiếm 50% chiều ngang nhưng do ảnh gốc dọc dài */
        /* nên Isotope sẽ tự đẩy 4 ảnh ngang nhỏ xếp thành 2 hàng bên phải */
        .grid.col2 .grid-item:first-child {
          width: 50%; 
        }
        
        .gallery-image {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .gallery-image img { 
          width: 100%;
          height: auto;
          display: block;
          transition: 0.5s; 
        }
        
        .gallery-image:hover img { 
          transform: scale(1.1); 
        }
        
        /* Hỗ trợ hiển thị mượt trên điện thoại */
        @media (max-width: 768px) {
          .grid.col2 .grid-sizer,
          .grid.col2 .grid-item,
          .grid.col2 .grid-item:first-child { 
            width: 100% !important; 
          }
        }
      `}</style>

      <Breadcrumb title="Our Team" />

      {/* gallery-area */}
      <section className="profile fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="masonry-gallery-huge">
                <div className="grid col2">
                  <div className="grid-sizer"></div>

                  {/* Item 1 - Ảnh to dọc bên trái */}
                  <div className="grid-item financial">
                    <a
                      className="popup-image"
                      href="/img/gallery/protfolio-img01.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="/img/gallery/protfolio-img01.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>

                  {/* Item 2 - Ảnh nhỏ bên phải */}
                  <div className="grid-item banking">
                    <a
                      className="popup-image"
                      href="/img/gallery/protfolio-img02.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="/img/gallery/protfolio-img02.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>

                  {/* Item 3 - Ảnh nhỏ bên phải */}
                  <div className="grid-item insurance">
                    <a
                      className="popup-image"
                      href="/img/gallery/protfolio-img03.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="/img/gallery/protfolio-img03.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>

                  {/* Item 4 - Ảnh nhỏ dưới */}
                  <div className="grid-item family">
                    <a
                      className="popup-image"
                      href="/img/gallery/protfolio-img04.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="/img/gallery/protfolio-img04.png"
                          alt="img"
                          className="img"
                        />
                      </figure>
                    </a>
                  </div>

                  {/* Item 5 - Ảnh nhỏ dưới */}
                  <div className="grid-item business">
                    <a
                      className="popup-image"
                      href="/img/gallery/protfolio-img05.png"
                    >
                      <figure className="gallery-image">
                        <img
                          src="/img/gallery/protfolio-img05.png"
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

      <Newsletter />
    </main>
  );
}

export default Gallery;
