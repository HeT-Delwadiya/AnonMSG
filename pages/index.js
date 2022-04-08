import Link from "next/link";

export default function Home() {
       return (
              <div>
                     <section id="title">
                                   <div className="container-fluid header-container">

                                   <div className="row title-section">
                                          <div className="col-lg-6">
                                                 <h1 id="title-text" style={{fontWeight: "700", letterSpacing: "2px"}}>AnonMSG</h1>
                                                 <h4 className="text-white me-3">Send message anonymously that will self-destruct after being read</h4>
                                                 <div className="">
                                                        <Link href="/create"><button type="button" className="btn btn-dark btn-lg download-btn rounded-3">Get Started</button></Link>
                                                 </div>
                                          </div>
                                          <div className="col-lg-6 iphone">
                                                 <img id="title-img" src="https://res.cloudinary.com/dev-s-den/image/upload/v1649140301/other/dev_u9eo5b.png" alt="iphone-mockup" height="400px" width="500px" />
                                          </div>
                                   </div>
                            </div>
                     </section>

                     <section id="features">

                                   <div className="row">
                                          <div className="col-lg-4 feature-box">
                                                 <i aria-hidden className="fas fa-check-circle fa-4x icon"></i>
                                                 <h3>Easy to use.</h3>
                                                 <p>So easy to use, even any newbie could do it.</p>
                                          </div>
                                          <div className="col-lg-4 feature-box">
                                                 <i aria-hidden className="fas fa-bullseye fa-4x icon"></i>
                                                 <h3>All in one</h3>
                                                 <p>Available for everyone worldwide.</p>
                                          </div>
                                          <div className="col-lg-4 feature-box">
                                                 <i aria-hidden className="fas fa-heart fa-4x icon"></i>
                                                 <h3>Free to use.</h3>
                                                 <p>All features are free to use for everyone.</p>
                                          </div>
                                   </div>

                     </section>

                     <section id="testimonials">

                                   <div id="carouselControls" className="carousel slide" data-bs-ride="carousel" data-pause="hover">
                                          <div className="carousel-inner">
                                                 <div className="carousel-item active">
                                                        <h2 className="testimonial-title">Its easier to send message with sharable link and self-destructive after being read.</h2>
                                                        <img className="testimonial-image" src="https://res.cloudinary.com/dev-s-den/image/upload/v1645961968/unknown_ir7r2o.png" alt="dog-profile"/>
                                                        <em>Jacob, New York</em>
                                                 </div>
                                                 <div className="carousel-item">
                                                        <h2 className="testimonial-title">I can use AnonMSG to send message without creating any account.</h2>
                                                        <img className="testimonial-image" src="https://res.cloudinary.com/dev-s-den/image/upload/v1645974535/lady-img_ozpi8g.jpg" alt="lady-profile"/>
                                                        <em>Charlotte, Illinois</em>  
                                                 </div>
                                          </div>
                                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                                                 <span className="carousel-control-prev-icon" ></span>
                                                 <span className="visually-hidden">Previous</span>
                                          </button>
                                          <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                                                 <span className="carousel-control-next-icon" ></span>
                                                 <span className="visually-hidden">Next</span>
                                          </button>
                                   </div>

                     </section>

                     <section id="press">
                            <img className="press-img" src="https://res.cloudinary.com/dev-s-den/image/upload/v1645967913/google_gqrn1w.png" alt="tc-logo" height="100px" width="350px"/>
                            <img className="press-img" src="https://res.cloudinary.com/dev-s-den/image/upload/v1645967920/meta_cghcu0.png" alt="biz-insider-logo" height="100px" width="350px"/>
                            <img className="press-img" src="https://res.cloudinary.com/dev-s-den/image/upload/v1645967924/microsoft_qp4rcb.png" alt="tnw-logo" height="100px" width="450px"/>
                            <img className="press-img" src="https://res.cloudinary.com/dev-s-den/image/upload/v1645967916/ibm_ocafjk.png" alt="mashable-logo" height="100px" width="350px"/>
                     </section>

                     <section id="features">
                            <div className="row">
                                   <div className="col-lg-4 feature-box">
                                          <i aria-hidden className="fa-solid fa-volume-high fa-4x icon"></i>
                                          <h3>Express yourself</h3>
                                          <p>want to share something to someone?</p>
                                   </div>
                                   <div className="col-lg-4 feature-box">
                                          <i aria-hidden className="fa-solid fa-lock fa-4x icon"></i>
                                          <h3>Privacy First</h3>
                                          <p>Share message with password protection and a question for password.</p>
                                   </div>
                                   <div className="col-lg-4 feature-box">
                                          <i aria-hidden className="fa-solid fa-trash-can fa-4x icon"></i>
                                          <h3>Self-Destruction</h3>
                                          <p>Message will be self-destructed after being read or after specified period.</p>
                                   </div>
                                   </div>
                     </section>

                     <section id="cta">
                            <h3 className="cta-text">Share messages anonymously now</h3>
                            <Link href="/create"><button type="button" className="btn btn-dark btn-lg download-btn rounded-3">Get Started</button></Link>
                     </section>

              </div>
       )
}
