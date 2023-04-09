import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Qualified from "./pages/Qualified"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-main bg-center bg-no-repeat bg-black">
      <div className="w-[1088px] min-h-[630px] px-1 py-5">
        <BrowserRouter>
          <div className="w-full flex flex-wrap sm:justify-between justify-center items-center border-4 border-gray-500 bg-black rounded-full px-5 py-2 relative mt-12 sm:mt-0">
            <a href="https://smartchain-poker.com" target="_blank">
              <img src="/images/logo.png" alt="" />
            </a>
            <div className="sm:flex items-center pt-2 sm:pt-0">
              <div className="flex justify-center">
                <div className="uppercase px-3 text-gray-300 text-sm"><a href="https://instantplay.smartchain-poker.com" target="_blank">Play Poker</a></div>
                <div className="uppercase px-3 text-gray-300 text-sm"><a href="https://registration.smartchain-poker.com" target="_blank">Register</a></div>
              </div>
              <div className="flex">
                {/* <div><div className="border-l-2 border-red-500 h-[20px]"></div></div> */}
                <div className="px-3 text-gray-300">
                  <Link to="/collection">My NFT's</Link>
                </div>
                <div><div className="border-l-2 border-red-500 h-[20px]"></div></div>
                <div className="px-3 text-gray-300">
                  <Link to="/qualified">Gallery</Link>
                </div>
                <div><div className="border-l-2 border-red-500 h-[20px]"></div></div>
                <div className="px-3 text-gray-300"><a href="#">Mint NFT</a></div>
              </div>
            </div>
            <button className="absolute right-0 -top-12 sm:top-auto sm:-bottom-12 uppercase text-red-800 bg-[#998c61] px-4 py-1 rounded-md shadow-inner hover:scale-[1.1] duration-300">connect wallet</button>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/qualified" element={<Qualified />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;