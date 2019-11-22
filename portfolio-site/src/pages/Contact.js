
import React, { useState } from 'react'
import css from '../styles/contact.module.css'
import emailjs from 'emailjs-com'

function Contact(props) {

    const [sender, setSender] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderMessage, setSenderMessage] = useState('')

    const sendEmail =(e) => {
        e.preventDefault()

        // Validate
        const validate = () => {
            if (sender === "") return alert("Please provide a contact name")
            if (senderEmail === "") return alert("Please provide an email")
            if (senderMessage === "") return alert("Please provide a breif message")
        
        }
        validate();

        // No errors found
        if (sender && sendEmail && senderMessage !== ''){
            // emailjs.send('gmail', 'template_380C5fzk', {
            //     'from_name' : sender,
            //     'reply_to' : senderEmail,
            //     'message_html' : senderMessage
            // }, 'user_8G6LzHqGcvKoVVeksmvnG')
            // .then((result) => {
            //     console.log(result.text)
            // }, (error) => {
            //     console.log(error.text)
            // })
            console.log("I was sent")

            // Clear form 
            setSender('')
            setSenderEmail('')
            setSenderMessage('')
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
                        <input className={css.Contact_input} 
                            type='text' 
                            name='sender' 
                            placeholder='John Smith'
                            value={sender}
                            onChange={handleChange}
                        />
                    </label>    
                    <label> Email:      
                        <input className={css.Contact_input} 
                            type='email' 
                            name='senderEmail'
                            placeholder='example@email.com'
                            value={senderEmail}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Message:
                        <textarea className={css.Contact_textarea} 
                            type='text' 
                            name='senderMessage' 
                            placeholder='What would you like to build together?' 
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