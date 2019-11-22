
import React, { useState } from 'react'
import css from '../styles/contact.module.css'
import emailjs, { send } from 'emailjs-com'

function Contact(props) {

    const [sender, setSender] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderMessage, setSenderMessage] = useState('')
    const [senderNameError, setSenderNameError] = useState(false)
    const [senderEmailError, setSenderEmailError] = useState(false)
    const [senderMessageError, setSenderMessageError] = useState(false)

    const sendEmail =(e) => {
        e.preventDefault()

        // Validate
        const validate = () => {
                   sender === "" ? setSenderNameError(true)    : setSenderNameError(false)
              senderEmail === "" ? setSenderEmailError(true)   : setSenderEmailError(false)
            senderMessage === "" ? setSenderMessageError(true) : setSenderMessageError(false)
        }

        validate();

        // No errors found
        if (sender && senderEmail && senderMessage !== ''){
            emailjs.send('gmail', 'template_380C5fzk', {
                'from_name' : sender,
                'reply_to' : senderEmail,
                'message_html' : senderMessage
            }, 'user_8G6LzHqGcvKoVVeksmvnG')
            .then((result) => {
                console.log(result.text + "Email Successfully Sent")
            }, (error) => {
                console.log(error.text)
            })

            // Clear form 
            setSender('')
            setSenderEmail('')
            setSenderMessage('')
            setSenderNameError(false)
            setSenderEmailError(false)
            setSenderMessageError(false)
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'sender': return setSender(value)
            case 'senderEmail': return setSenderEmail(value)
            case 'senderMessage': return setSenderMessage(value)
        }
    }

    return (
            <div className={css.Contact_container}>
                <h2 className={css.Contact_title}>Contact</h2>
                <p>Let's build something together!</p> 
                <p>If you'd like to get in touch, please send me a brief message!</p>
                <form onSubmit={sendEmail} className={css.Contact_form}> 
                    <label> Name:   
                        <input className={senderNameError? css.Contact_input_error : css.Contact_input} 
                            type='text' 
                            name='sender' 
                            placeholder={senderNameError? 'Please provide a contact name' : 'John Smith'}
                            value={sender}
                            onChange={handleChange}
                        />
                    </label>    
                    <label> Email:      
                        <input className={senderEmailError? css.Contact_input_error : css.Contact_input} 
                            type='email' 
                            name='senderEmail'
                            placeholder={senderEmailError? 'Please provide an email' : 'example@email.com'}
                            value={senderEmail}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Message:
                        <textarea className={senderMessageError? css.Contact_textarea_error : css.Contact_textarea} 
                            type='text' 
                            name='senderMessage' 
                            placeholder={senderMessageError? 'Please provide a brief message' : 'What would you like to build together?' }
                            value={senderMessage}
                            onChange={handleChange}
                        />
                    </label>
                    
                <button className={css.Contact_btn}>Email Me!</button>
                </form>
            </div>
    );
}

export default Contact