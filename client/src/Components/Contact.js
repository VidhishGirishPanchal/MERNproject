import React from 'react'

function Contact() {
    return (
        <>
          <div className="contact_row_div">
                <div className="contact_small_div">
                        <div style={{display:"flex", padding: "2%"}}>
                        <i class="fas fa-mobile-alt fa-2x"></i>
                        <div className="contact_smallcard_text">
                          <h6 className="contact_smallcard_title">Phone</h6>
                          <p className="contact_smallcard_content">4934020202</p>
                        </div>
                        </div>
                </div>
                <div className="contact_small_div">
                          <div style={{display:"flex", padding: "2%"}}>
                          <i class="fas fa-envelope fa-2x"></i>
                            <div className="contact_smallcard_text">
                              <h6 className="contact_smallcard_title">Email</h6>
                              <p className="contact_smallcard_content">tom@gmail.com</p>
                            </div>
                            </div>
                </div>
                <div className="contact_small_div">
                            <div style={{display:"flex", padding: "2%"}}>
                            <i class="fas fa-map-marked-alt fa-2x"></i>
                              <div className="contact_smallcard_text">
                                <h6 className="contact_smallcard_title">Address</h6>
                                <p className="contact_smallcard_content">Mumbai, India</p>
                              </div>
                              </div>
                </div>
          </div> 
          {/* big div */}
          <div className="contact_div">
                <h2 style={{marginLeft:"10%", paddingTop:"30px", paddingBottom: "10px"}}>Get in Touch</h2>
                
                <form method="" className="contact_page_form">
                <div className="row" style={{padding: "5%"}}>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="form-group">    
                                <input type="text" class="form-control" placeholder="Your Name" />
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="form-group">  
                                <input type="email" class="form-control" placeholder="Your Email" />
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="form-group">       
                                <input type="text" class="form-control" placeholder="Your Number" />
                </div>
                </div>
                </div>
                <div class="form-group" style={{paddingLeft: "5%", paddingRight: "5%", paddingBottom:"5%", marginTop:"-20px"}}>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <div className="contact_register_btn">
                <button className="btn btn-primary">Send Message</button>
                </div>
                </form>
               
                
          </div>
        </>
    )
}

export default Contact
