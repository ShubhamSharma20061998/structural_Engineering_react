import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { Parallax } from "react-parallax";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agxyjzx",
        "template_89rvlma",
        form.current,
        "-fNDennpqIflq2DcR"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <main>
      <Parallax
        bgImage="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </Parallax>

      <section className={`${styles.contact_section} container`}>
        <div className="row">
          <form ref={form} className="contact_form col" onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                name="user_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mailId" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="mailId"
                placeholder="name@example.com"
                name="user_email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text_field" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="text_field"
                rows="10"
                cols="30"
                name="message"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className={`${styles.contact_details} col`}>
            <h5>Contact</h5>
            <div>
              <MdEmail className={styles.icon} />
              shubhamjsp51@gmail.com
            </div>
            <div>
              <MdLocalPhone className={styles.icon} />
              +91-7004299656
            </div>
            <div>
              <MdLocationPin className={styles.icon} />
              Bangaluru, India
            </div>
          </div>
        </div>
      </section>
      <section className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88654003857!2d77.49085274762706!3d12.953959987171352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1671104323639!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default Contact;
