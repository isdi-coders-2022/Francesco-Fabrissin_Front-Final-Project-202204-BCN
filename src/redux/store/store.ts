import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/paginationSlice";
import recordReducer from "../features/recordSlice";
import recordsReducer from "../features/recordsSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    records: recordsReducer,
    record: recordReducer,
    ui: uiReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
