import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo";
import { useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  // middleware:(data)=>{
  //     console.log('middleware data',data);
  //     return
  // }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
