interface ICarousel {
  activeIndex: number;
  sliderImage: string[];
}

const Carousel = ({ activeIndex, sliderImage }: ICarousel) => {
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img src={slide} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
