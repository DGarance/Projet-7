import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Thumb from '../../components/Thumb/Thumb';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data.json').then((res) => setData(res.data));
    }, []);

    return (
        <section className='section__home'>
            <section className='section__banner'>
                <HomeBanner />
            </section>

            <section className='section__logement'>
                {data.map((appart, id) => (
                    <div className="card_logement" key={id}>
                        <Link
                            className="link_card_logement"
                            to={`/locations/${appart.id}`}
                        >
                            <Thumb
                                cover={appart.cover}
                                title={appart.title}
                            ></Thumb>
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    );
}
