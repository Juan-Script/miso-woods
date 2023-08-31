export const Home = () => {
  return (
    <div className="grid">
      <div className="top">
        <div className="top_img">
          <img src="https://utfs.io/f/0be2597b-422c-4770-a502-346eb1b199d8_photo_5990077385086713784_y.jpg" />
        </div>
        <h1 className="top_heading">Design is about passion</h1>
      </div>

      <div className="box_products">
        <div className="box_content">
          <h1>P r o d u c t s</h1>
          <div>
            <h5 className="box_subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
          </div>
          <button>Show all</button>
        </div>
        <div className="products">
          <img src="https://utfs.io/f/a134d67b-3f35-4ef1-8c2a-9eec27076b00_Tonkotsu%207.jpg" />
          <img src="https://cannonkeys.com/cdn/shop/files/kYPY2T4_bb6bb292-ef15-49ce-a3b6-5d531dcebdc5_1080x.jpg?v=1686952825" />
          <img src="https://utfs.io/f/afda2013-a995-4ae1-87d2-1ec78598960a_Shoyu%201.jpg" />
        </div>
      </div>
      <div className="box_artisans">
        <div className="box_artisans_content">
          <h1>A r t i s a n</h1>
          <h5 className="box_subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
          <button>More</button>
        </div>
        <div className="artisans">
          <img src="https://uploadthing.com/f/50b23d82-dc3f-43c7-a52d-cedb25722a09_Captura.PNG" />
          <div className="artisans_img">
            <img src="https://utfs.io/f/e99fe9be-a1a4-408c-87c3-8ff116a0c418_Artesania2.jpg" />
          </div>
          <img src="https://utfs.io/f/52e1d24e-4f60-49d4-a195-6bfebbb01124_Artesania3.jpg" />
        </div>
      </div>
    </div>
  );
};
