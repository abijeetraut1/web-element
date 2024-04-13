import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { setChooseDesignIsOpen, setCustomizeDesignIsOpen } from '../../../../reduxFunctions/PageControls/pageControls';
import { useDispatch } from 'react-redux';

export default function DrawerControls({ borderRadius, right, drawerDisplay }) {
    const dispatch = useDispatch();

    return (
        <div className='h-screen flex items-center'>
            <button
                className={`bg-dark-sliders text-white py-5 px-2 ${borderRadius}`}
                onClick={() => drawerDisplay === "edit" ? dispatch(setCustomizeDesignIsOpen(false)) : drawerDisplay === "drawer" ? dispatch(setChooseDesignIsOpen(false)) : ""}
            >
                {right ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
        </div>
    )
}
