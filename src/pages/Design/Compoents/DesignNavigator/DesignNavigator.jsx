import { LuLayoutTemplate } from "react-icons/lu";
import { BsGrid } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";


export default function DesignNavigator() {

    return (
        <section className="flex flex-col justify-between h-94vh text-dark-text p-2 text-2xl bg-dark-sliders">
            <section className="flex flex-col space-y-6">
                <button title="Add Pages" value="add-page" onClick={(el) => console.log(el.target)}>
                    <FaPlus />
                </button>
                
                <button title="Designs">
                    <LuLayoutTemplate />
                </button>

                <button title="Plugins">
                    <BsGrid />
                </button>
            </section>

            <section className="flex flex-col space-y-5 ">
                <button title="Host">
                    <CgMediaLive />
                </button>
                <button title="Setting">
                    <IoSettingsOutline />
                </button>
                <button title="Help">
                    <IoIosHelpCircleOutline />
                </button>
            </section>

        </section>
    )
}
