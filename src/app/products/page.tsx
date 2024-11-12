"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Discord Nitro",
      description: "Boost your server with Nitro perks!",
      price: 9.99,
      image: "https://cdn.discordapp.com/attachments/1274038177514000426/1305892574812180591/image.jpg",
    },
    {
      id: 2,
      name: "Server Boost",
      description: "Enhance server capabilities with boosts!",
      price: 4.99,
      image: "https://cdn.discordapp.com/attachments/1274038177514000426/1305892868254076979/shopitem.jpg",
    },
    {
      id: 3,
      name: "Exclusive Badge",
      description: "Get a rare badge for your profile.",
      price: 2.99,
      image: "/images/badge.jpg",
    },
  ]);

  return (
    <div className="products-page">
      <h1 className="page-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
