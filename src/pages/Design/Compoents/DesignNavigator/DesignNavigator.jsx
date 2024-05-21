import { useSelector, useDispatch } from "react-redux";
import { setIsPageActive, setChooseDesignIsOpen } from "../../../../reduxFunctions/PageControls/pageControls";

import { LuLayoutTemplate } from "react-icons/lu";
import { BsGrid } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function DesignNavigator() {
    const dispatch = useDispatch();
    const activeSection = useSelector(state => state.pageControls.isPageActive);

    return (
        <section className="flex flex-col justify-between h-94vh text-dark-text-color text-2xl bg-dark-navigation-drawer-bg">
            <section className="flex flex-col">
                <button
                    title="Add Pages"
                    value="add-page"
                    className={`p-3 rounded-md hover:bg-hover-color ${activeSection === "add-pages" ? "bg-hover-color p-2 rounded-md" : ""}`}
                    onClick={() => {
                        dispatch(setIsPageActive("add-pages"));
                        dispatch(setChooseDesignIsOpen("tabs"));
                    }}>
                    <FaPlus />
                </button>

                <button
                    title="Templates"
                    className={`p-3 rounded-md hover:bg-hover-color ${activeSection === "template" ? "bg-hover-color p-2 rounded-md" : ""}`}
                    onClick={() => {
                        dispatch(setIsPageActive("template"));
                        dispatch(setChooseDesignIsOpen("tabs"));
                    }}
                >
                    <LuLayoutTemplate />
                </button>

                <button
                    title="Plugins"
                    className={`p-3 rounded-md hover:bg-hover-color ${activeSection === "plugin" ? "bg-hover-color p-2 rounded-md" : ""}`}
                    onClick={() => {
                        dispatch(setIsPageActive("plugin"));
                        dispatch(setChooseDesignIsOpen("tabs"));
                    }}>
                    <BsGrid />
                </button>

            </section>

            <section className="flex flex-col">
                <button title="Host" className={`p-3 rounded-md hover:bg-hover-color ${activeSection === "host" ? "bg-hover-color p-2 rounded-md" : ""}`}
                    onClick={() => {
                        dispatch(setIsPageActive("host"))
                        dispatch(setChooseDesignIsOpen("tabs"));
                    }}
                >
                    <CgMediaLive />
                </button>
                <button title="Setting" className={`p-3 rounded-md hover:bg-hover-color ${activeSection === "setting" ? "bg-hover-color p-2 rounded-md" : ""}`} onClick={() => {
                    dispatch(setIsPageActive("setting"))
                    dispatch(setChooseDesignIsOpen("tabs"));
                }}>
                    <IoSettingsOutline />
                </button>
                <button title="Help" className={`p-3 rounded-md hover:bg-hover-color ${activeSection === "help" ? "bg-hover-color p-2 rounded-md" : ""}`} onClick={() => {
                    dispatch(setIsPageActive("help"))
                    dispatch(setChooseDesignIsOpen("tabs"));

                }}>
                    <IoIosHelpCircleOutline />
                </button>
            </section>

        </section>
    )
}
