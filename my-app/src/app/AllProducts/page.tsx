import Image from "next/image";
import Footer from "../../../components/footer";
import React from "react";

const FIRST = () => {
  // Array of product data
  const products = [
    { id: 1, label: "Just In", name: "Nike Air Force 1 Mid '07", category: "Men's Shoes", color: "1 Colour", price: "₹ 10,795.00", image: "/Rectangle (1).png" },
    { id: 2, label: "Just In", name: "Nike Court Vision Low Next Nature", category: "Men's Shoes", color: "1 Colour", price: "₹ 4,995.00", image: "/Rectangle (2).png" },
    { id: 3, label: "Just In", name: "Nike Air Force 1 PLT.AF.ORM", category: "Women's Shoes", color: "1 Colour", price: "₹ 8,695.00", image: "/Rectangle (3).png" },
    { id: 4, label: "Just In", name: "Nike Air Force 1 React", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,295.00", image: "/Rectangle (4).png" },
    { id: 5, label: "Promo Exclusive", name: "Air Jordan 1 Elevate Low", category: "Women's Shoes", color: "1 Colour", price: "₹ 11,895.00", image: "/Rectangle (5).png" },
    { id: 6, label: "Just In", name: "Nike Standard Issue", category: "Women's Basketball Jersey", color: "1 Colour", price: "₹ 2,895.00", image: "/Rectangle (6).png" },
    { id: 7, label: "Promo Exclusive", name: "Nike Dunk Low Retro SE", category: "Men's Shoes", color: "1 Colour", price: "₹ 9,695.00", image: "/Rectangle (7).png" },
    { id: 8, label: "Sustainable Materials", name: "Nike Dri-FIT UV Hyverse", category: "Men's Short-Sleeve Graphic Fitness Top", color: "1 Colour", price: "₹ 2,495.00", image: "/Rectangle (8).png" },
    { id: 9, label: "Just In", name: "Nike Court Vision Low", category: "Men's Shoes", color: "1 Colour", price: "₹ 5,695.00", image: "/Rectangle (9).png" },
    { id: 10, label: "Just In", name: "Nike Dri-FIT Ready", category: "Men's Short-Sleeve Fitness Top", color: "1 Colour", price: "₹ 12,895.00", image: "/Rectangle (10).png" },
    { id: 11, label: "Just In", name: "Nike One Leak Protection: Period", category: "Women's Mid-Rise 18cm (approx.) Biker Shorts", color: "1 Colour", price: "₹ 3,295.00", image: "/Rectangle (11).png" },
    { id: 12, label: "Just In", name: "Nike Air Force 1 LV8 3", category: "Older Kids' Shoe", color: "1 Colour", price: "₹ 10,495.00", image: "/Rectangle (12).png" },
    { id: 13, label: "Just In", name: "Nike Blazer Low Platform", category: "Women's Shoes", color: "1 Colour", price: "₹ 12,995.00", image: "/Rectangle (13).png" },
    { id: 14, label: "Just In", name: "Nike Air Force 1 '07", category: "Women's Shoe", color: "1 Colour", price: "₹ 13,495.00", image: "/Rectangle (14).png" },
    { id: 15, label: "Just In", name: "Nike Pro Dri-FIT", category: "Men's Tight-Fit Sleeveless Top", color: "1 Colour", price: "₹ 14,295.00", image: "/Rectangle (15).png" },
    { id: 16, label: "Just In", name: "Nike Dunk Low Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 7,495.00", image: "/Rectangle (16).png" },
    { id: 17, label: "Just In", name: "Nike Air Max SC", category: "Women's Shoes", color: "1 Colour", price: "₹ 16,495.00", image: "/Rectangle (17).png" },
    { id: 18, label: "Promo Exclusive", name: "Nike Dri-FIT UV Miler", category: "Men's Short-Sleeve Running Top", color: "1 Colour", price: "₹ 8,295.00", image: "/Rectangle (18).png" },
  ];

  return (
    <><div className="bg-white min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">New (500)</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 font-medium ">Shoes</li>
            <li className="text-gray-700 font-medium">Sports Bras</li>
            <li className="text-gray-700 font-medium">Tops & T-Shirts</li>
            <li className="text-gray-700 font-medium">Hoodies & Sweatshirts</li>
            <li className="text-gray-700 font-medium">Jackets</li>
            <li className="text-gray-700 font-medium">Trousers & Tights</li>
            <li className="text-gray-700 font-medium">Shorts</li>
            <li className="text-gray-700 font-medium">Tracksuits</li>
            <li className="text-gray-700 font-medium">Jumpsuits & Rompers</li>
            <li className="text-gray-700 font-medium">Socks</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Gender</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Men</li>
            <li className="text-gray-700">Women</li>
            <li className="text-gray-700">Unisex</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Kids</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Boys</li>
            <li className="text-gray-700">Girls</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Shop by Price</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Under ₹ 2,500.00</li>
            <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-72 bg-white shadow-md"
              >
                <div className="h-56 relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="container" />
                </div>
                <div className="text-sm text-red-500 font-semibold mb-1">
                  {product.label}
                </div>
                <div className="font-medium text-gray-800">{product.name}</div>
                <div className="text-sm text-gray-500">{product.category}</div>
                <div className="text-sm text-gray-500">{product.color}</div>
                <div className="font-semibold text-gray-800 mt-2">
                  MRP: {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div><Footer /></>
  );
};

export default FIRST;
