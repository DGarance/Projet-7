import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export default function Carroussel({slides}) {
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
        <section className="carrousel_container">
            <SlArrowLeft
                className="left-arrow"
                onClick={prevSlide}
            ></SlArrowLeft>
            <SlArrowRight
                className="right-arrow"
                onClick={nextSlide}
            ></SlArrowRight>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img src={slide} className="carrousel" />
                        )}
                    </div>
                );
            })}
        </section>
    );
}
