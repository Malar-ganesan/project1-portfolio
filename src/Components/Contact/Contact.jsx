import React from "react";
import'./Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "051e727b-a514-4fe1-9c58-3d054472d07a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message);
        }
      };

    return (
        <div id="contact" className="contact">
            <div className="cont-title">
                <h1>Get in touch</h1>
                <img src={theme} alt="" />
            </div>
           <div className="contact-section">
            <div className="contact-left">
               
                    <h1>Let's Talk</h1>
                    <p className="para">I'm currently available to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                  <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>malar2@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>733-941-8291</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Tamilnadu- 629001</p>
                    </div>
                  </div>
                
            </div> 
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name" />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder="Enter your email" name="email"  />
                <label htmlFor="">Wrte your messsage here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type="submit" className="contact-submit">
                    Submit Now
                </button>
            </form>
          </div>   
        
        </div>
    )
}

export default Contact