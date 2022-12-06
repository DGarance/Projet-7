import Dropdown from '../../components/Dropdown/Dropdown';
import aboutarray from '../../data/aboutarray.json';
import Banner from '../../components/Banner/Banner';
import aboutBanner from '../../assets/aboutBannerM.png';
import AboutBannerD from '../../assets/aboutBanner.png';

export default function About() {
    return (
        <div className="about">
            <section className="about__banner">
                <Banner
                    image={aboutBanner}
                    imageD={AboutBannerD}
                    imageM={aboutBanner}
                ></Banner>
            </section>
            <section className="about__container">
                <div className="about__dropdown">
                    {' '}
                    {aboutarray.map((rule, id) => (
                        <Dropdown
                            key={id}
                            aboutTitle={rule.aboutTitle}
                            aboutText={rule.aboutText}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
