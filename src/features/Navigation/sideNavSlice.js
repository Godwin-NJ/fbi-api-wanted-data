import { createSlice } from "@reduxjs/toolkit";

export const SideNavSlice = createSlice({
  name: "sideNavbar",
  initialState: {
    sidebar: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.sidebar = true;
    },
    closeSideBar: (state) => {
      state.sidebar = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSideBar, closeSideBar } = SideNavSlice.actions;

export default SideNavSlice.reducer;
