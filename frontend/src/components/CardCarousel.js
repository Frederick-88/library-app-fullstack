import React from 'react'
import Flickity from 'react-flickity-component'
import Logo from "../inspirations-assets/email.png"
 
const flickityOptions = {
    initialIndex: 2
}
 
export default function CardCarousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={Logo}/>
      <img src={Logo}/>
      <img src={Logo}/>
    </Flickity>
  )
}