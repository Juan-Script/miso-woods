// Images imports

import { getKeyboards } from "../../../shared/middlewares/getKeyboards";
import { useEffect, useState } from "react";

// Slider import
// Mock import
import { slides } from "../../../data/mock";
import { Slider } from "../components/Slider";
import { useParams } from "react-router-dom";

interface Keyboard {
  id: number;
  name: string;
  slides: any;
}

export const CardProduct = () => {
  const [_keyboards, setKeyboards] = useState<Keyboard[] | undefined>([]);
  const { slug } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getKeyboards()
      .then((response) => {
        setKeyboards(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid">
      <div className="product">
        <div className="slider">
          <Slider slides={slides} />
        </div>

        <div className="product-right">
          <h1>{slug}</h1>
          <h3>99$</h3>
          <p>Lorem ipsum dolor sit amet</p>
          <div className="buttons">
            <button className="button">Add to cart</button>
            <button className="button">Quantity</button>
          </div>
        </div>
      </div>
      <div className="productspecs">
        <h3>Product</h3>
        <hr />
        <div className="specs">
          <h4>Specs</h4>
          <li>60% burger mounted Keyboard</li>
          <li>FR4 plate (WKL/HHKB get Tsangan plate, WK gets Standard) </li>
          <li>7.5° typing angle</li>
          <li>CNC aluminum case</li>
          <li>20mm front height</li>
          <li>Aprx. 1kg without plate/PCB/switches</li>
        </div>
        <hr />
        <div className="include">
          <h4>Includes</h4>
          <li>Brutal60 aluminum keyboard</li>
          <li>FR4 plate in ANSI layout</li>
          <li>CannonKeys</li>
          <li>hard foam carrying case</li>
          <li>CannonKeys white microfiber cloth</li>
        </div>
        <hr />
        <div className="disclaimer">
          <h4>Disclaimer</h4>
          Unlike most of our Brutalist V1 Series, the Brutal60 does not come
          with a PCB. We do this to allow you to choose your own due to the
          large amount of 60% PCBs available.
        </div>
      </div>
      <div className="images"></div>
      <div className="more">
        {slides[0].image.map((slide: any) => (
          <div className="product-img">
            <img src={slide} alt={`img/${slide?.name}`} key={slide.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
