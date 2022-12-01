import aboutBanner from '../../assets/aboutBannerM.png';
import AboutBannerD from '../../assets/aboutBanner.png';

export default function AboutBanner() {
    return (
        <div className="aboutbanner">
            <picture>
                <source srcSet={aboutBanner} media="(min-width:760px)" />
                <source srcSet={AboutBannerD} media="(min-width:375px)" />
                <img
                    src={aboutBanner}
                    alt="bannière à propos"
                    className="aboutbanner__img"
                />
            </picture>
        </div>
    );
}
