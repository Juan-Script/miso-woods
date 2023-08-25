import { Link } from "react-router-dom";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Tonkotsu",
      desc: "Purposeful design in an inspiring page",
      image:
        "https://utfs.io/f/e4ba92d7-9e70-4892-b0f3-c5ac41a8e649_Tonkotsu%202.jpg",
      slug: "tonkotsu",
    },
    {
      id: 2,
      name: "Miso",
      desc: "Wood is everything",
      image:
        "https://utfs.io/f/b05b8031-02e3-42d1-9f18-324069c54afc_TonkyShoyu.jpg",
      slug: "miso",
    },
    {
      id: 3,
      name: "Shoyu",
      desc: "Cozy with wood",
      image:
        "https://utfs.io/f/303404da-c2b6-454a-b621-c1e304a7798c_Shoyu%201.jpg",
      slug: "shoyu",
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
        <div key={product.slug} className="grid-item">
          <div className="card">
            <img src={product.image} alt={product.name} className="card-img" />

            <div className="card-content">
              <h2>{product.name}</h2>
              <p className="descripcion">{product.desc}</p>
              <Link to={`/products/${product.slug}`}>
                <button className="button">See more</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
