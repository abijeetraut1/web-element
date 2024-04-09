import { combineReducers } from "@reduxjs/toolkit";

import pageControls from "../PageControls/pageControls";

// combine all the reducer to create a central state management
export default combineReducers({
    pageControls
})
