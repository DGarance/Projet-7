import Dropdown from '../../components/Dropdown/Dropdown';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import aboutarray from '../../data/aboutarray.json';

export default function About() {
    return (
        <div className="about">
            <section className="about__banner">
                <AboutBanner></AboutBanner>
            </section>
            <section className='about__container'>
              <div className='about__dropdown'>
                {' '}
                {aboutarray.map((rule, id) => (
                    <Dropdown
                        key={id}
                        aboutTitle={rule.aboutTitle}
                        aboutText={rule.aboutText}
                    ></Dropdown>
                ))}
            </div>  
            </section>
        </div>
    );
}
