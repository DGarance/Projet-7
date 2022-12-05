import { Link } from 'react-router-dom';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Thumb from '../../components/Thumb/Thumb';
import locations from '../../data/data.json';
import Banner from '../../components/Banner/Banner';
import homeBannerD from '../../assets/homeban.png';
import homeBannerM from '../../assets/homebannerM.jpg';

export default function Home() {
    return (
        <section className="section__home">
            <Banner
                image={homeBannerM}
                imageD={homeBannerD}
                imageM={homeBannerM}
            ></Banner>
            <section className="section__banner">
                <HomeBanner />
            </section>
            <section className="section__logement">
                {''}
                {locations.map((appart, index) => (
                    <div className="thumb__logement" key={index}>
                        <Link
                            className="link_card_logement"
                            to={`/locations/${appart.id}`}
                        >
                            <Thumb cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    );
}
