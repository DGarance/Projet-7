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
                        src={faStar}
                        alt="rating star"
                    />
                ) : (
                    //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
                    <FontAwesomeIcon
                        key={level.toString()}
                        className="rating__emptystar"
                        src={faStar}
                        alt="rating star"
                    />
                )
            )}
        </div>
    );
}