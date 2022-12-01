import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Caroussel from '../../components/Caroussel/Caroussel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Rating from '../../components/Rating/Rating';

export default function Locations() {
    const params = useParams();
    const navigate = useNavigate();

    const [chooseAppart, setChooseAppart] = useState();
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/data.json');
            const choose = res.data.find(
                (location) => location.id === params.id
            );
            if (choose === undefined) {
                navigate('/*', { state: { message: 'Erreur' } });
            } else {
                setChooseAppart(choose);
            }
        };
        getData();
    });

    const slidePics = chooseAppart && chooseAppart.pictures;
    const tags = chooseAppart && chooseAppart.tags;
    const equipments = chooseAppart && chooseAppart.equipments;
    const listEquipments =
        chooseAppart &&
        equipments.map((item, index) => (
            <li key={index} className="listequipments">
                {item}
            </li>
        ));

    return (
        chooseAppart && (
            <section key={params.id} className="location">
                <Caroussel slides={slidePics} />
                <section className="location__container">
                    <div className="location__container-tags-title">
                        <div className="location__title">
                            <h1>{chooseAppart.title}</h1>
                            <h3>{chooseAppart.location}</h3>
                        </div>
                        <div className="location__tags">
                            {tags.map((tags) => (
                                <Tag key={tags} tag={tags} />
                            ))}
                        </div>
                    </div>
                    <div className="location__host-rating">
                        <div className="location__host">
                            <Host
                                hostName={chooseAppart.host.name}
                                hostPic={chooseAppart.host.picture}
                            />
                        </div>
                        <div className="location__rating">
                            <Rating score={chooseAppart.rating} />
                        </div>
                    </div>
                </section>
                <div className="location__dropdown">
                    <div className="location__dropdown-des">
                        <Dropdown
                            aboutTitle="Description"
                            aboutText={chooseAppart.description}
                        />
                    </div>
                    <div className="location__dropdown-eqp">
                        <Dropdown
                            aboutTitle="Équipements"
                            aboutText={listEquipments}
                        />
                    </div>
                </div>
            </section>
        )
    );
}
