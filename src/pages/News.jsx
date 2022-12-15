import React from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import styles from "./News.module.css";

const News = () => {
  let navigate = useNavigate();
  let goToEventPage = () => {
    navigate("/events");
  };
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
        <div className="row mb-3">
          <div className={`col ${styles.even}`}>
            <div className={`card ${styles.image_card_container}`}>
              <div className={`card-body ${styles.image_card}`}>
                <img
                  src="https://patch.com/img/cdn20/shutterstock/23352305/20220907/020123/styles/patch_image/public/shutterstock-751279570___07140055381.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className={`col ${styles.odd}`}>
            <div className={`card ${styles.text_card_container}`}>
              <div className={`card-body ${styles.text_card}`}>
                <h2 className="card-title">open mic</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="readMore_button"
                  onClick={() => {
                    goToEventPage();
                  }}
                >
                  Read More...
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className={`col ${styles.even}`}>
            <div className={`card ${styles.text_card_container}`}>
              <div className={`card-body ${styles.text_card}`}>
                <h2 className="card-title">Dinner</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="readMore_button"
                  onClick={() => {
                    goToEventPage();
                  }}
                >
                  Read More...
                </button>
              </div>
            </div>
          </div>
          <div className={`col ${styles.odd}`}>
            <div className={`card ${styles.image_card_container}`}>
              <div className={`card-body ${styles.image_card}`}>
                <img
                  src="https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className={`col ${styles.even}`}>
            <div className={`card ${styles.image_card_container}`}>
              <div className={`card-body ${styles.image_card}`}>
                <img
                  src="https://traveler.marriott.com/wp-content/uploads/2018/01/GI_867787028_CommonwealthGames.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className={`col ${styles.odd}`}>
            <div className={`card ${styles.text_card_container}`}>
              <div className={`card-body ${styles.text_card}`}>
                <h2 className="card-title">Cycling event</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="readMore_button"
                  onClick={() => {
                    goToEventPage();
                  }}
                >
                  Read More...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className={`col ${styles.even}`}>
            <div className={`card ${styles.text_card_container}`}>
              <div className={`card-body ${styles.text_card}`}>
                <h2 className="card-title">Marathon</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="readMore_button"
                  onClick={() => {
                    goToEventPage();
                  }}
                >
                  Read More...
                </button>
              </div>
            </div>
          </div>
          <div className={`col ${styles.odd}`}>
            <div className={`card ${styles.image_card_container}`}>
              <div className={`card-body ${styles.image_card}`}>
                <img
                  src="https://eagleexaminer.com/wp-content/uploads/2018/04/boston-marathon-900x600.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.congratulations_section}`}>
        <div className="container">
          <h1 className={`${styles.heading}`}>congratulations</h1>
          <div className="row mb-3">
            <div className={`col ${styles.even}`}>
              <div className={`card ${styles.image_card_container}`}>
                <div className={`card-body ${styles.image_card}`}>
                  <img
                    src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className={`col ${styles.odd}`}>
              <div className={`card ${styles.text_card_container}`}>
                <div className={`card-body ${styles.text_card}`}>
                  <h2 className="card-title">Graduation Degree</h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="readMore_button"
                    onClick={() => {
                      goToEventPage();
                    }}
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className={`col ${styles.even}`}>
              <div className={`card ${styles.text_card_container}`}>
                <div className={`card-body ${styles.text_card}`}>
                  <h2 className="card-title">Marriage</h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="readMore_button"
                    onClick={() => {
                      goToEventPage();
                    }}
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </div>
            <div className={`col ${styles.odd}`}>
              <div className={`card ${styles.image_card_container}`}>
                <div className={`card-body ${styles.image_card}`}>
                  <img
                    src="https://www.datocms-assets.com/46272/1633511566-1633511564663.jpg?auto=format&fit=max&w=1200"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
