import React from 'react'
import contactStyles from '../styles/Contact.module.scss'

const Contact = () => {
    return (
        <div className={contactStyles.contactContainer}>
            <div className={contactStyles.formContainer} id="contact">
                <form action="https://formspree.io/f/mrgranee" method="POST" >
                    <div className={contactStyles.formTitle}>
                        <div className={contactStyles.title}><h1>Get In Touch</h1></div>
                        <div className={contactStyles.subtitle}><h2>Tell me about your project or drop me a line. I&apos;d love to hear from you</h2></div> 
                    </div>
                    <div className={contactStyles.inputsContainer}>
                        <div className={contactStyles.inputContainer}>
                            <label htmlFor="inputName">Name</label>
                            <input type="text" name="name" id="inputName" className={contactStyles.input} placeholder="Name" />
                        </div>
                        <div className={contactStyles.inputContainer}>
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" name="_replyto" id="inputEmail" className={contactStyles.input} placeholder="E-Mail" />
                        </div>
                        <div className={contactStyles.textareaContainer}>
                            <textarea name="message" id="textMessage" className={contactStyles.textarea} placeholder="Message" required="required"></textarea>
                        </div>
                    </div>
                    <div className={contactStyles.buttonContainer}><button className={contactStyles.contactButton}>Submit</button></div>
                </form>
            </div>
        </div>
        
    )
}

export default Contact
