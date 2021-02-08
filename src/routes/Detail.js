import React, {useEffect} from "react"

function Detail({history, location:{state}, location:{state:{artist, category, image, name, price, title}}}) {

    useEffect(()=>{
        if (state === undefined) {
            history.push("/");
          }
     },[]);

    return(
        <div>
            <div><img src={image} alt={title} title={title} /></div>
            <div>
                <div>{name}</div>
                <div>{artist}</div>
                <div>{category} | {price}</div>
            </div>
        </div>
    )
}

export default Detail;