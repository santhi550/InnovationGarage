import React from 'react';
import bg from './bg.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'reactstrap';
const title = {
    color: "black",
    letterSpacing:"5",
    fontSize:"calc(65px + 10 * ((100vw - 320px) / 680))",
    textAlign:"left",
    paddingTop:"50px",
    marginRight:"auto",
    marginLeft:"auto",
    textShadow:"0px 2px 2px white",
    fontFamily: "Arial",
    fontStrech:"expanded",
    fontWeight:"bold"
};
const quote={
    marginRight:"auto",
    marginLeft:"auto",
    color:"black",
    textAlign:"center",
    fontFamily:"Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
    fontSize:"calc(15px + 6 * ((100vw - 320px) / 680))",
    bottom:"0",
    position:"absolute"
};
const image={
    width:"100%",
    height:"100%"
};
const block={
    padding:"10px"
};

const Home=(props)=>{return (
    <Container fluid={true}>
    <Row>
        <Col xl="6" style={block}>
            <Fade Left>
        <img src={bg} style={image} alt="InnovationGarage" />
        </Fade>
        </Col>
        <Col xl="6" style={block}>
            <Fade Right>
        <p style={title}>Innovation<br />Garage</p>
        <br></br>
        <br></br>
        <p style={quote}>"<i>For good ideas and true innovation, you need human interaction, conflict, argument, debate."</i></p>
        </Fade>
        </Col>
    </Row>
    </Container>
);
}
export default Home;
