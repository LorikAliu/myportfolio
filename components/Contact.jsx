import React from 'react'
import contactStyles from '../styles/Contact.module.scss'

const Contact = () => {
    return (
        // <div className={contactStyles.contact} id="contact">
        //     <div className={contactStyles.contactContainer}>
        //         <div className={contactStyles.contactRowTop}>
        //             <h1>Contact Me</h1>
        //         </div>
        //         <div className={contactStyles.contactRowBottom}>
        //             <form action="https://formspree.io/f/mrgranee" method="POST" className={contactStyles.frm}>
        //                 <div className={contactStyles.inpLabel}>
        //                     <label htmlFor="name">Name</label>
        //                     <input type="text" id="name" name="name" placeholder="Your name.."  required /> 
        //                 </div>
        //                 <div className={contactStyles.inpLabel}>
        //                     <label htmlFor="email">Email</label>
        //                     <input type="email" id="email" name="_replyto" placeholder="Your email.." required />
        //                 </div>
        //                 <div className={contactStyles.inpLabel}>
        //                 <label htmlFor="subject">Comments/Questions</label>
        //                     <textarea id="subject" name="message" placeholder="Your message.." style={{height: '200px'}}
        //                     maxLength="1500" required>
        //                     </textarea>
        //                 </div>
        //                 <div className={contactStyles.btnContainer}>
        //                     <button type="submit" className={contactStyles.contactButton}>Submit</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className={contactStyles.formContainer} id="contact">
            <form action="https://formspree.io/f/mrgranee" method="POST" >
                <div className={contactStyles.formTitle}>
                    <div className={contactStyles.title}><h1>Get in touch</h1></div>
                    <div className={contactStyles.subtitle}><h2>Tell me about your project or drop me a line. I'd love to hear from you</h2></div> 
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
    )
}

export default Contact
