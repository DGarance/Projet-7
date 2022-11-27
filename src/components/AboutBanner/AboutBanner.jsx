import aboutBanner from '../../assets/aboutBannerM.png';
import AboutBannerD from '../../assets/aboutBanner.png';

export default function AboutBanner(){
    return (
        <div className="aboutbanner">
            <picture>
                <source media="(max-width:760px)" srcSet={aboutBanner}></source>
                <source
                    media="(min-width:375px)"
                    srcSet={AboutBannerD}
                ></source>
                <img src={aboutBanner} alt="bannière à propos" className="aboutbanner__img" />
            </picture>
        </div>
    );
}