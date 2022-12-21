import React from "react";
import { Parallax } from "react-parallax";
import styles from "./News.module.css";

const News = () => {
  return (
    <main className={`${styles.news_page}`}>
      <Parallax
        bgImage="https://images.pexels.com/photos/3964576/pexels-photo-3964576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <h1>NEWS</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <section className="news-section container">
        <div className={`card mb-3 ${styles.cards}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://patch.com/img/cdn20/shutterstock/23352305/20220907/020123/styles/patch_image/public/shutterstock-751279570___07140055381.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dolor non corrupti quisquam cumque repudiandae
                  saepe ratione! At id non, ducimus neque tenetur sapiente vel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`card mb-3 ${styles.cards}`}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dolor non corrupti quisquam cumque repudiandae
                  saepe ratione! At id non, ducimus neque tenetur sapiente vel.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg"
                className="img-fluid rounded-end"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className={`card mb-3 ${styles.cards}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://traveler.marriott.com/wp-content/uploads/2018/01/GI_867787028_CommonwealthGames.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dolor non corrupti quisquam cumque repudiandae
                  saepe ratione! At id non, ducimus neque tenetur sapiente vel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`card mb-3 ${styles.cards}`}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dolor non corrupti quisquam cumque repudiandae
                  saepe ratione! At id non, ducimus neque tenetur sapiente vel.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src="https://eagleexaminer.com/wp-content/uploads/2018/04/boston-marathon-900x600.jpg"
                className="img-fluid rounded-end"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className={`card mb-3 ${styles.cards}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dolor non corrupti quisquam cumque repudiandae
                  saepe ratione! At id non, ducimus neque tenetur sapiente vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.congratulations_section}`}>
        <div className="container">
          <h1 className={`${styles.heading}`}>congratulations</h1>
          <div className={`card mb-3 ${styles.cards}`}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`card mb-3 ${styles.cards}`}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-fluid rounded-end"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
