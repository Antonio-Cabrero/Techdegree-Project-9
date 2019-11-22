import React from 'react'
import css from '../styles/contact.module.css'
import smile from '../images/smile.png'

function Contact(props) {
    return (
            <div className={css.Contact_container}>
                <h2 className={css.Contact_title}>Contact</h2>
                <p>Let's build something together!</p> 
                <p>If you'd like to get in touch, please send me a brief message!</p>
                <button className={css.Contact_btn}>Email Me!</button>
            </div>
    );
}

export default Contact