import { useState } from "react";
import ReactSlider from "react-slider";

const Home = () => {
    const [currentValue, setCurrentValue] = useState(0);

    return (
        <div className="px-5 sm:px-12">
            <div className="flex items-center text-xl font-bold text-gray-300 mt-12 py-1">
                <span>DISCOVER</span>
                <span className="px-3">|</span>
                <span>COLLECT</span>
                <span className="px-3">|</span>
                <span>PLAY</span>
            </div>
            <img src="/images/nft_collection_400.png" className="py-2" alt="" />

            <div className="text-gray-300 py-3 mb-5 md:mb-0">You can Mint NFT’s & Collect to Create Poker Card Combinations.</div>

            <div className="flex flex-wrap justify-center md:justify-start py-3">
                <div className="mb-5 md:mb-0">
                    <button className="inline-block px-5 py-3 rounded-full bg-gradient-to-b from-[#e0d297] to-[#92865e] shadow-inner-2 hover:scale-[1.1] duration-300">
                        <div className="uppercase font-bold text-[#a93324] text-2xl -mt-[3px] btn-txt-shadow">MINT NFT</div>
                    </button>
                    <img src="/images/down_arrow.png" className="mx-16 sm:mx-3 sm:mt-10 hidden lg:inline-block" alt="" />
                </div>
                <div className="w-full sm:w-auto sm:ml-8 lg:mt-5 mb-5 text-center sm:text-left">
                    <div className="w-[135px] mx-auto sm:mx-0 sm:ml-0">
                        <ReactSlider
                            className="customSlider"
                            thumbClassName="customSlider-thumb"
                            trackClassName="customSlider-track"
                            markClassName="customSlider-mark"
                            min={0}
                            max={8}
                            step={2}
                            defaultValue={0}
                            value={currentValue}
                            onChange={(value) => setCurrentValue(value)}
                            renderMark={(props) => {
                                if (props.key < currentValue) {
                                    props.className = "customSlider-mark customSlider-mark-before";
                                } else if (props.key === currentValue) {
                                    props.className = "customSlider-mark customSlider-mark-active";
                                }
                                return <span {...props} />;
                            }}
                        />
                    </div>
                    <div className="uppercase mt-6 text-gray-300">number to mint: <span>{currentValue}</span></div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-between items-center">
                <div className="flex items-center flex-wrap justify-center sm:justify-between">
                    <img src="/images/box.png" className="sm:-ml-14 -mt-2 sm:scale-[1.1] mb-5" alt="" />
                    <a href="" className="sm:mx-10 mt-5 mb-10 md:mb-0">
                        <img src="/images/how-it-works.png" className="" alt="" />
                    </a>
                </div>
                <div>
                    <img src="/images/scp.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;