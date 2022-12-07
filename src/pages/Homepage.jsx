import React from "react";
import styles from "./homepage.module.css";
import video from "../assets/homepage_video.mp4";
import { Link, useNavigate } from "react-router-dom";
const Homepage = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* PAGE STARTS */}
      <main className={styles.mainContainer}>
        {/* video section starts */}
        <video className="video_section" width="100%" controls autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
        <section className="aboutUs_section container">
          <div className="row">
            <div className="col">
              <h1>ABOUT US</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt est architecto dolores neque commodi. Distinctio, unde
                eos in reiciendis quas asperiores incidunt laboriosam nemo odit
                atque dolorem natus eum nisi est deserunt totam blanditiis
                voluptate dolore adipisci voluptas ratione. Cupiditate tempora
                corporis, harum voluptatem doloribus aut mollitia debitis
                incidunt quisquam cumque id, eligendi possimus quasi laudantium
                officiis itaque sequi consequatur obcaecati numquam deleniti et
                dolorem magni pariatur. Nesciunt aliquam delectus nobis quidem
                quia dicta et odio, officiis accusamus voluptate vel sit
                quibusdam, asperiores optio, voluptatibus omnis eveniet dolor!
                Pariatur unde sit veritatis ullam, quo accusantium porro ut
                earum doloribus vero aliquam nostrum autem laudantium minus
                omnis hic nesciunt explicabo? Perferendis maiores atque harum
                impedit temporibus ut accusamus minus. Vel excepturi aperiam
                ratione adipisci facilis exercitationem necessitatibus tempore
                quibusdam possimus. Minima sapiente velit et accusamus
                laboriosam laudantium eum a! Maiores sed id temporibus sapiente
                rerum laborum odio maxime harum voluptatum! Facere.
              </p>
              <Link to="/aboutus">
                <button className="readMore_button">Read more...</button>
              </Link>
            </div>
          </div>
        </section>
        <section className={`container-fluid ${styles.ourServices_section}`}>
          <h1>OUR SERVICES</h1>
          <div className="card_container">
            <div className={`row ${styles.card_container_row}`}>
              <div className="col-lg">
                <div
                  className={`card ${styles.card}`}
                  onClick={() => navigate("/commercial")}
                >
                  <div className={`card-body ${styles.COMMERCIAL}`}>
                    <Link href="/aboutus">
                      <h5>COMMERCIAL</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className={`card ${styles.card}`}>
                  <div
                    className={`card-body ${styles.RESIDENTIAL}`}
                    onClick={() => navigate("/residential")}
                  >
                    <Link to="/residential">
                      <h5>RESIDENTIAL</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className={`card ${styles.card}`}>
                  <div
                    className={`card-body ${styles.INSTITUTIONAL}`}
                    onClick={() => navigate("/institutional")}
                  >
                    <Link to="/institutional">
                      <h5>INSTITUTIONAL</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className={`card ${styles.card}`}>
                  <div
                    className={`card-body ${styles.INDUSTRIAL}`}
                    onClick={() => navigate("/industrial")}
                  >
                    <Link to="/industrial">
                      <h5>INDUSTRIAL</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className={`card ${styles.card}`}>
                  <div
                    className={`card-body ${styles.HOSPITALITY}`}
                    onClick={() => navigate("/hospitality")}
                  >
                    <Link to="/hospitality">
                      <h5>HOSPITALITY</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* video section ends */}
      </main>
      {/* PAGE ENDS */}
    </>
  );
};

export default Homepage;
