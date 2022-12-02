import aboutBanner from '../../assets/aboutBannerM.png';
import AboutBannerD from '../../assets/aboutBanner.png';

export default function AboutBanner() {
    return (
        <div className="aboutbanner">
            <picture>
                <source media="(max-width:768px)" srcSet={aboutBanner} />
                <source media="(min-width:375px)" srcSet={AboutBannerD} />
                <img
                    src={aboutBanner}
                    alt="bannière à propos"
                    className="aboutbanner__img"
                />
            </picture>
        </div>
    );
}
