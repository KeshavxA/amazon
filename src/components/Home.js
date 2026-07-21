import React from "react";
import "./Home.css";
import Product from "./Product";
import { productsData } from "../data/products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* Placeholder for banner - will be added in feature 8 */}
        <div className="home__bannerPlaceholder"></div>
        
        <div className="home__row">
          <Product
            id={productsData[0].id}
            title={productsData[0].title}
            price={productsData[0].price}
            rating={productsData[0].rating}
            image={productsData[0].image}
          />
          <Product
            id={productsData[1].id}
            title={productsData[1].title}
            price={productsData[1].price}
            rating={productsData[1].rating}
            image={productsData[1].image}
          />
        </div>

        <div className="home__row">
          <Product
            id={productsData[2].id}
            title={productsData[2].title}
            price={productsData[2].price}
            rating={productsData[2].rating}
            image={productsData[2].image}
          />
          <Product
            id={productsData[3].id}
            title={productsData[3].title}
            price={productsData[3].price}
            rating={productsData[3].rating}
            image={productsData[3].image}
          />
          <Product
            id={productsData[4].id}
            title={productsData[4].title}
            price={productsData[4].price}
            rating={productsData[4].rating}
            image={productsData[4].image}
          />
        </div>

        <div className="home__row">
          <Product
            id={productsData[5].id}
            title={productsData[5].title}
            price={productsData[5].price}
            rating={productsData[5].rating}
            image={productsData[5].image}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
