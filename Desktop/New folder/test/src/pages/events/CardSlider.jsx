import React from 'react'
import EventsHoriCard from './EventsHoriCard';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CardSlider() {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div>
        <Carousel responsive={responsive}>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div> 
        </Carousel>
    </div>
  )
}

export default CardSlider
