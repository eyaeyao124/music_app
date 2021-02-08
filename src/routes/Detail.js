import React, {useEffect} from "react"
import {Container, Card, CardGroup } from 'react-bootstrap'
import "../routes/css/Detail.css";

function Detail({location, history}) {

    useEffect(()=>{
        if (location.state === undefined) {
            history.push("/");
          }
     },[]);

     if (location.state) {
        return(
            <div className="detail-container">
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Img src={location.state.image} alt={location.state.title} title={location.state.title} />
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title bsPrefix="detail-name">{location.state.name}</Card.Title>
                        <Card.Text bsPrefix="detail-text">
                            <div className="detail-music-info"><span>가수명</span> {location.state.artist}</div>
                            <div className="detail-music-info"><span>발매유형</span> {location.state.category}</div>
                            <div className="detail-music-info"><span>가격</span> {location.state.price}</div>
                            <div className="detail-music-info"><span>발매일</span> {location.state.release}</div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </div>
        )
      } else {
        return null;
      }
}

export default Detail;