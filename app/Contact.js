import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0xyfg55', 'template_m69xpsf', form.current, '31iA6LVMFmKNCWSPQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section>
        <div className="contact_container">
            <h3 className="contact_title">Contact Us</h3>
            <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="contact_form-div">
                <input 
                className="contact_form-input"
                type="text" placeholder="Full Name"
                name= 'user_name' required/>
                <label className="contact_form-tag" htmlFor="name">
                Name
                </label>
                
            </div>
            <div className="contact_form-div">
                <input 
                className="contact_form-input"
                type="email" placeholder="Email"
                name= 'user_email' required/>
                <label className="contact_form-tag" htmlFor="email">
                Email
                </label>
            </div>
            <div className="contact_form-div">
                <input 
                className="contact_form-input"
                type="text" placeholder="Subject"
                name= 'subject' required/>
                <label className="contact_form-tag" htmlFor="name">
                Subject
                </label>
            </div>
            <div className="contact_form-div contact_form-area">
                <textarea 
                className="contact_form-input"
                name= 'message' placeholder='Your message' cols='30' rows='10'></textarea>
                <label className="contact_form-tag" htmlFor="message">
                Message
                </label>
            </div>
            <div className="contact_button">
            <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    </section>
  )
}

export default Contact