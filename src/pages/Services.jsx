import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <main>
      <div className={`${styles.banner} container-fluid`}>
        <div className="text_background_patch"></div>
        <div className={`${styles.banner_heading}`}>
          <h1>SERVICES</h1>
        </div>
      </div>
      <section className={`${styles.cards_container} container`}>
        <div className="row">
          <h1>OUR SERVICES</h1>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="https://media.biltrax.com/wp-content/uploads/2021/09/building-construction-sunset.jpg" className="card-img-top" alt="..." />
                <h5 className="card-title">COMMERCIAL</h5>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Know more...
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="https://www.marcumllp.com/wp-content/uploads/constructionsurvey-2022-banner-2-960x600.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">HOSPITALITY</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Know more...
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="https://www.moneyweb.co.za/wp-content/uploads/2014/10/AdobeStock_1060176-555x370.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">INDUSTRIAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Know more...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="https://cdn.technologyadvice.com/wp-content/uploads/2017/08/Fotolia_98303431_Subscription_Monthly_M-699x408.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">RESIDENTIAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Know more...
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="https://ace-australia.com/wp-content/uploads/2021/12/Construction-3-1000x700.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">INSTITUTIONAL</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Know more...
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">MISCELLANEOUS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Know more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
