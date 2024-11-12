"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // Link bileşenini import ediyoruz

const HomePage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <Link href="/" className="logo">E-Store</Link> {/* Link ile ana sayfaya yönlendirme */}
        <div className="links">
          <Link href="/register" className="nav-link">Register</Link>
          <Link href="/login" className="nav-link">Login</Link>
          <Link href="/products" className="nav-link">Products</Link>
        </div>
      </nav>

      {/* Ana Sayfa İçeriği */}
      <div className="main-content">
        <div>
          <h1 className="page-title">Welcome to E-Store</h1>
          <p className="description">Your one-stop shop for all things Discord!</p>
          <Link href="/products" className="cta-button">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
