import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from './Navbar';

const ClientReviews = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div>
            <Navbar />
            <Slider {...settings}>
                <div>
                    <div className='card'>
                        <figure className="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg" alt="profile-sample6" />
                            <figcaption>
                                <blockquote>
                                    <p> The only skills I have the patience to learn are those that have no real application in life. </p>
                                </blockquote>
                                <h3>Indigo Violet</h3>
                                <h5>Public Relations</h5>
                            </figcaption>
                        </figure>
                        <div className="review-info">
                            <h2>MABEL PAYNE</h2>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card'>
                        <figure className="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg" alt="profile-sample7" />
                            <figcaption>
                                <blockquote>
                                    <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                                </blockquote>
                                <h3>Will Barrow</h3>
                                <h5>Web Designer</h5>
                            </figcaption>
                        </figure>
                        <div className="review-info">
                            <h2>MABEL PAYNE</h2>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card'>
                        <figure className="snip1574">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="profile-sample2" />
                            <figcaption>
                                <blockquote>
                                    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                                </blockquote>
                                <h3>Sue Shei</h3>
                                <h5>Founder</h5>
                            </figcaption>
                        </figure>
                        <div className="review-info">
                            <h2>MABEL PAYNE</h2>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card'>
                        <figure className="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg" alt="profile-sample6" />
                            <figcaption>
                                <blockquote>
                                    <p>The only skills I have the patience to learn are those that have no real application in life. </p>
                                </blockquote>
                                <h3>Indigo Violet</h3>
                                <h5>Public Relations</h5>
                            </figcaption>
                        </figure>
                        <div className="review-info">
                            <h2>MABEL PAYNE</h2>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card'>
                        <figure className="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg" alt="profile-sample7" />
                            <figcaption>
                                <blockquote>
                                    <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                                </blockquote>
                                <h3>Will Barrow</h3>
                                <h5>Web Designer</h5>
                            </figcaption>
                        </figure>
                        <div className="review-info">
                            <h2>MABEL PAYNE</h2>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card'>
                        <figure className="snip1574">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="profile-sample2" />
                            <figcaption>
                                <blockquote>
                                    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                                </blockquote>
                                <h3>Sue Shei</h3>
                                <h5>Founder</h5>
                            </figcaption>
                        </figure>
                        <div className="review-info">
                            <h2>MABEL PAYNE</h2>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </Slider>
            <style>
                {`
                @import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
body{
    margin-top:100px;
}

.card {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border: none !important;
    flex-direction: row !important;
    padding: 50px;
    border-radius: 30px;
    margin: 50px;
}

.snip1574 {
  font-family: 'Lato', Arial, sans-serif;
  position: relative;
  display:inline-block;
  overflow: hidden;
  margin: 10px;
  width: max-content;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius:20px;
}

.review {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.review img {
    border-radius: 50%;
    margin-right: 20px;
}

.review-info {
    flex: 1;
}

.review-info h2 {
    margin: 0;
    font-size: 24px;
}

.review-info h3 {
    margin: 0;
    font-size: 18px;
    color: #666;
}

.review-info p {
    margin: 0;
    font-size: 16px;
}

.snip1574 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  
}

.snip1574 img {
  width: 100%;
  opacity: 0.7;
  
}

.snip1574 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 10% 15%;
  
}

.snip1574 figcaption:before {
  font-family: 'FontAwesome';
  content: 'ˮ';
  position: absolute;
  font-size: 170px;
  opacity: 0.35;
  font-style: normal;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 0px;
  left: 50%;
}


.snip1574 blockquote {
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 1.2em;
}

.snip1574 h3 {
  font-family: 'Oswald';
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
}

.snip1574 h5 {
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: #bbb;
  letter-spacing: 1px;
}

@media screen and (max-width:900px){
    .card{
        flex-direction:column !important;
    }
    .snip1574 img {
        width:70vw;
        height:auto;
    }
    .snip1574 h5 {
        margin-top:-5px;
    }
}
                `}
            </style>
        </div>
    )
}

export default ClientReviews