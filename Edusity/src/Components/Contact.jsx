import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb0dc812-cd8c-46aa-ba54-a5a8d6466d65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon}  /></h3>
        <p>Feel free to reach out through contact form or find our contact information
            below.Your feedback,questions and suggestions are important to us as we strive to provide exceptional service to our  university community.
        </p>
        <ul>
            <li><img src={mail_icon}  />Contact@SurajJaiswal.dev</li>
            <li><img src={phone_icon}  />+1 555-123-4567</li>
            <li> <img src={location_icon}  />123 Maple Street Springfield, IL 62704 USA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" placeholder='Enter your name' required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter your mobile number" required />

            <label htmlFor="msg">Write your message here</label>
            <textarea name="msg" id="msg"  rows="6" placeholder='Enter your message' required></textarea>

            <button type="submit" className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
