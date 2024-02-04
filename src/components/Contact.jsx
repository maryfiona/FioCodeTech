// // Contact.js
// import React , {useEffect }from 'react';
// import '../css/Contact.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

// const Contact = () => {
//     useEffect(() => {
        
//             AOS.init({ duration: 2000 });
             
//       }, []);
//     const iconStyle = {
//         color: '#1DA1F2', 
//       };
    
//       const githubStyle = {
//         color: '#171515', 
//       };
    
//       const linkedinStyle = {
//         color: '#0077B5', 
//       };
//     return (
//         <div className="container-xxl pb-5 bg-black text-light " id="contact">
//             <h2 className="mb-4 text-primary text-center" data-aos="fade-up">CONTACT US</h2>
//             <div className="container py-5">
//                 <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
//                     <div className="col-lg-6">
//                         <h1 className="display-5 mb-0">Let's Work Together</h1>
//                     </div>
//                     <div className="col-lg-6 text-lg-end">
//                         <a className="btn btn-primary py-3 px-5" href="#contactForm">Say Hello</a>
//                     </div>
//                 </div>
//                 <div className="row g-5">
//                     <div className="col-lg-5 col-md-6 wow fadeInUp" data-aos="fade-down">
                        
                        
//                         <p className="mb-2">Call me:</p>
//                         <h3 className="fw-bold">+234 9078 398 501</h3>
//                         <hr className="w-100" />
//                         <p className="mb-2">Mail me:</p>
//                         <h3 className="fs-4">aguchidimmamaryfiona@gmail.com</h3>
//                         <hr className="w-100" />
//                         <p className="mb-2">Follow me:</p>
//                         <div className="d-flex pt-2">
//                         <a className="btn btn-square btn-light me-2" href="https://www.linkedin.com/in/maryfiona-agu-0a816326b/">
//                         <FaTwitter style={iconStyle} />
//                    </a>
//                 <a className="btn btn-square btn-light me-2" href="https://github.com/maryfiona">
//                 <FaGithub  style={githubStyle} />
//                 </a>
//                 <a className="btn btn-square btn-light me-2" href="https://www.linkedin.com/in/maryfiona-agu-0a816326b/">
//                     <FaLinkedinIn  style={linkedinStyle}  />
//                      </a>
//                         </div>
//                     </div>
//                     <div className="col-lg-7 col-md-6 wow fadeInUp"  data-aos="fade-up">
//                         <h3 className="mb-4">REACH OUT TO ME </h3>
//                         <form id="contactForm">
//                             <div className="row g-3 ">
//                                 <div className="col-md-6">
//                                     <div className="form-floating">
//                                         <input type="text" className="form-control" id="name" placeholder="Your Name"  />
//                                         <label htmlFor="name">Your Name</label>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6 ">
//                                     <div className="form-floating">
//                                         <input type="email" className="form-control" id="email" placeholder="Your Email" />
//                                         <label htmlFor="email">Your Email</label>
//                                     </div>
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="form-floating">
//                                         <input type="text" className="form-control" id="subject" placeholder="Subject" />
//                                         <label htmlFor="subject">Subject</label>
//                                     </div>
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="form-floating">
//                                         <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
//                                         <label htmlFor="message">Message</label>
//                                     </div>
//                                 </div>
//                                 <div className="col-12">
//                                     <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
// Contact.js
// import React, { useEffect } from 'react';
// import '../css/Contact.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

// const Contact = () => {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);

//   const iconStyle = {
//     color: '#1DA1F2',
//   };

//   const githubStyle = {
//     color: '#171515',
//   };

//   const linkedinStyle = {
//     color: '#0077B5',
//   };

//   return (
//     <div className="container-xxl pb-5 bg-black text-light " id="contact">
//       <h2 className="mb-4 text-primary text-center" data-aos="fade-up">
//         CONTACT US
//       </h2>
//       <div className="container py-5">
//         <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
//           <div className="col-lg-6">
//             <h1 className="display-5 mb-0">Let's Work Together</h1>
//           </div>
//           <div className="col-lg-6 text-lg-end">
//             <a className="btn btn-primary py-3 px-5" href="#contactForm">
//               Say Hello
//             </a>
//           </div>
//         </div>
//         <div className="row g-5">
//           <div className="col-lg-5 col-md-6 wow fadeInUp" data-aos="fade-down">
//             <p className="mb-2">Call me:</p>
//             <h3 className="fw-bold">+234 9078 398 501</h3>
//             <hr className="w-100" />
//             <p className="mb-2">Mail me:</p>
//             <h3 className="fs-4">aguchidimmamaryfiona@gmail.com</h3>
//             <hr className="w-100" />
//             <p className="mb-2">Follow me:</p>
//             <div className="d-flex pt-2">
//               <a
//                 className="btn btn-square btn-light me-2"
//                 href="https://www.linkedin.com/in/maryfiona-agu-0a816326b/"
//               >
//                 <FaTwitter style={iconStyle} />
//               </a>
//               <a
//                 className="btn btn-square btn-light me-2"
//                 href="https://github.com/maryfiona"
//               >
//                 <FaGithub style={githubStyle} />
//               </a>
//               <a
//                 className="btn btn-square btn-light me-2"
//                 href="https://www.linkedin.com/in/maryfiona-agu-0a816326b/"
//               >
//                 <FaLinkedinIn style={linkedinStyle} />
//               </a>
//             </div>
//           </div>
//           <div
//             className="col-lg-7 col-md-6 wow fadeInUp"
//             data-aos="fade-up"
//           >
//             <h3 className="mb-4">REACH OUT TO ME </h3>
//             <form
//               id="contactForm"
//               action="https://formspree.io/f/xnqkjrqp"
//               method="POST"
//             >
//               <div className="row g-3 ">
//                 <div className="col-md-6">
//                   <div className="form-floating">
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       id="name"
//                       placeholder="Your Name"
//                       required
//                     />
//                     <label htmlFor="name">Your Name</label>
//                   </div>
//                 </div>
//                 <div className="col-md-6 ">
//                   <div className="form-floating">
//                     <input
//                       type="email"
//                       name="_replyto"
//                       className="form-control"
//                       id="email"
//                       placeholder="Your Email"
//                       required
//                     />
//                     <label htmlFor="email">Your Email</label>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="form-floating">
//                     <input
//                       type="text"
//                       name="subject"
//                       className="form-control"
//                       id="subject"
//                       placeholder="Subject"
//                       required
//                     />
//                     <label htmlFor="subject">Subject</label>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="form-floating">
//                     <textarea
//                       name="message"
//                       className="form-control"
//                       placeholder="Leave a message here"
//                       id="message"
//                       style={{ height: "100px" }}
//                       required
//                     ></textarea>
//                     <label htmlFor="message">Message</label>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <button
//                     className="btn btn-primary py-3 px-5"
//                     type="submit"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



// Contact.js
import React, { useState, useEffect } from 'react';
import '../css/Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const iconStyle = {
    color: '#1DA1F2',
  };

  const githubStyle = {
    color: '#171515',
  };

  const linkedinStyle = {
    color: '#0077B5',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formSpreeEndpoint = 'https://formspree.io/f/xnqkjrqp';
    const formData = new FormData(e.target);

    const response = await fetch(formSpreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setFormSubmitted(true);

      // Auto-redirect back to the contact form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    } else {
      console.error('Form submission error');
    }
  };

  return (
    <div className="container-xxl pb-5 bg-black text-light " id="contact">
      <h2 className="mb-4 text-primary text-center" data-aos="fade-up">
        CONTACT US
      </h2>
      <div className="container py-5">
        {formSubmitted ? (
          <div className="alert alert-success" role="alert">
            Submitted successfully! Thank you for reaching out.
          </div>
        ) : (
          <>
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-6">
                <h1 className="display-5 mb-0">Let's Work Together</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <a className="btn btn-primary py-3 px-5" href="#contactForm">
                  Say Hello
                </a>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-5 col-md-6 wow fadeInUp" data-aos="fade-down">
                <p className="mb-2">Call me:</p>
                <h3 className="fw-bold">+234 9078 398 501</h3>
                <hr className="w-100" />
                <p className="mb-2">Mail me:</p>
                <h3 className="fs-4">aguchidimmamaryfiona@gmail.com</h3>
                <hr className="w-100" />
                <p className="mb-2">Follow me:</p>
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-square btn-light me-2"
                    href="https://www.linkedin.com/in/maryfiona-agu-0a816326b/"
                  >
                    <FaTwitter style={iconStyle} />
                  </a>
                  <a
                    className="btn btn-square btn-light me-2"
                    href="https://github.com/maryfiona"
                  >
                    <FaGithub style={githubStyle} />
                  </a>
                  <a
                    className="btn btn-square btn-light me-2"
                    href="https://www.linkedin.com/in/maryfiona-agu-0a816326b/"
                  >
                    <FaLinkedinIn style={linkedinStyle} />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-7 col-md-6 wow fadeInUp"
                data-aos="fade-up"
              >
                <h3 className="mb-4">REACH OUT TO ME </h3>
                <form
                  id="contactForm"
                  action="https://formspree.io/f/xnqkjrqp"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="row g-3 ">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="_replyto"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "100px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
