import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        setIsOpen((current) => !current);
    };

    return (
        <div className="dropdown">
            <div onClick={handleClick} className="dropdown__button">
                <h2 className="dropdown__title">{props.aboutTitle}</h2>
                <FontAwesomeIcon
                    className={isOpen ? 'chevron rotated' : 'chevron'}
                    icon={faChevronDown}
                />
            </div>
            {isOpen && (
                <div>
                    <p className="dropdown__text">{props.aboutText}</p>
                </div>
            )}
        </div>
    );
}
