import fullStar from '../../assets/fullstar.svg';
import emptyStar from '../../assets/emptystar.svg';

export default function Rating({ score }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rating__container">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="rating__fullstar"
                        src={fullStar}
                        alt="rating star"
                    />
                ) : (
                    <img
                        key={level.toString()}
                        className="rating__emptystar"
                        src={emptyStar}
                        alt="rating star"
                    />
                )
            )}
        </div>
    );
}
