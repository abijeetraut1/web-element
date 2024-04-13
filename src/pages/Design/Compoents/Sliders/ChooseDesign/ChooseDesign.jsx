import { useSelector } from 'react-redux';
import DrawerControls from '../../DrawerControls/DrawerControls';
import DesignNavigator from '../../DesignNavigator/DesignNavigator';

export default function ChooseDesign() {
    const open = useSelector(state => state.pageControls.isChooseDesignIsOpen);

    return (
        <aside className={`fixed top-13 h-screen`}>
            <div className='flex '>
                <div>
                    <DesignNavigator />
                </div>
                <aside className={`${open ? "w-80 bg-blue-950 h-screen" : "w-0"} duration-300`}>
                    <div className='flex flex-col items-center justify-center'>

                    </div>
                </aside>

                <div>
                    <DrawerControls borderRadius="rounded-r-xl" right={false} drawerDisplay="drawer" />
                </div>
            </div>

        </aside>
    )
}
