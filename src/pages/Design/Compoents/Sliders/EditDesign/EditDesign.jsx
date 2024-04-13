import { useSelector } from "react-redux";
import DrawerControls from '../../DrawerControls/DrawerControls';

export default function EditDesign() {
    const open = useSelector(state => state.pageControls.isCustomizeDesignIsOpen);

    return (
        <aside className={`fixed top-13 right-0 h-screen`}>
            <div className='flex'>
                <div>
                    <DrawerControls borderRadius="rounded-l-xl" right={true} drawerDisplay="edit" />
                </div>
                <aside className={`${open ? "w-80 bg-blue-950 h-screen" : "w-0"} duration-300 `}>
                    <div className='flex items-center justify-between space-x-2'>

                    </div>
                </aside>

            </div>

        </aside>
    )
}
