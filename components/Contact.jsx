import React from 'react'
import contactStyles from '../styles/Contact.module.scss'

const Contact = () => {
    return (
        <div className={contactStyles.contact} id="contact">
            <div className={contactStyles.contactContainer}>
                <div className={contactStyles.contactRowTop}>
                    <h1>Contact Me</h1>
                </div>
                <div className={contactStyles.contactRowBottom}>
                    <form action="https://formspree.io/f/mrgranee" method="POST" className={contactStyles.frm}>
                        <div className={contactStyles.inpLabel}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.."  required /> 
                        </div>
                        <div className={contactStyles.inpLabel}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="_replyto" placeholder="Your email.." required />
                        </div>
                        <div className={contactStyles.inpLabel}>
                        <label htmlFor="subject">Comments/Questions</label>
                            <textarea id="subject" name="message" placeholder="Your message.." style={{height: '200px'}}
                            maxLength="1500" required>
                            </textarea>
                        </div>
                        <div className={contactStyles.btnContainer}>
                            <button type="submit" className={contactStyles.contactButton}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
