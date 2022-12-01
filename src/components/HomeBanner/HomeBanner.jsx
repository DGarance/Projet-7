import homeBannerD from '../../assets/homeban.png';
import homeBannerM from '../../assets/homebannerM.jpg';

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__container">
                <picture className="banner__picture">
                    <source media="(max-width:768px)" srcSet={homeBannerM} />
                    <source media="(min-width:375px)" srcSet={homeBannerD} />
                    <img
                        src={homeBannerM}
                        alt="Bannière"
                        className="banner__img"
                    />
                </picture>
            </div>
            <div className="banner__container-text">
                <div className="banner__text">
                    Chez vous, partout et ailleurs
                </div>
            </div>
        </div>
    );
}
