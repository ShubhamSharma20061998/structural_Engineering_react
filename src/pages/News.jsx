import React from 'react'
import styles from './News.module.css'

const News = () => {
    return (
        <main className={`${styles.news_page}`}>
            <div className={`${styles.banner} container-fluid`}>
                <div className="text_background_patch"></div>
                <div className={`${styles.banner_heading}`}>
                    <h1>NEWS</h1>
                </div>
            </div>
            <section className='news-section container'>
                <div className="row mb-3">
                    <div className={`col ${styles.odd}`}>
                        <div className={`card ${styles.text_card_container}`}>
                            <div className={`card-body ${styles.text_card}`}>
                                <h1 className="card-title">Card title</h1>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <button className='readMore_button'>Read More...</button>
                            </div>
                        </div>

                    </div>
                    <div className={`col ${styles.even}`}>
                        <div className={`card ${styles.image_card_container}`}>
                            <div className={`card-body ${styles.image_card}`}>
                                <img src="https://patch.com/img/cdn20/shutterstock/23352305/20220907/020123/styles/patch_image/public/shutterstock-751279570___07140055381.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mb-3">
                    <div className={`col ${styles.odd}`}>
                        <div className={`card ${styles.image_card_container}`}>
                            <div className={`card-body ${styles.image_card}`}>
                                <img src="https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>

                    </div>
                    <div className={`col ${styles.even}`}>
                        <div className={`card ${styles.text_card_container}`}>
                            <div className={`card-body ${styles.text_card}`}>
                                <h1 className="card-title">Card title</h1>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <button className='readMore_button'>Read More...</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mb-3">
                    <div className={`col ${styles.odd}`}>
                        <div className={`card ${styles.text_card_container}`}>
                            <div className={`card-body ${styles.text_card}`}>
                                <h1 className="card-title">Card title</h1>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <button className='readMore_button'>Read More...</button>
                            </div>
                        </div>

                    </div>
                    <div className={`col ${styles.even}`}>
                        <div className={`card ${styles.image_card_container}`}>
                            <div className={`card-body ${styles.image_card}`}>
                                <img src="https://traveler.marriott.com/wp-content/uploads/2018/01/GI_867787028_CommonwealthGames.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mb-3">
                    <div className={`col ${styles.odd}`}>
                        <div className={`card ${styles.image_card_container}`}>
                            <div className={`card-body ${styles.image_card}`}>
                                <img src="https://eagleexaminer.com/wp-content/uploads/2018/04/boston-marathon-900x600.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.even}`}>
                        <div className={`card ${styles.text_card_container}`}>
                            <div className={`card-body ${styles.text_card}`}>
                                <h1 className="card-title">Card title</h1>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <button className='readMore_button'>Read More...</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='congratulations-section'></section>
        </main>
    )
}

export default News