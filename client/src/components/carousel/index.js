import React from 'react';
import { Carousel } from 'react-bootstrap'

const GamePop = () => {

  return (

    <Carousel fade>
      <Carousel.Item>
        <img className="imgone"
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614a0598f1c112cfc3f46262%2FCall-Of-Duty--Vanguard-open-beta-characters%2F960x0.jpg%3Ffit%3Dscale"
          alt="people in warzone"
        />
        <Carousel.Caption>
          <h3>Call of Duty</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgtwo"
          src="https://discuss.criticecho.com/uploads/default/original/1X/3dbd31cc096b41ea7c3ead3085ca1f9a87a75f43.jpeg"
          alt="People standing in colorful background"
        />

        <Carousel.Caption>
          <h3>Fornite</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgthree"
          src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/02/989550.jpg"
          alt="three people standing"
        />

        <Carousel.Caption>
          <h3>Apex Legends</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgfour"
          src="https://www.wallpapertip.com/wmimgs/2-27681_minecraft-wallpaper-4k-pc.jpg"
          alt="people and a pig standing on mountain"
        />

        <Carousel.Caption>
          <h3>Minecraft</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgfive"
          src="https://wallpapercave.com/wp/wp7550153.jpg"
          alt="Man standing in battle"
        />

        <Carousel.Caption>
          <h3>PUBG:Battleground</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgsix"
          src="https://www.ultraverso.com.br/wp-content/uploads/2019/12/league-of-legends.jpg"
          alt="creatures standing in field"
        />

        <Carousel.Caption>
          <h3>League of Legends</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgseven"
          src="https://wallpaperaccess.com/full/1440419.jpg"
          alt="Men playing Basketball"
        />
        <Carousel.Caption>
          <h3>NBA 2k</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgeight"
          src="https://wallpapercave.com/wp/FEAF03h.jpg"
          alt="robot standing in landscape"
        />
        <Carousel.Caption>
          <h3>HALO</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default GamePop;