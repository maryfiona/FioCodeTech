// import React from 'react'

// const About = () => {
//   return (
//     <div className="container-xxl py-6" id="about">
//     <div className="container">
//         <div className="row g-5">
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
//                 <div className="d-flex align-items-center mb-5">
//                     <div className="years flex-shrink-0 text-center me-4">
//                         <h1 className="display-1 mb-0">15</h1>
//                         <h5 className="mb-0">Years</h5>
//                     </div>
//                     <h3 className="lh-base mb-0">of working experience as a web designer & developer</h3>
//                 </div>
//                 <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
//                 <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Affordable Prices</p>
//                 <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High-Quality Product</p>
//                 <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On-Time Project Delivery</p>
//                 <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
//             </div>
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
//                 <div className="row g-3 mb-4">
//                     <div className="col-sm-6">
//                         <img className="img-fluid rounded" src="img/about-1.jpg" alt="" />
//                     </div>
//                     <div className="col-sm-6">
//                         <img className="img-fluid rounded" src="img/about-2.jpg" alt="" />
//                     </div>
//                 </div>
//                 <div className="d-flex align-items-center mb-3">
//                     <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
//                     <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
//                 </div>
//                 <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
//                 <div className="d-flex align-items-center mb-3">
//                     <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
//                     <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
//                 </div>
//                 <p className="mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
//             </div>
//         </div>
//     </div>
// </div>
// );
// };
  


// export default About
// import React, { useEffect,useState } from 'react';
// import AOS from 'aos'
// import'aos/dist/aos.css'
// import'aos/dist/aos.js'
// // import CountUp from 'react-countup';
// import CountUp from 'react-countup';
// import '../css/About.css'

// const About = () => {
//     const [counting, setCounting] = useState(true);

//     const handleEnd = () => {
//       setCounting(false);
//       setTimeout(() => {
//         setCounting(true);
//       }, 1000); // Adjust the delay as needed
//     };
//        useEffect(()=>{
//         AOS.init({duration:2000})
//     },[])
    
    
//   return (
//     <div className="container-xxl py-6" id="about">
//       <div className="container">
//         <div className="row g-5">
//           <div className="col-lg-6 " data-aos="fade-down">
//             <div className="d-flex align-items-center mb-5">
//               <div className="years flex-shrink-0 text-center me-4">
//                 <h1 className="display-1 mb-0">1</h1>
//                 <h5 className="mb-0">Year</h5>
//               </div>
//               <h3 className="lh-base mb-0 ">of experience as a Frontend developer</h3>
//             </div>
//             <p className="mb-4 ">With a solid year of hands-on experience in Frontend Development,
//              I've passionately contributed to the creation of visually stunning and highly functional web applications. 
//              Proficient in HTML, CSS, and JavaScript, I've embraced modern frameworks such as React.js,
//               ensuring seamless and responsive user interfaces. Collaborating seamlessly with cross-functional teams,
//                I've delivered solutions that not only meet but exceed client expectations. 
//                My commitment to continuous learning keeps me at the forefront of industry trends,
//                 and I look forward to leveraging my skills in future projects.
               
//             </p>

            

//             <a className="btn btn-primary py-3 px-5 mt-3" href="#read-more">Read More</a>
//           </div>
//           <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
//             <div className="row g-3 mb-4">
//               <div className="col-sm-6">
//                 <img className="img-fluid rounded" src="img/about-1.jpg" alt="" />
//               </div>
//               <div className="col-sm-6">
//                 <img className="img-fluid rounded" src="img/about-2.jpg" alt="" />
//               </div>
//             </div>
//             <div className="d-flex align-items-center mb-3 " data-aos="fade-left">
//               <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
//               {/* <h2 className="text-primary fw-bold mb-0 counter" data-toggle="counter-up">
//       <CountUp end={1000000} duration={2}  />
//     </h2> */}
//       <h2 className="text-primary fw-bold mb-0 counter" data-toggle="counter-up">
//       < CountUp end={counting ? 100000000000 : 0} duration={2} onStart={() => setCounting(true)} onEnd={handleEnd} />
//     </h2>
              
//             </div>
//             <p className="mb-4 " data-aos="fade-right">While my journey is just beginning,
//              I am excited about the prospect of working with you and future clients.
//               At FioCodeTech, we are committed to building lasting relationships based on trust,
//              innovation, and a shared vision for success.</p>
//             {/* <div className="d-flex align-items-center mb-3">
//               <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
//               <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1</h2>
//             </div> */}
//             {/* <p className="mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import '../css/About.css';
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'

const About = () => {
  const [counting, setCounting] = useState(true);

  const handleEnd = () => {
    setCounting(false);
    setTimeout(() => {
      setCounting(true);
    }, 1000); 
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="container-xxl py-6 text-center" id="about">
    <h2 className="mb-4 text-primary">ABOUT US</h2>
    <div className="container">
      <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-down">
            <div className="d-flex align-items-center mb-5">
              <div className="years flex-shrink-0 text-center me-4">
                <h1 className="display-1 mb-0" >1</h1>
                <h5 className="mb-0">Year</h5>
              </div>
              <h3 className="lh-base mb-0 fs-5">of experience as a Frontend developer</h3>
            </div>
            <p className="mb-4 fs-5">
              With a solid year of hands-on experience in Frontend Development, I've passionately contributed to the creation of visually stunning and highly functional web applications. Proficient in HTML, CSS, and JavaScript, I've embraced modern frameworks such as React.js, ensuring seamless and responsive user interfaces. Collaborating seamlessly with cross-functional teams, I've delivered solutions that not only meet but exceed client expectations. My commitment to continuous learning keeps me at the forefront of industry trends, and I look forward to leveraging my skills in future projects.
            </p>

            <a className="btn btn-primary py-3 px-5 mb-5" href="#read-more">
              Read More
            </a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <img className="img-fluid rounded" src={client1} alt="" />
              </div>
              <div className="col-sm-6">
                <img className="img-fluid rounded" src={client2} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center mb-3" data-aos="fade-left">
              <h5 className="border-end pe-3 me-3 mb-0 fs-5">Happy Clients</h5>
              <h2 className="text-primary fw-bold mb-0 counter fs-5" data-toggle="counter-up">
                <CountUp end={counting ? 100000000000 : 0} duration={2} onStart={() => setCounting(true)} onEnd={handleEnd} />
              </h2>
            </div>
            <p className="mb-4 fs-5" data-aos="fade-right">
              While my journey is just beginning, I am excited about the prospect of working with you and future clients. At FioCodeTech, we are committed to building lasting relationships based on trust, innovation, and a shared vision for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
