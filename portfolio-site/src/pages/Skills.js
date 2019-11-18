import React from 'react';
import css from '../styles/skills.module.css'
import imgJs from '../images/img-js.png'
import imgCss from '../images/img-css.png'
import imgHtml from '../images/img-html.png'
import imgGit from '../images/img-git.png'
import imgReact from '../images/img-react.png'

function Skills(props) {
    return (
        <div className={css.Skills_container}>
            <h2 className={css.Skills_title}>Skills</h2>
            <div className={css.Technologies_container}>
                <h3 className={css.Technologies_title}>Technologies I like to create with</h3>
                <div className={css.Technologies_container_items}>      
                    <span ><img className={css.Technologies_img} src={imgJs} alt="JavaScript"/></span>
                    <span ><img className={css.Technologies_img} src={imgHtml} alt="HMTL"/></span>
                    <span ><img className={css.Technologies_img} src={imgCss} alt="CSS"/></span>
                    <span ><img className={css.Technologies_img} src={imgReact} alt="React.js"/></span>  
                    <span ><img className={css.Technologies_img} src={imgGit} alt="Git"/></span>
                </div>
            </div>
            <div className={css.Tools_container}>
                <h3 className={css.Tools_title}>Developer tools</h3>
                <ul className={css.Tools_list}>
                    <li className={css.Tools_list_item}>Visual Studio Code</li>
                    <li className={css.Tools_list_item}>Terminal</li>
                    <li className={css.Tools_list_item}>Figma</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;