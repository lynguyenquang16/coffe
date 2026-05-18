import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

function Gallery() {
  return (
    <main>
      <Breadcrumb title="Gallery" />

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
