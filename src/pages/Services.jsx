import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <main>
      <section className={`${styles.banner} container-fluid`}>
        <div className="text_background_patch"></div>
        <div className={`${styles.banner_heading}`}>
          <h1>SERVICES</h1>
        </div>
      </section>
      <section className={`${styles.cards_container} container`}>
        <div className="row">
          <h1>OUR SERVICES</h1>
          <div className="col-lg">
            <div className={`card  ${styles.cards}`}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
