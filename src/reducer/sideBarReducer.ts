import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type User = {
  name: string;
  profile: string;
  userId: number;
};
export type Group = {
  groupId: number;
  groupName: string;
  music: { url: string; volume: number };
  noises: { name: string; url: string; volume: number }[];
  weather: string;
};
const initialState = {
  isSideBarOpened: false,
  accessToken: "",
  errorMessage: "",
  user: {} as User,
  weather: "hot",
  groupList: [] as Group[],
};
const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    showSideBar(state) {
      state.isSideBarOpened = true;
    },
    hideSideBar(state) {
      state.isSideBarOpened = false;
    },
    setErr(state, { payload }: PayloadAction<string>) {
      state.errorMessage = payload;
    },
    setAccessToken(state, { payload }: PayloadAction<string>) {
      state.accessToken = payload;
    },
    setUser(state, { payload }: PayloadAction<User>) {
      state.user = payload;
    },
    setWeather(state, { payload }: PayloadAction<string>) {
      state.weather = payload;
    },
    setGroupList(state, { payload }: PayloadAction<Group[]>) {
      state.groupList = payload;
    },
  },
});
export const {
  showSideBar,
  hideSideBar,
  setErr,
  setAccessToken,
  setUser,
  setWeather,
  setGroupList,
} = sideBarSlice.actions;
export default sideBarSlice.reducer;
