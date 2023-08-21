import { Box, Grid, GridItem, Text, Image, Card } from "@chakra-ui/react";
import Shoyu from "../assets/Products/Shoyu.jpg";
import Miso from "../assets/Products/2kbs.jpg";
import Tonkotsu from "../assets/Products/tonkotsu1.jpg";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Tonkotsu",
      price: "$120.99",
      image: Tonkotsu,
    },
    {
      id: 2,
      name: "Miso",
      price: "$149.99",
      image: Miso,
    },
    {
      id: 3,
      name: "Shoyu",
      price: "$139.99",
      image: Shoyu,
    },
  ];

  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="grid-item">
          <div className="card">
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: "200px" }}
            />
            <div className="card-content">
              <h2>{product.name}</h2>
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
