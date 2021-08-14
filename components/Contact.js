import React from 'react'
import contactStyles from '../styles/Contact.module.scss'

const Contact = () => {
    return (
        <div className={contactStyles.contact} id="contact">
            <div className="contactRowTop">
                <h1>Contact Me</h1>
            </div>
            <div className={contactStyles.contactRowBottom}>
                <form action="https://formspree.io/f/mrgranee" method="POST" className={contactStyles.frm}>
                    <label htmlFor="fName">Name</label>
                    <input type="text" id="fName" name="name" placeholder="Your name.."  required /> 
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="_replyto" placeholder="Your email.." required />
                    <label htmlFor="subject">Comments/Questions</label>
                    <textarea id="subject" name="message" placeholder="Your message.." style={{height: '200px'}}
                    maxLength="1500" required></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact
