import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
            <div className='carrousel__arrow-container'>
                <div className='carrousel__arrow-left'>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        onClick={prevSlide}
                    ></FontAwesomeIcon>
                </div>
                <div className='carrousel__arrow-right'>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        onClick={nextSlide}
                    ></FontAwesomeIcon>
                </div>
            </div>

            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slider active' : 'slider'}
                        key={index}
                    >
                        {index === current && (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img
                                src={slide}
                                className="carrousel__img"
                                alt="photos"
                            />
                        )}{
                            index === current && (<span className='slider__number'>{current +1}/{length}</span>)
                        }
                    </div>
                );
            })}
        </div>
    );
}
