import React, { useState } from "react";
import "./Contact.css";

// Material Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit to your backend here
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      message: "Thank you for your message! We'll get back to you soon."
    });
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setFormStatus({
        submitted: false,
        message: ""
      });
    }, 5000);
  };

  return (
    <section className="contact" aria-label="Contact us">
      <div className="contact__container">
        {/* Left Side - Contact Details */}
        <div className="contact__left">
          <div className="contact__intro">
            <h2 className="contact__title">
              We're here to help you with the hard decisions; let's talk about your 
              needs and get HOPE back in your life
            </h2>
            <p className="contact__subtitle">
              Simply give us a call or email us using the contact info below and 
              we will get back to you as soon as possible!
            </p>
          </div>

          <div className="contact__details">
            {/* Phone */}
            <div className="contact__detailItem">
              <div className="contact__detailIcon">
                <PhoneIcon />
              </div>
              <div className="contact__detailContent">
                <h3 className="contact__detailTitle">Phone</h3>
                <a href="tel:8338664673" className="contact__detailLink">
                  (833) 866-HOPE (4673)
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact__detailItem">
              <div className="contact__detailIcon">
                <EmailIcon />
              </div>
              <div className="contact__detailContent">
                <h3 className="contact__detailTitle">Email</h3>
                <a href="mailto:joannewong.senioradvisor@gmail.com" className="contact__detailLink">
                  joannewong.senioradvisor@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact__detailItem">
              <div className="contact__detailIcon">
                <LocationOnIcon />
              </div>
              <div className="contact__detailContent">
                <h3 className="contact__detailTitle">Service Area</h3>
                <p className="contact__detailText">Western Washington, USA</p>
              </div>
            </div>
          </div>

          <div className="contact__note">
            <p>
              <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM<br />
              <strong>Response Time:</strong> We aim to respond within 24 hours
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact__right">
          <div className="contact__formWrapper">
            <h3 className="contact__formTitle">Send us a message</h3>
            <p className="contact__formSubtitle">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {formStatus.submitted ? (
              <div className="contact__successMessage">
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__formGroup">
                  <label htmlFor="name" className="contact__formLabel">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact__formInput"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact__formGroup">
                  <label htmlFor="email" className="contact__formLabel">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact__formInput"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="contact__formGroup">
                  <label htmlFor="phone" className="contact__formLabel">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact__formInput"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="contact__formGroup">
                  <label htmlFor="message" className="contact__formLabel">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact__formTextarea"
                    placeholder="Tell us about your situation and how we can help..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="contact__formSubmit">
                  <span>Send Message</span>
                  <SendIcon />
                </button>

                <p className="contact__formNote">
                  * Required fields. Your information is secure and will only be used 
                  to contact you about our services.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}