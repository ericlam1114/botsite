import React from 'react';

const About = (props) => {
    return (
        <div id="about">
            <div className="about-image">
                <img src={ props.image} alt='' />
            </div>
            <div className="about-text">
                <h2>{ props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eligendi nam. Illum enim eum sapiente at eius autem officiis asperiores fugiat maxime dolorum. Voluptatum officia eius alias modi cumque, aperiam illo culpa temporibus vero! Porro?</p>
                <button>{props.button}</button>
            </div>

        </div>
    )
}

export default About;