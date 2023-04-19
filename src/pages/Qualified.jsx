import { useState } from "react";
import ReactSlider from "react-slider";

const Qualified = () => {
    const [currentValue, setCurrentValue] = useState(0);

    return (
        <div className="px-8">
            <h1 className="uppercase text-2xl font-bold text-gray-200 pt-14 md:pt-6">My Qualified NFT collection</h1>
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

            <div className="mt-10 md:flex flex-wrap justify-center lg:justify-between items-center">
                <div className="flex flex-wrap justify-center lg:justify-between items-center">
                    <img src="/images/box.png" className="lg:-ml-14 -mt-1 sm:scale-[1.1] mb-5 hidden md:block" alt="" />

                    <div className="mx-8 mb-5 md:mb-0 lg:-mb-9">
                        <div className="mb-5 sm:mb-0 flex flex-wrap justify-center md:justify-between">
                            <button className="inline-block px-5 py-3 rounded-full bg-gradient-to-b from-[#e0d297] to-[#92865e] shadow-inner-2 hover:scale-[1.1] duration-300">
                                <div className="uppercase font-bold text-[#a93324] text-2xl -mt-[3px] btn-txt-shadow">MINT NFT</div>
                            </button>

                            <div className="w-full md:w-auto mx-5 md:my-0 text-center my-5">
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
                                <div className="uppercase mt-6 text-gray-300">number to mint: <span>{currentValue}</span></div>
                            </div>
                        </div>

                        <div className="flex flex-none flex-wrap justify-center block lg:hidden">
                            <img src="/images/box.png" className="mt-3 md:scale-[1.1] mb-5 md:hidden" alt="" />
                        </div>
                        <a href="" className="mt-5 mb-10 md:mb-0">
                            <img src="/images/how-it-works.png" className="mx-auto md:mx-0 py-5" alt="" />
                        </a>
                    </div>
                </div>
                <div className="flex">
                    <img src="/images/scp.png" className="mx-auto" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Qualified;