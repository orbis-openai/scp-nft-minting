import { useState } from "react";
import ReactSlider from "react-slider";

const Collection = () => {
    const [currentValue, setCurrentValue] = useState(0);

    return (
        <div className="px-8">
            <h1 className="uppercase text-2xl font-bold text-gray-200 py-14 md:py-6">My NFT collection</h1>

            <div className="lg:flex items-center justify-between md:py-10">
                <div className="overflow-auto text-center">
                    <div className="inline-block w-[150px] h-[200px] bg-gray-300 mr-4"></div>
                    <div className="inline-block w-[150px] h-[200px] bg-gray-300 mr-4"></div>
                    <div className="inline-block w-[150px] h-[200px] bg-gray-300 mr-4"></div>
                    <div className="inline-block w-[150px] h-[200px] bg-gray-300 mr-4"></div>
                </div>
                <div className="uppercase cursor-pointer mb-16 md:mb-6">show more</div>

                <div className="flex">
                    <div className="mx-auto text-center md:text-left">
                        <button className="inline-block px-5 py-3 rounded-full bg-gradient-to-b from-[#e0d297] to-[#92865e] shadow-inner-2 hover:scale-[1.1] duration-300">
                            <div className="uppercase font-bold text-[#a93324] text-2xl -mt-[3px] btn-txt-shadow">MINT NFT</div>
                        </button>

                        <div className="">
                            <div className="w-[135px] mx-auto md:mx-0">
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
                            <div className="uppercase mt-6 pt-6 text-gray-300">number to mint: <span>{currentValue}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center sm:justify-between items-center">
                <div className="flex items-center flex-wrap justify-center sm:justify-between">
                    <img src="/images/box.png" className="sm:-ml-14 mt-3 mx-5 sm:scale-[1.1] mb-5" alt="" />
                    <a href="" className="mt-5 mb-10 md:mb-0">
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

export default Collection;