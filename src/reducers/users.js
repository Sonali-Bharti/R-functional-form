import { createReducer } from "@reduxjs/toolkit";

let userId = 0;

const usersReducer = createReducer({ users: [] }, (builder) => {
  builder
    .addCase("ADD_USER", (state, action) => {
      state.users = [...state.users, { userId, ...action.payload }];
      userId++;
    })
    .addCase("REMOVE_USER", (state, action) => {
      state.users = state.users.filter((x) => x.userId !== action.payload);
    })
    .addCase("UPDATE_USER", (state, action) => {
      const { userId, user } = action.payload;

      const index = state.users.findIndex((x) => x.userId === userId);

      state.users[index] = { userId, ...user };
    });
});

export default usersReducer;
