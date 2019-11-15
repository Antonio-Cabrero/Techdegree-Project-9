import React from 'react';
import css from '../styles/about.module.css'
import profile from '../images/hello.png'
function About(props) {

    return (
        <div id="about" className={css.About_container}>
            
            <div className={css.About_container_img}>
                <img className={css.About_img} src={profile} alt="Antonio Cabrero"/>
            </div>
            <div className={css.About_information}>
                <h2 className={css.About_h3} >Hi! My name is Antonio Cabrero, and I am a Front End Web Developer.</h2>
                <p className={css.About_paragraph}>I have always been a creative person. I enjoy drawing, photography and illustration. However, I felt like there was something missing. I wanted to make my creations take life. That is why I became a developer.</p>                
                <p className={css.About_paragraph}>Creating useful, interactive and user-friendly applications and websites it what I am all about.</p>
            </div>
        
        </div>  
    );
}

export default About;