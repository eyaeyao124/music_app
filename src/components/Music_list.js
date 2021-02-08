import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import "../components/css/Music_list.css";

function Music({id, category, artist, name, image, title, price, release}) {
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
                price,
                release
            }
        }}
        >
        <Card>
            <Card.Img variant="top" src={image} alt={title} title={title} />
            <Card.Body>
            <Card.Title>{name.length > 20 ? name.slice(0, 20) + "..." : name}</Card.Title>
            <Card.Text>
                {artist.length > 20 ? artist.slice(0, 20) + "..." : artist}
            </Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default Music;