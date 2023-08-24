import Shoyu from "../../../assets/Products/Shoyu.jpg";
import Miso from "../../../assets/Products/tonkotsu1.jpg";
import Tonkotsu from "../../../assets/Products/2kbs.jpg";

export const CardProduct = () => {
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
        <div>
          <h1>Tonkotsu</h1>
          <h3>99$</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button>Add to cart</button>
            <button>Quantity</button>
          </div>
        </div>
        <div className="slider">
          <img></img>
        </div>
      </div>
      <div className="productspecs">
        <h3>Product</h3>
        <hr />
        <div className="specs">
          • 60% burger mounted Keyboard • FR4 plate (WKL/HHKB get Tsangan plate,
          WK gets Standard) • 7.5° typing angle• CNC aluminum case • 20mm front
          height • Aprx. 1kg without plate/PCB/switches
        </div>
        <hr />
        <div className="include">
          • Brutal60 aluminum keyboard • FR4 plate in ANSI layout • CannonKeys
          hard foam carrying case • CannonKeys white microfiber cloth• Hardware
          • Bumpons•{" "}
        </div>
        <hr />
        <div className="disclaimer">
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
