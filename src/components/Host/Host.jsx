export default function Host(props){
    return(
        <div className="host">
            <div className="host__name">{props.hostName}</div>
            <div className="host__container">
                <img src={props.hostPic} alt={props.id} className="host__picture" />
            </div>
        </div>
    )
}