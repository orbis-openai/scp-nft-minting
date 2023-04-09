import { useState } from "react";
import ReactSlider from "react-slider";

const Qualified = () => {
    const [currentValue, setCurrentValue] = useState(0);

    return (
        <div className="px-8">
            <h1 className="uppercase text-2xl font-bold text-gray-200 pt-14 md:pt-6">My NFT collection</h1>
            <div className="mb-3 md:mb-0">GAME VALIDITY: <span className="italic">month from - To</span></div>

            <div className="lg:flex items-center justify-between md:py-10">
                <div className="overflow-auto text-center">
                    <div className="inline-block md:mr-10">
                        <div className="inline-block w-[150px] h-[200px] bg-gray-300 sm:mr-4 mr-1"></div>
                        <div className="inline-block w-[150px] h-[200px] bg-gray-300"></div>
                        <div className="uppercase">hand 1</div>
                    </div>
                    <div className="inline-block">
                        <div className="inline-block w-[150px] h-[200px] bg-gray-300 sm:mr-4 mr-1"></div>
                        <div className="inline-block w-[150px] h-[200px] bg-gray-300"></div>
                        <div className="uppercase">hand 2</div>
                    </div>
                </div>
                <div className="uppercase cursor-pointer mb-6">more</div>

                <div className="flex justify-center">
                    <div className="w-[150px]">
                        <div className="uppercase text-[12px] tracking-normal">claim your spot for the special freeroll game!</div>
                        <div className="text-[12px] mt-2">SCP Username:</div>
                        <input type="text" className="border w-full bg-transparent px-2" />
                        <button className="rounded-md hover:scale-[1.05] duration-300 mt-2 bg-[#996633] w-full">CLAIM</button>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-between items-center">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <img src="/images/box.png" className="sm:-ml-14 mt-3 sm:scale-[1.1] mb-5 hidden sm:block" alt="" />

                    <div className="mx-8 mb-5">
                        <div className="mb-5 sm:mb-0 flex flex-wrap justify-center sm:justify-between">
                            <button className="inline-block px-5 py-3 rounded-full bg-gradient-to-b from-[#e0d297] to-[#92865e] shadow-inner-2 hover:scale-[1.1] duration-300">
                                <div className="uppercase font-bold text-[#a93324] text-2xl -mt-[3px] btn-txt-shadow">MINT NFT</div>
                            </button>

                            <div className="mx-5 my-5 sm:my-0">
                                <div className="w-[135px] mx-auto md:mx-0">
                                    <ReactSlider
                                        className="customSlider"
                                        thumbClassName="customSlider-thumb"
                                        trackClassName="customSlider-track"
                                        markClassName="customSlider-mark"
                                        min={0}
                                        max={100}
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
                                <div className="uppercase mt-6 text-gray-300">number to mint: <span>1</span></div>
                            </div>
                        </div>

                        <div className="flex flex-none flex-wrap justify-center block sm:hidden">
                            <img src="/images/box.png" className="mt-3 sm:scale-[1.1] mb-5 sm:hidden" alt="" />
                        </div>
                        <a href="" className="sm:mx-10 mt-5 mb-10 md:mb-0 hidden sm:block">
                            <img src="/images/how-it-works.png" className="" alt="" />
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/images/scp.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Qualified;