// Slider imports
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// Mock import
import { SlidesInt } from "../../../data/mock";

export const Slider = ({ slides }: { slides: SlidesInt[] }) => {
  return (
    <AwesomeSlider className="slider">
      {slides[0].image.map((slide: any) => (
        <div className="product-img">
          <img src={slide} alt={`img/${slide?.name}`} key={slide.image} />
        </div>
      ))}
    </AwesomeSlider>
  );
};
