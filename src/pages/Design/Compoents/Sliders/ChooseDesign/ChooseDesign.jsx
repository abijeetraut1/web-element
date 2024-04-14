import { useSelector, useDispatch } from 'react-redux';
import DrawerControls from '../../DrawerControls/DrawerControls';
import DesignNavigator from '../../DesignNavigator/DesignNavigator';
import AddPages from './DesignCtrlCmp/AddPages/AddPages';
import TemplatesCtrl from './DesignCtrlCmp/TemplatesCtrls/TemplatesCtrl';
import Plugins from './DesignCtrlCmp/Plugins/Plugins';

export default function ChooseDesign() {
    const clickedPanel = useSelector(state => state.pageControls.isPageActive);
    const open = useSelector(state => state.pageControls.isChooseDesignIsOpen);
    
    return (
        <aside className={`fixed top-13 h-screen`}>
            <div className='flex '>
                <div>
                    <DesignNavigator />
                </div>
                <aside className={`${open ? "w-80 bg-blue-950 h-screen overflow-auto" : "w-0"} duration-300 py-2`}>
                    <div className='flex flex-col justify-center'>
                        {clickedPanel === "plugin" && <Plugins/>}
                        {clickedPanel === "template" && <TemplatesCtrl/>}
                        {clickedPanel === "add-pages" && <AddPages/>}
                    </div>
                </aside>

                <div>
                    <DrawerControls borderRadius="rounded-r-xl" right={false} drawerDisplay="drawer" />
                </div>
            </div>
        </aside>
    )
}
