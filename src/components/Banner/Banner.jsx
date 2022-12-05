export default function Banner({ image, imageM, imageD, text }) {
    return (
        <div className="banner">
            <div className="banner__container">
                <picture
                    className="
            banner__picture"
                >
                    <source media="(max-width:768px)" srcSet={imageM} alt="" />
                    <source media="(min-width:375px)" srcset={imageD} />
                    <img src={image} alt="" className="banner__img" />
                </picture>
            </div>

            <div className="banner__container-text">
                <div className="banner__text">{text}</div>
            </div>
        </div>
    );
}
