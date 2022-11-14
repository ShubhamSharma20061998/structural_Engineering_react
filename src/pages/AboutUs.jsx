import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <main>
            <section className={`${styles.banner} container-fluid`}>
                <div className="text_background_patch"></div>
                <div className={`${styles.banner_heading}`}>
                    <h1>ABOUT US</h1>
                </div>
            </section>
            <section className={`${styles.bodyContent} container`}>
                <div>
                    Barcus Structural Engineering (BSE, Inc.) is a consulting engineering firm located in the Central Valley of California. From here we service a diverse list of clients, including Architects, Developers, design-build Contractors, Industrial Owners  and Municipalities, providing personalized structural engineering services throughout the state of California as well as nationally and internationally. We pride ourselves in tailoring services to our specific client’s need providing strict attention to various points of project emphasis, which may typically include project schedule, constructability, introduction of various architecturally exposed structural elements and value engineering.
                </div>
                <div className={`${styles.license_button}`}>
                    <button className='btn btn-primary readMore_button'>license</button>
                </div>
            </section>
            <section className={`${styles.About_us_img} container`}>
                <div className="row">
                    <div className="col">
                        <div className={`card ${styles.card1}`}>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card ${styles.card2}`}>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card ${styles.card3}`}>
                           
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutUs