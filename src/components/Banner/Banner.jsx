import React from 'react';

export default function Banner({ image, imageM, imageD, text }) {
    return (
        <div className="banner">
            <div className="banner__container">
                <picture className="banner__picture">
                    <source media="(max-width:768px)" srcSet={imageM} />
                    <source media="(min-width:768px)" srcSet={imageD} />
                    <img
                        src={image}
                        alt="Description de la bannière"
                        className={
                            'banner__img ' +
                            (text ? 'banner__img__home' : 'banner__img__about')
                        }
                    />
                </picture>
            </div>
            <div className="banner__container-text">
                <div className="banner__text">{text}</div>
            </div>
        </div>
    );
}
