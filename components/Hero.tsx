"use client";

import Image from "next/image";
import { CustomButton } from "./Index";

// const Hero = () => {
//   const handleScroll = () => {};
//   return (
//     <div className="hero">
//       <div className="flex-1 pt-36 padding-x">
//         <h1 className="hero__title">
//           Find, book, or rent a car - quickly and easily !
//         </h1>
//         <p className="hero__subtitle">
//           Streamline your car rental epxeriencce with our effortless booking
//           process.
//         </p>
//         <CustomButton
//           title="Explore Cars"
//           containerStyles="bg-primary-blue text-white rounded-full mt-10"
//           handleClick={handleScroll}
//         />
//       </div>
//       <div className="hero__image-container">
//         <div className="hero__image">
//           <Image src="/hero.png" alt="hero" fill className="object-contain" />
//           <div className="hero__image-overlay"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <title>Car Bazar</title>
        <meta name="description" content="Buy and Sell Cars Easily" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Car Bazar</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Buy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Sell
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome to Car Bazar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 1</h3>
            <p className="text-gray-600">Price: $20,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                New
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 2"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 2</h3>
            <p className="text-gray-600">Price: $15,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                Used
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 3</h3>
            <p className="text-gray-600">Price: $30,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 3</h3>
            <p className="text-gray-600">Price: $30,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 3</h3>
            <p className="text-gray-600">Price: $30,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 3</h3>
            <p className="text-gray-600">Price: $30,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image
              src="/hero.png"
              alt="Car 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Car 3</h3>
            <p className="text-gray-600">Price: $30,000</p>
            <div className="flex items-center mt-2">
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Car Bazar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
