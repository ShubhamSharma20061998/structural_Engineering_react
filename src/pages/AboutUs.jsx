import React from "react";
import { Parallax } from "react-parallax";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <main>
      <Parallax
        bgImage="https://images.pexels.com/photos/11875383/pexels-photo-11875383.jpeg"
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
          <div className="text_background_patch"></div>
          <div className={`${styles.banner_heading}`}>
            <div className={styles.background_patch}>
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      </Parallax>

      <section className={`${styles.bodyContent} container-md`}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, suscipit
          vel. Repellat, cum, molestiae sint dolorum possimus maiores assumenda
          dolores laboriosam obcaecati quo consectetur suscipit non accusamus
          doloribus explicabo architecto! Quas error, corrupti, officia
          dignissimos amet maxime ut excepturi asperiores atque ipsa aut unde
          sed assumenda porro aspernatur possimus reiciendis quisquam illo quia
          exercitationem. Temporibus eveniet at, harum necessitatibus laudantium
          reprehenderit sed assumenda maiores provident deleniti facilis
          doloremque nemo dolore pariatur a vitae possimus sit repudiandae
          voluptatem suscipit voluptatibus? Fugiat et, ut architecto rerum
          ullam, vero eius iste ad dolor, consequatur necessitatibus distinctio?
          Odio perspiciatis dolorum quo aperiam voluptas minima?
        </div>
        <div className={`${styles.license_button}`}>
          <button className="btn btn-primary readMore_button">license</button>
        </div>
      </section>
      <section className={`${styles.About_us_img} container`}>
        <div className="row">
          <div className="col-md col-3-sm">
            <div className={`card ${styles.card1}`}></div>
          </div>
          <div className="col-md col-3-sm">
            <div className={`card ${styles.card2}`}></div>
          </div>
          <div className="col-md col-3-sm">
            <div className={`card ${styles.card3}`}></div>
          </div>
        </div>
      </section>
      <section className={`${styles.ourCulture}`}>
        <div className="container-md">
          <h1>OUR CULTURE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            facilis modi debitis fugiat nobis officia nesciunt architecto
            distinctio obcaecati nemo commodi qui fugit reiciendis, dignissimos
            id in aliquam, sunt quaerat expedita quasi deserunt! Inventore
            molestias sint quis excepturi quidem rerum eaque impedit, porro
            voluptatibus nihil vel et corporis nemo quaerat pariatur veritatis
            expedita, non veniam, id atque fugiat magni fuga eius. Dolorum
            nihil, consequuntur ut officiis omnis adipisci tempora quam repellat
            veniam facere animi minus velit, officia at. Magnam, vel.
          </p>
        </div>
      </section>
      <section className={`${styles.teams}`}>
        <div className="container">
          <h1>OUR TEAM</h1>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name1</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name2</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name3</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name4</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name5</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name6</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`card ${styles.user}`}>
                <div className="card-body">
                  {/* <div className={`${styles.user_pic}`}></div> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h3 className="name">Name7</h3>
                  <h6 className="job_title">Principal Engineer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
