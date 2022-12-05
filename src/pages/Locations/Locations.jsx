import { useParams } from 'react-router-dom';
import locations from '../../data/data.json';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Caroussel from '../../components/Caroussel/Caroussel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Rating from '../../components/Rating/Rating';

export default function Locations() {
    const params = useParams();
    const appart = locations.find((appart) => appart.id === params.id);
    const slidePics = appart && appart.pictures;
    const tags = appart && appart.tags;
    const equipments = appart && appart.equipments;
    const listEquipments =
        appart &&
        equipments.map((item, index) => (
            <li key={index} className="listEquipments">
                {item}
            </li>
        ));

    return (
        appart && (
            <div key={params.id} className="location">
                <Caroussel slides={slidePics} />
                <section className="location__container">
                    <div className="location__container-tags-title">
                        <div className="location__title">
                            <h1>{appart.title}</h1>
                            <h3>{appart.location}</h3>
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
                                hostName={appart.host.name}
                                hostPic={appart.host.picture}
                            />
                        </div>
                        <div className="location__rating">
                            <Rating score={appart.rating} />
                        </div>
                    </div>
                </section>
                <div className="location__dropdown">
                    <div className="location__dropdown-des">
                        <Dropdown
                            aboutTitle="Description"
                            aboutText={appart.description}
                        />
                    </div>
                    <div className="location__dropdown-eqp">
                        <Dropdown
                            aboutTitle="Équipements"
                            aboutText={listEquipments}
                        />
                    </div>
                </div>
            </div>
        )
    );
}
