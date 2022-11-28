import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({ score }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rating__container">
            {stars.map((level) =>
                score >= level ? (
                    <FontAwesomeIcon
                        key={level.toString()}
                        className="rating__fullstar"
                        icon={faStar}
                        alt="rating star"
                    />
                ) : (
                    <FontAwesomeIcon
                        key={level.toString()}
                        className="rating__emptystar"
                        icon={faStar}
                        alt="rating star"
                    />
                )
            )}
        </div>
    );
}
