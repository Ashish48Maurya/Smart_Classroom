import React from 'react'
import Navbar from '../Navbar'
import Logo from '../../assets/Logo.png'
import Footer from './Footer'
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section className="section hero has-bg-image" id="home" aria-label="home">
            <div className="container1">

              <div className="hero-content">

                <h1 className="h1 section-title">
                Welcome to - <span className="span">AcademiaHub</span> 
                </h1>

                <h2 className="hero-text">
                Your Ultimate Classroom Management Solution
                </h2>

                <a href="#" className="btn has-before">
                  <span className="span">Explore More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>

              <figure className="hero-banner">

                <div className="img-holder one" style={{ "--width": 270, "--height": 300 }}>
                  <img src="/Images/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
                </div>

                <div className="img-holder two" style={{ "--width": 240, "--height": 370 }}>
                  <img src="/Images/hero-banner-2.jpg" width="240" height="370" alt="hero banner" className="img-cover" />
                </div>

                <img src="/Images/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1" />

                <img src="/Images/hero-shape-2.png" width="622" height="551" alt="" className="shape hero-shape-2" />

              </figure>

            </div>
          </section>

        </article>
      </main>

      <section className="section category" aria-label="category">
        <div className="container1">

          <h2 className="h2 section-title">
          Innovative <span className="span">Features</span> Redefining<span className="span">Technology</span>
          </h2>

          <ul className="grid-list">

            <li>
              <div className="category-card" style={{ "--color": "170, 75%, 41%" }}>

                <div className="card-icon">
                  <img src="Images/category-1.svg" width="40" height="40" loading="lazy"
                    alt="Online Degree Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Automated Classroom Allocation</a>
                </h3>

                <p className="card-text">
                AcademiaHub utilizes advanced algorithms to automate the allocation of classrooms based on factors such as class size, subject requirements, and facility availability. This feature saves time for educators and administrators and ensures efficient use of resources.
                </p>

              </div>
            </li>

            <li>
              <div className="category-card" style={{ "--color": "351, 83%, 61%" }}>

                <div className="card-icon">
                  <img src="Images/category-2.svg" width="40" height="40" loading="lazy"
                    alt="Non-Degree Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Real-time Updates and Notifications</a>
                </h3>

                <p className="card-text">
                AcademiaHub provides real-time updates and notifications to keep stakeholders informed about any changes or updates related to class schedules, exam timings, or resource availability. This ensures smooth communication and minimizes disruptions during the educational process. 
                </p>

              </div>
            </li>

            <li>
              <div className="category-card" style={{ "--color": "229, 75%, 58%" }}>

                <div className="card-icon">
                  <img src="Images/category-3.svg" width="40" height="40" loading="lazy"
                    alt="Off-Campus Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Integrated Student Attendance Tracking</a>
                </h3>

                <p className="card-text">
                AcademiaHub offers integrated student attendance tracking, allowing educators to easily monitor and track attendance records. Students can also view their attendance percentages, promoting accountability and engagement in their academic journey.
                </p>

              </div>
            </li>

            <li>
              <div className="category-card" style={{ "--color": "42, 94%, 55%" }}>

                <div className="card-icon">
                  <img src="Images/category-4.svg" width="40" height="40" loading="lazy"
                    alt="Hybrid Distance Programs" className="img" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Data Analysis and Insights</a>
                </h3>

                <p className="card-text">
                AcademiaHub includes features for data analysis and insights, providing administrators with valuable information about historical class allocation data, attendance trends, and exam performance. This data-driven approach helps institutions make informed decisions to optimize future scheduling and resource allocation.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section className="section about" id="about" aria-label="about">
        
      </section>


      <section className="section blog has-bg-image" id="blog" aria-label="blog"
        style={{ "background-image": "url('Images/blog-bg.svg')" }}>
        <div className="container1">

          <p className="section-subtitle">Latest Articles</p>

          <h2 className="h2 section-title">Get News With AcademiaHub</h2>

          <ul className="grid-list">

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" style={{ "--width": "370", "--height": "370" }}>
                  <img src="Images/blog-1.jpg" width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Intuitive Interface</a>
                  </h3>


                  <p className="card-text">
                  Enjoy a user-friendly interface for seamless navigation and efficient task execution.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" style={{ "--width": "370", "--height": "370" }}>
                  <img src="Images/blog-2.jpg" width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                
                  <h3 className="h3">
                    <a href="#" className="card-title">Customized Preferences</a>
                  </h3>

                  

                  <p className="card-text">
                  Personalize your experience with customizable settings tailored to your specific needs and workflow.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" style={{ "--width": "370", "--height": "370" }}>
                  <img src="Images/blog-3.jpg" width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  

                  <h3 className="h3">
                    <a href="#" className="card-title">Robust Security Measures</a>
                  </h3>

                 

                  <p className="card-text">
                  Trust in AcademiaHub's secure data management protocols for safeguarding sensitive information.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <img src="Images/blog-shape.png" width="186" height="186" loading="lazy" alt=""
            className="shape blog-shape" />

        </div>
      </section>

      <Footer />


      <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      <style>
        {`
    /*-----------------------------------*\
    #style.css
  \*-----------------------------------*/
  
  /**
   * copyright 2022 codewithsadee
   */
  
  
  
  
  
  /*-----------------------------------*\
    #CUSTOM PROPERTY
  \*-----------------------------------*/
  
  :root {
  
    /**
     * colors
     */
  
    --selective-yellow: hsl(42, 94%, 55%);
    --eerie-black-1: hsl(0, 0%, 9%);
    --eerie-black-2: hsl(180, 3%, 7%);
    --quick-silver: hsl(0, 0%, 65%);
    --radical-red: hsl(351, 83%, 61%);
    --light-gray: hsl(0, 0%, 80%);
    --isabelline: hsl(36, 33%, 94%);
    --gray-x-11: hsl(0, 0%, 73%);
    --kappel_15: hsla(170, 75%, 41%, 0.15);
    --platinum: hsl(0, 0%, 90%);
    --gray-web: hsl(0, 0%, 50%);
    --black_80: hsla(0, 0%, 0%, 0.8);
    --white_50: hsla(0, 0%, 100%, 0.5);
    --black_50: hsla(0, 0%, 0%, 0.5);
    --black_30: hsla(0, 0%, 0%, 0.3);
    --kappel: hsl(170, 75%, 41%);
    --white: hsl(0, 0%, 100%);
  
    /**
     * gradient color
     */
  
    --gradient: linear-gradient(-90deg,hsl(151, 58%, 46%) 0%,hsl(170, 75%, 41%) 100%);
  
    /**
     * typography
     */
  
    --ff-league_spartan: 'League Spartan', sans-serif;
    --ff-poppins: 'Poppins', sans-serif; 
  
    --fs-1: 4.2rem;
    --fs-2: 3.2rem;
    --fs-3: 2.3rem;
    --fs-4: 1.8rem;
    --fs-5: 1.5rem;
    --fs-6: 1.4rem;
    --fs-7: 1.3rem;
  
    --fw-500: 500;
    --fw-600: 600;
  
    /**
     * spacing
     */
  
    --section-padding: 75px;
  
    /**
     * shadow
     */
  
    --shadow-1: 0 6px 15px 0 hsla(0, 0%, 0%, 0.05);
    --shadow-2: 0 10px 30px hsla(0, 0%, 0%, 0.06);
    --shadow-3: 0 10px 50px 0 hsla(220, 53%, 22%, 0.1);
  
    /**
     * radius
     */
  
    --radius-pill: 500px;
    --radius-circle: 50%;
    --radius-3: 3px;
    --radius-5: 5px;
    --radius-10: 10px;
  
    /**
     * transition
     */
  
    --transition-1: 0.25s ease;
    --transition-2: 0.5s ease;
    --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
    --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);
  
  }
  
  
  
  
  
  /*-----------------------------------*\
    #RESET
  \*-----------------------------------*/
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  li { list-style: none; }
  
  a,
  img,
  span,
  data,
  input,
  button,
  ion-icon { display: block; }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img { height: auto; }
  
  input,
  button {
    background: none;
    border: none;
    font: inherit;
  }
  
  input { width: 100%; }
  
  button { cursor: pointer; }
  
  ion-icon { pointer-events: none; }
  
  address { font-style: normal; }
  
  :focus-visible { outline-offset: 4px; }
  
  ::-webkit-scrollbar { width: 10px; }
  
  ::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }
  
  ::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }
  
  ::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }
  
  .container1 { padding-inline: 15px; }
  
  .section { padding-block: var(--section-padding); }
  
  .shape {
    position: absolute;
    display: none;
  }
  
  .has-bg-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  .h1,
  .h2,
  .h3 {
    color: var(--eerie-black-1);
    font-family: var(--ff-league_spartan);
    line-height: 1;
  }
  
  .h1,
  .h2 { font-weight: var(--fw-600); }
  
  .h1 { font-size: var(--fs-1); }
  
  .h2 { font-size: var(--fs-2); }
  
  .h3 {
    font-size: var(--fs-3);
    font-weight: var(--fw-500);
  }
  
  .section-title {
    --color: var(--radical-red);
    text-align: center;
  }
  
  .section-title .span {
    display: inline-block;
    color: var(--color);
  }
  
  .btn {
    background-color: var(--kappel);
    color: var(--white);
    font-family: var(--ff-league_spartan);
    font-size: var(--fs-4);
    display: flex;
    align-items: center;
    gap: 7px;
    max-width: max-content;
    padding: 10px 20px;
    border-radius: var(--radius-5);
    overflow: hidden;
  }
  
  .has-before,
  .has-after {
    position: relative;
    z-index: 1;
  }
  
  .has-before::before,
  .has-after::after {
    position: absolute;
    content: "";
  }
  
  .btn::before {
    inset: 0;
    background-image: var(--gradient);
    z-index: -1;
    border-radius: inherit;
    transform: translateX(-100%);
    transition: var(--transition-2);
  }
  
  .btn:is(:hover, :focus)::before { transform: translateX(0); }
  
  .img-holder {
    aspect-ratio: var(--width) / var(--height);
    background-color: var(--light-gray);
    overflow: hidden;
  }
  
  .img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .section-subtitle {
    font-size: var(--fs-5);
    text-transform: uppercase;
    font-weight: var(--fw-500);
    letter-spacing: 1px;
    text-align: center;
    margin-block-end: 15px;
  }
  
  .section-text {
    font-size: var(--fs-5);
    text-align: center;
    margin-block: 15px 25px;
  }
  
  .grid-list {
    display: grid;
    gap: 30px;
  }
  
  .category-card,
  .stats-card { background-color: hsla(var(--color), 0.1); }
  
  :is(.course, .blog) .section-title { margin-block-end: 40px; }
  
  
  /*-----------------------------------*\
    #HERO
  \*-----------------------------------*/
  
  .hero { padding-block-start: calc(var(--section-padding) + 80px); }
  
  .hero .container1 {
    display: grid;
    gap: 40px;
  }
  
  .hero-text {
    color: var(--eerie-black-1);
    font-size: var(--fs-4);
    text-align: center;
    margin-block: 18px 20px;
  }
  
  .hero .btn { margin-inline: auto; }
  
  .hero-banner {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    align-items: flex-start;
    gap: 30px;
  }
  
  .hero-banner .img-holder.one {
    border-top-right-radius: 70px;
    border-bottom-left-radius: 110px;
  }
  
  .hero-banner .img-holder.two {
    border-top-left-radius: 50px;
    border-bottom-right-radius: 90px;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #CATEGORY
  \*-----------------------------------*/
  
  .category .section-subtitle { color: var(--radical-red); }
  
  .category .section-title { --color: var(--kappel); }
  
  .category .section-text { margin-block-end: 40px; }
  
  .category-card {
    padding: 50px 30px;
    text-align: center;
    border-radius: var(--radius-5);
    height:80vh;
  }
  
  .category-card .card-icon {
    background-color: hsla(var(--color), 0.1);
    width: 80px;
    height: 80px;
    display: grid;
    place-items: center;
    border-radius: var(--radius-circle);
    margin-inline: auto;
    margin-block-end: 30px;
  }
  
  .category-card .card-text {
    color: var(--eerie-black-1);
    font-size: var(--fs-5);
    margin-block: 15px 25px;
  }
  
  .category-card .card-badge {
    background-color: hsla(var(--color), 0.1);
    color: hsl(var(--color));
    font-size: var(--fs-5);
    font-weight: var(--fw-500);
    padding: 2px 18px;
    max-width: max-content;
    margin-inline: auto;
    border-radius: var(--radius-5);
  }

  @media screen and (max-width:770px){
    .category-card{
      height:auto;
    }
  }
  
  
  
  
  
  /*-----------------------------------*\
    #ABOUT
  \*-----------------------------------*/
  
  .about {
    padding-block-start: 0;
    overflow: hidden;
  }
  
  .about .container1 {
    display: grid;
    gap: 30px;
  }
  
  .about-banner {
    position: relative;
    z-index: 1;
  }
  
  .about-banner .img-holder { border-radius: var(--radius-10); }
  
  .about-shape-2 {
    display: block;
    bottom: -100px;
    left: -60px;
    animation: bounce 2.5s infinite;
  }
  
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% { transform: translateY(0); }
  
    40% { transform: translateY(-30px); }
  
    60% { transform: translateY(-15px); }
  }
  
  .about :is(.section-subtitle, .section-title, .section-text) {
    text-align: left;
  }
  
  .about-item {
    margin-block: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .about-item ion-icon {
    color: var(--selective-yellow);
    font-size: 20px;
    --ionicon-stroke-width: 50px;
  }
  
  .about-item .span {
    color: var(--eerie-black-1);
    font-family: var(--ff-league_spartan);
  }
  
  
  
  
  
  /*-----------------------------------*\
    #COURSE
  \*-----------------------------------*/
  
  .course { background-color: var(--isabelline); }
  
  .course-card {
    position: relative;
    background-color: var(--white);
    border-radius: var(--radius-5);
    overflow: hidden;
  }
  
  .course-card .img-cover { transition: var(--transition-2); }
  
  .course-card:is(:hover, :focus-within) .img-cover { transform: scale(1.1); }
  
  .course-card :is(.abs-badge, .badge) {
    font-family: var(--ff-league_spartan);
    border-radius: var(--radius-3);
  }
  
  .course-card .abs-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--selective-yellow);
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 1;
    padding: 6px 8px;
    padding-block-end: 3px;
  }
  
  .course-card .abs-badge ion-icon {
    font-size: 18px;
    margin-block-end: 5px;
    --ionicon-stroke-width: 50px;
  }
  
  .course-card .card-content { padding: 25px; }
  
  .course-card .badge {
    background-color: var(--kappel_15);
    max-width: max-content;
    color: var(--kappel);
    line-height: 25px;
    padding-inline: 10px;
  }
  
  .course-card .card-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-block: 15px 8px;
    transition: var(--transition-1);
  }
  
  .course-card .card-title:is(:hover, :focus) { color: var(--kappel); }
  
  .course-card :is(.wrapper, .rating-wrapper, .card-meta-list, .card-meta-item) {
    display: flex;
    align-items: center;
  }
  
  .course-card .wrapper { gap: 10px; }
  
  .course-card .rating-wrapper { gap: 3px; }
  
  .course-card .rating-wrapper ion-icon { color: var(--selective-yellow); }
  
  .course-card .rating-text {
    color: var(--eerie-black-1);
    font-size: var(--fs-6);
    font-weight: var(--fw-500);
  }
  
  .course-card .price {
    color: var(--radical-red);
    font-family: var(--ff-league_spartan);
    font-size: var(--fs-4);
    font-weight: var(--fw-600);
    margin-block: 8px 15px;
  }
  
  .course-card .card-meta-list { flex-wrap: wrap; }
  
  .course-card .card-meta-item {
    position: relative;
    gap: 5px;
  }
  
  .course-card .card-meta-item:not(:last-child)::after {
    content: "|";
    display: inline-block;
    color: var(--platinum);
    padding-inline: 10px;
  }
  
  .course-card .card-meta-item ion-icon {
    color: var(--quick-silver);
    --ionicon-stroke-width: 50px;
  }
  
  .course-card .card-meta-item .span {
    color: var(--eerie-black-1);
    font-size: var(--fs-7);
  }
  
  .course .btn {
    margin-inline: auto;
    margin-block-start: 60px;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #STATS
  \*-----------------------------------*/
  
  .stats-card {
    text-align: center;
    padding: 25px;
    border-radius: var(--radius-10);
  }
  
  .stats-card :is(.card-title, .card-text) { font-family: var(--ff-league_spartan); }
  
  .stats-card .card-title {
    color: hsl(var(--color));
    font-size: var(--fs-2);
    line-height: 1.1;
  }
  
  .stats-card .card-text {
    color: var(--eerie-black-1);
    text-transform: uppercase;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #BLOG
  \*-----------------------------------*/
  
  .blog-card .card-banner { border-radius: var(--radius-10); }
  
  .blog-card .card-banner .img-cover { transition: var(--transition-2); }
  
  .blog-card .card-banner::after {
    inset: 0;
    background-color: var(--black_50);
    opacity: 0;
    transition: var(--transition-1);
  }
  
  .blog-card:is(:hover, :focus-within) .card-banner .img-cover { transform: scale(1.1); }
  
  .blog-card:is(:hover, :focus-within) .card-banner::after { opacity: 1; }
  
  .blog-card .card-content {
    position: relative;
    margin-inline: 15px;
    background-color: var(--white);
    padding: 20px;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
    margin-block-start: -100px;
    z-index: 1;
  }
  
  .blog-card .card-btn {
    position: absolute;
    top: -40px;
    right: 30px;
    background-color: var(--kappel);
    color: var(--white);
    font-size: 20px;
    padding: 20px;
    border-radius: var(--radius-circle);
    transition: var(--transition-1);
    opacity: 0;
  }
  
  .blog-card .card-btn:is(:hover, :focus) { background-color: var(--radical-red); }
  
  .blog-card:is(:hover, :focus-within) .card-btn {
    opacity: 1;
    transform: translateY(10px);
  }
  
  .blog-card :is(.card-meta-item, .card-text, .card-subtitle) {
    font-size: var(--fs-5);
  }
  
  .blog-card .card-subtitle { text-transform: uppercase; }
  
  .blog-card .card-title {
    margin-block: 10px 15px;
    transition: var(--transition-1);
  }
  
  .blog-card .card-title:is(:hover, :focus) { color: var(--kappel); }
  
  .blog-card :is(.card-meta-list, .card-meta-item) { display: flex; }
  
  .blog-card .card-meta-list {
    flex-wrap: wrap;
    gap: 10px 20px;
    margin-block-end: 20px;
  }
  
  .blog-card .card-meta-item {
    gap: 10px;
    align-items: center;
    color: var(--eerie-black-1);
  }
  
  .blog-card .card-meta-item ion-icon {
    color: var(--kappel);
    font-size: 18px;
    --ionicon-stroke-width: 40px;
  }
  
  /*-----------------------------------*\
    #MEDIA QUERIES
  \*-----------------------------------*/
  
  /**
   * responsive for large than 575px screen
   */
  
  @media (min-width: 575px) {
  
    /**
     * REUSED STYLE
     */
  
    .container1 {
      max-width: 520px;
      width: 100%;
      margin-inline: auto;
    }
  
    .grid-list { grid-template-columns: 1fr 1fr; }
  
    :is(.course, .blog) .grid-list { grid-template-columns: 1fr; }
  
  
  
    
  
    /**
     * HERO
     */
  
    .hero-banner { grid-template-columns: 1fr 0.9fr; }
  
  
  
    /**
     * VIDEO
     */
  
    .video .play-btn { padding: 25px; }
  
  
  
    /**
     * STATS
     */
  
    .stats-card { padding: 40px 30px; }
  
  
  /**
   * responsive for large than 768px screen
   */
  
  @media (min-width: 768px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-1: 4.6rem;
      --fs-2: 3.8rem;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container1 { max-width: 720px; }
  
    .btn { padding: 15px 30px; }
  
    :is(.course, .blog) .grid-list { grid-template-columns: 1fr 1fr; }
  
  
  
    /**
     * HEADER
     */
  
    .header .container1 { padding-inline: 30px; }
  
    .header .btn {
      display: flex;
      padding: 10px 30px;
      margin-inline: 20px;
    }
  
  
  
    /**
     * HERO
     */
  
    .hero { padding-block-start: calc(var(--section-padding) + 90px); }
  
    .hero .container1 { gap: 50px; }
  
    .hero-text { margin-block-end: 30px; }
  
    .hero-banner {
      position: relative;
      z-index: 1;
    }
  
    .hero-banner .img-holder { max-width: max-content; }
  
    .hero-banner .img-holder.one { justify-self: flex-end; }
  
    .hero-banner .img-holder.two { margin-block-start: 100px; }
  
    .hero-shape-1 {
      display: block;
      position: absolute;
      bottom: -40px;
      left: -10px;
    }
  
  
  
    /**
     * ABOUT
     */
  
    .about { padding-block-start: 50px; }
  
    .about-banner {
      padding: 60px;
      padding-inline-end: 0;
    }
  
    .about-banner .img-holder {
      max-width: max-content;
      margin-inline: auto;
    }
  
    .about-shape-1 {
      display: block;
      top: -40px;
      right: -70px;
    }
  
  
  /**
   * responsive for large than 992px screen
   */
  
  @media (min-width: 992px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-1: 5.5rem;
      --fs-2: 4.5rem;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container1 { max-width: 960px; }
  
    .grid-list { grid-template-columns: repeat(4, 1fr); }
  
    :is(.course, .blog) .grid-list { grid-template-columns: repeat(3, 1fr); }
  
  
  
    /**
     * HERO
     */
  
    .hero .container1 {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  
    .hero .section-title,
    .hero-text { text-align: left; }
  
    .hero .btn { margin-inline: 0; }
  
  
  
    /**
     * ABOUT
     */
  
    .about .container1 {
      grid-template-columns: 1fr 0.6fr;
      align-items: center;
      gap: 60px;
    }
  
  
  
    /**
     * VIDEO
     */
  
    .video-banner {
      max-width: 75%;
      margin-inline: auto;
    }
  
  }
  
  
  
  
  
  /**
   * responsive for large than 1200px screen
   */
  
  @media (min-width: 1200px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-1: 6.5rem;
  
      /**
       * spacing
       */
  
      --section-padding: 120px;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container1 { max-width: 1185px; }
  
    .shape { display: block; }
  
    .about-content,
    .video-card,
    .blog { position: relative; }
  
  
  
    /**
     * HEADER
     */
  
    .header-action-btn:last-child,
    .navbar .wrapper,
    .overlay { display: none; }
  
    .header.active {
      transform: translateY(-100%);
      animation: slideIn 0.5s ease forwards;
    }
  
    @keyframes slideIn {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(0); }
    }
  
    .navbar,
    .navbar.active { all: unset; }
  
    .navbar-list {
      display: flex;
      gap: 50px;
      padding: 0;
    }
  
    .navbar-item:not(:last-child) { border-block-end: none; }
  
    .navbar-link {
      color: var(--eerie-black-1);
      padding-block: 20px;
    }
  
    .header .btn { margin-inline-end: 0; }
  
  
  
    /**
     * HERO
     */
  
    .hero { padding-block-start: calc(var(--section-padding) + 120px); }
  
    .hero .container1 { gap: 80px; }
  
    .hero-shape-2 {
      top: -80px;
      z-index: -1;
    }
  
  
  
    /**
     * ABOUT
     */
  
    .about .container1 { gap: 110px; }
  
    .about-banner .img-holder { margin-inline: 0; }
  
    .about-shape-3 {
      top: -20px;
      left: -100px;
      z-index: -1;
    }
  
    .about-content { z-index: 1; }
  
    .about-shape-4 {
      top: 30px;
      right: -60px;
      z-index: -1;
    }
  
  
    /**
     * BLOG
     */
  
    .blog-shape {
      top: 0;
      left: 0;
    }
  
  }

  @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap')
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                a:hover, a {
                  text-decoration: none;
                }

                html {
                  font-family: var(--ff-poppins);
                  font-size: 10px;
                  scroll-behavior: smooth;
                }
                
                body {
                  background-color: #e3f5ff;
                  color: var(--gray-web);
                  font-size: 1.6rem;
                  line-height: 1.75;
                  width: 100%;
                  overflow-x: hidden;
                  z-index: 10;
                }

                .btn-txt-grp p{
                  margin: auto 0 !important;
                  cursor: auto !important;
                  font-size: 18px !important;
                  font-weight: 600 !important;
                  color: #1d46ff !important;
                }
                .logo{
                  width:5vw;
                }
                nav {
                  margin: 10px 10px 0 10px;
                  background: none;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .nav-cont {
                  width: max-content;
                  min-width: 95%;
                  background: rgba(255, 255, 255, 0.26);
                  border-radius: 50px;
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(9.6px);
                  margin: 10px 20px 0 20px;
                  -webkit-backdrop-filter: blur(9.6px);
            
                  position: fixed;
                  top: 0;
                  left: 0;
                  z-index: 100;
                }
                .gugi-regular {
                  font-family: "Gugi", sans-serif;
                  font-weight: 400;
                  font-style: normal;
                }
                li {
                  margin-inline: 10px;
                }
                .nav-item select {
                  margin-top: 10px;
                }
                .navbar-toggler {
                  position: absolute;
                  top: 10px;
                  right: 2%;
                  max-width: 55px;
                }
                .btn-txt-grp {
                  display: flex;
                  justify-content: center;
                  align-items: baseline;
                }
                @media screen and (max-width: 992px) {
                  .btn-txt-grp {
                    flex-direction: column;
                  }
                  .logo{
                    width:10vw;
                  }
                }
                @media screen and (max-width: 650px) {
                  nav {
                    max-width: 80%;
                    flex-direction: column;
                  }
                  .nav-cont {
                    width: 10vw;
                  }
                  .logo{
                    width:15vw;
                  }
                }
    `}
      </style>
    </>
  )
}