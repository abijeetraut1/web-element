import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";


export default function Effects() {
    const [opacity, setOpacity] = useState("100%");
    const [color, setColor] = useState("#fffff");

    return (
        <section className="py-2 w-full border-dark-border-color border-t" >
            <div className="px-4 select-none">
                <div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center flex-col w-full p-1 bg-dark-sliders-bg">
                            <div className="flex items-center text-xs font-semibold text-dark-heading justify-between w-full">
                                <div className="tracking-wider">
                                    Effects
                                </div>

                                <div className="flex space-x-2 text-">
                                    <button title="Create Components">
                                        <MdOutlineDashboardCustomize />
                                    </button>
                                    <button title="Add Effect">
                                        <FiMinus />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* when click on + button will dynically append  */}
                        <div className="flex items-center text-sm font-semibold text-dark-heading justify-between w-full">
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-2 rounded border border-transparent hover:border-dark-border-color">
                                    <div className="tracking-wider ">
                                        <input type="color" name="" id="" className="bg-transparent w-7 h-7" value={color} onChange={(el) => setColor(el.target.value)} />
                                    </div>

                                    <div className="tracking-wider ">
                                        <input type="text" name="" id="" className="outline-none bg-transparent w-full" value={color} onChange={(el) => setColor(el.target.value)} />
                                    </div>
                                </div>

                                <div className="rounded border border-transparent hover:border-dark-border-color py-1">
                                    <div className="tracking-wider ">
                                        <input type="text" name="" id="" className="mx-2 outline-none bg-transparent w-full" value={opacity} onChange={(el) => setOpacity(el.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex mx-2 text-">
                                <button title="Create Components">
                                    <IoMdEye />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
