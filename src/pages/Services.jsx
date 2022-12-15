import React from "react";
import { Parallax } from "react-parallax";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Services.module.css";

const Services = () => {
  let navigate = useNavigate();
  return (
    <main>
      <Parallax
        bgImage="https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg"
        strength={200}
        className={styles.parallax}
        renderLayer={() => (
          <div
            style={{
              position: "absolute",
            }}
          />
        )}
      >
        <div className={`${styles.banner} container-fluid`}>
          <div className={`${styles.banner_heading}`}>
            <div className={styles.background_patch}>
              <h1>SERVICES</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <section className={`${styles.cards_container} container`}>
        <div className="row">
          <h1>OUR SERVICES</h1>
          <div className="col-lg">
            <div
              className={`card  ${styles.cards}`}
              onClick={() => navigate("/commercial")}
            >
              <img
                src="https://media.biltrax.com/wp-content/uploads/2021/09/building-construction-sunset.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">COMMERCIAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/commercial" className="btn btn-primary">
                  Know more...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div
              className={`card  ${styles.cards}`}
              onClick={() => navigate("/hospitality")}
            >
              <img
                src="https://www.marcumllp.com/wp-content/uploads/constructionsurvey-2022-banner-2-960x600.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">HOSPITALITY</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/hospitality" className="btn btn-primary">
                  Know more...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div
              className={`card  ${styles.cards}`}
              onClick={() => navigate("/industrial")}
            >
              <img
                src="https://www.moneyweb.co.za/wp-content/uploads/2014/10/AdobeStock_1060176-555x370.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">INDUSTRIAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/industrial" className="btn btn-primary">
                  Know more...
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <div
              className={`card  ${styles.cards}`}
              onClick={() => navigate("/residential")}
            >
              <img
                src="https://cdn.technologyadvice.com/wp-content/uploads/2017/08/Fotolia_98303431_Subscription_Monthly_M-699x408.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">RESIDENTIAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/residential" className="btn btn-primary">
                  Know more...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div
              className={`card  ${styles.cards}`}
              onClick={() => navigate("/institutional")}
            >
              <img
                src="https://ace-australia.com/wp-content/uploads/2021/12/Construction-3-1000x700.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">INSTITUTIONAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/institutional" className="btn btn-primary">
                  Know more...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img
                src="https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">MISCELLANEOUS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
