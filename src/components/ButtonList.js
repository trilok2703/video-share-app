import Button from "./Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const list = [
  "All",
  "Live",
  "News",
  "Javascript",
  "React",
  "HTML",
  "CSS",
  "Redux",
  "System Design",
];

function ButtonList() {
  // Custom previous arrow component
  const CustomPrevArrow = (props) => {
    const { onClick,currentSlide } = props;
    return (
      <button className={`slick-arrow ${currentSlide === 0 ? 'hidden' : ''}`} onClick={onClick}>
        <FaChevronCircleLeft className="w-[20px] h-[20px] slick-arrow-icon"/>
      </button>
    );
  };

  // Custom next arrow component
  const CustomNextArrow = (props) => {
    const { onClick,currentSlide,slideCount } = props;
    return (
        <button className={`slick-arrow ${currentSlide === slideCount - 5 ? 'hidden' : ''}`} onClick={onClick}>
        <FaChevronCircleRight className="w-[20px] h-[20px] slick-arrow-icon"/>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {list.map((item, index) => (
          <Button key={index} label={item} />
        ))}
      </Slider>
    </div>
  );
}

export default ButtonList;
