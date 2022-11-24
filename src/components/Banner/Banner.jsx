import BackgroundImg from '../../assets/homeban.png'

export default function Banner(){
    return(
        <div className="banner">
            <div className="banner__container">
                <img src={BackgroundImg} alt="Bannière" className="banner__img" />
                <h2 className="banner__container-text">Chez vous, partout et ailleurs</h2>
            </div>
        </div>
    )
}