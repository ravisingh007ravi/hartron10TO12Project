import { useState } from "react";

export default function Navbar() {

  const productData = [

    {
      brand: "Apple",
      name: "realmegt",
      title: "Realme GT Neo 5",
      des: "240W fast charging beast",
      price: "₹36999",
      img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
    },
    {
      brand: "Samsung",
      name: "opporeno",
      title: "Oppo Reno 10 Pro+",
      des: "Periscope zoom camera with sleek design",
      price: "₹54999",
      img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb"
    },
    {
      brand: "Samsung",
      name: "vivoV29",
      title: "Vivo V29 Pro",
      des: "Aura light portrait camera",
      price: "₹39999",
      img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },
    {
      brand: "iQOO",
      name: "iqoo11",
      title: "iQOO 11 5G",
      des: "Gaming phone with 144Hz AMOLED",
      price: "₹59999",
      img: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
    },
    {
      brand: "Motorola",
      name: "motorolaedge",
      title: "Motorola Edge 40",
      des: "Curved pOLED display with Dimensity 8020",
      price: "₹29999",
      img: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00"
    },

    {
      brand: "Asus",
      name: "asusrog",
      title: "Asus ROG Phone 7",
      des: "Ultimate gaming performance phone",
      price: "₹74999",
      img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02"
    },
    {
      brand: "Samsung",
      name: "sonyXperia",
      title: "Sony Xperia 1 V",
      des: "Pro camera features with 4K OLED display",
      price: "₹139999",
      img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },

    {
      brand: "Samsung",
      name: "huaweiP60",
      title: "Huawei P60 Pro",
      des: "Ultra lighting XMAGE camera system",
      price: "₹99999",
      img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f"
    },

    {
      brand: "Redmi",
      name: "redminote13",
      title: "Redmi Note 13 Pro+",
      des: "200MP camera with curved AMOLED",
      price: "₹32999",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      brand: "Infinix",
      name: "infinixzero",
      title: "Infinix Zero Ultra",
      des: "180W Thunder charge smartphone",
      price: "₹29999",
      img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
    },
    {
      brand: "Samsung",
      name: "tecnoPhantom",
      title: "Tecno Phantom X2 Pro",
      des: "Retractable portrait lens camera",
      price: "₹49999",
      img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31"
    },
    {
      brand: "Samsung",
      name: "lavaAgni",
      title: "Lava Agni 2",
      des: "Indian flagship with curved AMOLED",
      price: "₹21999",
      img: "https://images.unsplash.com/photo-1580913428706-c311e67898b3"
    }
  ];

  const [Brand, setBrand] = useState(productData)

  const uniqueBrands = [...new Set(productData.map(product => product.brand))];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Top Navbar */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">📱 Mobile Store</h1>

        <nav>
          <ul className="flex gap-4">
            {
              uniqueBrands.map((b, i) => (
                <li
                  className=" hover:text-blue-400 transition"
                  onClick={() => setBrand(productData.filter(({ brand }) => brand == b))}
                  key={i}>
                  {b}
                </li>
              ))
            }
          </ul>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm font-semibold transition">
          Cart 🛒
        </button>
      </header>

      <h2 className="text-center text-4xl font-bold mt-10 mb-6">
        Featured Products
      </h2>

      <div className="flex flex-wrap justify-start items-center gap-8 px-10 pb-16">


        {
          Brand.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <img
                src={item.img}
                alt="Mobile"
                className="rounded-xl mb-4 h-100 w-50 object-cover"
              />

              <h3 className="text-lg font-semibold mb-1 mt-5">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-3 max-w-[200px]">{item.des}</p>

              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-400">{item.price}</span>

              </div>
            </div>
          ))
        }


      </div>
    </div>
  );
}
