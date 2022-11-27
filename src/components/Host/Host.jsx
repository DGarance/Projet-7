export default function Host(props){
    return(
        <div className="host__container">
            <div className="host__name">{props.hostName}</div>
            <div className="host__picture">
                <img src={props.hostPic} alt={props.id} />
            </div>
        </div>
    )
}