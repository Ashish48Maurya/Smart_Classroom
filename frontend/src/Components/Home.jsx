import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Img1 from '../assets/edum-1.png';
import Img2 from '../assets/edum-2.jpg';
import Img3 from '../assets/edum-3.png';
import Img4 from '../assets/edum-4.jpg';
import Img5 from '../assets/edum-5.jpg';

const Card = ({ head1, head2, t1, btn1, imgSrc }) => {
  return (
    <>
      <div className='box-main'>
        <img src={imgSrc} className='img' alt="img" srcset="" />
        <div className='util-box'>
          <h2 className='head-1'>{head1}</h2>
          <h1 className='head-2'>{head2}</h1>
          <p className='t-1'>{t1}</p>
          <button className='btn1'>{btn1}</button>
        </div>
      </div>
    </>
  );
}


const Home = () => {

  return (
    <div className='home'>
      <div className="nav">
        <Navbar />
      </div>
      <div>
        <Card
          head1="Welcome to AcademiaHub"
          head2="Your Ultimate Classroom Management Solution"
          t1="Are you tired of the hassle and chaos involved in managing classroom schedules? Look no further! AcademiaHub is here to revolutionize the way you handle classroom allocation and scheduling"
          btn1="Experience It"
          imgSrc={Img1}
        />
        <Card
          head1="Swift and Easy"
          head2="Optimize your Resources Effectively"
          t1="With our advanced resource optimization algorithm, AcademiaHub ensures that classrooms are allocated efficiently based on factors like class size, subject requirements, and facility availability"
          btn1="Explore More"
          imgSrc={Img2}
        />
        <Card
          head1="Stay Up-to-Date with Real-time Schedule"
          t1="Whether it's last-minute changes or unexpected events, our platform AcademiaHub allows for instant adjustments to the class schedule, ensuring smooth operations at all times"
          btn1="Experience It"
          imgSrc={Img3}
        />
        <Card
          head1="Never Miss a Beat with Automated Notifications"
          t1="AcademiaHub keeps everyone in the loop with automated notifications. Teachers and students will receive instant alerts about any changes in their classroom assignments, ensuring no one misses important updates"
          btn1="Explore More"
          imgSrc={Img4}
        />
        <Card
          head1="Gain Insights with Historical Data Analysis"
          t1="Unlock the power of data with AcademiaHub's historical data analysis feature. Identify trends, optimize future scheduling decisions, and take your classroom management to the next level"
          btn1="Experience It"
          imgSrc={Img5}
        />
      </div>
      <Footer />
      <style>
        {`
                body{
                    background-color: #e3f5ff;
                }
                .home{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    margin-top:100px;
                }
                .btn-grp{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    
                }
                .box-main{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:83%;
                    height:auto;
                    background: rgb(54,111,196);
                    background: linear-gradient(90deg, rgba(54,111,196,1) 20%, rgba(151,110,209,1) 100%);
                    border-radius: 40px;
                    margin:0 0 60px 10%;
                    padding:20px;
                    color:white;
                }
                .head-1{
                    font-size:3vw;
                    font-weight:400;
                    margin: 0 0 40px 30px;
                }
                .head-2{
                    font-size:4vw;
                    margin: 0 0 40px 30px;
                    font-weight:600;
                }
                .t-1{
                    font-size:1.5vw;
                    font-weight:400;
                    margin: 0 0 40px 30px;
                }
                .btn1{
                    background-color:skyblue;
                    border:0.5px solid white;
                    border-radius:10px;
                    padding:10px 20px;
                    margin: 0 0 0 100px;
                    font-weight:600;
                    font-size:1.6vw;
                    color:white;
                    box-shadow: 2px 4px 10px purple;
                    cursor:pointer;
                }
                .img{
                    width:35%;
                    border-radius:120px;
                }
                @media screen and (max-width: 1100px){

                    .nav{
                        z-index: 1;
                    }

                    .box-main{
                        flex-direction: column;
                        text-align:center;
                        // height:70vh;
                        // margin-bottom: 400px;
                        // margin-top: 100px;
                    }
                    .util-box{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                        text-align:center;
                    }
                    .img{
                        width:90%;
                        // position:relative;
                        // bottom:40px;
                    }
                    .head-1{
                        font-size:3.5vw;
                        text-align:center;
                        margin:0px 0px 10px 0;
                    }
                    .head-2{
                        font-size:5vw;
                        text-align:center;
                        margin:0px 0px 10px 0;
                    }
                    .t-1{
                        font-size:4vw;
                        text-align:center;
                        margin:0px 0px 10px 0;
                    }
                    .btn1{
                        font-size:3vw;
                        margin:0;
                    }
                }
            `}
      </style>
    </div>
  )
}

export default Home;
























































































// import React, { useEffect, useRef } from 'react';
// import Navbar from './Navbar';
// import logo from '../assets/Logo.png';
// import Footer from './Footer';
// import Img1 from '../assets/edum-1.png';
// import Img2 from '../assets/edum-2.jpg';
// import Img3 from '../assets/edum-3.png';
// import Img4 from '../assets/edum-4.jpg';
// import Img5 from '../assets/edum-5.jpg';

// const Card = ({ head1, head2, t1, btn1, imgSrc }) => {
//     return (
//         <>
//             <div className='box-main'>
//                 <img src={imgSrc} className='img' alt="img" srcset="" />
//                 <div className='util-box'>
//                     <h2 className='head-1'>{head1}</h2>
//                     <h1 className='head-2'>{head2}</h1>
//                     <p className='t-1'>{t1}</p>
//                     <button className='btn1'>{btn1}</button>
//                 </div>
//             </div>
//         </>
//     );
// }


// const Home = () => {

//     return (
//       <>

//         <Navbar />

//         <main>
//           <article>

//             <section className="section hero has-bg-image" id="home" aria-label="home"
//               style={{ backgroundImage: " url('https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/hero-bg.svg')" }}>
//               <div className="container">

//                 <div className="hero-content">

//                   <h1 className="h1 section-title">
//                     The Best Program to <span className="span">Enroll</span> for Exchange
//                   </h1>

//                   <p className="hero-text">
//                     Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
//                   </p>

//                   <a href="#" className="btn has-before">
//                     <span className="span">Find courses</span>

//                     <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
//                   </a>

//                 </div>

//                 <figure className="hero-banner">

//                   <div className="img-holder one" style={{ width: 270, height: 300 }}>
//                     <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
//                   </div>

//                   <div className="img-holder two" style={{ width: 240, height: 370 }}>
//                     <img src="https://github.com/codewithsadee/eduweb/blob/master/assets/images/hero-banner-2.jpg?raw=true" width="240" height="370" alt="hero banner" className="img-cover" />
//                   </div>

//                   <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1" />

//                   <img src="https://github.com/codewithsadee/eduweb/blob/master/assets/images/hero-shape-2.png?raw=true" width="622" height="551" alt="" className="shape hero-shape-2" />

//                 </figure>

//               </div>
//             </section>


//             <section className="section category" aria-label="category">
//               <div className="container">

//                 <p className="section-subtitle">Categories</p>

//                 <h2 className="h2 section-title">
//                   Online <span className="span">Classes</span> For Remote Learning.
//                 </h2>

//                 <p className="section-text">
//                   Consectetur adipiscing elit sed do eiusmod tempor.
//                 </p>

//                 <ul className="grid-list">

//                   <li>
//                     <div className="category-card" style={{ color: "170, 75%, 41%" }}>

//                       <div className="card-icon">
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/category-1.svg" width="40" height="40" loading="lazy"
//                           alt="Online Degree Programs" className="img" />
//                       </div>

//                       <h3 className="h3">
//                         <a href="#" className="card-title">Online Degree Programs</a>
//                       </h3>

//                       <p className="card-text">
//                         Lorem ipsum dolor consec tur elit adicing sed umod tempor.
//                       </p>

//                       <span className="card-badge">7 Courses</span>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="category-card" style={{ color: "351, 83%, 61%" }}>

//                       <div className="card-icon">
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/category-2.svg" width="40" height="40" loading="lazy"
//                           alt="Non-Degree Programs" className="img" />
//                       </div>

//                       <h3 className="h3">
//                         <a href="#" className="card-title">Non-Degree Programs</a>
//                       </h3>

//                       <p className="card-text">
//                         Lorem ipsum dolor consec tur elit adicing sed umod tempor.
//                       </p>

//                       <span className="card-badge">4 Courses</span>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="category-card" style={{ color: "229, 75%, 58%" }}>

//                       <div className="card-icon">
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/category-3.svg" width="40" height="40" loading="lazy"
//                           alt="Off-Campus Programs" className="img" />
//                       </div>

//                       <h3 className="h3">
//                         <a href="#" className="card-title">Off-Campus Programs</a>
//                       </h3>

//                       <p className="card-text">
//                         Lorem ipsum dolor consec tur elit adicing sed umod tempor.
//                       </p>

//                       <span className="card-badge">8 Courses</span>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="category-card" style={{ color: "42, 94%, 55%" }}>

//                       <div className="card-icon">
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/category-4.svg" width="40" height="40" loading="lazy"
//                           alt="Hybrid Distance Programs" className="img" />
//                       </div>

//                       <h3 className="h3">
//                         <a href="#" className="card-title">Hybrid Distance Programs</a>
//                       </h3>

//                       <p className="card-text">
//                         Lorem ipsum dolor consec tur elit adicing sed umod tempor.
//                       </p>

//                       <span className="card-badge">8 Courses</span>

//                     </div>
//                   </li>

//                 </ul>

//               </div>
//             </section>

//             <section className="section about" id="about" aria-label="about">
//               <div className="container">

//                 <figure className="about-banner">

//                   <div className="img-holder" style={{ width: 520, height: "370;" }}>
//                     <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/about-banner.jpg" width="520" height="370" loading="lazy" alt="about banner"
//                       className="img-cover" />
//                   </div>

//                   <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/about-shape-1.svg" width="360" height="420" loading="lazy" alt=""
//                     className="shape about-shape-1" />

//                   <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/about-shape-2.svg" width="371" height="220" loading="lazy" alt=""
//                     className="shape about-shape-2" />

//                   <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/about-shape-3.png" width="722" height="528" loading="lazy" alt=""
//                     className="shape about-shape-3" />

//                 </figure>

//                 <div className="about-content">

//                   <p className="section-subtitle">About Us</p>

//                   <h2 className="h2 section-title">
//                     Over 10 Years in <span className="span">Distant learning</span> for Skill Development
//                   </h2>

//                   <p className="section-text">
//                     Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
//                     aliquaenim ad
//                     minim.
//                   </p>

//                   <ul className="about-list">

//                     <li className="about-item">
//                       <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

//                       <span className="span">Expert Trainers</span>
//                     </li>

//                     <li className="about-item">
//                       <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

//                       <span className="span">Online Remote Learning</span>
//                     </li>

//                     <li className="about-item">
//                       <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

//                       <span className="span">Lifetime Access</span>
//                     </li>

//                   </ul>

//                   <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/about-shape-4.svg" width="100" height="100" loading="lazy" alt=""
//                     className="shape about-shape-4" />

//                 </div>

//               </div>
//             </section>

//             <section className="section course" id="courses" aria-label="course">
//               <div className="container">

//                 <p className="section-subtitle">Popular Courses</p>

//                 <h2 className="h2 section-title">Pick A Course To Get Started</h2>

//                 <ul className="grid-list">

//                   <li>
//                     <div className="course-card">

//                       <figure className="card-banner img-holder" style={{ width: 370, height: 220 }}>
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/course-1.jpg" width="370" height="220" loading="lazy"
//                           alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
//                       </figure>

//                       <div className="abs-badge">
//                         <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

//                         <span className="span">3 Weeks</span>
//                       </div>

//                       <div className="card-content">

//                         <span className="badge">Beginner</span>

//                         <h3 className="h3">
//                           <a href="#" className="card-title">Build Responsive Real- World Websites with HTML and CSS</a>
//                         </h3>

//                         <div className="wrapper">

//                           <div className="rating-wrapper">
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                           </div>

//                           <p className="rating-text">(5.0/7 Rating)</p>

//                         </div>

//                         <data className="price" value="29">$29.00</data>

//                         <ul className="card-meta-list">

//                           <li className="card-meta-item">
//                             <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">8 Lessons</span>
//                           </li>

//                           <li className="card-meta-item">
//                             <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">20 Students</span>
//                           </li>

//                         </ul>

//                       </div>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="course-card">

//                       <figure className="card-banner img-holder" style={{ width: 370, height: 220 }}>
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/course-2.jpg" width="370" height="220" loading="lazy"
//                           alt="Java Programming Masterclass for Software Developers" className="img-cover" />
//                       </figure>

//                       <div className="abs-badge">
//                         <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

//                         <span className="span">8 Weeks</span>
//                       </div>

//                       <div className="card-content">

//                         <span className="badge">Advanced</span>

//                         <h3 className="h3">
//                           <a href="#" className="card-title">Java Programming Masterclass for Software Developers</a>
//                         </h3>

//                         <div className="wrapper">

//                           <div className="rating-wrapper">
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                           </div>

//                           <p className="rating-text">(4.5 /9 Rating)</p>

//                         </div>

//                         <data className="price" value="49">$49.00</data>

//                         <ul className="card-meta-list">

//                           <li className="card-meta-item">
//                             <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">15 Lessons</span>
//                           </li>

//                           <li className="card-meta-item">
//                             <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">35 Students</span>
//                           </li>

//                         </ul>

//                       </div>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="course-card">

//                       <figure className="card-banner img-holder" style={{ width: 370, height: 220 }}>
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/course-3.jpg" width="370" height="220" loading="lazy"
//                           alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
//                       </figure>

//                       <div className="abs-badge">
//                         <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

//                         <span className="span">3 Weeks</span>
//                       </div>

//                       <div className="card-content">

//                         <span className="badge">Intermediate</span>

//                         <h3 className="h3">
//                           <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
//                         </h3>

//                         <div className="wrapper">

//                           <div className="rating-wrapper">
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                             <ion-icon name="star"></ion-icon>
//                           </div>

//                           <p className="rating-text">(4.9 /7 Rating)</p>

//                         </div>

//                         <data className="price" value="35">$35.00</data>

//                         <ul className="card-meta-list">

//                           <li className="card-meta-item">
//                             <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">13 Lessons</span>
//                           </li>

//                           <li className="card-meta-item">
//                             <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">18 Students</span>
//                           </li>

//                         </ul>

//                       </div>

//                     </div>
//                   </li>

//                 </ul>

//                 <a href="#" className="btn has-before">
//                   <span className="span">Browse more courses</span>

//                   <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
//                 </a>

//               </div>
//             </section>

//             <section className="video has-bg-image" aria-label="video"
//               style={{ backgroundImage: "url('https://github.com/codewithsadee/eduweb/blob/master/assets/images/video-bg.png?raw=true')" }}>
//               <div className="container">

//                 <div className="video-card">

//                   <div className="video-banner img-holder has-after">
//                     <img src="https://github.com/codewithsadee/eduweb/blob/master/assets/images/video-banner.jpg?raw=true" width="970" height="550" loading="lazy" alt="video banner"
//                       className="img-cover" />

//                     <button className="play-btn" aria-label="play video">
//                       <ion-icon name="play" aria-hidden="true"></ion-icon>
//                     </button>
//                   </div>

//                   <img src="https://github.com/codewithsadee/eduweb/blob/master/assets/images/video-shape-1.png?raw=true" width="1089" height="605" loading="lazy" alt=""
//                     className="shape video-shape-1" />

//                   <img src="https://github.com/codewithsadee/eduweb/blob/master/assets/images/video-shape-2.png?raw=true" width="158" height="174" loading="lazy" alt=""
//                     className="shape video-shape-2" />

//                 </div>

//               </div>
//             </section>

//             <section className="section stats" aria-label="stats">
//               <div className="container">

//                 <ul className="grid-list">

//                   <li>
//                     <div className="stats-card" style={{ color: "170, 75%, 41%" }}>
//                       <h3 className="card-title">29.3k</h3>

//                       <p className="card-text">Student Enrolled</p>
//                     </div>
//                   </li>

//                   <li>
//                     <div className="stats-card" style={{ color: "351, 83%, 61%" }}>
//                       <h3 className="card-title">32.4K</h3>

//                       <p className="card-text">Class Completed</p>
//                     </div>
//                   </li>

//                   <li>
//                     <div className="stats-card" style={{ color: "260, 100%, 67%" }}>
//                       <h3 className="card-title">100%</h3>

//                       <p className="card-text">Satisfaction Rate</p>
//                     </div>
//                   </li>

//                   <li>
//                     <div className="stats-card" style={{ color: "42, 94%, 55%" }}>
//                       <h3 className="card-title">354+</h3>

//                       <p className="card-text">Top Instructors</p>
//                     </div>
//                   </li>

//                 </ul>

//               </div>
//             </section>

//             <section className="section blog has-bg-image" id="blog" aria-label="blog"
//               style={{ backgroundImage: "url('https://raw.githubusercontent.com/codewithsadee/eduweb/e95ce3bd395db274166c4d8abe7970b699a4c39d/assets/images/blog-bg.svg')" }}>
//               <div className="container">

//                 <p className="section-subtitle">Latest Articles</p>

//                 <h2 className="h2 section-title">Get News With AcademiaHub</h2>

//                 <ul className="grid-list">

//                   <li>
//                     <div className="blog-card">

//                       <figure className="card-banner img-holder has-after" style={{ width: 370, height: 370 }}>
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/blog-1.jpg" width="370" height="370" loading="lazy"
//                           alt="Become A Better Blogger: Content Planning" className="img-cover" />
//                       </figure>

//                       <div className="card-content">

//                         <a href="#" className="card-btn" aria-label="read more">
//                           <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
//                         </a>

//                         <a href="#" className="card-subtitle">Online</a>

//                         <h3 className="h3">
//                           <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
//                         </h3>

//                         <ul className="card-meta-list">

//                           <li className="card-meta-item">
//                             <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">Oct 10, 2021</span>
//                           </li>

//                           <li className="card-meta-item">
//                             <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">Com 09</span>
//                           </li>

//                         </ul>

//                         <p className="card-text">
//                           Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
//                         </p>

//                       </div>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="blog-card">

//                       <figure className="card-banner img-holder has-after" style={{ width: 370, height: 370 }}>
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/blog-2.jpg" width="370" height="370" loading="lazy"
//                           alt="Become A Better Blogger: Content Planning" className="img-cover" />
//                       </figure>

//                       <div className="card-content">

//                         <a href="#" className="card-btn" aria-label="read more">
//                           <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
//                         </a>

//                         <a href="#" className="card-subtitle">Online</a>

//                         <h3 className="h3">
//                           <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
//                         </h3>

//                         <ul className="card-meta-list">

//                           <li className="card-meta-item">
//                             <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">Oct 10, 2021</span>
//                           </li>

//                           <li className="card-meta-item">
//                             <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">Com 09</span>
//                           </li>

//                         </ul>

//                         <p className="card-text">
//                           Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
//                         </p>

//                       </div>

//                     </div>
//                   </li>

//                   <li>
//                     <div className="blog-card">

//                       <figure className="card-banner img-holder has-after" style={{ width: 370, height: 370 }}>
//                         <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/blog-3.jpg" width="370" height="370" loading="lazy"
//                           alt="Become A Better Blogger: Content Planning" className="img-cover" />
//                       </figure>

//                       <div className="card-content">

//                         <a href="#" className="card-btn" aria-label="read more">
//                           <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
//                         </a>

//                         <a href="#" className="card-subtitle">Online</a>

//                         <h3 className="h3">
//                           <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
//                         </h3>

//                         <ul className="card-meta-list">

//                           <li className="card-meta-item">
//                             <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">Oct 10, 2021</span>
//                           </li>

//                           <li className="card-meta-item">
//                             <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

//                             <span className="span">Com 09</span>
//                           </li>

//                         </ul>

//                         <p className="card-text">
//                           Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
//                         </p>

//                       </div>

//                     </div>
//                   </li>

//                 </ul>

//                 <img src="https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/blog-shape.png" width="186" height="186" loading="lazy" alt=""
//                   className="shape blog-shape" />

//               </div>
//             </section>

//           </article>
//         </main>

//         <footer className="footer" style={{ backgroundImage: "url('https://raw.githubusercontent.com/codewithsadee/eduweb/master/assets/images/footer-bg.png')" }}>

//           <div className="footer-top section">
//             <div className="container grid-list">

//               <div className="footer-brand">

//                 <a href="#" className="logo">
//                   <img src={logo} width="162" height="50" alt="AcademiaHub logo" />
//                 </a>

//                 <p className="footer-brand-text">
//                   Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
//                 </p>

//                 <div className="wrapper">
//                   <span className="span">Add:</span>

//                   <address className="address">70-80 Upper St Norwich NR2</address>
//                 </div>

//                 <div className="wrapper">
//                   <span className="span">Call:</span>

//                   <a href="tel:+011234567890" className="footer-link">+01 123 4567 890</a>
//                 </div>

//                 <div className="wrapper">
//                   <span className="span">Email:</span>

//                   <a href="mailto:info@eduweb.com" className="footer-link">info@eduweb.com</a>
//                 </div>

//               </div>

//               <ul className="footer-list">

//                 <li>
//                   <p className="footer-list-title">Online Platform</p>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">About</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Courses</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Instructor</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Events</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Instructor Profile</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Purchase Guide</a>
//                 </li>

//               </ul>

//               <ul className="footer-list">

//                 <li>
//                   <p className="footer-list-title">Links</p>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Contact Us</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Gallery</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">News & Articles</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">FAQ's</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Sign In/Registration</a>
//                 </li>

//                 <li>
//                   <a href="#" className="footer-link">Coming Soon</a>
//                 </li>

//               </ul>

//               <div className="footer-list">

//                 <p className="footer-list-title">Contacts</p>

//                 <p className="footer-list-text">
//                   Enter your email address to register to our newsletter subscription
//                 </p>

//                 <form action="" className="newsletter-form">
//                   <input type="email" name="email_address" placeholder="Your email" required className="input-field" />

//                   <button type="submit" className="btn has-before">
//                     <span className="span">Subscribe</span>

//                     <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
//                   </button>
//                 </form>

//                 <ul className="social-list">

//                   <li>
//                     <a href="#" className="social-link">
//                       <ion-icon name="logo-facebook"></ion-icon>
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#" className="social-link">
//                       <ion-icon name="logo-linkedin"></ion-icon>
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#" className="social-link">
//                       <ion-icon name="logo-instagram"></ion-icon>
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#" className="social-link">
//                       <ion-icon name="logo-twitter"></ion-icon>
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#" className="social-link">
//                       <ion-icon name="logo-youtube"></ion-icon>
//                     </a>
//                   </li>

//                 </ul>

//               </div>

//             </div>
//           </div>

//           <div className="footer-bottom">
//             <div className="container">

//               <p className="copyright">
//                 Copyright 2022 All Rights Reserved by <a href="#" className="copyright-link">codewithsadee</a>
//               </p>

//             </div>
//           </div>

//         </footer>

//         <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
//           <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
//         </a>


//             <style>
//                 {`
// /*-----------------------------------*\
//   #CUSTOM PROPERTY
// \*-----------------------------------*/

// :root {

//   /**
//    * colors
//    */

//   --selective-yellow: hsl(42, 94%, 55%);
//   --eerie-black-1: hsl(0, 0%, 9%);
//   --eerie-black-2: hsl(180, 3%, 7%);
//   --quick-silver: hsl(0, 0%, 65%);
//   --radical-red: hsl(351, 83%, 61%);
//   --light-gray: hsl(0, 0%, 80%);
//   --isabelline: hsl(36, 33%, 94%);
//   --gray-x-11: hsl(0, 0%, 73%);
//   --kappel_15: hsla(170, 75%, 41%, 0.15);
//   --platinum: hsl(0, 0%, 90%);
//   --gray-web: hsl(0, 0%, 50%);
//   --black_80: hsla(0, 0%, 0%, 0.8);
//   --white_50: hsla(0, 0%, 100%, 0.5);
//   --black_50: hsla(0, 0%, 0%, 0.5);
//   --black_30: hsla(0, 0%, 0%, 0.3);
//   --kappel: hsl(170, 75%, 41%);
//   --white: hsl(0, 0%, 100%);

//   /**
//    * gradient color
//    */

//   --gradient: linear-gradient(-90deg,hsl(151, 58%, 46%) 0%,hsl(170, 75%, 41%) 100%);

//   /**
//    * typography
//    */

//   --ff-league_spartan: 'League Spartan', sans-serif;
//   --ff-poppins: 'Poppins', sans-serif; 

//   --fs-1: 4.2rem;
//   --fs-2: 3.2rem;
//   --fs-3: 2.3rem;
//   --fs-4: 1.8rem;
//   --fs-5: 1.5rem;
//   --fs-6: 1.4rem;
//   --fs-7: 1.3rem;

//   --fw-500: 500;
//   --fw-600: 600;

//   /**
//    * spacing
//    */

//   --section-padding: 75px;

//   /**
//    * shadow
//    */

//   --shadow-1: 0 6px 15px 0 hsla(0, 0%, 0%, 0.05);
//   --shadow-2: 0 10px 30px hsla(0, 0%, 0%, 0.06);
//   --shadow-3: 0 10px 50px 0 hsla(220, 53%, 22%, 0.1);

//   /**
//    * radius
//    */

//   --radius-pill: 500px;
//   --radius-circle: 50%;
//   --radius-3: 3px;
//   --radius-5: 5px;
//   --radius-10: 10px;

//   /**
//    * transition
//    */

//   --transition-1: 0.25s ease;
//   --transition-2: 0.5s ease;
//   --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
//   --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);

// }





// /*-----------------------------------*\
//   #RESET
// \*-----------------------------------*/

// *,
// *::before,
// *::after {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// li { list-style: none; }

// a,
// img,
// span,
// data,
// input,
// button,
// ion-icon { display: block; }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// img { height: auto; }

// input,
// button {
//   background: none;
//   border: none;
//   font: inherit;
// }

// input { width: 100%; }

// button { cursor: pointer; }

// ion-icon { pointer-events: none; }

// address { font-style: normal; }

// html {
//   font-family: var(--ff-poppins);
//   font-size: 10px;
//   scroll-behavior: smooth;
// }

// body {
//   background-color: var(--white);
//   color: var(--gray-web);
//   font-size: 1.6rem;
//   line-height: 1.75;
// }

// :focus-visible { outline-offset: 4px; }

// ::-webkit-scrollbar { width: 10px; }

// ::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }

// ::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }

// ::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }





// /*-----------------------------------*\
//   #REUSED STYLE
// \*-----------------------------------*/

// .container { padding-inline: 15px; }

// .section { padding-block: var(--section-padding); }

// .shape {
//   position: absolute;
//   display: none;
// }

// .has-bg-image {
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// }

// .h1,
// .h2,
// .h3 {
//   color: var(--eerie-black-1);
//   font-family: var(--ff-league_spartan);
//   line-height: 1;
// }

// .h1,
// .h2 { font-weight: var(--fw-600); }

// .h1 { font-size: var(--fs-1); }

// .h2 { font-size: var(--fs-2); }

// .h3 {
//   font-size: var(--fs-3);
//   font-weight: var(--fw-500);
// }

// .section-title {
//   --color: var(--radical-red);
//   text-align: center;
// }

// .section-title .span {
//   display: inline-block;
//   color: var(--color);
// }

// .btn {
//   background-color: var(--kappel);
//   color: var(--white);
//   font-family: var(--ff-league_spartan);
//   font-size: var(--fs-4);
//   display: flex;
//   align-items: center;
//   gap: 7px;
//   max-width: max-content;
//   padding: 10px 20px;
//   border-radius: var(--radius-5);
//   overflow: hidden;
// }

// .has-before,
// .has-after {
//   position: relative;
//   z-index: 1;
// }

// .has-before::before,
// .has-after::after {
//   position: absolute;
//   content: "";
// }

// .btn::before {
//   inset: 0;
//   background-image: var(--gradient);
//   z-index: -1;
//   border-radius: inherit;
//   transform: translateX(-100%);
//   transition: var(--transition-2);
// }

// .btn:is(:hover, :focus)::before { transform: translateX(0); }

// .img-holder {
//   aspect-ratio: var(--width) / var(--height);
//   background-color: var(--light-gray);
//   overflow: hidden;
// }

// .img-cover {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .section-subtitle {
//   font-size: var(--fs-5);
//   text-transform: uppercase;
//   font-weight: var(--fw-500);
//   letter-spacing: 1px;
//   text-align: center;
//   margin-block-end: 15px;
// }

// .section-text {
//   font-size: var(--fs-5);
//   text-align: center;
//   margin-block: 15px 25px;
// }

// .grid-list {
//   display: grid;
//   gap: 30px;
// }

// .category-card,
// .stats-card { background-color: hsla(var(--color), 0.1); }

// :is(.course, .blog) .section-title { margin-block-end: 40px; }





// /*-----------------------------------*\
//   #HEADER
// \*-----------------------------------*/

// .header .btn { display: none; }

// .header {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background-color: var(--white);
//   padding-block: 12px;
//   box-shadow: var(--shadow-1);
//   z-index: 4;
// }

// .header.active { position: fixed; }

// .header .container,
// .header-actions,
// .navbar .wrapper {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 15px;
// }

// .header-action-btn,
// .nav-close-btn {
//   position: relative;
//   color: var(--eerie-black-1);
//   font-size: 24px;
//   transition: var(--transition-1);
// }

// .header-action-btn:is(:hover, :focus) { color: var(--kappel); }

// .header-action-btn .btn-badge {
//   position: absolute;
//   top: -10px;
//   right: -10px;
//   background-color: var(--kappel);
//   color: var(--white);
//   font-family: var(--ff-league_spartan);
//   font-size: var(--fs-6);
//   min-width: 20px;
//   height: 20px;
//   border-radius: var(--radius-circle);
// }

// .navbar {
//   position: fixed;
//   top: 0;
//   left: -320px;
//   background-color: var(--white);
//   width: 100%;
//   max-width: 320px;
//   height: 100%;
//   z-index: 2;
//   transition: 0.25s var(--cubic-in);
// }

// .navbar.active {
//   transform: translateX(320px);
//   transition: 0.5s var(--cubic-out);
// }

// .navbar .wrapper {
//   padding: 15px 20px;
//   border-block-end: 1px solid var(--platinum);
// }

// .nav-close-btn {
//   background-color: var(--white);
//   box-shadow: var(--shadow-2);
//   padding: 8px;
//   border-radius: var(--radius-circle);
// }

// .nav-close-btn:is(:hover, :focus) {
//   background-color: var(--kappel);
//   color: var(--white);
// }

// .navbar-list { padding: 15px 20px; }

// .navbar-item:not(:last-child) { border-block-end: 1px solid var(--platinum); }

// .navbar-link {
//   padding-block: 8px;
//   font-weight: var(--fw-500);
//   transition: var(--transition-1);
// }

// .navbar-link:is(:hover, :focus) { color: var(--kappel); }

// .overlay {
//   position: fixed;
//   inset: 0;
//   background-color: var(--black_80);
//   pointer-events: none;
//   opacity: 0;
//   z-index: 1;
//   transition: var(--transition-1);
// }

// .overlay.active {
//   opacity: 1;
//   pointer-events: all;
// }





// /*-----------------------------------*\
//   #HERO
// \*-----------------------------------*/

// .hero { padding-block-start: calc(var(--section-padding) + 80px); }

// .hero .container {
//   display: grid;
//   gap: 40px;
// }

// .hero-text {
//   color: var(--eerie-black-1);
//   font-size: var(--fs-4);
//   text-align: center;
//   margin-block: 18px 20px;
// }

// .hero .btn { margin-inline: auto; }

// .hero-banner {
//   display: grid;
//   grid-template-columns: 1fr 0.8fr;
//   align-items: flex-start;
//   gap: 30px;
// }

// .hero-banner .img-holder.one {
//   border-top-right-radius: 70px;
//   border-bottom-left-radius: 110px;
// }

// .hero-banner .img-holder.two {
//   border-top-left-radius: 50px;
//   border-bottom-right-radius: 90px;
// }





// /*-----------------------------------*\
//   #CATEGORY
// \*-----------------------------------*/

// .category .section-subtitle { color: var(--radical-red); }

// .category .section-title { --color: var(--kappel); }

// .category .section-text { margin-block-end: 40px; }

// .category-card {
//   padding: 50px 30px;
//   text-align: center;
//   border-radius: var(--radius-5);
// }

// .category-card .card-icon {
//   background-color: hsla(var(--color), 0.1);
//   width: 80px;
//   height: 80px;
//   display: grid;
//   place-items: center;
//   border-radius: var(--radius-circle);
//   margin-inline: auto;
//   margin-block-end: 30px;
// }

// .category-card .card-text {
//   color: var(--eerie-black-1);
//   font-size: var(--fs-5);
//   margin-block: 15px 25px;
// }

// .category-card .card-badge {
//   background-color: hsla(var(--color), 0.1);
//   color: hsl(var(--color));
//   font-size: var(--fs-5);
//   font-weight: var(--fw-500);
//   padding: 2px 18px;
//   max-width: max-content;
//   margin-inline: auto;
//   border-radius: var(--radius-5);
// }





// /*-----------------------------------*\
//   #ABOUT
// \*-----------------------------------*/

// .about {
//   padding-block-start: 0;
//   overflow: hidden;
// }

// .about .container {
//   display: grid;
//   gap: 30px;
// }

// .about-banner {
//   position: relative;
//   z-index: 1;
// }

// .about-banner .img-holder { border-radius: var(--radius-10); }

// .about-shape-2 {
//   display: block;
//   bottom: -100px;
//   left: -60px;
//   animation: bounce 2.5s infinite;
// }

// @keyframes bounce {
//   0%,
//   20%,
//   50%,
//   80%,
//   100% { transform: translateY(0); }

//   40% { transform: translateY(-30px); }

//   60% { transform: translateY(-15px); }
// }

// .about :is(.section-subtitle, .section-title, .section-text) {
//   text-align: left;
// }

// .about-item {
//   margin-block: 15px;
//   display: flex;
//   align-items: center;
//   gap: 15px;
// }

// .about-item ion-icon {
//   color: var(--selective-yellow);
//   font-size: 20px;
//   --ionicon-stroke-width: 50px;
// }

// .about-item .span {
//   color: var(--eerie-black-1);
//   font-family: var(--ff-league_spartan);
// }





// /*-----------------------------------*\
//   #COURSE
// \*-----------------------------------*/

// .course { background-color: var(--isabelline); }

// .course-card {
//   position: relative;
//   background-color: var(--white);
//   border-radius: var(--radius-5);
//   overflow: hidden;
// }

// .course-card .img-cover { transition: var(--transition-2); }

// .course-card:is(:hover, :focus-within) .img-cover { transform: scale(1.1); }

// .course-card :is(.abs-badge, .badge) {
//   font-family: var(--ff-league_spartan);
//   border-radius: var(--radius-3);
// }

// .course-card .abs-badge {
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background-color: var(--selective-yellow);
//   color: var(--white);
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   line-height: 1;
//   padding: 6px 8px;
//   padding-block-end: 3px;
// }

// .course-card .abs-badge ion-icon {
//   font-size: 18px;
//   margin-block-end: 5px;
//   --ionicon-stroke-width: 50px;
// }

// .course-card .card-content { padding: 25px; }

// .course-card .badge {
//   background-color: var(--kappel_15);
//   max-width: max-content;
//   color: var(--kappel);
//   line-height: 25px;
//   padding-inline: 10px;
// }

// .course-card .card-title {
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 2;
//   overflow: hidden;
//   margin-block: 15px 8px;
//   transition: var(--transition-1);
// }

// .course-card .card-title:is(:hover, :focus) { color: var(--kappel); }

// .course-card :is(.wrapper, .rating-wrapper, .card-meta-list, .card-meta-item) {
//   display: flex;
//   align-items: center;
// }

// .course-card .wrapper { gap: 10px; }

// .course-card .rating-wrapper { gap: 3px; }

// .course-card .rating-wrapper ion-icon { color: var(--selective-yellow); }

// .course-card .rating-text {
//   color: var(--eerie-black-1);
//   font-size: var(--fs-6);
//   font-weight: var(--fw-500);
// }

// .course-card .price {
//   color: var(--radical-red);
//   font-family: var(--ff-league_spartan);
//   font-size: var(--fs-4);
//   font-weight: var(--fw-600);
//   margin-block: 8px 15px;
// }

// .course-card .card-meta-list { flex-wrap: wrap; }

// .course-card .card-meta-item {
//   position: relative;
//   gap: 5px;
// }

// .course-card .card-meta-item:not(:last-child)::after {
//   content: "|";
//   display: inline-block;
//   color: var(--platinum);
//   padding-inline: 10px;
// }

// .course-card .card-meta-item ion-icon {
//   color: var(--quick-silver);
//   --ionicon-stroke-width: 50px;
// }

// .course-card .card-meta-item .span {
//   color: var(--eerie-black-1);
//   font-size: var(--fs-7);
// }

// .course .btn {
//   margin-inline: auto;
//   margin-block-start: 60px;
// }





// /*-----------------------------------*\
//   #VIDEO
// \*-----------------------------------*/

// .video {
//   background-size: contain;
//   background-position: center top;
// }

// .video-banner {
//   position: relative;
//   border-top-right-radius: 80px;
//   border-bottom-left-radius: 120px;
// }

// .video .play-btn {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--radical-red);
//   font-size: 30px;
//   padding: 16px;
//   color: var(--white);
//   border-radius: var(--radius-circle);
//   box-shadow: 0 0 0 0 var(--white_50);
//   z-index: 1;
//   animation: pulse 3s ease infinite;
// }

// @keyframes pulse {
//   0% { box-shadow: 0 0 0 0 var(--white_50); }
//   100% { box-shadow: 0 0 0 20px transparent; }
// }

// .video-banner::after {
//   inset: 0;
//   background-color: var(--black_30);
// }





// /*-----------------------------------*\
//   #STATS
// \*-----------------------------------*/

// .stats-card {
//   text-align: center;
//   padding: 25px;
//   border-radius: var(--radius-10);
// }

// .stats-card :is(.card-title, .card-text) { font-family: var(--ff-league_spartan); }

// .stats-card .card-title {
//   color: hsl(var(--color));
//   font-size: var(--fs-2);
//   line-height: 1.1;
// }

// .stats-card .card-text {
//   color: var(--eerie-black-1);
//   text-transform: uppercase;
// }





// /*-----------------------------------*\
//   #BLOG
// \*-----------------------------------*/

// .blog-card .card-banner { border-radius: var(--radius-10); }

// .blog-card .card-banner .img-cover { transition: var(--transition-2); }

// .blog-card .card-banner::after {
//   inset: 0;
//   background-color: var(--black_50);
//   opacity: 0;
//   transition: var(--transition-1);
// }

// .blog-card:is(:hover, :focus-within) .card-banner .img-cover { transform: scale(1.1); }

// .blog-card:is(:hover, :focus-within) .card-banner::after { opacity: 1; }

// .blog-card .card-content {
//   position: relative;
//   margin-inline: 15px;
//   background-color: var(--white);
//   padding: 20px;
//   border-radius: var(--radius-10);
//   box-shadow: var(--shadow-3);
//   margin-block-start: -100px;
//   z-index: 1;
// }

// .blog-card .card-btn {
//   position: absolute;
//   top: -40px;
//   right: 30px;
//   background-color: var(--kappel);
//   color: var(--white);
//   font-size: 20px;
//   padding: 20px;
//   border-radius: var(--radius-circle);
//   transition: var(--transition-1);
//   opacity: 0;
// }

// .blog-card .card-btn:is(:hover, :focus) { background-color: var(--radical-red); }

// .blog-card:is(:hover, :focus-within) .card-btn {
//   opacity: 1;
//   transform: translateY(10px);
// }

// .blog-card :is(.card-meta-item, .card-text, .card-subtitle) {
//   font-size: var(--fs-5);
// }

// .blog-card .card-subtitle { text-transform: uppercase; }

// .blog-card .card-title {
//   margin-block: 10px 15px;
//   transition: var(--transition-1);
// }

// .blog-card .card-title:is(:hover, :focus) { color: var(--kappel); }

// .blog-card :is(.card-meta-list, .card-meta-item) { display: flex; }

// .blog-card .card-meta-list {
//   flex-wrap: wrap;
//   gap: 10px 20px;
//   margin-block-end: 20px;
// }

// .blog-card .card-meta-item {
//   gap: 10px;
//   align-items: center;
//   color: var(--eerie-black-1);
// }

// .blog-card .card-meta-item ion-icon {
//   color: var(--kappel);
//   font-size: 18px;
//   --ionicon-stroke-width: 40px;
// }





// /*-----------------------------------*\
//   #FOOTER
// \*-----------------------------------*/

// .footer {
//   background-repeat: no-repeat;
//   background-color: var(--eerie-black-2);
//   color: var(--gray-x-11);
//   font-size: var(--fs-5);
// }

// .footer-top {
//   display: grid;
//   gap: 30px;
// }

// .footer-brand-text { margin-block: 20px; }

// .footer-brand .wrapper {
//   display: flex;
//   gap: 5px;
// }

// .footer-brand .wrapper .span { font-weight: var(--fw-500); }

// .footer-link { transition: var(--transition-1); }

// .footer-link:is(:hover, :focus) { color: var(--kappel); }

// .footer-list-title {
//   color: var(--white);
//   font-family: var(--ff-league_spartan);
//   font-size: var(--fs-3);
//   font-weight: var(--fw-600);
//   margin-block-end: 10px;
// }

// .footer-list .footer-link { padding-block: 5px; }

// .newsletter-form { margin-block: 20px 35px; }

// .newsletter-form .input-field {
//   background-color: var(--white);
//   padding: 12px;
//   border-radius: var(--radius-5);
//   margin-block-end: 20px;
// }

// .newsletter-form .btn {
//   min-width: 100%;
//   justify-content: center;
// }

// .social-list {
//   display: flex;
//   gap: 25px;
// }

// .social-link { font-size: 20px; }

// .footer-bottom {
//   border-block-start: 1px solid var(--eerie-black-1);
//   padding-block: 30px;
// }

// .copyright { text-align: center; }

// .copyright-link {
//   color: var(--kappel);
//   display: inline-block;
// }





// /*-----------------------------------*\
//   #BACK TO TOP
// \*-----------------------------------*/

// .back-top-btn {
//   position: fixed;
//   bottom: 40px;
//   right: 30px;
//   background-color: var(--kappel);
//   color: var(--white);
//   font-size: 20px;
//   padding: 15px;
//   border-radius: var(--radius-circle);
//   z-index: 3;
//   opacity: 0;
//   pointer-events: none;
//   transition: var(--transition-1);
// }

// .back-top-btn.active {
//   transform: translateY(10px);
//   opacity: 1;
//   pointer-events: all;
// }





// /*-----------------------------------*\
//   #MEDIA QUERIES
// \*-----------------------------------*/

// /**
//  * responsive for large than 575px screen
//  */

// @media (min-width: 575px) {

//   /**
//    * REUSED STYLE
//    */

//   .container {
//     max-width: 520px;
//     width: 100%;
//     margin-inline: auto;
//   }

//   .grid-list { grid-template-columns: 1fr 1fr; }

//   :is(.course, .blog) .grid-list { grid-template-columns: 1fr; }



//   /**
//    * HEADER
//    */

//   .header .container { max-width: unset; }

//   .header-actions { gap: 30px; }



//   /**
//    * HERO
//    */

//   .hero-banner { grid-template-columns: 1fr 0.9fr; }



//   /**
//    * VIDEO
//    */

//   .video .play-btn { padding: 25px; }



//   /**
//    * STATS
//    */

//   .stats-card { padding: 40px 30px; }



//   /**
//    * FOOTER
//    */

//   .footer-brand,
//   .footer-list:last-child { grid-column: 1 / 3; }

//   .newsletter-form {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }

//   .newsletter-form .input-field { margin-block-end: 0; }

//   .newsletter-form .btn { min-width: max-content; }

// }





// /**
//  * responsive for large than 768px screen
//  */

// @media (min-width: 768px) {

//   /**
//    * CUSTOM PROPERTY
//    */

//   :root {

//     /**
//      * typography
//      */

//     --fs-1: 4.6rem;
//     --fs-2: 3.8rem;

//   }



//   /**
//    * REUSED STYLE
//    */

//   .container { max-width: 720px; }

//   .btn { padding: 15px 30px; }

//   :is(.course, .blog) .grid-list { grid-template-columns: 1fr 1fr; }



//   /**
//    * HEADER
//    */

//   .header .container { padding-inline: 30px; }

//   .header .btn {
//     display: flex;
//     padding: 10px 30px;
//     margin-inline: 20px;
//   }



//   /**
//    * HERO
//    */

//   .hero { padding-block-start: calc(var(--section-padding) + 90px); }

//   .hero .container { gap: 50px; }

//   .hero-text { margin-block-end: 30px; }

//   .hero-banner {
//     position: relative;
//     z-index: 1;
//   }

//   .hero-banner .img-holder { max-width: max-content; }

//   .hero-banner .img-holder.one { justify-self: flex-end; }

//   .hero-banner .img-holder.two { margin-block-start: 100px; }

//   .hero-shape-1 {
//     display: block;
//     position: absolute;
//     bottom: -40px;
//     left: -10px;
//   }



//   /**
//    * ABOUT
//    */

//   .about { padding-block-start: 50px; }

//   .about-banner {
//     padding: 60px;
//     padding-inline-end: 0;
//   }

//   .about-banner .img-holder {
//     max-width: max-content;
//     margin-inline: auto;
//   }

//   .about-shape-1 {
//     display: block;
//     top: -40px;
//     right: -70px;
//   }



//   /**
//    * FOOTER
//    */

//   .footer-brand,
//   .footer-list:last-child { grid-column: auto; }

//   .newsletter-form .btn { padding-block: 10px; }

// }





// /**
//  * responsive for large than 992px screen
//  */

// @media (min-width: 992px) {

//   /**
//    * CUSTOM PROPERTY
//    */

//   :root {

//     /**
//      * typography
//      */

//     --fs-1: 5.5rem;
//     --fs-2: 4.5rem;

//   }



//   /**
//    * REUSED STYLE
//    */

//   .container { max-width: 960px; }

//   .grid-list { grid-template-columns: repeat(4, 1fr); }

//   :is(.course, .blog) .grid-list { grid-template-columns: repeat(3, 1fr); }



//   /**
//    * HERO
//    */

//   .hero .container {
//     grid-template-columns: 1fr 1fr;
//     align-items: center;
//   }

//   .hero .section-title,
//   .hero-text { text-align: left; }

//   .hero .btn { margin-inline: 0; }



//   /**
//    * ABOUT
//    */

//   .about .container {
//     grid-template-columns: 1fr 0.6fr;
//     align-items: center;
//     gap: 60px;
//   }



//   /**
//    * VIDEO
//    */

//   .video-banner {
//     max-width: 75%;
//     margin-inline: auto;
//   }



//   /**
//    * FOOTER
//    */

//   .footer .grid-list { grid-template-columns: 1fr 0.6fr 0.6fr 1.2fr; }

// }





// /**
//  * responsive for large than 1200px screen
//  */

// @media (min-width: 1200px) {

//   /**
//    * CUSTOM PROPERTY
//    */

//   :root {

//     /**
//      * typography
//      */

//     --fs-1: 6.5rem;

//     /**
//      * spacing
//      */

//     --section-padding: 120px;

//   }



//   /**
//    * REUSED STYLE
//    */

//   .container { max-width: 1185px; }

//   .shape { display: block; }

//   .about-content,
//   .video-card,
//   .blog { position: relative; }



//   /**
//    * HEADER
//    */

//   .header-action-btn:last-child,
//   .navbar .wrapper,
//   .overlay { display: none; }

//   .header.active {
//     transform: translateY(-100%);
//     animation: slideIn 0.5s ease forwards;
//   }

//   @keyframes slideIn {
//     0% { transform: translateY(-100%); }
//     100% { transform: translateY(0); }
//   }

//   .navbar,
//   .navbar.active { all: unset; }

//   .navbar-list {
//     display: flex;
//     gap: 50px;
//     padding: 0;
//   }

//   .navbar-item:not(:last-child) { border-block-end: none; }

//   .navbar-link {
//     color: var(--eerie-black-1);
//     padding-block: 20px;
//   }

//   .header .btn { margin-inline-end: 0; }



//   /**
//    * HERO
//    */

//   .hero { padding-block-start: calc(var(--section-padding) + 120px); }

//   .hero .container { gap: 80px; }

//   .hero-shape-2 {
//     top: -80px;
//     z-index: -1;
//   }



//   /**
//    * ABOUT
//    */

//   .about .container { gap: 110px; }

//   .about-banner .img-holder { margin-inline: 0; }

//   .about-shape-3 {
//     top: -20px;
//     left: -100px;
//     z-index: -1;
//   }

//   .about-content { z-index: 1; }

//   .about-shape-4 {
//     top: 30px;
//     right: -60px;
//     z-index: -1;
//   }



//   /**
//    * VIDEO
//    */

//   .video-shape-1 {
//     top: -50px;
//     left: 0;
//   }

//   .video-shape-2 {
//     top: -80px;
//     right: 120px;
//     z-index: 1;
//   }



//   /**
//    * BLOG
//    */

//   .blog-shape {
//     top: 0;
//     left: 0;
//   }

// }
//                 `}
//             </style>

//       </>
//     )
// }

// export default Home;
