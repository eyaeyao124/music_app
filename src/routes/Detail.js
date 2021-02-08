import React, {useEffect} from "react"

//function Detail({history, location:{state}, location:{state:{artist, category, image, name, price, title}}}) {
function Detail(props) {


    useEffect(()=>{
        if (props.location.state === undefined) {
            props.history.push("/");
          }
     },[]);


     if (props.location.state) {
        return(
            <div>
                <div><img src={props.location.state.image} alt={props.location.state.title} title={props.location.state.title} /></div>
                <div>
                    <div>{props.location.state.name}</div>
                    <div>{props.location.state.artist}</div>
                    <div>{props.location.state.category} | {props.location.state.price}</div>
                </div>
            </div>
        )
      } else {
        return null;
      }
}

export default Detail;