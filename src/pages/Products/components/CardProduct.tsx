// Images imports

import Shoyu from "../../../assets/Products/Shoyu.jpg";
import Miso from "../../../assets/Products/tonkotsu1.jpg";
import Tonkotsu from "../../../assets/Products/2kbs.jpg";

import { getKeyboards } from "../../../shared/middlewares/getKeyboards";
import { useEffect, useState } from "react";

// Slider import
// Mock import
import { slides } from "../../../data/mock";
import { Slider } from "./Slider";

interface Keyboard {
  id: number;
  name: string;
  slides: any;

  // Otras propiedades de tu objeto de teclado
}

export const CardProduct = () => {
  const [keyboards, setKeyboards] = useState<Keyboard[] | undefined>([]);

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

  const products = [
    {
      id: 1,
      name: "Tonkotsu",
      desc: "Purposeful design in an inspiring page",
      image: Tonkotsu,
    },
    {
      id: 2,
      name: "Miso",
      desc: "Wood is everything",
      image: Miso,
    },
    {
      id: 3,
      name: "Shoyu",
      desc: "Cozy with wood",
      image: Shoyu,
    },
  ];

  return (
    <div className="grid">
      <div className="product">
        <Slider slides={slides} />
        <div>
          <h1>Tonkotsu</h1>
          <h3>99$</h3>
          <p>Lorem ipsum dolor sit amet</p>
          <div>
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
        <img />
        <img />
        <img />
      </div>
    </div>
  );
};
