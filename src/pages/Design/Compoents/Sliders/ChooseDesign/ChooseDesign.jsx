import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSidebar } from 'react-icons/fi';
import { Dialog } from '@headlessui/react';
import DrawerControls from '../../DrawerControls/DrawerControls';
import { FaChevronRight } from "react-icons/fa6";


export default function ChooseDesign() {
    // const designPage = useSelector(state => state.pageControls.designPage);
    // const section = useSelector(state => state.pageControls.designSection);
    // const page = useSelector(state => state.pageControls.isPage);
    // const isFilterActive = useSelector(state => state.pageControls.isFilterActive);
    const open = useSelector(state => state.pageControls.isChooseDesignIsOpen);

    return (
        <aside className={`fixed top-13 h-screen`}>
            <div className='flex '>
                <aside className={`${open ? "w-80 bg-blue-950 h-screen" : "w-0"} duration-300`}>
                    <div className='flex items-center justify-between space-x-2'>

                    </div>
                </aside>

                <div>
                    <DrawerControls borderRadius="rounded-r-xl" right={false} drawerDisplay="drawer" />
                </div>
            </div>

        </aside>
    )
}
