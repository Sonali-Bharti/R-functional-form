import { createAction } from "@reduxjs/toolkit";

const addUser = createAction("ADD_USER");
const removeUser = createAction("REMOVE_USER");
const updateUser = createAction("UPDATE_USER");

export { addUser, removeUser, updateUser };
