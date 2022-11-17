import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <main>
            <div className={`${styles.banner} container-fluid`}>
                <div className="text_background_patch"></div>
                <div className={`${styles.banner_heading}`}>
                    <h1>ABOUT US</h1>
                </div>
            </div>
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
            <section className={`${styles.ourCulture}`}>
                <div className="container">
                    <h1>OUR CULTURE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facilis modi debitis fugiat nobis officia nesciunt architecto distinctio obcaecati nemo commodi qui fugit reiciendis, dignissimos id in aliquam, sunt quaerat expedita quasi deserunt! Inventore molestias sint quis excepturi quidem rerum eaque impedit, porro voluptatibus nihil vel et corporis nemo quaerat pariatur veritatis expedita, non veniam, id atque fugiat magni fuga eius. Dolorum nihil, consequuntur ut officiis omnis adipisci tempora quam repellat veniam facere animi minus velit, officia at. Magnam, vel.</p>
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
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name1</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`card ${styles.user}`}>
                                <div className="card-body">
                                    {/* <div className={`${styles.user_pic}`}></div> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name2</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`card ${styles.user}`}>
                                <div className="card-body">
                                    {/* <div className={`${styles.user_pic}`}></div> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name3</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`card ${styles.user}`}>
                                <div className="card-body">
                                    {/* <div className={`${styles.user_pic}`}></div> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name4</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`card ${styles.user}`}>
                                <div className="card-body">
                                    {/* <div className={`${styles.user_pic}`}></div> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name5</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`card ${styles.user}`}>
                                <div className="card-body">
                                    {/* <div className={`${styles.user_pic}`}></div> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name6</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`card ${styles.user}`}>
                                <div className="card-body">
                                    {/* <div className={`${styles.user_pic}`}></div> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="card-img-top" alt="..." />
                                    <h3 className='name'>Name7</h3>
                                    <h6 className='job_title'>Principal Engineer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutUs