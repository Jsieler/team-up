import React from 'react';
// import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap'

const GamePop = () => {

    return (

      
        <Carousel fade>
        <Carousel.Item>
          <img
            className="imgone"
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614a0598f1c112cfc3f46262%2FCall-Of-Duty--Vanguard-open-beta-characters%2F960x0.jpg%3Ffit%3Dscale"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Call of Duty</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgtwo"
            src="https://discuss.criticecho.com/uploads/default/original/1X/3dbd31cc096b41ea7c3ead3085ca1f9a87a75f43.jpeg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Fornite</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgthree"
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/02/989550.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Apex Legends</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgfour"
            src="https://www.wallpapertip.com/wmimgs/2-27681_minecraft-wallpaper-4k-pc.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Minecraft</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgfive"
            src="https://wallpapercave.com/wp/wp7550153.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>PUBG:Battleground</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgsix"
            src="https://www.ultraverso.com.br/wp-content/uploads/2019/12/league-of-legends.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>League of Legends</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default GamePop;