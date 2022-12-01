import React, { useState } from 'react';
import leftArrow from '../../assets/leftarrow.svg';
import rightArrow from '../../assets/rightarrow.svg';

export default function Carroussel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="carrousel">
            {length > 1 && (
                <>
                    <img
                        src={leftArrow}
                        alt=""
                        onClick={prevSlide}
                        className="carrousel__left-arrow"
                    />

                    <img
                        src={rightArrow}
                        alt=""
                        onClick={nextSlide}
                        className="carrousel__right-arrow"
                    />
                </>
            )}

            {slides.map((slide, index) => {
                return (
                    <div
                        className={
                            index === current ? 'slider__active' : 'slider'
                        }
                        key={index}
                    >
                        {index === current && (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img
                                src={slide}
                                className="carrousel__img"
                                alt="photos"
                            />
                        )}
                        {index === current && (
                            <span className="slider__number">
                                {current + 1}/{length}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
