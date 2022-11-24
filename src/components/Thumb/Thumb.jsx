
export default function Thumb({ cover, title }) {
   
    return (
        <div className="thumb">
            <img src={cover} alt="Logement" />
            <div className="thumb__title">
                <p>{title}</p>
            </div>
        </div>
    );
}
