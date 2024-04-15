import { FiPlus } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export default function Effects() {

    return (
        <section className="py-2 w-full border-dark-border-color border-t" >
            <div className="px-4 select-none">
                <div>
                    <div className="flex space-x-2 w-full">
                        <div className="flex items-center w-full space-x-2 p-1 bg-dark-sliders-bg">
                            <div className="flex items-center text-xs font-semibold text-dark-heading justify-between w-full">
                                <div className="tracking-wider">
                                    Effects
                                </div>

                                <div className="flex space-x-2 text-">
                                    <button title="Create Components">
                                        <MdOutlineDashboardCustomize />
                                    </button>
                                    <button>
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
