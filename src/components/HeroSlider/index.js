import React, {useState, useEffect } from 'react';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselButton, ButtonIcon } from './CarouselButton';
import axios from 'axios';


 const CarouselHero = () => {

    //boostrap code
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    //Get Movies of the month
    const [movie, setMovie] = useState([])
    const getMovie = () => {
      axios.get("http://localhost:4000/moviesOfTheMonth")
      .then((res) => {
          const myMovie = res.data
          myMovie.push()
          setMovie(myMovie);
      })
    }
    useEffect(() => getMovie(), []);
  return (
     <Carousel activeIndex={index} onSelect={handleSelect} fade> 
          {movie.map((item) => {
            const {id, title, description, image} = item.Movie
            return (
              <Carousel.Item  interval={3000}>
              <img
                src={require(`../../assets/imgs/${image}`)}
                alt="First slide"
              />
            <Carousel.Caption >
              <h1>{title}</h1>
              <p>{description}</p>
              <CarouselButton>
                <ButtonIcon />
                Book Now
              </CarouselButton>
            </Carousel.Caption>
          </Carousel.Item>
            )
          })}
    </Carousel> 
    
    
  );
};
// onClick={getMovie}
export default CarouselHero;
