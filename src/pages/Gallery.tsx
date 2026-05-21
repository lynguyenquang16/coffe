import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

function Gallery() {
  useEffect(() => {
    const $ = (window as any).$;
    if ($ && $(".grid").length > 0) {
      $(".grid").imagesLoaded(function () {
        $(".grid").isotope({
          itemSelector: ".grid-item",
          percentPosition: true,
          masonry: {
            columnWidth: ".grid-sizer",
          },
        });
      });
    }

    return () => {
      if ($ && $(".grid").data("isotope")) {
        $(".grid").isotope("destroy");
      }
    };
  }, []);

  return (
    <main>
      <style>{`
        .grid.col2 .grid-item {
          width: 25%;
          padding: 5px;
          box-sizing: border-box;
        }
        .grid.col2 .grid-sizer {
          width: 25%;
        }
        .grid.col2 .grid-item:first-child {
          width: 50%;
        }
        .gallery-image {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .gallery-image img {
          transition: transform 0.5s ease;
        }
        .gallery-image:hover img {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .grid.col2 .grid-item { width: 50%; }
        }
      `}</style>
      <Breadcrumb title="Gallery" />

      {/* gallery-area */}
      <section className="profile fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="masonry-gallery-huge">
                <div className="grid col2">
                  <div className="grid-sizer"></div>
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

      <Newsletter />
    </main>
  );
}
export default Gallery;
