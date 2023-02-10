import { getEntireRoomList } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireRoomListAction = createAsyncThunk(
  "entireroomlist", 
  async (payload = 0, { dispatch }) => {
    // 1.修改currentPage
    dispatch(changeCurrentPageAction(payload))

    // 2.发送网络请求之前修改isLoading 显式蒙版
    dispatch(changeIsLoadingAction(true))

    // 3..根据最新的currentPage发送网络请求
    const res = await getEntireRoomList(payload * 20)

    // 4.网络请求有结果后隐藏蒙版
    dispatch(changeIsLoadingAction(false))
    return res
  }
)

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  },
  extraReducers: {
    [fetchEntireRoomListAction.fulfilled](state, { payload }) {
      state.roomList = payload.list
      state.totalCount = payload.totalCount
      
    }
  }
})

export const { changeCurrentPageAction, changeIsLoadingAction } = entireSlice.actions

export default entireSlice.reducer