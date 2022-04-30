import { configureStore } from "@reduxjs/toolkit";
import SideNavSlice from "./features/Navigation/sideNavSlice";

const store = configureStore({
  reducer: {
    sideNav: SideNavSlice,
  },
});

export default store;
