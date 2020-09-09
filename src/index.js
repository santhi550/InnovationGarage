import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Home from './home.js';
import pic1 from './1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import s11 from './s11.png';
import s12 from './s12.jpg';
import s13 from './s13.jpg';
import s14 from './s14.jpg';
import s21 from './s21.jpg';
import s22 from './s22.jpg';
import s31 from './s31.jpg';
import s41 from './s41.jpg';
import s42 from './s42.jpg';
import s43 from './s43.jpg';
import s44 from './s44.jpg';
const slides=[[],[s11,s12,s13,s14],[s21,s22],[s31],[s41,s42,s43,s44]];
const headlines=["","Some of Our Previous Events","Some of Our Previous Webinars and Workshops","Some of Our Research Groups","Some of Our Makethons and Ideathons"];
const contents=["We enourage your ideas and we make them into startups.We make you entrepreneurs with your innovative ideas and creative skills.'The only way to discover the limits of the possible is to go beyond them into the impossible.'",
"We conduct events to enhance your skills.This is the place for beginners, developers,designers,and more enthusiasts.",
"We conduct workshops to make you practically experienced with your innovative ideas. We conduct webinars to give you knowledge about new technologies.",
"We create research groups to research on new things. And Nevronus is the most successfull research group in NITW",
"We conduct Makethons, Ideathons, Hackathons to make you convert your ideas into optimized solutions and useful in the world."
];
const images=[pic1,pic2,pic3,pic4,pic5];
const imageContent={
   width:"100%",
    height:"100%",
    margin:"15px"
};
const textContent={
  paddingTop:"100px",
  fontFamily:"cursive",
  fontSize:"25px",
  textAlign:"center"
};
const slideContent={
  width:"100%",
  height:"100%",
  margin:"15px",
  borderRadius:"15px",
  boxShadow:"0px 7px 7px 7px rgba(0,0,0,0.2)"
}
const container={
  marginTop:"55px",
};
const headline={
  paddingBottom: "10px", 
  borderBottomStyle: "solid", 
  borderBottomWidth: "2.1px", 
  marginTop:"30px",
  marginLeft:"auto",
  marginRight:"auto"
}
function Children(props){
  const childrens=props.contents;
  const childrenItems = childrens.map((content,index) =>
  index%2 === 0 ?
      <Container style={container}>
      <Row>
       <Col xl="6" >
         <Fade Left duration={4000} >
          <div style={textContent}>
            {content}
          </div>
          </Fade>
        </Col>
        <Col xl="6" >
          <Fade Right duration={4000}  >
        <img src={images[index]} style={imageContent}  alt="InnovationGarage" />
        </Fade>
        </Col>
      </Row>
      <Row>
      <h2 style={headline}>{headlines[index]}</h2>
      </Row>
      <Row>
      {slides[index].map((slide)=>
      
        <Col xl="3" style={{padding:"15px"}}>
          <Pulse>
        <img src={slide} style={slideContent}  alt="slide" />
        </Pulse>
        </Col>
      )}
</Row>
    </Container>
    :
      <Container style={container}>
      <Row>
        <Col xl="6" >
          <Fade Left duration={4000} >
        <img src={images[index]} style={imageContent}  alt="InnovationGarage" />
        </Fade>
        </Col>
        <Col xl="6" >
          <Fade Right duration={4000} >
          <div style={textContent}>
            {content}
          </div>
          </Fade>
        </Col>
      </Row>
      <Row>
      <h2 style={headline}>{headlines[index]}</h2>
      </Row>
      <Row>
      {slides[index].map((slide)=> 
        <Col xl="3" style={{padding:"15px"}}>
          <Pulse>
        <img src={slide} style={slideContent}  alt="slide" />
        </Pulse>
        </Col>
      )}
</Row>
    </Container>
    
  );
  return (
    <div>{childrenItems}</div>
  );
}
const footer={
  margin:"50px",
  textAlign:"center"
}
const Footer=(props)=>{return (
  <div style={footer}>
    <h3>Looks Interesting !! Contact Us</h3>
    <br></br>
  <table style={{margin:"auto"}}>
    
      <tr >
        <td xl="1">
<SocialIcon url="https://www.facebook.com/TheInnovationGarage" />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td xl="1">
<SocialIcon url="https://www.instagram.com/ig_nitw/?hl=en" />
        </td>
      </tr>
  </table>
  <br></br>
  <i style={{textAlign:"center"}}>Innovation Garage is a 24x7 student run multidisciplinary work space for innovation at NIT Warangal.</i>
  </div>
);
}
ReactDOM.render(<Home />,document.getElementById('root'));
ReactDOM.render(<Children contents={contents} />,document.getElementById('childs'));
ReactDOM.render(<Footer />,document.getElementById('footer'));
//serviceWorker.unregister();
