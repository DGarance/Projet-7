import Dropdown from '../../components/Dropdown/Dropdown';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import aboutarray from '../../data/aboutarray.json';
import Tag from "../../components/Tag/Tag"
import Rating from '../../components/Rating/Rating';

export default function About() {
    return (
        <div className='about__container'>
            <section className="about__banner">
                <AboutBanner></AboutBanner>
            </section>
            {aboutarray.map((rule, id) => (
                <Dropdown
                    key={id}
                    aboutTitle={rule.aboutTitle}
                    aboutText={rule.aboutText}
                ></Dropdown>
            ))}
            <Tag></Tag>
            <Rating>je suis là</Rating>
        </div>
    );
}
