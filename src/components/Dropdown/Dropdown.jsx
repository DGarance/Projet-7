import { useState } from 'react';
import chevronDown from '../../assets/chevrondown.svg';

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        setIsOpen((current) => !current);
    };

    return (
        <div className="dropdown">
            <div onClick={handleClick} className="dropdown__button">
                <h2 className="dropdown__title">{props.aboutTitle}</h2>
                <img
                    src={chevronDown}
                    alt=""
                    className={isOpen ? 'chevron rotated' : 'chevron'}
                />
            </div>
            {isOpen && <p className="dropdown__text">{props.aboutText}</p>}
        </div>
    );
}
