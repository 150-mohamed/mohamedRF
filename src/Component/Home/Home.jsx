import React from 'react';
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="home-information">
                        <h2 className="home-title margin-bottom">Mohamed Refaat</h2>
                        <h4 className="home-info">Creative Director</h4>
                        <p className="home-desc">
                            Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive
                            designs to Web and Mobile. Let us work together. Thank you.
                        </p>
                        <button className="home-btn">Let's Begin</button>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="container">
                    <h2 className="work-title"><span>My</span> Work</h2>
                    <div className="part first">
                        <i className="icon fa fa-chain fa-2x"></i>
                        <h4 className="part-title">Mobile Ux</h4>
                        <hr className="line" />
                        <p className="part-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam!
                            Voluptas.
                        </p>
                    </div>

                    <div className="part">
                        <i className="icon fa fa-bolt fa-2x"></i>
                        <h4 className="part-title">Mobile Ux</h4>
                        <hr className="line" />
                        <p className="part-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam!
                            Voluptas.
                        </p>
                    </div>

                    <div className="part last">
                        <i className="icon fa fa-tachometer fa-2x"></i>
                        <h4 className="part-title">Mobile Ux</h4>
                        <hr className="line" />
                        <p className="part-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam!
                            Voluptas.
                        </p>
                    </div>

                </div>
            </div>
            <div className="creative">
                <div className="container">
                    <div className="creative-info">
                        <h2 className="info-title"><span>This is</span> Me</h2>
                        <h4 className="info-dir">Creative Director</h4>
                        <p className="info-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime
                            quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
                            veritatis?
                        </p>
                        <p className="info-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam
                            quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
                <ul className="portfolio-list">
                    <li className="portfolio-item active">All</li>
                    <li className="portfolio-item">HTML</li>
                    <li className="portfolio-item">Photoshop</li>
                    <li className="portfolio-item">Wordpress</li>
                    <li className="portfolio-item">Mobile</li>
                </ul>

                <div className="box">
                    <div>
                        <img src="images/Portfolio/portfolio-img1.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img2.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img3.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img4.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img5.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img6.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img7.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                    <div>
                        <img src="images/Portfolio/portfolio-img8.jpg" alt="" />
                        <p className="overlay">
                            <span>
                                Show Image
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="profile_skills">
                <div className="container">
                    <div className="profile">
                        <h2 className="profile-title"><span>My </span>Profile</h2>
                        <ul className="profile-list">
                            <li className="profile-item">
                                <span>Name</span>
                                Hamza Nabil
                            </li>
                            <li className="profile-item">
                                <span>Birthday</span>
                                21/1/1996
                            </li>
                            <li className="profile-item">
                                <span>Address</span>
                                Ain shams
                            </li>
                            <li className="profile-item">
                                <span>Phone</span>
                                4444 5555 6666
                            </li>
                            <li className="profile-item">
                                <span>Email</span>
                                hamza@hamza.com
                            </li>
                            <li className="profile-item">
                                <span>Website</span>
                                <span className="web">www.google.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2 className="skills-title">Some <span>skills</span></h2>
                        <p className="skills-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse
                            cupiditate, omnis similique.
                        </p>
                        <div className="bar">
                            <span className="title">Bootstrap</span>
                            <span className="perc">100%</span>
                            <div className="parent">
                                <span className="sp1"></span>
                            </div>
                        </div>
                        <div className="bar">
                            <span className="title">CSS3</span>
                            <span className="perc">90%</span>
                            <div className="parent">
                                <span className="sp2"></span>
                            </div>
                        </div>
                        <div className="bar">
                            <span className="title">Photoshop</span>
                            <span className="perc">80%</span>
                            <div className="parent">
                                <span className="sp3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <div className="social face">
                    <i className="icon fab fa-facebook fa-lg"></i>
                    <p>
                        <span className="info1">Follow Me on</span>
                        <span className="info2">Social Facebook</span>
                    </p>
                </div>
                <div className="social twitter">
                    <i className="icon fab fa-twitter fa-lg"></i>
                    <p>
                        <span className="info1">Tweet Me on</span>
                        <span className="info2">Social twitter</span>
                    </p>
                </div>
                <div className="social pin">
                    <i className="icon fab fa-instagram fa-lg"></i>
                    <p>
                        <span className="info1">Pin Me on</span>
                        <span className="info2">Social instagram</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
