interface IDots {
  activeIndex: number;
  sliderImage: string[];
}

const Dots = ({ activeIndex, sliderImage }: IDots) => {
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
