import React from "react";
import styles from "./Residential.module.css";
import video from "../../assets/commercial.mp4";

const Residential = () => {
  return (
    <main>
      <div className={styles.banner}>
        <video src={video} autoPlay loop muted />
        <div className={styles.info_tile}>
          <div>
            <h3>RESIDENTIAL</h3>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      {/* featured projects section starts */}
      <section className={`${styles.featured_projects} container`}>
        <h1>OUR FEATURED RESIDENTIAL PROJECTS</h1>
        <div className={`${styles.gallery}`}>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://blog.bulldozair.com/wp-content/uploads/sites/2/2020/09/all-participants-in-construction-project.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.accruent.com/static/b3c4e13c979e79696ed8a9b9ca6d5bc1/6307b/accruent_resources_blog-entries_what-are-the-five-phases-of-the-construction-life-cycle-_hero.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.livemint.com/img/2022/03/10/1600x900/Indian_economy_1644579698303_1646900531863.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Featured project section ends */}
      {/* Detailed Documents section starts */}
      <section className={styles.detailed_documents}>
        <h1>DETAILED DOCUMENTS</h1>
        <div className={`${styles.documents_container} container`}>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src="https://www.ishn.com/ext/resources/hi-vis-supply-construction-site.jpg?1617734295"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-news.housing.com/news/wp-content/uploads/2021/03/08191855/All-about-the-Bihar-State-Building-Construction-Corporation-Limited-BSBCCL-FB-1200x700-compressed.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/628f972e3c9676c3267f39fc/0x0.jpg?format=jpg&crop=2917,1641,x0,y137,safe&width=1200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src="https://cdn.britannica.com/00/185900-050-B3B2AA26/Construction-workers-concrete.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://www.westcon.org/pictures/img.jpg?v20200407181011"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Detailed Documents section ends  */}
    </main>
  );
};

export default Residential;
