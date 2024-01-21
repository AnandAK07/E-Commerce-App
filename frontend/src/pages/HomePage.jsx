import React from 'react'
import { MainCarosel } from '../customer/components/homeCarosel/MainCarosel'
import { HomeSectionCarosel } from '../customer/components/homeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../customer/data/mensKurta';
export const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      {/* <Pagination/> */}
      <div className='space-y-10 py-10 flex flex-col justify-center'>
        <HomeSectionCarosel data={mens_kurta } sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  )
}
