"use client";
import Link from "next/link"; // Link bileşenini import ediyoruz

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">E-Store</Link> {/* Ana sayfaya yönlendirme */}
      <div className="links">
        <Link href="/register" className="nav-link">Register</Link>
        <Link href="/login" className="nav-link">Login</Link>
        <Link href="/products" className="nav-link">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
