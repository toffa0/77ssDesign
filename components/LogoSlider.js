import React from "react";
import Slider from "react-slick";
import Image from 'next/image'

const logos = [
  {
    src: "catlogo1.svg",
    alt: "Image 1",
    key:"1"
  },
  {
    src: "catlogo2.svg",
    alt: "Image 2",
    key:"2"
  },
  {
    src: "catlogo3.svg",
    alt: "Image 3",
    key:"3"
  },
  {
    src: "catlogo4.svg",
    alt: "Image 4",
    key:"4"
  },
  {
    src: "catlogo5.svg",
    alt: "Image 5",
    key:"5"
  }
];

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     initialSlide: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  return (
    <Slider {...settings} className="">
      {logos.map(logo => (
        <div key={logo.key}>
          <Image src={logo.src} alt={logo.alt} width={238} height={212}/>
        </div>
      ))}
    </Slider>
  );
};

export default SlickCarousel;
