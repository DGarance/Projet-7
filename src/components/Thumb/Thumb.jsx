export default function Thumb({ cover, title }) {
    return (
        <div className="thumb">
            <img src={cover} alt="Logement" className="thumb__img" />
            <div className="thumb__title">
                <p className="thumb__text">{title}</p>
            </div>
        </div>
    );
}
