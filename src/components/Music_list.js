import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Music({id, category, artist, name, image, title, price}) {
    return(
        <Link
            to={{pathname:`/detail/${id}`,
            state:{
                id,
                category,
                artist,
                name,
                image,
                title,
                price
            }
        }}
        >
        <div>
            <img src={image} alt={title} title={title} />
            <div>{name}</div>
            <div>{artist}</div>
        </div>
        </Link>
    )
}

export default Music;