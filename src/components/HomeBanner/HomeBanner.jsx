import homeBannerD from '../../assets/homeban.png';
import homeBannerM from '../../assets/homebannerM.jpg';

export default function Banner() {
    return (
        <div className="banner">
            <picture className="banner__picture">
                <source media="(max-width:768px)" srcSet={homeBannerM} />
                <source media="(min-width:375px)" srcset={homeBannerD} />
                <img src={homeBannerM} alt="Bannière" className="banner__img" />
            </picture>
            <div className="banner__container">
                <div className="banner__container-text">
                    Chez vous, partout et ailleurs
                </div>
            </div>
        </div>
    );
}
