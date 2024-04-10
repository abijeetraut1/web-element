import React from 'react';
import { FiSidebar } from 'react-icons/fi';
import { setCustomizeDesignIsOpen } from '../../../../../reduxFunctions/PageControls/pageControls';
import {useSelector, useDispatch} from "react-redux";
import Box from '@mui/material/Box';

export default function EditDesign() {
    const dispatch = useDispatch();
    const open = useSelector(state => state.pageControls.isCustomizeDesignIsOpen);

    return (
        <div>hello world</div>
    )
}
