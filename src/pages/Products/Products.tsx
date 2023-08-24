import Shoyu from "../../assets/Products/Shoyu.jpg";
import Miso from "../../assets/Products/tonkotsu1.jpg";
import Tonkotsu from "../../assets/Products/2kbs.jpg";

import { Link } from "react-router-dom";

export const Products = () => {
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
      <div className="title">
        <h1>All Keyboards</h1>
        <h3>Miso Woods Keyboards Collection</h3>
      </div>
      <hr className="hr" />
      {products.map((product) => (
        <div key={product.id} className="grid-item">
          <div className="card">
            <img src={product.image} alt={product.name} />
            <div className="card-content">
              <h2>{product.name}</h2>
              <p className="descripcion">{product.desc}</p>
              <Link to={`/product/${product.id}`}>
                <button className="button">See more</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
