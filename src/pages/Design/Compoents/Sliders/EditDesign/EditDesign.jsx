import "./DisableNumberArrow.css"
import { useSelector } from "react-redux";
import DrawerControls from '../../DrawerControls/DrawerControls';
import ElementSpaceing from "./components/ElementSpaceing/ElementSpaceing";
import BackgroundOrColor from "./components/BackgroundOrColor/BackgroundOrColor";
import Stroke from "./components/Stroke/Stroke";
import Effects from "./components/Effects/Effects";


export default function EditDesign() {
    const RightDrawerOpen = useSelector(state => state.pageControls.isCustomizeDesignIsOpen);

    return (
        <aside className={`fixed top-13 right-0 h-screen`}>
            <div className='flex'>
                <div>
                    <DrawerControls borderRadius="rounded-l-xl" right={true} drawerDisplay="edit" buttonStatus={open} />
                </div>
                <aside className={`${RightDrawerOpen ? "w-64 bg-dark-sliders-bg h-screen overflow-auto" : "w-0"} duration-300 py-2`}>
                    <div className='flex items-center justify-between'>
                        {RightDrawerOpen &&
                            <div className="flex flex-col w-full">
                                <ElementSpaceing />
                                <BackgroundOrColor />
                                <Stroke />
                                <Effects />
                            </div>
                        }
                    </div>
                </aside>
            </div>
        </aside>
    )
}