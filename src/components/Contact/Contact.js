import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_7u9ia69",
        "template_zifo5a9",
        form.current,
        "ohKgwTi-svedDyv_p"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            icon: 'success',
            title: "MESSAGE SENT!",
            width: 600,
            padding: "3em",
            color: "#172024",
            background: "#fff",
            confirmButtonText: 'Done!',
            confirmButtonColor: '#263846'
          });
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-content">
      <a name="Contact"></a>
      <h1 className="contact">Contact</h1>
      <p className="text">
        If you have a project and you would like me to be part of it or your
        team or you just want to say hi, I invite you to contact me with the
        following form, you can also use it simply to leave me a comment! Let's
        build something together!
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className="user" required />
        <label>Email</label>
        <input type="email" name="user_email" className="user" required />
        <label>Message</label>
        <textarea name="message" />
        <input className="submit" type="submit" value="Send" required />
      </form>
    </div>
  );
}
export default Contact;
