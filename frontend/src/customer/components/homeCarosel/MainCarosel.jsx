
import { mainCaroselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React from 'react'


export const MainCarosel = () => {
  const items = mainCaroselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt={item.name} />);
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2500}
      infinite
    />
  )
}
