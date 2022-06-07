import { configureStore } from "@reduxjs/toolkit";
import recordSlice from "../features/recordSlice";
import recordsReducer from "../features/recordsSlice";
import userReducer from "../features/userSlice";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    records: recordsReducer,
    record: recordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
