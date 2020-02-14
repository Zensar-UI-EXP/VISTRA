import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import FullWidthImage from "../../molecules/fullWidthImage"
import Title from "../../atoms/title/title"
import Button from "../../atoms/button/button"

const settings = {
  infinite: false,
  swipeToSlide: false,
  dots: true,
  arrows: true,
  mobileFirst: true,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  responsive: [
    {
      // breakpoint: maxWidth,
      settings: {
        dots: true,
        arrows: true,
      },
    },
  ],
}
const BannerCarousel = props => {
  return (
    <div className="bannercarsl">
      <Slider {...settings}>
        {props.data.map((item, index) => (
          <div key={index} className="bannercarsl__slide">
            {item.isText == "yes" && (
              <div className={`bannercarsl__textcontent ${item.textAlign}`}>
                {item.heroText && (
                  <Title
                    className="bannercarsl__herotext"
                    label={item.heroText}
                  />
                )}
                {item.subText && (
                  <Title
                    className="bannercarsl__subtext"
                    label={item.subText}
                  />
                )}
                {item.isButton == "yes" && (
                  <Button className={item.btnClassName} label={item.btnLabel} />
                )}
              </div>
            )}
            <FullWidthImage src={item.image} maxWidth={props.maxWidth} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerCarousel
